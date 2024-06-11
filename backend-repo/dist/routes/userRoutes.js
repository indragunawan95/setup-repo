"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("../controller/api");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.put('/update-user-data', authMiddleware_1.default, api_1.updateUser);
router.get('/fetch-user-data/:id', authMiddleware_1.default, api_1.fetchUser);
exports.default = router;
