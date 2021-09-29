import fs from "fs"
import path from "path"

const projectsDir = path.join(process.cwd(), "public/projects")

export function getProjectSlugs () {
  return fs.readdirSync(projectsDir)
}

export function getProject (slug) {
  const projectDir = path.join(projectsDir, slug)

  const meta = JSON.parse(
    fs.readFileSync(path.join(projectDir, "meta.json"))
  )

  const thumbnail = `/projects/${slug}/thumbnail.jpg`

  return { ...meta, slug, thumbnail }
}

export function getProjects () {
  return getProjectSlugs().map(getProject)
}