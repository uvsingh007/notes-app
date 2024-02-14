const express = require("express");
const { connection } = require("./config/db");
const { userRouter } = require("./controller/user.routes");
const { noteRouter } = require("./controller/note.routes");

require("dotenv").config();
const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
    console.log(`Server is running at port ${process.env.port}`);
  } 
  catch(err){
    console.log(err);
  }
});
