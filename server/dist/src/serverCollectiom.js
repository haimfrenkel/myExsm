"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cheking = void 0;
class Cheking {
    constructor() {
        this.numberOfEqual = -1;
    }
    checkArray(array) {
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
            this.numberOfEqual = (i + 2);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Cheking = Cheking;
//# sourceMappingURL=serverCollectiom.js.map