const express = require("express")
const server = express() 

// configurar pasta publica
server.use(express.static("public"))

// configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {    // rota para home
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => { // rota pra create-point
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results", (req, res) => { // rota para results
    res.sendFile(__dirname + "/views/search-results.html") 
})

// ligar o servidor
server.listen(3000)