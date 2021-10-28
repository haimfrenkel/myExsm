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
exports.getAll = exports.Create = void 0;
const schema_1 = require("./schema");
const serverCollectiom_1 = require("./serverCollectiom");
function Create(array, isEqual, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(array);
        let chekcing = new serverCollectiom_1.Cheking();
        isEqual = yield chekcing.checkArray(array);
        const doc = new schema_1.arrayModel({
            array: array,
            isEqual: isEqual,
        });
        console.log(doc);
        doc.save(function (err, newDoc) {
            if (err) {
                var msg = "no info";
                console.log(err);
            }
            res.status(201).send(newDoc);
        });
    });
}
exports.Create = Create;
function getAll(res) {
    schema_1.arrayModel.find(function (err, list) {
        if (err) {
            return res.status(500).send({});
        }
        console.log(list);
        return res.status(200).send(list);
    });
}
exports.getAll = getAll;
//# sourceMappingURL=controller.js.map