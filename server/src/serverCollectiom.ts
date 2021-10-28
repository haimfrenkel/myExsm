
export class Cheking {
    public async checkArray(array: number[]) {

        let i: number = 0;
        let j: number = array.length - 1
        let rightSide: number = array[i]
        let leftSide: number = array[j]
        
        while (i < j - 2) {
    
          if (rightSide == leftSide) {
            i++
            j--
            rightSide += array[i]
            leftSide += array[j]
          } else if (rightSide < leftSide) {
            i++
            rightSide += array[i]
          } else if (rightSide > leftSide) {    
            j--
            leftSide += array[j]
          }
        } if (leftSide == rightSide) {
          return true
        } else {
          return false
        }
      }
}