// Add in the imports here 
const puppeteer = require('puppeteer'); 
const nodeCron = require('node-cron'); 

// Add in the remaining imports here 
 

// Create the url variable here 
const url = 'https://www.gumtree.com/search?search_category=cars&vehicle_make=fiat&search_location=la14yt&max_price=8500&min_price=500'; 

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

// Add in the navigate to a different page function here 

// Create the function to navigate to a different page here or go back 
async function messageBoss(){

    // Create code that goes to facebook messenger and 
    // Sends them the saved link. 
    
    
    // Then call the go back function after a delay
    
    


}

// Add in the evaluate data function here 

// Create the function to evaluate them here 
async function evaluateData(){
    
    // Extract the data from the props here 
    
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
    
    // Add in the code here to scrape the data from the page 
    
    // This is the class to look for 
    // .css-sik94l
    
    // Add in the code to select the html element using the 
    // CSS className 
    const priceElement = await page.$('.css-sik94l');
    
    const priceText = await page.evaluate( el => el.textContent, priceElement); 
    
    

    // then get the text part of the HTML element 
    
    // Then format the text 
    
    // Then turn the text into a number 
    
    // Then run the number through some tests 
    
    
    
    
    
    
    
    // Once the dom element has been found then extract the text 
    
    // Save the text to a variable 
    
    // Pass the variables through props to the function call 
    
    // Call the evaluate Data function here with the props 
    
 


    
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

