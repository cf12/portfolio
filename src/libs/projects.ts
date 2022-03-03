import fs from "fs"
import path from "path"

export type Project = {
  title: string
  description: string
  link: string
  tags: string[]
  slug: string
  thumbnail: string
}

const projectsDir = path.join(process.cwd(), "public/projects")

export function getProjectSlugs() {
  return fs.readdirSync(projectsDir)
}

export function getProject(slug: string): Project {
  const projectDir = path.join(projectsDir, slug)

  const meta = JSON.parse(
    fs.readFileSync(path.join(projectDir, "meta.json")).toString()
  )

  const thumbnail = `/projects/${slug}/thumbnail.jpg`

  return { ...meta, slug, thumbnail }
}

export function getProjects() {
  return getProjectSlugs().map(getProject)
}
