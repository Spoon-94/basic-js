const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if (!Array.isArray(arr)) {
      throw new Error(`arr is not an Array`);
   }
   let newArray = arr.slice(0);
   for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] === `--double-next` && i < newArray.length - 1) {
         newArray[i] = newArray[i + 1]; 
      }
      if (newArray[i] === `--double-prev` && i > 0) {
         newArray[i] = newArray[i - 1]; 
      }
      if (newArray[i] === `--discard-next` && i < newArray.length - 1) {
         newArray[i + 1] = '';
      }
      if (newArray[i + 1] === `--discard-prev`) {
         newArray[i] = '';
      }
      if (newArray[i] === `--double-next` || newArray[i] === `--double-prev`|| newArray[i] === `--discard-next`|| newArray[i] === `--discard-prev`) {
         newArray[i] = '';
      }
   }
   return newArray.filter(item => item !== '');
};