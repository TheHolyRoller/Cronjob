// Add in the imports here 
const puppeteer = require('puppeteer'); 
const nodeCron = require('node-cron'); 

// Add in the remaining imports here 
 

// Create the url variable here 
const url = 'https://www.gumtree.com/search?search_category=cars&vehicle_make=fiat&search_location=la14yt&max_price=8500&min_price=500';

// Global counter variable 
let counter = 3; 

// Create the global Link Array here 
let links = []; 



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
    
    // Once the dom element has been found then extract the text 
    
    // Save the text to a variable 
    
    // Pass the variables through props to the function call 
    
    // Call the evaluate Data function here with the props 
    
 


    
}






// Add in the goto product function here 
// Create the function to navigate to the product page here 
async function gotoProduct(){
    
    // Extract the link from the props 
    
    // Go to the link here 
    
    
    // Call the scrape data function here 
    
    
    
    
    
}





// Add in the get Link function here 
// Create the function to get the link here 
async function getLink(){

    // Find the nearest ancestor of the element that was passed 
    // Through the props 
    
    // Call the get Nearest Ancestor Function here 
    // Pass the props to it 
    
    // Extract the href of the link here 
    
    // Add the link variable to the global Array here 
    
    
    // Call the gotoProduct function here with the link as the 
    // Argument 
    
    

    
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




// Create the function to grab the third $ sign here 
async function getProduct(){
    
    // Call the configure browser function here 
    page = await configureBrowser(); 
    
    // Wait for the get product function to finish 
    
    
    // Use the counter variable here 
    
    
    // Create a statement that will look for the nth symbol here 
    
    // Add in the className of the element your looking for here 
    // const element = await page.waitForSelector(`::-p-text (£):nth(${counter})`);
    // const element = await page.waitForSelector(`::-p-text (£):nth(3)`);
    
    const elements = await page.$x("//text()[contains(., '£')][3]"); 
    
    
    // Log the product to the console as just a testing start 
    // console.log(elements.textContent);
    
    
    
    // Add in the check to see if the elements array has any elements 
    if(elements.length > 0){
        
        console.log("there seems to be some content");
        const element = elements[0]; 
        console.log("this is the element")
        console.log(element); 
        console.log(element.textContent); 
        
        
    }
    
    else{
    
    console.log("I'm getting undefined"); 
    console.log("this is not working");
    console.log(elements); 
    
    
    
    
    
        
    }

     
    
    // Call the getLink function here that will use the 
    // Recently found symbol in the arguments of the function call 
    
    // Call the find nearest ancestor function here and pass in the 
    
    
    
    
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

