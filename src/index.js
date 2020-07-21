"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var bodyParser = __importStar(require("body-parser"));
var sample_1 = require("./Routes/Sample/sample");
var web_push_1 = __importDefault(require("web-push"));
exports.app = express_1.default();
// const socketIO = require("socket.io");
var http = require("http");
//push notification
var publicKey = 'BAe-5nChOQ1jP3LFkhUfyt3-XgNwxgtsK7O551Y7sYMKerpWN84Ha-4U_mC1fwHy2RYOegpzBVd3ifbNsRjj6i4';
var privateKey = 'Wgk-2z3wcUtkagIe4z_QfMCMH5eVdgED4HvTPUCEga8';
web_push_1.default.setVapidDetails('mailto: anamika@riverus.in', publicKey, privateKey);
exports.app.use(bodyParser.json());
exports.app.use(cors_1.default()); // to enable cors for requests
exports.app.use('/', sample_1.sampleRouter);
// app.use('*', defaultRouter) // if the user tries to access a path that does not exist.
var server = http.createServer(exports.app);
// Prints 2 URL Safe Base64 Encoded Strings
// const io = socketIO(server);
// DownloadSubscriptions.getDownloadInfo(io)
var port = 5000;
server.listen(port, function () {
    console.log('API active at port ' + port + '\nSave the files to run the server after changes');
});
