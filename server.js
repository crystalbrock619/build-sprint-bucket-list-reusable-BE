const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const UsersRouter = require('./users/users-router');
const BucketRouter = require('./buckets/bucket-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', UsersRouter);
server.use('/api/users/:id/buckets', BucketRouter);


server.get('/', (req, res) =>{
  res.send("We're connected!")
});




module.exports = server;