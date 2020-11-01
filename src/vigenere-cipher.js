const CustomError = require("../extensions/custom-error");

const ALPHABET = 26;

class VigenereCipheringMachine {
    constructor(direct = true) {
        this.isDirect = direct;
    }
    encrypt(message, key) {
        if (arguments.length <= 1) {
            throw new Error("Incorrect arguments");
        } 
        message = message.toUpperCase();
        key = key.toUpperCase();
        let arr = [];
        let len = message.length;
        let shift = 0;
        for(let i = 0; i < len; i++) {
            let code = message[i].charCodeAt(0);
            if(code >= 65 && code <= 90) {
                let newSim = String.fromCharCode((code + key.charCodeAt(shift)) % ALPHABET + "A".charCodeAt(0));
                arr.push(newSim);
                if(shift != key.length - 1) shift++;
                else shift = 0;
            }
            else arr.push(message[i]);         
        }
        if(this.isDirect == false) {
            arr.reverse();
        }
        return arr.join("");        
    }
    decrypt(encryptedMessage, key) {
        if(arguments.length <= 1) {
            throw new Error("Incorrect arguments");
        }
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();
        let arr = [];
        let len = encryptedMessage.length;
        let shift = 0;
        for(let i = 0; i < len; i++) {
            let code = encryptedMessage[i].charCodeAt(0);
            if(code >= 65 && code <= 90) {
                let newSim = String.fromCharCode((code + ALPHABET - key.charCodeAt(shift)) % ALPHABET + "A".charCodeAt(0));
                arr.push(newSim);
                if(shift != key.length - 1) {
                   shift++; 
                } else {
                    shift = 0;
                }
            }
            else arr.push(encryptedMessage[i]);         
        }
        if(this.isDirect == false) {
            arr.reverse();
        }
        return arr.join("");
    }
}


module.exports = VigenereCipheringMachine;
