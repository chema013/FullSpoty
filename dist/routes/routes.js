"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(require('./token'));
// module.exports = app;
// import {Router} from 'express';
// const router: Router = Router();
exports.default = app;
//# sourceMappingURL=routes.js.map