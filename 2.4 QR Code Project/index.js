/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';
// const inquirer = require('inquirer');
// import qr from 'qr-image';
inquirer
  .prompt([{
    name : 'username',
    message: 'Enter your link :',
    },
  ])
  .then((answers) => {
    // console.log(`You are, ${answers.username}!`); 
    const url = answers.username;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('first_qr.png'));

    fs.appendFile("Links.txt" , url + '\n' , (err)=>{
        if (err) throw err;
        console.log("New link has been saved");
    });
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


 