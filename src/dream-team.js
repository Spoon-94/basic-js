const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
   if(Array.isArray(members)) {
      let dreamTeam = members.map(item => {
         if (typeof item === "string") {
         let charItem = item.trim();
         return charItem[0].toUpperCase();
         }
      }).sort().join("");
      return dreamTeam;
   }  
   return false;  
};