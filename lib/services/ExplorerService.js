class ExplorerService{
    
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const amountExplorerByMission = explorers.filter( explorer => explorer.mission == mission);
        return amountExplorerByMission.length;
    }
    static ExplorersUsernamesByMission(explorers, mission){
        const usernamesInNode = explorers.filter((explorer) => explorer.mission == mission);
        return usernamesInNode.map((explorer) => explorer.githubUsername);
    }
}
module.exports = ExplorerService
