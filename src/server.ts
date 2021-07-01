// temos que instalar e importar esta dependencia
// é uma dependencia do typescript, principalmente quando se usa o decorator
import 'reflect-metadata'; 
require("dotenv").config(); 
import express from 'express';
import cors from 'cors';
import routes from './routes/index';
const bodyParser  = require('body-parser');

// estou importanto a conexao aqui
import './database';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started on port 3333!');
});
