const {basicTax, importedTax, totalTax, salePrice} = require('./../../modules/taxes')

describe('Taxes module', ()=> {
  describe('basicTax', ()=> {
    test('product applicable', ()=> {
      expect(basicTax(10, 'Laptop')).toBe(1)
    })

    test('Tax rounded', ()=> {
      expect(basicTax(12.44, 'Laptop')).toBe(1.25)
    })

    test('product not applicable basic tax', ()=> {
      expect(basicTax(12.44, 'book of wisdom')).toBe(0)
    })
  })

  describe('importedTax', ()=> {
    test('Tax of imported product', ()=> {
      expect(importedTax(10)).toBe(0.5)
    })

    test('Tax rounded', ()=> {
      expect(importedTax(12.44)).toBe(0.65)
    })
  }) 

  describe('totalTax', ()=> {
    test('Product with basic and imported tax applicable', ()=> {
      expect(totalTax(12.44, 'imported Laptop')).toBe(1.9)
    })
  }) 

  describe('salePrice', ()=> {
    test('Sum the product price and tax', ()=> {
      expect(salePrice(12.44, 1.9)).toBe(14.34)
    })
  }) 
})