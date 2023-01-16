const ProductModule = require('./modules/product.js')
const ReceiptModule = require('./modules/receipt')
const fs = require('fs');
const InputArr = []

const allFileContents = fs.readFileSync('cases/input1.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
  if (line != '') {
    InputArr.push(line)
  }
});

const products = InputArr.map(item => {
  return new ProductModule(item)
})

console.log((new ReceiptModule(products)).final_text)

