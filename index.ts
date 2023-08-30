import express from "express";
import usersRouter from './routers/user.js';
import dataSource from "./db/dataSource.js";

var app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('Server Up!')
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
    dataSource.initialize();
  });
  
  