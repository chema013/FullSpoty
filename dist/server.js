"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
let main = () => {
    app_1.default.listen(process.env.PORT, () => {
        console.log('Escuchando puerto', process.env.PORT);
    });
};
main();
//# sourceMappingURL=server.js.map