require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use('/api', router);

const start = async () => {
  try{
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {console.log(`Server has been started on ${PORT} port`)});
  }catch{

  }
};
start();

