const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");

class ExplorerController{
    static getExplorersByMission(mission){
        //Se obtiene la lista de explorer del archivo json
        const explorerPerMission = ExplorerService.filterByMission(explorers, mission);
        return explorerPerMission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorersName = ExplorerService.ExplorersUsernamesByMission(explorers, mission);
        return explorersName;
    }
    static getExplorersAmonutByMission(mission){
        const sizeEx = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return sizeEx;
    }
}

module.exports = ExplorerController;