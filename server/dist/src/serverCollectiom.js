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
exports.Cheking = void 0;
class Cheking {
    checkArray(array) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            let j = array.length - 1;
            let rightSide = array[i];
            let leftSide = array[j];
            while (i < j - 2) {
                if (rightSide == leftSide) {
                    i++;
                    j--;
                    rightSide += array[i];
                    leftSide += array[j];
                }
                else if (rightSide < leftSide) {
                    i++;
                    rightSide += array[i];
                }
                else if (rightSide > leftSide) {
                    j--;
                    leftSide += array[j];
                }
            }
            if (leftSide == rightSide) {
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.Cheking = Cheking;
//# sourceMappingURL=serverCollectiom.js.map