<div align="center">
   <h1>REST API - Brush up</h1>
   <img src="https://skillicons.dev/icons?i=nodejs,express,mongo,ts" /><br>
   <p><em>Simple and efficient way to handle HTTP requests and interact with a MongoDB database</em><p>

</div>



<br/>
<br/>

##### MAIN OBJECTIVES:
---

- Create a robust and scalable API with Express and modern technologies, following best practices (see: [node best practices](https://github.com/goldbergyoni/nodebestpractices)) 

- Improved code maintainability and type safety with TypeScript.  
  
- Integrating and interacting with a MongoDB database, using Mongoose (ODM)

- Organizing the codebase using controllers, middlewares, and routes for better maintainability.

- Implementing authentication mechanisms for user management.


<br/>

#### TOOLS USED
---

- **Node.js**: A JavaScript runtime environment for executing JavaScript on the server-side.
- **Express.js**: A web application framework for building robust and scalable APIs.
- **TypeScript**: A superset of JavaScript that adds static typing and other features for better code quality.
- **MongoDB**: A NoSQL database for storing and retrieving data in a flexible and efficient manner.
- **Mongoose**: An ODM (Object Document Mapper) for MongoDB, providing a straightforward way to interact with the database.
- **Nodemon**: A utility that monitors for changes in files and automatically restarts the server.
- **Body-parser**: Middleware for parsing incoming request bodies.
- **Compression**: Middleware for compressing responses to reduce response times.
- **Cookie-parser**: Middleware for parsing cookies attached to the client's request.
- **Cors**: Middleware for handling Cross-Origin Resource Sharing.
- **Lodash**: A utility library providing useful functions for working with arrays, objects, and more.









<br/>
<br/>
<br/>

<!-- ---------------------------------------------------------------------------------------------- -->

<div align="center">
   <h1>🏃‍♂️ Running Locally 🏃‍♂️ </h1>

</div>

#### Prerequisites

<em>Node version 18.15.x</em>

#### Cloning the repository

```shell
git clone 
```

#### Install packages

```shell
npm i
```

#### Setup MongoDB URL

In `src/index.ts`:

```js
const MONGO_URL = ''; // INSERT YOUR DB URI
```


#### Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `start`         | Starts a development instance of the app |