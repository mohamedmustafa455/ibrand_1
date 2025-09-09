import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

type ServiceId =
  | "voiceover"
  | "sponsored-ads"
  | "content-writing"
  | "monthly-management"
  | "video-editing"
  | "visual-identity"
  | "motion-graphics"
  | "graphic-design"

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".JPG", ".PNG", ".JPEG", ".WEBP", ".GIF"])
const VIDEO_EXTENSIONS = new Set([".mp4", ".MP4"])
const AUDIO_EXTENSIONS = new Set([".mp3", ".wav", ".m4a", ".aac", ".MP3", ".WAV", ".M4A", ".AAC"])

function isImageFile(fileName: string): boolean {
  return IMAGE_EXTENSIONS.has(path.extname(fileName))
}

function isVideoFile(fileName: string): boolean {
  return VIDEO_EXTENSIONS.has(path.extname(fileName))
}

function isAudioFile(fileName: string): boolean {
  return AUDIO_EXTENSIONS.has(path.extname(fileName))
}

async function githubList(pathUnderNew: string): Promise<{ name: string; type: "file" | "dir" }[]> {
  const apiUrl = `https://api.github.com/repos/Mohamed2007Sarhan/ibrand_data/contents/new/${encodeURI(pathUnderNew)}?ref=main`
  try {
    const res = await fetch(apiUrl, { headers: { "Accept": "application/vnd.github+json" }, cache: "no-store" })
    if (!res.ok) return []
    const data = await res.json() as any
    if (!Array.isArray(data)) return []
    return data
      .filter((e: any) => e && (e.type === "file" || e.type === "dir") && typeof e.name === "string")
      .map((e: any) => ({ name: e.name as string, type: e.type as "file" | "dir" }))
  } catch {
    return []
  }
}

function safeReadDir(dirPath: string): string[] {
  try {
    return fs.readdirSync(dirPath)
  } catch {
    return []
  }
}

// Map service id to its root folder inside /new
const serviceToNewFolder: Record<ServiceId, string> = {
  "graphic-design": "Graphic-Design",
  "visual-identity": "Visual-Identity",
  "motion-graphics": "motion-graphics", // may contain videos; images will be ignored for now
  "video-editing": "video-editing",     // may contain videos; images will be ignored for now
  "monthly-management": "monthly-management",
  "voiceover": "voiceover",             // handled by dedicated audio API normally
  // Map content-writing to the new folder and merge all items into one flow
  "content-writing": "content-writing",
  "sponsored-ads": "sponsored-ads",     // use new folder structure for better organization
}

