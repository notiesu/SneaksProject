//Launching browser instance 

const puppeteer = require('puppeteer')

let webInit = async function () {
    let browserInstance;
	try {
	    console.log("Opening the browser......");
	    browserInstance = await puppeteer.launch({
	        headless: false,
			args: ["--disable-setuid-sandbox"],
	        'ignoreHTTPSErrors': true
	    });
	} catch (err) {
	    console.log("Could not create a browser instance => : ", err);
	}
	return browserInstance;
}

console.log('Initialized.');
module.exports = webInit;
