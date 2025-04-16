const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;
const jwt = require("jsonwebtoken");
const userRoutes = require("./userRoutes");
require("dotenv").config({path: "./config.env"});

let postRoutes = express.Router();

//#1 - Retrieve All
postRoutes.route("/posts").get(verifyToken, async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("posts").find({}).toArray();
  if (data.length > 0) {
    response.status(200).json(data);
  } else {
    response.status(404).json({error: "No posts found!"});
  }
});

//#2 - Retrieve One
postRoutes.route("/posts/:id").get(verifyToken, async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(request.params.id) });
  if (Object.keys(data).length > 0) {
    response.status(200).json(data);
  } else {
    response.status(404).json({error: "The post is not found!"});
  }
});

//#3 - Create One
postRoutes.route("/posts").post(verifyToken, async (request, response) => {
  let db = database.getDb();
  let mongoObject = {
    title: request.body.title,
    author: request.user._id,
    content: request.body.content,
    dateCreated: request.body.dateCreated,
    description: request.body.description,
  };
  let data = await db.collection("posts").insertOne(mongoObject);
  response.status(201).json(data);
});

//#4 Update one
postRoutes.route("/posts/:id").put(verifyToken, async (request, response) => {
  let db = database.getDb();
  let mongoObject = {
    $set: {
      title: request.body.title,
      author: request.body.author,
      content: request.body.content,
      dateCreated: request.body.dateCreated,
      description: request.body.description,
    },
  };
  let data = await db.collection("posts").updateOne({_id: new ObjectId(request.params.id)},mongoObject);
  response.status(200).json(data);
});


//#5 Delete one
postRoutes.route("/posts/:id").delete(verifyToken, async (request, response) => {
    let db = database.getDb();
    let data = await db
      .collection("posts")
      .deleteOne({ _id: new ObjectId(request.params.id) });
  response.status(200).json(data)
  });

//#6 Delete All
postRoutes.route("/posts/").delete(verifyToken, async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("posts")
    .deleteMany();
response.status(204).send();
});

function verifyToken(request, response, next){
  const authHeaders = request.headers["authorization"];
  const token = authHeaders && authHeaders.split(' ')[1];
  if (!token){
    return response.status(401).json({message:"Authentication token is missing."});
  }
  jwt.verify(token,process.env.SECRETKEY,(error,user) => {
    if (error){
      return response.status(403).json({message:"Invalid authentication token."});
    }
    request.user = user;
    next()
  })
}

module.exports = postRoutes 