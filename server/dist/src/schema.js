"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayModel = void 0;
const mongoose_1 = require("mongoose");
const arraySchema = new mongoose_1.Schema({
    array: { type: [Number], required: true },
    isEqual: { type: Boolean, required: true },
});
exports.arrayModel = mongoose_1.model("array", arraySchema);
//# sourceMappingURL=schema.js.map