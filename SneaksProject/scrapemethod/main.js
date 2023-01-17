//Main program
//Imports
const webInit = require("./webInit");
const pageInit = require("./pageInit");
const puppeteer = require("puppeteer");

console.clear()

burnrubbersneakers = pageInit('https://burnrubbersneakers.com/collections/shoes')
burnrubbersneakers.scrape(['grid-product__price'])



