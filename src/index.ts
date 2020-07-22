
import express from 'express';
import cors from'cors';
import * as bodyParser from 'body-parser';
import { sampleRouter } from'./Routes/Sample/sample';
import { sendMailRouter } from './Routes/SendMail/sendMail';
import webpush from 'web-push';
export const app = (express as any)();
// const socketIO = require("socket.io");
const http = require("http");

//push notification
const publicKey = 'BAe-5nChOQ1jP3LFkhUfyt3-XgNwxgtsK7O551Y7sYMKerpWN84Ha-4U_mC1fwHy2RYOegpzBVd3ifbNsRjj6i4';
const privateKey = 'Wgk-2z3wcUtkagIe4z_QfMCMH5eVdgED4HvTPUCEga8';

webpush.setVapidDetails('mailto: anamika@riverus.in', publicKey, privateKey);

app.use(bodyParser.json());

app.use((cors as any)()); // to enable cors for requests
app.use('/', sampleRouter);
app.use('/sendmail', sendMailRouter);
// app.use('*', defaultRouter) // if the user tries to access a path that does not exist.
const server = http.createServer(app);

// Prints 2 URL Safe Base64 Encoded Strings

// const io = socketIO(server);
 
// DownloadSubscriptions.getDownloadInfo(io)
 
var port = 5000;
server.listen(port, () => {
console.log('API active at port ' + port + '\nSave the files to run the server after changes');
})

