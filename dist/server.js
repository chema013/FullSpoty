"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
let main = () => {
    app_1.default.listen(8080);
    console.log('Server on port 8080');
};
main();
//# sourceMappingURL=server.js.map