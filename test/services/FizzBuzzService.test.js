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
    test ("3) Test explorer 5, trick = BUZZ", () =>{
        const explorer5 = {name: "Explorer5", score: 5};
        const validation = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(validation.trick).toBe("BUZZ");
    });
    test ("4) Test explorer 15, trick = FIZZBUZZ", () =>{
        const explorer15 = {name: "Explorer15", score: 15};
        const validation = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(validation.trick).toBe("FIZZBUZZ");
    });
    test ("5) Test de la Clase applyValidationInNumber", () =>{
        const validation = FizzbuzzService.applyValidationInNumber(1);
        expect(validation).toBe(1);
    });
    test ("6) Test de la Clase applyValidationInNumber", () =>{
        const validation = FizzbuzzService.applyValidationInNumber(3);
        expect(validation).toBe("FIZZ");
    });
    test ("7) Test de la Clase applyValidationInNumber", () =>{
        const validation = FizzbuzzService.applyValidationInNumber(5);
        expect(validation).toBe("BUZZ");
    });
    test ("8) Test de la Clase applyValidationInNumber", () =>{
        const validation = FizzbuzzService.applyValidationInNumber(15);
        expect(validation).toBe("FIZZBUZZ");
    });
    
});



