function basicTax (price, product='default') {

  return isBasicTaxApplicable(product) ? roundTax(0.1 * price) : 0
}

function importedTax (price) {
  return roundTax(0.05 * price)
}

function totalTax (price, product='default') {
  return basicTax(price, product) + importedTax(price)
}

function salePrice (price, tax) {
  return parseFloat((price + tax).toFixed(2))
}

function roundTax(tax) {
  var multiplier = 1/0.05;
  return Math.ceil(tax*multiplier)/multiplier;
}

function isBasicTaxApplicable (product) {
  return !(
    product.includes('book') ||
    product.includes('pill') ||
    product.includes('chocolate')
  )
}

module.exports = {
  basicTax,
  importedTax,
  totalTax,
  salePrice
}