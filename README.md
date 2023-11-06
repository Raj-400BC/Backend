<h3><strong> About this repo : </strong></h3>
<br>
<h3>
    I am keeping the track of my backend progress in this repository. Whatever I learn new , will be updated 
    here.
</h3>

1. Native modules in Node.js are modules that are not written in JavaScript but are instead implemented in a low-level language like C or C++. These modules are typically used to access system-level functionality or interact with external libraries or hardware.
    
    
2. Native modules are commonly used for tasks like file system operations, cryptography, network protocols, and other operations that require low-level access to the operating system or external libraries.
   
3. Methods of importing modules : 
        
 * CommonJS - CommonJS is a module system used in Node.js for organizing and structuring code. It uses the 'require' function to import modules and the module.exports or exports object to define what a module exports.

 ```   const myModule = require('./myModule'); ```

* ECMAScript Module - ECMAScript Modules is a standardized module system introduced in modern JavaScript, supported both in browsers and Node.js. It uses the 'import' and 'export' statements for module loading and defining exports.

```   import { someFunction } from './myModule.mjs'; ```
 # QR Code Generator and Link Storage

This Node.js application allows you to:

1. Get user input for a URL.
2. Generate a QR code image from the URL using the `qr-image` package.
3. Store the user-entered URL in a text file, appending it to an existing file if it exists.
