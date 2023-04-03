import * as fs from 'fs'
import { rootDir } from "."

export default function renderIndexView(viewName: string) {
  const content = fs.readFileSync(`${rootDir}/src/templates/frontend/index.jsx`, 'utf8');

  return content.replace(/__viewName__/g, viewName)
}