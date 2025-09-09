import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

function safeList(dir: string): string[] {
  try { return fs.readdirSync(dir) } catch { return [] }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const p = (searchParams.get("path") || "").trim()
  const segments = p.split("/").filter(Boolean)
  if (segments.some((s) => s.includes(".."))) {
    return new NextResponse("Bad Request", { status: 400 })
  }
  const base = path.join(process.cwd(), "public", "data_new", ...segments)
  try {
    const st = fs.statSync(base)
    if (!st.isDirectory()) return NextResponse.json({ files: [] })
  } catch {
    return NextResponse.json({ files: [] })
  }
  const entries = safeList(base)
  const files = entries.filter((name) => {
    try { return fs.statSync(path.join(base, name)).isFile() } catch { return false }
  })
  return NextResponse.json({ files })
}









