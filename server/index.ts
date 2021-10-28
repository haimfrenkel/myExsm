import express, { Router } from 'express';
import * as http from "http"
import { mainInit } from './src/main.module';
import experssFunction from 'express'
import  router  from './src/router'
import { Schema } from "mongoose";
import mongoose from 'mongoose'
console.log('line 1 in index.js');


const app = express();

const port = '6505';
app.set('port', port)

const server = http.createServer(app)





mainInit();

app.use(require('cors')());
app.use(experssFunction.json());




app.use('/api/arrays', router);

app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

app.listen(port, function () {
    console.log("server is up in: " + port);
})


