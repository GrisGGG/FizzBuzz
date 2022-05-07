const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

describe("Test de la clase Reader", () =>{
    test("1) Comprobando explorers", () =>{
        expect(explorers).not.toBeUndefined();
    });

});