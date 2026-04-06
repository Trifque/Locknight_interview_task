//Array of tasks that we store and use / Niz zadataka koji skladistimo i koristimo
const tasks = [];
//ID for the next task to enter the array / ID za sledeci zadatak koji cemo da ubacimo u niz
let nextID = 1;

module.exports = {
    tasks,
    getNextID: () => nextID++
};