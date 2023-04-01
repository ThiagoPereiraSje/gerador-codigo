import * as fs from 'fs'
import { rootDir } from "."

export default function renderIndexView(propName: string) {
  const content = fs.readFileSync(`${rootDir}/src/templates/frontend/index.jsx`, 'utf8');

  return content.replace('${propName}', propName)
}