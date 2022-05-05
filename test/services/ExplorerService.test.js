const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const explorers = Reader.readJsonFile("explorers.json");


describe("Test de la clase ExplorerService", () =>{
    test("1) Test para validar filterByMission", () => {
        const explorersOfMissionNode = ExplorerService.filterByMission(explorers, "node");
        for (let explorer of explorersOfMissionNode) {
            expect(explorer.mission).toBe("node");
        }
    });

    test("2) Test para validar getAmountOfExplorersByMission", () => {
        const explorersOfMissionNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersOfMissionNode).toBe(10);
    });
})
