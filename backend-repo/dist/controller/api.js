"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = exports.updateUser = void 0;
const userCollections_1 = __importDefault(require("../repository//userCollections"));
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, data } = req.body;
    try {
        yield userCollections_1.default.updateUser(id, data);
        res.status(200).send({ message: 'User data updated successfully' });
    }
    catch (error) {
        res.status(500).send({ message: 'Error updating user data', error });
    }
});
exports.updateUser = updateUser;
const fetchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const userData = yield userCollections_1.default.fetchUser(id);
        if (!userData) {
            res.status(404).send({ message: 'User not found' });
        }
        else {
            res.status(200).send(userData);
        }
    }
    catch (error) {
        res.status(500).send({ message: 'Error fetching user data', error });
    }
});
exports.fetchUser = fetchUser;
