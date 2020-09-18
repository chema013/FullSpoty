"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('./config/config');
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = express_1.default();
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
// parse application/json
app.use(body_parser_1.default.json());
//hablitar el public
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../public')));
// settings
app.use(routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map