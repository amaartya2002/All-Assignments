
const fs = require('fs')


function readFilewithPromises(filepath, encoding) {

  return new Promise((resolve, reject) => {

    fs.readFile(filepath, encoding, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}


function writeIntoOtherFilewithPromises(filePath, data) {
  new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve();
      }
    })
  })
}


function removeFileWithPromises(filePath) {
  new Promise((resolve, reject) => {

    fs.unlink(filePath, (err) => {
      if (err) {
        reject()
      } else {
        resolve()
      }
    })
  })
}


async function doMyJob() {

  try {
    const fileContent = await readFilewithPromises('./myTxt.txt', 'utf-8')
    await writeIntoOtherFilewithPromises('newFile.txt', fileContent)
    await removeFileWithPromises('./myTxt.txt')
  } catch (error) {
    console.log('ERROR: ' + error);
  }

}

doMyJob()
  .then(() => console.log(('Job done succesfully')))
  .catch((e) => console.log('ERROR: ' + e.message))

