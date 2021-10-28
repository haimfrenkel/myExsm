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
exports.mongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class mongoDB {
    constructor() {
        this.initDB = () => __awaiter(this, void 0, void 0, function* () {
            let mongoose = yield this.initMongoose();
            return true;
        });
        this.getDbConnection = () => {
            return mongoose_1.default;
        };
    }
    initMongoose() {
        return new Promise((resolve) => {
            let uri = 'mongodb://root:Ges112213@localhost:27017/admin';
            try {
                mongoose_1.default.connect(uri);
                const db = mongoose_1.default.connection;
                db.on('error', console.error.bind(console, 'connection error:'));
                db.once('open', function () {
                    // we're connected!
                    console.log('mongodb connected!!');
                    resolve(mongoose_1.default);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.mongoDB = mongoDB;
//# sourceMappingURL=mongoConnectiom.js.map