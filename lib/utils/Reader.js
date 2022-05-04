// Clase Reader con método static readJsonFile que reciba un parth (archivo a leer)
const fs = require("fs");

class Reader {
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path); // readFileSync: interfaz que lee el archivo de manera sincrona (Node se detiene hasta que se termina de leer el archivo) y devuelve 
        return JSON.parse(rawdata);  
    }
}

module.exports = Reader;