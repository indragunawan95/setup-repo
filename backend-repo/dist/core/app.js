"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/user', userRoutes_1.default);
app.use((req, res, next) => {
    res.status(404).send({ message: 'Not Found' });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
