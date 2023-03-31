import * as fs from 'fs'

const rootDir = __dirname.split('/src')[0]
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
      console.log('filename: ', filename)
    })
  })
}

main();