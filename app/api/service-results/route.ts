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

function listSubdirectories(dirPath: string): string[] {
  try {
    return fs
      .readdirSync(dirPath)
      .filter((entry) => {
        const full = path.join(dirPath, entry)
        try { return fs.statSync(full).isDirectory() } catch { return false }
      })
  } catch {
    return []
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const service = (searchParams.get("service") || "").trim() as ServiceId

  // If service is content-writing or sponsored-ads, keep old behavior (no change)
  // Otherwise, read from /new/<MappedService>/* where each subfolder is a section title
  const shouldUseNew = service && serviceToNewFolder[service] && serviceToNewFolder[service].length > 0

  const newRoot = path.join(process.cwd(), "public", "data_new")
  const serviceRoot = shouldUseNew ? path.join(newRoot, serviceToNewFolder[service]) : null

  type Section = { title: string; items: { src: string; filename: string }[] }
  const sectionsByTitle: Record<string, Section> = {}

  if (shouldUseNew && serviceRoot) {
    // Include files directly under the service root as a generic section
    const rootFiles = safeReadDir(serviceRoot).filter((f) => {
      const full = path.join(serviceRoot, f)
      try { if (!fs.statSync(full).isFile()) return false } catch { return false }
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

    const sectionFolders = listSubdirectories(serviceRoot)
    for (const section of sectionFolders) {
      const absoluteSection = path.join(serviceRoot, section)
      const files = safeReadDir(absoluteSection).filter((f) => {
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
    const topLevelFolders = safeReadDir(publicResultRoot).filter((name) => {
      const full = path.join(publicResultRoot, name)
      try { return fs.statSync(full).isDirectory() } catch { return false }
    })
    for (const folder of topLevelFolders) {
      const absoluteFolder = path.join(publicResultRoot, folder)
      const files = safeReadDir(absoluteFolder).filter((f) => {
        const isImg = isImageFile(f)
        const isVid = isVideoFile(f)
        if (service === "video-editing" || service === "motion-graphics") return isVid || isImg
        return isImg
      })
      if (files.length === 0) continue
      const title = folder
      const items = files.map((file) => {
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


