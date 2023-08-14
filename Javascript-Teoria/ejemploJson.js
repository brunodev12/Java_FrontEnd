const fs = require('fs');

const filePath = 'ejemploJson.json';
const jsonData = fs.readFileSync(filePath, 'utf8');
const collectionInfo = JSON.parse(jsonData);

// console.log(collectionInfo[0]['Codigo Postal'])

for (let item of collectionInfo){
    console.log(item['Ciudad'])
}