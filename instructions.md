## Order
- server
  - index.js

  - models
    - User.js
  
  - controllers
    - authController.js
  - routes
    - auth.js
    - users.js
  - controllers
    - users.js

  - scenarios
    - server
      - model/Scenario.js
      - import data
        - in index.js add:
          - import Scenario from "./models/Scenario.js";
          - import { scenarios } from "./data/index.js";
      - routes
        - scenarios.js
      - controllers
        - scenarios.js
    - client
      - App.js
        - set up routes
      - scenes/escenarios
        - index.jsx
  
  - Set up post routes
    - index.js, we will add the following:
      - import postRoutes from "./routes/posts.js";
      - app.use("/posts", postRoutes);
      - app.post("/posts", verifyToken, upload.single("image"), createPost(controller));
      - import { createPost } from "./controllers/posts.js";
      
    - routes
      - posts.js
    -  models
      - Post.js
    - controllers
      - posts.js
    - import data
      - in index.js add:
        - import User from "./models/User.js";
        - import { users, posts } from "./data/index.js";
        - User.insertMany(users);
- client
  - App.js
  - state/index.js
  - index.js
  - screen/loginPage:
    - index.jsx
    - Form.jsx
  
## Frontend folder structure
- client
  - src
     - state
      - index.js
    - index.js
    
    - theme.js
    - App.js
    - components
      - FlexBetween.js
    - screens
      - loginPage
        - index.jsx
        - Form.jsx
        

- client
  - src
    - index.js
    - App.js
    - components // for reusable components
      - Navbar.js
      - Footer.js
      - Home.js
      - Login.js
      - Register.js
      - Profile.js
      - EditProfile.js
      - Posts.js
      - Post.js
      - CreatePost.js
      - EditPost.js
      - NotFound.js
    - screens
      - HomeScreen.js
      - LoginScreen.js
      - RegisterScreen.js
      - ProfileScreen.js
      - EditProfileScreen.js
      - PostsScreen.js
      - PostScreen.js
      - CreatePostScreen.js
      - EditPostScreen.js
      - NotFoundScreen.js
    - state // to keep redux and redux toolkit data separate
      - store.js // for redux store
      - reducers
        - userReducer.js
        - postReducer.js
      - actions
        - userActions.js
        - postActions.js
    - utils // for reusable functions
      - axios.js
      - constants.js
      - routes.js
      - theme.js
    - App.css
    - index.css
    - jsconfig.json
  - .env
  - .env.example
  - .gitignore
  - package.json
  - package-lock.json
  - README.md



## Install node and npm
- https://nodejs.org/en/download/
- update npm: npm install -g npm
- npm -i npx: for running create-react-app without installing it globally

## Backend Installation of Node, VScode and Backend Packages
- mkdir server
- cd server
- npm i -g nodemon: for running our node through a live service so it refreshes every time we save
- npm install express body-parser bcrypt cors dotenv gridfs-stream multer multer-gridfs-storage helmet morgan jsonwebtoken mongoose:
  - express: web framework for node
  - body-parser: middleware for express, parses incoming request bodies.
  - bcrypt: for hashing passwords
  - cors: for cross origin resource sharing
  - dotenv: for loading environment variables from a .env file into process.env
  - gridfs-stream: for storing images
  - multer: for uploading images
  - multer-gridfs-storage: for storing images
  - helmet: for request security
  - morgan: for logging
  - jsonwebtoken: for authentication
  - mongoose: for mongodb access
  - OTHERS:
    - express-handlebars: for rendering templates
    - BABEL:
      - npm i -D @babel/core @babel/cli @babel/node @babel/preset-env: for compiling ES6 to ES5. -D: for development

- npm i -y: for creating a package.json file
- In package.json, add the following scripts:
  - "type": "module", (so we can use ES6 modules, import instead of require)

## Backend Configurationns and Middleware Setup
**In index.js**
- imports, app setup, file storage, mongoose setup, middleware, routes, listen
  - In moongoose setup, mongoose.set("strictQuery", false);
## MongoDB Atlas Installation, Configuration and Setup
- Create a cluster
- create a user
- Add my current IP address (access your database from your IP address)
- Connect to your cluster / connect your application 
- Copy the connection string in .env file
- Add port number in .env file
- In index.js add mongoose setup:
  - mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
- In mongoose setup, mongoose.set("strictQuery", false);
- In package.json, add the following scripts:
  - "dev": "nodemon index.js"
- Start the server: npm run dev 

## Authentication and Authorization

## User Model and Routes
- Create a models folder

## Post Model and Routes

## Backend Data Add and Demo
- 

## Frontend Installation of React and Frontend Packages
- npx create-react-app client
- cd client
- npm install react-redux @reduxjs/toolkit redux-persist react-dropzone dotenv formik yup react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material axios react-bootstrap 
  - react-redux: for state management
  - @reduxjs/toolkit: for state management
  - redux-persist: for persisting state
  - react-dropzone: for uploading images
  - dotenv: for loading environment variables from a .env file into process.env
  - formik: for forms
  - yup: for form validation
  - react-router-dom@6: for routing
  - @mui/material: for styling with Material UI
  - @emotion/react: for styling with Material UI
  - @emotion/styled: for styling with Material UI
  - @mui/icons-material: for styling with Material UI icons
  - OPTIONALS:
    - axios: for making http requests // if you use axios
    - react-bootstrap: for styling // if you use react-bootstrap
    - react-datepicker: for datepicker
    - @mui/x-data-grid: for data grid: for tables with pagination, sorting, filtering, grouping, editing, and more
    - @nivo/core: for charts
    - @nivo/bar: for charts
    - @nivo/geochart: for charts
    - @nivo/pie: for charts
- In public/assets folder, add:
  - linkedin.png
  - twitter.png
- In src folder erase:
  - App.css, App.test.js, logo.svg, reportWebVitals.js, setupTests.js

- In index.js delete:
  - Delete import reportWebVitals and call to reportWebVitals

- In App.js delete import logo, import App.css and everything in the header
- Delete everything in index.css and add:
  - google font: https://fonts.google.com/specimen/Roboto?query=roboto

- Add to client the file jsconfig.json with the following content:  
  ```json
  {
    "compilerOptions": {
      "baseUrl": "src"
    },
    "include": ["src"]
  }
  ```
    `This is for absolute imports, you can import files from src folder without using relative paths`

## React Redux File Folder Structure and React Router
- Create screens folder
- Create components folder
- Create state folder, here we will have our React and Toolkit files (store, reducers and actions)
- In App.js:
  - remove the import of App.css
  - Set up the router  
  ```js
  import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
  import HomePage from "screens/home";
  import LoginPage from "screens/loginPage";

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
  ```

## Redux and Toolkit Installation and Setup
- In state/index.js:
  - Import createSlice from @reduxjs/toolkit, this is for creating reducers and actions
  - Create a slices
- In index.js
  - import reducers from "./state"
  - imports for redux, toolkit, persist

## Styling set up
-  Create a theme settings (theme.js)
-  Place it in the components (App.js)
   -  import UseMemo

## Navbar

## Register, LoginPage and Form

## Home page and Widgets

## Post and Post Widgets

## Profile Page


