// Add in the imports here 
const puppeteer = require('puppeteer'); 
const nodeCron = require('node-cron'); 

const url = 'https://www.gumtree.com/search?search_category=cars&vehicle_make=alfa-romeo&search_location=uk&max_price=2000000'; 

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
    //  use the aria-label="DylB99 (direct message)" as the selector 
    // Wait for the selector here 
    // ClassName = link__2e8e1
    // Use a className here 
    // await page.waitForSelector('[class="link__2e8e1"]'); 
    
    const profile_Link = 'https://discord.com/channels/@me/644645709781663744'; 
    
    await page.waitForSelector('[aria-label="DylB99 (direct message)"]'); 
    
    
    // const profile = await page.$('[class="link__2e8e1"]');
    const profile = await page.$('[aria-label="DylB99 (direct message)"]');
    
    // Navigate to the profile page 
    
   
    
    // await page.waitForSelector('[role="textbox"]'); 
    
    // Navigate here 
    await Promise.all([page.goto(profile_Link), page.waitForNavigation()]);
    
    
    
    // Use an await here and use the className instead 
    
    // Add in an await for select here 
    await page.waitForSelector('[role="textbox"]'); 
    
    
    const textBox = await page.$('[role="textbox"]');
    
    await textBox.click(); 
    
    await textBox.type(messageURL);
    
    // Press Enter here 
    await page.keyboard.press('Enter'); 
    
    // Call the goBack function here 
    
    
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
    
    if(priceNum > 500 && priceNum < 90000 ){
        
        console.log("we have a high price!!!");
        console.log('this is the price');
        console.log(priceNum);
        const messageURL = await page.url();
        messageBoss(messageURL); 
    }
    
}

async function scrapeData(){
    
    console.log("is this working");
    
    // Get the priceElement here 
    await page.waitForSelector('.css-sik94l'); // Wait for the element to be available 
    const priceElement = await page.$('.css-sik94l');

    // The argument was price element next to textContent
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
        
        // css-1ygzid9
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

            const element = result[0]; 
            //  result[0].click(); 
             const productLink = result[0]; 
             const ref = productLink.getAttribute('href'); 
             linkArray.push(ref); 
             console.log(ref); 

             
          }
        }
        
        result[2].click(); 
        
        
        
        
        
        return result;
      });
      
      

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

