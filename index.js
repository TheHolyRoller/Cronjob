// Add in the imports here 
const puppeteer = require('puppeteer'); 
const nodeCron = require('node-cron'); 

const url = 'https://www.gumtree.com/search?search_category=cars&vehicle_make=hyundai&search_location=uk&max_price=1000000'; 


let counter = 3; 
let links = []; 

let visitedProducts = []; 
async function configureBrowser(){


    const browser = await puppeteer.launch({headless: false});  // Create a new page
    const page = await browser.newPage(); 
    await page.goto(url); 

    return(page); 
    
}
async function goBack(page){
    
    // Navigate back to the original product page here 
    await Promise.all([page.goto(url), page.waitForNavigation()]);
    console.log("*************???????????----------");
    console.log("this is the last part of the program")
    console.log("___________++++++=================");

     
}



async function sendMessage(page, messageURL){
    
    const profile_Link = 'https://discord.com/channels/@me/644645709781663744';

    // Navigate here 
    await Promise.all([page.goto(profile_Link), page.waitForNavigation()]);
    
    // Add in an await for select here 
    await page.waitForSelector('[role="textbox"]'); 
    
    const textBox = await page.$('[role="textbox"]');
    
    await textBox.click(); 
    
    await textBox.type(messageURL);
    
    // Press Enter here 
    await page.keyboard.press('Enter'); 
    
    // Call the goBack function here 
    goBack(page); 

}


async function login(page, messageURL){
        
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
    
    
    // Create a timeout function here with the sendMessage function 
    // setTimeout(sendMessage(messageURL), 5000);
    
    // You might encounter trouble here with the page props 
    setTimeout((page) => {
        sendMessage(page,messageURL);
      }, 5000);

    //   await sendMessage(messageURL); 
}
async function messageBoss(page, messageURL){

    console.log('teleporting there *****');
    await Promise.all([page.goto('https://discord.com/channels/@me/644645709781663744'), page.waitForNavigation()]);
    login(page, messageURL); 
}

async function evaluateData(page, priceNum){
    
    if(priceNum > 500 && priceNum < 90000 ){
        
        console.log("we have a high price!!!");
        console.log('this is the price');
        console.log(priceNum);
        const messageURL = await page.url();
        messageBoss(page,messageURL); 
    }
    // Add in an else statement that goes home if it's not a match 
    
    // This should just wait for the next cron job triggering time 
    else{

       await goBack(); 
       
        
    }
    
    
    
}

async function scrapeData(page){
    
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
    
    evaluateData(page, priceNum); 
    
    
}
async function getNearestAncestor(element){

    const anchor = await page.evaluateHandle(el => el.closest('a'), element); 
    }
    
    
    
    async function currentURL(page){
        
        const currentUrl = await page.url();
        visitedProducts.push(currentUrl); 
        console.log(currentUrl);

        scrapeData(page); 
    }
    
    // Pass in the global counter here
    // Might not need to 
async function getProduct(page, counter){
    
    // Add in the counter incremental code here 
     
    limit = 20; 
    if(counter < limit){
        counter++;

    }
    else{

        counter = 0; 
    }
    
    // console.log("this is the COUNTER VARIABLE"); 
    // console.log(counter); 
    
    // await page.waitForNavigation();
    console.log("will this WORKKKK");
    
    
    
    
    await page.screenshot({path: 'facebook.png'});

    const  elements =  await page.evaluate((page, counter) => {

        // page.waitForNavigation(); 
        // page.waitForSelector('a'); 
        
        const links = document.querySelectorAll('a');
        
        
        // const regex = /£\d+/;
        const regex = /$\d+/;
        const result = [];
        // const linkArray = []; 
  
        for (let link of links) {
          if (regex.test(link.textContent)) {
            result.push(link);
            // console.log(link); 
            // console.log(result); 

            // const element = result[0]; 
            //  const productLink = result[0]; 
            //  const ref = productLink.getAttribute('href'); 
            //  linkArray.push(ref); 
            //  console.log(ref); 

          }
        }
        
        // Use the counter variable instead 
        // result[counter].click(); 
        // result[0].click(); 
        
        // Add in the await code here 
        return result;

        result[0].click(); 
      });
      
      

    //   currentURL(page); 
}

async function startProgram(){
    
    const page = await configureBrowser();

    nodeCron.schedule('* */2 * * * *', async () => {

        getProduct(page); 
    });

}

startProgram(); 


