export interface PortfolioProject {
  id: string
  title: string
  description: string
  category: string
  featured: boolean
  created_at: string
  updated_at: string
  thumbnail_url: string | null
  model_url: string | null
  images: string[]
  videos: string[]
  tags: string[]
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const MODEL_EXTENSIONS = [".fbx", ".glb", ".gltf", ".obj", ".blend", ".dae", ".3ds"]
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]

function isValidUrl(url: string | null | undefined): boolean {
  if (!url || url.trim() === "" || url === "undefined") return false
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function getRenderImages(project: PortfolioProject): string[] {
  if (!Array.isArray(project.images)) return []
  return project.images.filter((img) => {
    if (!isValidUrl(img)) return false
    const lower = img.toLowerCase()
    return IMAGE_EXTENSIONS.some((ext) => lower.endsWith(ext))
  })
}

export function getModelUrls(project: PortfolioProject): string[] {
  const urls: string[] = []
  if (isValidUrl(project.model_url)) urls.push(project.model_url!)
  if (Array.isArray(project.images)) {
    project.images
      .filter((img) => MODEL_EXTENSIONS.some((ext) => img.toLowerCase().includes(ext)))
      .forEach((img) => urls.push(img))
  }
  return urls
}

export function getThumbnailUrl(project: PortfolioProject): string {
  if (isValidUrl(project.thumbnail_url)) return project.thumbnail_url!
  const renders = getRenderImages(project)
  if (renders.length > 0) return renders[0]
  return "/placeholder.svg"
}

export function getVideoUrls(project: PortfolioProject): string[] {
  if (!Array.isArray(project.videos)) return []
  return project.videos.filter((url) => isValidUrl(url))
}

export async function fetchPortfolioProjects(): Promise<PortfolioProject[]> {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY")
  }

  const response = await fetch(
    `${supabaseUrl}/rest/v1/projects?select=*&order=created_at.desc`,
    {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      cache: "no-store",
    }
  )

  if (!response.ok) {
    throw new Error(`Error consultando proyectos: ${response.status}`)
  }

  const data = await response.json()
  return Array.isArray(data) ? data : []
}