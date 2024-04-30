const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const fs = require("fs");
const morgan = require('morgan');
// const HttpError = require('./models/http-error');
const rfs = require('rotating-file-stream');
const app = express()
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "VIHARI API",
      version: "1.0.0",
      description: "This is Vihari API application made with express and documented with swaggerAPI"
    },
    servers: [
      {
        url: "http://localhost:4000",
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          value: "Bearer <JWT token here>"
        }
      }
    },
  },
  apis: ["./backend/routes/*.js", './app.js'],
};

const specs = swaggerJsDoc(options);

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs)
)

app.get('/', (req, res) => {
  res.send('API is running');
});

// app.use((req, res, next) => {
//   const error = new HttpError('Could not find this route.', 404);
//   throw error;
// });

app.use(express.json())

// app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(cors());

const accessLogStream = rfs.createStream("access.log", {
  interval: '1d',
  path: path.join(__dirname, 'logs')
})
app.use(morgan('combined', { stream: accessLogStream }))
// Routing..

const agentRoutes = require('./routes/agent');
const adminRoutes = require('./routes/admin');
const tourRoutes = require('./routes/tour');
const testRoutes = require('./routes/test')
app.use(require('./routes/bus'))
app.use("/api",testRoutes)
app.use(require('./routes/auth'))
app.use('/api/agent', agentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/tour', tourRoutes);


// app.get('/',(req,res)=>{
//   res.send("Hello World!")
// })

// inbuilt middleware
// app.use('/uploads',express.static(__dirname+'/uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/images', express.static(__dirname + '/public/Images'));

app.use('/error', (req, res, next) => {
  throw new Error("new error")
})
// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error.stack);
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});


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
