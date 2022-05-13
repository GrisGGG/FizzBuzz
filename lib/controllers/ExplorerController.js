const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzBuzzService = require("./../../lib/services/FizzBuzzService");
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
    static getFizzBuzzValidation(number){
        const fizzbuzzValidation = FizzBuzzService.applyValidationInNumber(number);
        return fizzbuzzValidation;
    }
    static getOperationValidation(item){
        if(!isNaN(item)){
            const responseVal = ExplorerController.getFizzBuzzValidation(item)
            return ` respuesta:  ${responseVal}`

        }else if( item === "node" || item === "java"){
            const explorersBot = ExplorerService.filterByMission(explorers,item)
            return ` respuesta:  ${JSON.stringify(explorersBot)}`
        }else{
            return `${item} no es un carácter valido`
        }
    }






}

module.exports = ExplorerController;