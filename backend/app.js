const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')
const path=require('path');
const app = express()
app.use(express.json())

app.use(cors());

// Routing..
app.use(require('./routes/auth'))
 
const agentRoutes=require('./routes/agent');
const adminRoutes=require('./routes/admin');
app.use('/api/agent',agentRoutes);
app.use('/api/admin',adminRoutes);
app.use(require('./routes/bus'))


app.get('/',(req,res)=>{
  res.send("Hello World!")
})

// app.use('/uploads',express.static(__dirname+'/uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/images',express.static(__dirname+'/public/Images'));



mongoose
  .connect(
    "mongodb+srv://Srikar:Sailu3002@cluster0.ch9hacp.mongodb.net/Vihari"
  ) 
  .then((result) => {
    app.listen(4000, () => {
      console.log("listening to port 4000");
    });
    console.log("Mongodb connected");
  })
  .catch((err) => console.log("MongoDB connection error:", err));
