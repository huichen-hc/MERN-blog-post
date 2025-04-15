const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({path: "./config.env"});

let userRoutes = express.Router();
const SALT_ROUNDS = 6;
 
//#1 - Retrieve All
userRoutes.route("/users").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("users").find({}).toArray();
  if (data.length > 0) {
    response.status(200).json(data);
  } else {
    response.status(404).json({ error: "No users found!" });
  }
});

//#2 - Retrieve One
userRoutes.route("/users/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("users")
    .findOne({ _id: new ObjectId(request.params.id) });
  if (Object.keys(data).length > 0) {
    response.status(200).json(data);
  } else {
    response.status(404).json({ error: "The user is not found!" });
  }
});

//#3 - Create One
userRoutes.route("/users").post(async (request, response) => {
  let db = database.getDb();
  const takenEmail = await db
    .collection("users")
    .findOne({ email: request.body.email });
    

  if (takenEmail) {
    response.status(409).json({ message: "The email is already taken." }); 
  } else {
    const hash = await bcrypt.hash(request.body.password, SALT_ROUNDS);

    let mongoObject = {
      name: request.body.name,
      email: request.body.email,
      password: hash,
      joinDate: new Date(),
      posts: [],
    };
    let data = await db.collection("users").insertOne(mongoObject);
    response.status(201).json(data);
  }
});

//#4 Update one
userRoutes.route("/users/:id").put(async (request, response) => {
  let db = database.getDb();
  let mongoObject = {
    $set: {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      joinDate: request.body.joinDate,
      posts: request.body.posts,
    },
  };
  let data = await db
    .collection("users")
    .updateOne({ _id: new ObjectId(request.params.id) }, mongoObject);
  response.status(200).json(data);
});

//#5 Delete one
userRoutes.route("/users/:id").delete(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("users")
    .deleteOne({ _id: new ObjectId(request.params.id) });
  response.status(200).json(data);
});

//#6 Delete All
userRoutes.route("/users/").delete(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("users").deleteMany();
  response.status(204).send();
});

//#7 - Login
userRoutes.route("/users/login").post(async (request, response) => {
    let db = database.getDb();
    const user = await db
      .collection("users")
      .findOne({ email: request.body.email });
      console.log("User found")
    if (user){
        let confirmation = await bcrypt.compare(request.body.password,user.password)
        console.log("Password comparison result:", confirmation);
        if(confirmation){
            const token = jwt.sign(user,process.env.SECRETKEY,{expiresIn:"1h"})
            response.json({success:true,token})
        }else{
            response.json({success:false,message:"Incorrect Password."})
            console.log("Incorrect Password.")
        }
    } else{
        response.json({success:false, message:"User not found."})
    }
  
  });

module.exports = userRoutes;
