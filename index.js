// Add in the imports here 
const puppeteer = require('puppeteer'); 
const nodeCron = require('node-cron'); 

const url = 'https://www.gumtree.com/search?search_category=cars&search_location=uk&max_price=30000&min_price=1000'; 

// const url = 'https://www.gumtree.com/search?search_category=cars&vehicle_make=audi&search_location=uk&max_price=55000&min_price=0'; 

// const url = 'https://www.gumtree.com/search?search_category=cars&vehicle_make=bmw&search_location=uk&max_price=1000000&min_price=500'; 

// const url = 'https://www.gumtree.com/search?search_category=cars&vehicle_make=fiat&search_location=la14yt&max_price=8500&min_price=500'; 
let counter =3; 
let links = []; 

let visitedProducts = []; 
async function configureBrowser(){

    const browser = await puppeteer.launch({headless: false});  // Create a new page
    const page = await browser.newPage(); 
    await page.goto(url); 
    return(page); 
}
async function goBack(){
    
    // Navigate back to the original product page here 
    
    // Get the global url here 
    
    // Then wait for all other promises to finish and create 
    
    // A timeout function here to call that goto function 
    
    // After a few seconds
    
    
    
    
}


// Add in the send message function here 

async function sendMessage(messageURL){
    
    // Select the message component here 
     
    
    // Click on the message input element 
    
    // Enter in the text 
    
    // Press enter 
    
    
    // Wait for a while 
    
    // Call the go back home function here 
    
    
    
    
    
}


async function login(messageURL){

        
        // Get the email input here
        
    await page.waitForSelector('[name="email"]'); 
    await page.waitForSelector('[name="password"]');
    
    // Wait for the element to be available 
    const emailInput = await page.$('[name="email"]'); 
    const passwordInput = await page.$('[name="password"]');
    
    // Access the element 
    console.log("this is the email input "); 
    console.log(emailInput);
    
    console.log("this is the password input"); 
    console.log(passwordInput); 
    
    
    await emailInput.click(); 
    
    
    await emailInput.type("danielwakeley7@gmail.com");
    
    
    await passwordInput.click(); 
    await passwordInput.type("Beholdhowgood!133");
    
    await page.keyboard.press('Enter'); 

      await sendMessage(messageURL); 
}
async function messageBoss(messageURL){

    console.log('teleporting there *****');
    await Promise.all([page.goto('https://discord.com/channels/@me/644645709781663744'), page.waitForNavigation()]);
    login(messageURL); 
}

async function evaluateData(priceNum){
    
    if(priceNum > 500 && priceNum < 10000 ){
        
        console.log("we have a high price!!!");
        console.log('this is the price');
        console.log(priceNum);
        const messageURL = await page.url();
        messageBoss(messageURL); 
    }
    
}

async function scrapeData(){
    
    console.log("is this working"); 
    await page.waitForSelector('.css-sik94l'); // Wait for the element to be available 
    const priceElement = await page.$('.css-sik94l'); 

    
    const priceText = await page.evaluate(el => el.textContent, priceElement); 
    const formattedText = priceText.replace(/[, £]/g, ''); 

    const priceNum = Number(formattedText); 
    
    console.log("this is the price number"); 
    console.log(priceNum); 
    
    evaluateData(priceNum); 
    
}
async function getNearestAncestor(element){
    const anchor = await page.evaluateHandle(el => el.closest('a'), element); 
    }
    async function currentURL(){
        
        const currentUrl = await page.url();
        visitedProducts.push(currentUrl); 
        console.log(currentUrl);
        scrapeData(); 
    }
async function getProduct(){
    
    // Call the configure browser function here 
    page = await configureBrowser(); 
    // const elements = await page.$x("//text()[contains(., '$')][3]");
        
    await page.screenshot({path: 'facebook.png'});

    // Turn this into a function 
    const  elements =  await page.evaluate((counter) => {
        // Get all <a> elements in the document
        const links = document.querySelectorAll('a');
        // Filter the links that match the regex pattern
        const regex = /£\d+/;
        const result = [];
        const linkArray = []; 
        
        console.log("this is the length of the links"); 
        
        console.log(links.length); 
  
        for (let link of links) {
          if (regex.test(link.textContent)) {
            
            if(link === counter){
                
                // Add in an await for selector here 
                page.waitForSelector('a'); 
                
                
                link.click(); 
                result.push(link);
                result[0].click(); 
                
                
                
            }
            
            result.push(link);
            result[0].click(); 

          }
        }
        return result;
      });
      
   
    
    // Check if the index of the Array matches the counter variable 
    
    // If it does then click on that link
    
    
    // Then get the current URL 
      
    
    // Add in the function call to get the current url 
    currentURL(); 

}

// Create the Driver function here 
async function driver(){
    
    // Retrieve the counter variable from the database here 
    
    
    limit = 20; 
    if(counter < limit){
        counter++;

    }
    else{

        counter = 0; 
    }
    
    // Update the counter variable in the database here 
    
    
    console.log("this is the counter variable ")
    console.log(counter)
    
    
    getProduct(); 
    
}
// Add in the counter variable here 

// Create the Cron Driver function here 
nodeCron.schedule('* * * * *', async () => {

  
    driver(); 

});

