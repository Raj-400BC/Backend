
import express from "express";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3100;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Login.html');
});

app.post('/check', (req, res) => {
    const userFilePath = `${__dirname}/${req.body.email}.txt`;
    console.log('userFilePath:', userFilePath); // Debug output

    const readStream = fs.createReadStream(userFilePath, 'utf8');
    let content = '';

    readStream.on('data', (chunk) => {
        content += chunk;
    });

    readStream.on('end', () => {
        console.log('File content:', content); // Debug output

        if (content.trim() === req.body.password) {
            res.send("Logged in successfully");
        } else {
            res.send("Wrong password");
        }
    });

    readStream.on('error', (err) => {
        console.error('Error reading the file:', err);
        res.send("New User! Sign up");
    });
});


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});




// import express from "express"
// import fs from "fs";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { mkdir } from 'node:fs/promises';

// const app = express();
// const port = 3100;
// const __dirname = dirname(fileURLToPath(import.meta.url));
// // const __userFile = dirname(fileURLToPath(import.meta.url));

// app.use(express.urlencoded({extended:true}));

// app.get('/' , (req,res)=>{
//     console.log(`${__dirname} + '/public/Login.html'`)
//     res.sendFile(__dirname + '/public/Login.html');
// })

// app.post('/check' , (req , res)=>{
//     // Next working  point : -- checking if a txt file is present with the 'email' name from login page in the server or not.
//     if (fs.existsSync(`${req.body.email}.txt`)) {
//         // res.send("User present")
//         if(fs.readFileSync(`${req.body.email}.txt`) ===  req.body.password ){
//             res.send("Logged in successfull");
//         }
//         else{
//             res.send("Wrong password");
//         }
//         // res.send("Logged in successfull");
//     }
//     else{
//         res.send("New User! Sign up");
//     }
// })

// app.listen(port , ()=>{
//     console.log(`Server running at port ${port}.`)
// })