require('dotenv').config()

// This should go in .env file 
DATABASE_URL='mysql://vjfhdw02g900jsvixyj0:pscale_pw_3zP5Uoq88lWUsigFGW423VptEAhO7PQTse8NrgxiMfx@eu-central.connect.psdb.cloud/puppeteer?ssl={"rejectUnauthorized":true}'

// Details 
// Password 
// pscale_pw_KiKee6hOEOtabiWkCsFL8whf5P3229oGZcFmooNYNeB

// UserName 
// h4f9r8k3ou6hasfnlnof

const mysql = require('mysql2')

// Create the connection to the database
const connection = mysql.createConnection(process.env.DATABASE_URL)

// simple query
connection.query('show tables', function (err, results, fields) {
  console.log(results) // results contains rows returned by server
  console.log(fields) // fields contains extra metadata about results, if available
})

// Example with placeholders
connection.query('select 1 from dual where ? = ?', [1, 1], function (err, results) {
  console.log(results)
})

connection.end()


// Example 
for (let i = 0; i < links.length; i++) {
    let link = links[i];
    if (regex.test(link.textContent)) {
        // if the index is equal to the counter, click the link
        
        links[3].click(); 
        
        
        if (i === counter) {
            
            result.push(link);
            
        result[0].click();
         
        links[i].click(); 
        

        link.click();
      }
    }
  }
