//Page object initialization
const puppeteer = require('puppeteer')
const webInit = require("./webInit");

//Function to create page objects
function pageInit(url, id) {
    let pageObject = {
        _url: url,
        _id: id,
        async scrape(selectorlist) {
            //Launch browser and navigate to given url
            let browser = await webInit()
            let page = await browser.newPage();
            await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36')
            console.log(`Navigating to ${url}...`);
            await page.goto(this._url)
            
            //attributeScrape function  - nested in evaluate
            function attributeScrape() {
                
            }
            //Scraping functions
            productInfo = []
            for (selector in selectorlist) {
                const data = await page.evaluate(() => {
                    let attributeDiv = document.getElementsByClassName(selector)
                    let attributeArray = [...attribute]
                    let attributes = attributeArray.map(attribute => attribute.innerText)
                    return attributes
                    })
                };
            productInfo.push(data)
            return productInfo
            }
        }
    return pageObject
    } 

module.exports = pageInit;