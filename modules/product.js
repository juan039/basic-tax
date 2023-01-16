const TaxesModule = require('./taxes')

module.exports = function (text) {
  const tempArr = text.split(' ')
  const tempArrLength = tempArr.length
  this.price = parseFloat(tempArr[tempArrLength-1]) || 0
  this.qty = parseInt(tempArr[0]) || 0
  this.imported = text.includes('imported')
  this.name = tempArr.filter((text, index) => {
    if (index != 0 && text != 'at' && index != (tempArrLength-1) ) {
      return true
    }
    return false
  }).join(' ')
  this.sale_tax = this.imported ? TaxesModule.totalTax(this.price, this.name) : TaxesModule.basicTax(this.price, this.name)
  this.sale_price = TaxesModule.salePrice(this.price, this.sale_tax)
}