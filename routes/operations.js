//Loading express for routing / Ucitavam express za rutovanje
const express = require("express");
const router = express.Router();

//Loading task data and a helper function / Ucitavam podatke za task-ove i pomocnu funkciju
const { tasks, getNextID} = require("../data/tasks");



//POST - Create a new task / Kreiraj novi task

router.post("/", (request, result) => {
    // Taking the title from the body / Vadimo naslov iz tela
    const title = request.body.title;

    //Checking if there is a title / Provera da li ima naslova
    if(typeof title !== "string" || title.trim() === ""){
        return result.status(400).send("Missing title/ Fali naslov");
    }

    //Create the new task with the given title/ Kreiramo novi task sa datim naslovom
    const newTask = {
        id: getNextID(),
        title: title.trim(),
        completed: false
    };
    console.log(newTask);

    //Insert the new task into the array / Ubacujemo novi task u niz
    tasks.push(newTask);

    //Return positive status 201 / Vrati pozitivan status 201
    return result.status(201).send("Task successfully created / Task uspesno napravljen");
});



module.exports = router;