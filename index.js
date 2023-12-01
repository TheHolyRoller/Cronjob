// Add in the imports here 
const puppeteer = require('puppeteer'); 
const nodeCron = require('node-cron'); 

// Add in the remaining imports here 


// Create the url variable here 

// update 
const url = 'https://www.gumtree.com/search?search_category=cars&vehicle_make=dacia&search_location=uk&max_price=12000&min_price=500'; 



// const url = 'https://www.gumtree.com/search?search_category=cars&vehicle_make=fiat&search_location=la14yt&max_price=8500&min_price=500'; 

// const url = 'https://www.ebay.com/b/Performance-Racing-Parts/107057/bn_568110'; 





// Global counter variable 
let counter = 3; 

// Create the global Link Array here 
let links = []; 

let visitedProducts = []; 




// Create the configure browser function here 
async function configureBrowser(){

    // Change this to a head-ful setup 

    const browser = await puppeteer.launch({headless: false});  // Create a new page

    // const browser = await puppeteer.launch(); 
    const page = await browser.newPage(); 
    await page.goto(url); 
    return(page); 
}

// Create a function that goes back to the original page here 
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




// Add in the navigate to a different page function here 

// Create the function to navigate to a different page here or go back 
async function messageBoss(messageURL){

    // Create code that goes to facebook messenger and 
    // Sends them the saved link. 
    
    // Goto the facebook profile here 
    console.log('teleporting there *****');
    
    
    // Create a wait function here so that the navigation occurs correctly 
    await Promise.all([page.goto('https://discord.com/channels/@me/644645709781663744'), page.waitForNavigation()]);
    // Send the message using the messageURL 
    
    // Create the script to send the message here 
    
    // Create the script to login to discord here 
    
    
    // Call the teleport function here and in the message url as props 
    login(messageURL); 
    
    
    
    
    // Click on it 
    
    // Then enter in the text 
    
    // Then select the second input box here 
    
    // Enter in the text 
    
    // Then press enter 
    
    
    // Then call the go back function here 

    
    
    // Then call the go back function after a delay
    
    


}

// Add in the evaluate data function here 

// Create the function to evaluate them here 
async function evaluateData(priceNum){
    
    // Extract the data from the props here 
    if(priceNum > 500 && priceNum < 10000 ){
        
        console.log("we have a high price!!!");
        
        
        console.log('this is the price');
        
        console.log(priceNum);
        
        // Call the Message boss function with the priceNum current url 
        
        // Get the current url here 
        const messageURL = await page.url();
        
        
        // Call the MessageBoss function here 
        messageBoss(messageURL); 
        

    }
    
    
    
    // Save the data to variables here 
    
    
    // Create logic that evaluates the data here 
    
    
    
    
    // Create logic that either call navigate to a different page 
    
    // Or Call the Navigate back to original page here 

    
}





// Add in the scrape data function here 

// Create the function to grab the price and mileage here 
async function scrapeData(){
    
    // Find the dom elements by using the 
    // ClassNames 
    console.log("is this working"); 
    
    
    await page.waitForSelector('.css-sik94l'); // Wait for the element to be available 
    const priceElement = await page.$('.css-sik94l'); 

    
    const priceText = await page.evaluate(el => el.textContent, priceElement); 
    
    // console.log(priceText);
    
    // Now format the priceText 
    const formattedText = priceText.replace(/[, £]/g, ''); 
    
    // console.log("this is the formatted text");
    // console.log(formattedText); 
    
    
    // Now turn the formatted text into a number 
    const priceNum = Number(formattedText); 
    
    console.log("this is the price number"); 
    console.log(priceNum); 
    
    
    
    // Call the evaluate data function here
    // Pass in the priceNum as props 
    
    evaluateData(priceNum); 
    
    
    
    
}





// Create the get nearest Ancestor function here 

// Add in the element here 
async function getNearestAncestor(element){

 
    //  Okay so to get the nearest ancestor I need the element itself 
    // And the right element. Once I have that then 
    const anchor = await page.evaluateHandle(el => el.closest('a'), element); 
        
        // Call the get Link function here and pass in the anchor tag in 
        // the props 
        
    
    
        
    }
    
    // Add in the get current url function here 
    async function currentURL(){
        
        const currentUrl = await page.url();
        
        
        // Add in the check here to see if the url has 
        // Already been added to the Array and if it has trigger 
        // the go home function 
        
        visitedProducts.push(currentUrl); 
        
        
        console.log(currentUrl);
        
        
        // Call the scrape data function here with the current url as props 
        scrapeData(); 
        

        
    }
    



// Create the function to grab the third $ sign here 
async function getProduct(){
    
    // Call the configure browser function here 
    page = await configureBrowser(); 
    
    
    
    // const elements = await page.$x("//text()[contains(., '$')][3]");
        
    await page.screenshot({path: 'facebook.png'});
        
    
    // Turn this into a function 
    const  elements =  await page.evaluate(() => {
        // Get all <a> elements in the document
        const links = document.querySelectorAll('a');
        // Filter the links that match the regex pattern
        const regex = /£\d+/;
        const result = [];
        const linkArray = []; 
        
  
        for (let link of links) {
          if (regex.test(link.textContent)) {
            result.push(link);
            console.log(link); 
            console.log(result); 
            // Add in a check here to see if the link is already 
            // in the Array 
            
            const element = result[0]; 
            
             result[0].click(); 

             
             
            //  Instead of trying to find the ancestor just 
            // Get the current url after you have clicked on the 
            // Page 
            
            // This is how you get the current url from the 
            // Current page 
            // const CURRENT_URL = await page.url(); 
            // You might want to abstract this to a async function 
            
            // Call the scrape data function here 
             
          }
        }
        return result;
      });
    
    // Add in the function call to get the current url 
    currentURL(); 

}










// Create the Driver function here 
async function driver(){

    // Call the getProduct function here 
    getProduct(); 
    
    
    
    // Once the function call has set off all the other functions 
    // And the code has finished executing the next few lines 
    // Of code should be read and executed 
    
    // Call the close browser function here 
    
    
    
}
// Add in the counter variable here 

// Create the Cron Driver function here 
nodeCron.schedule('* * * * *', async () => {

    
    // Call the main driver function here 
    driver(); 
    // counter++; 
    
    // Increment the variable here 
    
    limit = 20; 
    if(counter < limit){
        // counter++
        
    }


    
});

