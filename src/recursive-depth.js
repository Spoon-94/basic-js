const CustomError = require("../extensions/custom-error");

let maxDepth = 0;
module.exports = class DepthCalculator {
   calculateDepth(arr, currentDepth = 1) {
      let depth = 0;
      for (let i = 0; i < arr.length; i++) {
         if(Array.isArray(arr[i])) {
            maxDepth = this.calculateDepth(arr[i], currentDepth + 1);
         }
      }
      if (maxDepth > currentDepth) {
         depth = maxDepth; 
      } else {
         depth = currentDepth;
      }
      maxDepth = 0;
      return depth;
   }
};