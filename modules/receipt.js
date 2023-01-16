const product = require("./product");

module.exports = function (products) {
  let total_tax = 0
  let total_price = 0
  let final_text = ''

  products.forEach(product => {
    total_tax += (product.qty * product.sale_tax)
    const total_price_product = product.qty * product.sale_price
    total_price += total_price_product
    final_text += `${product.qty} ${product.name}: ${total_price_product.toFixed(2)}\n`
  });

  this.final_text = final_text += `Sales Taxes: ${total_tax.toFixed(2)}\nTotal: ${total_price.toFixed(2)}`
}