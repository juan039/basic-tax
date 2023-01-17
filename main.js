const ProductModule = require('./modules/product.js')
const ReceiptModule = require('./modules/receipt')
const fs = require('fs');
const InputArr = []

const fileName = process.argv[2] || 'cases/input1.txt'
const allFileContents = fs.readFileSync(fileName, 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
  if (line != '') {
    InputArr.push(line)
  }
});

const products = InputArr.map(item => {
  return new ProductModule(item)
})

const receipt = new ReceiptModule(products);
console.log(receipt.final_text)

// Create output Folder
try {
  if (!fs.existsSync('output')) {
    fs.mkdirSync('output');
  }
} catch (err) {
  console.error(err);
}

// Create output File
const outputFile = fileName.split('/').slice(-1)
try {
  fs.writeFileSync(`output/${outputFile}`, receipt.final_text);
} catch (err) {
  console.error(err);
}

