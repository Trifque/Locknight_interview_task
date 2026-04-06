//Loading express / Ucitavam express
const express = require("express");
const server = express();

//Loading routes / Ucitavam rute
const taskRoutes = require("./routes/operations");

//For parsing JSON  bodies of requests / Zarad parsiranja JSON tela zahteva
server.use(express.json());
server.use("/tasks", taskRoutes);

const PORT = 3000;

//Starting up the server / Pokrecemo server
server.listen(PORT, 
    () => {console.log(`Server is listening on port ${PORT} / Server slusa na portu ${PORT}`)});