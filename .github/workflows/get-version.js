const fs = require('fs');
console.log(JSON.parse(fs.readFileSync('./dist/module.json', 'utf-8')).version);
