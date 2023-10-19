<div align="center">
   <h1>REST API - Brush up</h1>
   <img src="https://skillicons.dev/icons?i=nodejs,express,mongo,ts" /><br><br>
   <p><em>Simple and efficient way to handle HTTP requests and interact with a MongoDB database</em><p>
</div><br/>

<!-- ---------------------------------------------------------------- -->


#### MAIN OBJECTIVES:
---
- Create a robust and scalable API with Express and modern technologies, following best practices <em>(see: [node best practices](https://github.com/goldbergyoni/nodebestpractices))</em>

- Improved code maintainability and type safety with TypeScript.  
  
- Integrating and interacting with a MongoDB database, using Mongoose (ODM)

- Organizing the codebase using controllers, middlewares, and routes for better maintainability.

- Implementing authentication mechanisms for user management.

<br/>

<!-- ---------------------------------------------------------------- -->

#### TOOLS USED
---
**Node.js & Express.js**: <br/><em>
Node for the runtime environment for executing JavaScript on the server-side and Express framework for building robust and scalable APIs.
</em> 

**MongoDB & Mongoose**: <br/><em>
A NoSQL database using Mongoose ODM (Object Document Mapper) for MongoDB, straightforward way to interact with the database.
</em> 

**TypeScript**: <br/><em>
A superset of JavaScript that adds static typing and other features for better code quality.
</em> 

**Lodash**: <br/><em>
A utility library providing useful functions for working with arrays, objects, and more.
</em> 

**Nodemon**: <br/><em>
A utility that monitors for changes in files and automatically restarts the server.
</em> 

**Body-parser**: <br/><em>
Middleware for parsing incoming request bodies.
</em> 

**Compression**: <br/><em>
Middleware for compressing responses to reduce response times.
</em> 

**Cookie-parser**: <br/><em>
Middleware for parsing cookies attached to the client's request.
</em> 

**Cors**: <br/><em>
Middleware for handling Cross-Origin Resource Sharing.
</em> 

<br/>
<br/>

<!-- ---------------------------------------------------------------- -->
#### Running Locally 🏃‍♂️
---
#### Prerequisites : 
<em>Node version 18.15.x</em>

##### 1. Cloning the repository

```shell
git clone 
```

##### 2. Install packages

```shell
npm i
```

##### 3. Setup MongoDB URL


```js
src/index.ts

const MONGO_URL = ''; // INSERT YOUR DB URI
```

<br/>


#### Finally, run app w/ available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `start`         | Starts a development instance of the app |