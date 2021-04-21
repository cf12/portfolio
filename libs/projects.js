import fs from "fs"
import path from "path"
import matter from "gray-matter"

const projectsDir = path.join(process.cwd(), "public/projects")

export function getProjectSlugs () {
  return fs.readdirSync(projectsDir)
}

export function getProject (slug, fields) {
  const projectDir = path.join(projectsDir, slug)

  const { data, content } = matter(
    fs.readFileSync(path.join(projectDir, "index.md"))
  )

  const thumbnail = `/projects/${slug}/thumbnail.jpg`
  const video = `/projects/${slug}/video.webm`

  return { slug, data, content, thumbnail, video }
}

export function getProjects () {
  return getProjectSlugs().map(getProject)
}