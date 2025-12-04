const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static("front"));

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const upload = multer();

const studentSchema = new mongoose.Schema({
    name: String,
    usn: String,
    college: String,
    course: String,
    specialization: String,
    dob: String,
    email: String,
    address: String
});

const Student = mongoose.model("Student", studentSchema);

app.post("/register", upload.none(), async (req, res) => {
    console.log("Received data:", req.body);

    const stu = new Student(req.body);
    await stu.save();
    res.send("Registration Saved!");
});
app.get("/getRegistrations", async (req, res) => {
    const data = await Student.find();
    res.json(data);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/front/form.html");
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
