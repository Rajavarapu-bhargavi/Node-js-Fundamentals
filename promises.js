const fs = require('fs').promises;

fs.readFile('add.js', 'utf8')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
