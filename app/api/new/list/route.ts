import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const p = (searchParams.get("path") || "").trim()
  const segments = p.split("/").filter(Boolean)
  if (segments.some((s) => s.includes(".."))) {
    return new NextResponse("Bad Request", { status: 400 })
  }
  const githubPath = segments.join("/")
  const apiUrl = `https://api.github.com/repos/Mohamed2007Sarhan/ibrand_data/contents/new/${encodeURI(githubPath)}?ref=main`
  try {
    const res = await fetch(apiUrl, { headers: { "Accept": "application/vnd.github+json" }, cache: "no-store" })
    if (!res.ok) return NextResponse.json({ files: [] })
    const data = await res.json() as any
    if (!Array.isArray(data)) return NextResponse.json({ files: [] })
    const files = data.filter((e: any) => e && e.type === "file" && typeof e.name === "string").map((e: any) => e.name)
    return NextResponse.json({ files })
  } catch {
    return NextResponse.json({ files: [] })
  }
}









