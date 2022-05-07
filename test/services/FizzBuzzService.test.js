const FizzbuzzService = require("./../../lib/services/FizzBuzzService");


describe("Test de Clase FizzbuzzService", () => {
    test ("1) Test explorer 1, trick = 1", () =>{
        const explorer1 = {name: "Explorer1", score: 1};
        const validation = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(validation.trick).toBe(1);
    });
    test ("2) Test explorer 2, trick = FIZZ", () =>{
        const explorer3 = {name: "Explorer2", score: 3};
        const validation = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(validation.trick).toBe("FIZZ");
    });
    test ("5) Test explorer 2, trick = BUZZ", () =>{
        const explorer5 = {name: "Explorer2", score: 5};
        const validation = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(validation.trick).toBe("BUZZ");
    });
    test ("15) Test explorer 2, trick = FIZZBUZZ", () =>{
        const explorer15 = {name: "Explorer2", score: 15};
        const validation = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(validation.trick).toBe("FIZZBUZZ");
    });
})
