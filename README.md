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

# Creating an Express Server

Steps to create and run a express server :

1. Create a directory.
2. Create index.js
3. Initialise NPM.
4. Install the Express package.
5. Write Server application in index.js .
6. Start server.

# HTTP Requests

Request Vocab :

1. Get   - Retrieves information from the specified resource , and should only be used to request data 
          (not modify it).
2. Post  - Sends data to the server for processing , usually resulting in a change in the server side
           or side effects on the server.
3. Put   - Updates a current resource or create it if it doesn't exist , with the client providing a 
           complete and updated copy of the resources.
4. Patch - Updates parts of an existing resource , with the client providing only the parts of the 
           resource that need to be updated.
5. Delete - Removes the specified resource from the server.

# HTTP Return Codes Cheat Sheet

1. 1** - Hold on
2. 2** - Here you go 
3. 3** - Go away 
4. 4** - You fu*ked up 
5. 5** - I fu*ked up

# Middleware and its functionality

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

<strong>Middleware</strong> functions are functions that have access to the <i>request object</i> (req), the <i>response</i> object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

If the current middleware function does not end the request-response cycle, it must call<strong> next() </strong>to pass control to the next middleware function. Otherwise, the request will be left hanging.

## Common types of middleware -

1. Core Middlewares / Build-in middlewares

2. Third-Party Middlewares

3. Custom Middlewares

4. Authentication and Authorization Middlewares

5. Error Handling Middlewares

6. Logging and Debugging Middlewares

7. Scurity Middlewares:

### Aren't (4),(5),(6),(7) are also 'Third Party Middleware' ? Why are writing them sperately ?

- You are correct , the above can sometimes be implemented as third-party middlewares but the
  <strong>primary distinction</strong> is that some middlewares are more specialized and crucial to the core functionality of an application, which is why they are often highlighted separately. 

# EJS Tags

1. <%= <strong>Variable</strong> %> -  JS Output
1. <% <strong>Console.log("hello")</strong> %%> -  JS Execute
1. <%-<strong><h>Hello<h></strong> %> -  Render HTML
1. <%%  %%> -  Show <% or %>
1. <%# <strong>This is a comment</strong> %%> -  Stop Execution
1. <%- <strong>include("Header.ejs")</strong> %> -  Insert another EJS file

# API Authentication

0. No Authentication
1. Basic Authentication
2. API Key Authorisation
3. Token Based Authentication

### What is render rate ?
- A rate limiter is a mechanism used to control the rate at which a client, user, or system can make requests to a server or API (Application Programming Interface). The primary purpose of rate limiting is to prevent abuse, protect against denial-of-service attacks, and ensure fair usage of resources.