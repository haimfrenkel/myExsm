"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainInit = exports.mongodb = exports.mongoConn = void 0;
const mongoConnectiom_1 = require("./mongoConnectiom");
const mainInit = () => {
    console.log(' new db');
    exports.mongoConn = new mongoConnectiom_1.mongoDB();
    exports.mongoConn.initDB().then(() => {
        console.log('DB connected');
    });
};
exports.mainInit = mainInit;
//# sourceMappingURL=main.module.js.map