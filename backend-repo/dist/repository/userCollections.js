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
Object.defineProperty(exports, "__esModule", { value: true });
const firebaseConfig_1 = require("../config/firebaseConfig");
class UserRepository {
    constructor() {
        this.collection = firebaseConfig_1.db.collection('USERS');
    }
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.doc(id).update(data);
        });
    }
    fetchUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDoc = yield this.collection.doc(id).get();
            if (!userDoc.exists) {
                return null;
            }
            const userData = userDoc.data();
            return Object.assign(Object.assign({}, userData), { id });
        });
    }
}
exports.default = new UserRepository();
