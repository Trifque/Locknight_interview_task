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



//GET - Return a list of all tasks / Vrati listu svih zadataka
router.get("/",(request, result) => {
    return result.status(200).send(tasks);
});



//PATCH - Change the status of a task / Promeni status zadatka
router.patch("/:id",(request, result) => {
    // Recieve ID / Prihvati ID
    const id = Number(request.params.id);

    // Find the task / Nadji zadatak
    const changedTask = tasks.find(task => task.id === id);

    // Does the task exist / Da li postoji zadatak
    if(!changedTask){
        console.log(`Task with ID = ${id} is not here / Nema zadatka sa ID = ${id}`);
        return result.status(404).send("The task is not found / Dati zadatak nije nadjen");
    }

    //Change the Value of completed / Menjamo vrednost completed-a
    changedTask.completed = !changedTask.completed;

    //Update status / Azuriraj status
    console.log(`Task with ID = ${id} is updated / Zadatak sa ID = ${id} je azuriran`);
    console.log(changedTask);
    return result.status(200).send("Task updated successfully / Zadatak uspesno azuriran");

});



//DELETE - Remove a task / Ukloni zadatak
router.delete("/:id",(request, result) => {
    // Recieve ID / Prihvati ID
    const id = Number(request.params.id);

    // Find the task / Nadji zadatak
    const removeTaskIndex = tasks.findIndex(task => task.id === id);

    // Does the task exist / Da li postoji zadatak
    if(removeTaskIndex === -1){
        console.log(`Task with ID = ${id} is not here / Nema zadatka sa ID = ${id}`);
        return result.status(404).send("The task is not found / Dati zadatak nije nadjen");
    }

    //Delete task / Brisi zadatak
    const deletedTask = tasks.splice(removeTaskIndex, 1)[0];

    //Update status / Azuriraj status
    console.log(`Task with ID = ${id} is deleted / Zadatak sa ID = ${id} je obrisan`);
    console.log(deletedTask);
    return result.status(200).send("Task deleted successfully / Zadatak uspesno obrisan");

});



module.exports = router;