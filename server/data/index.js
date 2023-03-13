import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    location: "San Fran, CA",
    occupation: "Software Engineer",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    location: "New York, CA",
    occupation: "Degenerate",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    location: "Canada, CA",
    occupation: "Data Scientist Hacker",
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Whatcha",
    lastName: "Doing",
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    location: "Korea, CA",
    occupation: "Educator",
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    location: "Utah, CA",
    occupation: "Hacker",
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Harvey",
    lastName: "Dunn",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",
    location: "Los Angeles, CA",
    occupation: "Journalist",
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    email: "carlyvowel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p8.jpeg",
    location: "Chicago, IL",
    occupation: "Nurse",
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",
    location: "Washington, DC",
    occupation: "A Student",
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const scenarios = [
  {
    _id: new mongoose.Types.ObjectId(),
    //userId: userIds[1],
    scenarioName: "School",
    description: "Some really long random description",
    //picturePath: "school.jpg",
    //userPicturePath: "p3.jpeg",
  },
  {
    _id: new mongoose.Types.ObjectId(),
    //userId: userIds[3],
    scenarioName: "Garage",
    description: "Some really long random description",
    //picturePath: "garage.jpg",
    //userPicturePath: "p3.jpeg",
  }, {
    _id: new mongoose.Types.ObjectId(),
    //userId: userIds[4],
    scenarioName: "Kitchen",
    description: "Some really long random description",
    //picturePath: "kitchen.jpg",
    //userPicturePath: "p3.jpeg",
  }, {
    _id: new mongoose.Types.ObjectId(),
    //userId: userIds[6],
    scenarioName: "Warehouse",
    description: "Some really long random description",
    //picturePath: "warehouse.jpg",
    //userPicturePath: "p3.jpeg",
  }, {
    _id: new mongoose.Types.ObjectId(),
    //userId: userIds[5],
    scenarioName: "Office",
    description: "Some really long random description",
    //picturePath: "office.jpg",
    //userPicturePath: "p3.jpeg",
  }, {
    _id: new mongoose.Types.ObjectId(),
    //userId: userIds[2],
    scenarioName: "Hotel",
    description: "Some really long random description",
    //picturePath: "hotel.jpg",
    //userPicturePath: "p3.jpeg",
  },
];
