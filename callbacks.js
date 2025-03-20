/*
console.log('Input');


sum(2, 3, (res) => {
  console.log("Sum is " + res);
})


function sum(a, b, cb) {
  setTimeout(() => {
    return cb(a + b);
  }, 5 * 1000);

}

console.log('Output');


*/


/*
const fs = require('fs');

fs.readFile('./hello.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('ERROR: ' + err);
  } else {
    console.log('Data of hello file is:', data);

    fs.writeFile('copiedHello', data, (error) => {
      if (error) { // Fixed: Checking `error`, not `err`
        console.log('ERROR: ' + error);
      } else {
        fs.unlink('./hello.txt', (e) => {
          if (e) {
            console.log('ERROR: ' + e);
          } else {
            console.log('Task completed successfully!!!');
          }
        });
      }
    });
  }
});
 */



const fsPromiseWala = require('fs/promises')


fsPromiseWala.readFile('./myHello.txt', 'utf-8')
  .then((data) => {
    fsPromiseWala.writeFile('myHelloCopied', data)
  })
  .then(() => {
    fsPromiseWala.unlink('./myHello.txt')
  })
  .catch(err => {
    console.log('ERROR: ' + err);
  })

console.log('TASK COMPLETED!!');
