const express = require("express")
const server = express() 

// configurar pasta publica
server.use(express.static("public"))


// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})


// configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {    // rota para home
    return res.render("index.html")
})

server.get("/create-point", (req, res) => { // rota pra create-point
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => { // rota para results
    return res.render("search-results.html") 
})

// ligar o servidor
server.listen(3000)