async function listSubdirectoriesGithub(pathUnderNew: string): Promise<string[]> {
  const entries = await githubList(pathUnderNew)
  return entries.filter((e) => e.type === "dir").map((e) => e.name)
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const service = (searchParams.get("service") || "").trim() as ServiceId

  // If service is content-writing or sponsored-ads, keep old behavior (no change)
  // Otherwise, read from GitHub repo new/<MappedService>/* where each subfolder is a section title
  const shouldUseNew = service && serviceToNewFolder[service] && serviceToNewFolder[service].length > 0
  const servicePathUnderNew = shouldUseNew ? serviceToNewFolder[service] : null

  type Section = { title: string; items: { src: string; filename: string }[] }
  const sectionsByTitle: Record<string, Section> = {}

  if (shouldUseNew && servicePathUnderNew) {
    // Include files directly under the service root as a generic section
    const rootEntries = await githubList(servicePathUnderNew)
    const rootFiles = rootEntries
      .filter((e) => e.type === "file")
      .map((e) => e.name)
      .filter((f) => {
        const isImg = isImageFile(f)
        const isVid = isVideoFile(f)
        const isAud = isAudioFile(f)
        if (service === "video-editing" || service === "motion-graphics") return isVid || isImg
        if (service === "voiceover") return isAud
        return isImg
      })
    if (rootFiles.length) {
      // Group root files by their content/name patterns
      const groupedFiles: Record<string, string[]> = {}
      
      for (const file of rootFiles) {
        const p = encodeURI(serviceToNewFolder[service]) + "/" + encodeURIComponent(file)
        const publicUrl = "/api/new/file?p=" + p
        
        // Check if file name contains specific company names
        if (file.includes("قراقيش") || file.includes("qaraqish")) {
          if (!groupedFiles["قراقيش"]) groupedFiles["قراقيش"] = []
          groupedFiles["قراقيش"].push(publicUrl)
        } else if (file.includes("هاي براند") || file.includes("high brand")) {
          if (!groupedFiles["هاي براند"]) groupedFiles["هاي براند"] = []
          groupedFiles["هاي براند"].push(publicUrl)
        } else {
          // Default grouping by service name
          if (!groupedFiles[service]) groupedFiles[service] = []
          groupedFiles[service].push(publicUrl)
        }
      }
      
      // Create sections for each group
      for (const [title, urls] of Object.entries(groupedFiles)) {
        const items = urls.map((url) => {
          const filename = decodeURIComponent(url.split('/').pop() || '')
          return { src: url, filename }
        })
        sectionsByTitle[title] = { title, items }
      }
    }

    const sectionFolders = await listSubdirectoriesGithub(servicePathUnderNew)
    for (const section of sectionFolders) {
      const sectionEntries = await githubList(`${servicePathUnderNew}/${section}`)
      const files = sectionEntries
        .filter((e) => e.type === "file")
        .map((e) => e.name)
        .filter((f) => {
          const isImg = isImageFile(f)
          const isVid = isVideoFile(f)
          const isAud = isAudioFile(f)
          if (service === "video-editing" || service === "motion-graphics") return isVid || isImg
          if (service === "voiceover") return isAud
          return isImg
        })
      if (files.length === 0) continue
      // For content-writing: merge all into one section named by the service
      const title = service === "content-writing" ? service : section
      const items = files.map((file) => {
        const p = encodeURI(serviceToNewFolder[service]) + "/" + encodeURI(section) + "/" + encodeURIComponent(file)
        const publicUrl = "/api/new/file?p=" + p
        return { src: publicUrl, filename: file }
      })
      sectionsByTitle[title] = sectionsByTitle[title]
        ? { title, items: sectionsByTitle[title].items.concat(items) }
        : { title, items }
    }
  } else {
    // Fallback to legacy public/result structure
    const publicResultRoot = path.join(process.cwd(), "public", "result")
    const topLevelFolders = safeReadDir(publicResultRoot).filter((name: string) => {
      const full = path.join(publicResultRoot, name)
      try { return fs.statSync(full).isDirectory() } catch { return false }
    })
    for (const folder of topLevelFolders) {
      const absoluteFolder = path.join(publicResultRoot, folder)
      const files = safeReadDir(absoluteFolder).filter((f: string) => {
        const isImg = isImageFile(f)
        const isVid = isVideoFile(f)
        if (service === "video-editing" || service === "motion-graphics") return isVid || isImg
        return isImg
      })
      if (files.length === 0) continue
      const title = folder
      const items = files.map((file: string) => {
        const publicUrl = "/result/" + encodeURI(folder) + "/" + encodeURIComponent(file)
        return { src: publicUrl, filename: file }
      })
      sectionsByTitle[title] = sectionsByTitle[title]
        ? { title, items: sectionsByTitle[title].items.concat(items) }
        : { title, items }
    }
  }

  // Sort sections alphabetically (locale-aware for Arabic), and items by filename
  const collator = new Intl.Collator("ar")
  const sections = Object.values(sectionsByTitle)
    .sort((a, b) => collator.compare(a.title, b.title))
    .map((section) => ({
      title: section.title,
      items: section.items.slice().sort((a, b) => collator.compare(a.filename, b.filename)),
    }))

  return NextResponse.json({ service, sections })
}


