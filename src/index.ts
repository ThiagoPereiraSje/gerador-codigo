import * as fs from 'fs'
import renderIndexView from './functions';

export const rootDir = __dirname.split('/src')[0]
const businessModel = 'business_model'

function onError(error: unknown) {
  JSON.stringify(error, null, 2);
}

function main() {
  fs.readdir(`${rootDir}/${businessModel}`, (error, filenames) => {
    if (error) {
      onError(error);
      return
    }

    filenames.forEach(filename => {
      console.log('filename: ', renderIndexView(filename))
    })
  })
}

main();