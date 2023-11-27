import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../routes';

import database from './config';
import { errorHandler } from '../middlewares/errorHandler';

import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.use(errorHandler);

export default server;