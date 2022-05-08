const ExplorerController = require("./../../lib/controllers/ExplorerController");
const FizzbuzzService = require("./../../lib/services/FizzBuzzService");

describe("Tests para ExplorerController", () => {
    test ("1) Validación getExplorersByMission", () =>{
        const validacion = ExplorerController.getExplorersByMission("node");
        expect(validacion).not.toBeUndefined();
    });
    test ("2) Validación getExplorersUsernamesByMission", () =>{
        const validacion1 = ExplorerController.getExplorersUsernamesByMission("node");
        expect(validacion1.length).toBe(10);
    });
    test ("3) Validación getExplorersAmonutByMission", () =>{
        const validacion1 = ExplorerController.getExplorersAmonutByMission("node");
        expect(validacion1).toBe(10);
    });
    test ("4) Validación getFizzBuzzValidation", () =>{
        const validation = FizzbuzzService.applyValidationInNumber(1);
        expect(validation).toBe(1);
    });
    test ("5) Validación getFizzBuzzValidation", () =>{
        const validation = FizzbuzzService.applyValidationInNumber(3);
        expect(validation).toBe("FIZZ");
    });
    test ("6) Validación getFizzBuzzValidation", () =>{
        const validation = FizzbuzzService.applyValidationInNumber(5);
        expect(validation).toBe("BUZZ");
    });
    test ("7) Validación getFizzBuzzValidation", () =>{
        const validation = FizzbuzzService.applyValidationInNumber(15);
        expect(validation).toBe("FIZZBUZZ");
    });
});