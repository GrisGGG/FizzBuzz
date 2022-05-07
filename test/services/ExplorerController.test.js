const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test ("1) Validación getExplorersByMission", () =>{
        const validacion = ExplorerController.getExplorersByMission("node");
        expect(validacion).not.toBeUndefined();
    });
    test ("2) Validación getExplorersUsernamesByMission", () =>{
        const validacion1 = ExplorerController.getExplorersUsernamesByMission("node");
        expect(validacion1.length).toBe(10);
    });
    test ("3) Validación getExplorersUsernamesByMission", () =>{
        const validacion1 = ExplorerController.getExplorersAmonutByMission("node");
        expect(validacion1).toBe(10);
    });
})