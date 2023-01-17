const sneaksapi = require('sneaks-api')
const sneaks = new sneaksapi()

sneaks.getProductPrices('CT8012-116', function(err, product) {
    console.log(product)
})
