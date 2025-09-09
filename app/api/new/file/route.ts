import { NextResponse } from "next/server"
import path from "path"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const p = (searchParams.get("p") || "").trim()

  // Split into safe segments and prevent traversal
  const rawSegments = p.split("/").filter(Boolean)
  const safeSegments = rawSegments.filter((seg) => typeof seg === "string" && !seg.includes(".."))

  const relativePath = safeSegments.join("/")
  const ext = path.extname(relativePath).toLowerCase()
  const contentType =
    ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" :
    ext === ".png" ? "image/png" :
    ext === ".webp" ? "image/webp" :
    ext === ".gif" ? "image/gif" :
    ext === ".mp4" ? "video/mp4" :
    ext === ".mp3" ? "audio/mpeg" :
    ext === ".wav" ? "audio/wav" :
    ext === ".m4a" ? "audio/mp4" :
    ext === ".aac" ? "audio/aac" :
    "application/octet-stream"

  const baseRaw = "https://raw.githubusercontent.com/Mohamed2007Sarhan/ibrand_data/refs/heads/main/new/"
  const url = baseRaw + encodeURI(relativePath)

  try {
    const res = await fetch(url, { cache: "force-cache" })
    if (!res.ok) {
      return new NextResponse("Not Found", { status: 404 })
    }
    const arrayBuffer = await res.arrayBuffer()
    return new NextResponse(Buffer.from(arrayBuffer), {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch {
    return new NextResponse("Not Found", { status: 404 })
  }
}


