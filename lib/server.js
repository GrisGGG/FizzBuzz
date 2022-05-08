const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});
app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMissionAmount = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersInMissionAmount});
});
app.get("/v1/explorers/names/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersNames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(explorersNames);
});
app.get("/v1/explorers/fizzbuzz/:number", (request, response) => {
    const number = request.params.number;
    const explorersNumbers = ExplorerController.getFizzBuzzValidation(number);
    response.json({score: request.params.number, quantity: explorersNumbers});
});
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});