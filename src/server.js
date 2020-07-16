const express = require("express")
const server = express()
    //data base
const db = require("./database/db")
    //config pasta public
server.use(express.static("public"))
    //utilizando templates engines
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
        express: server,
        noCache: true
    })
    //config routes
server.get("/", (req, res) => {
    return res.render("index.html")
})
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})
server.get("/search-results", (req, res) => {
        return res.render("search-results.html")
    })
    //ligar o servidor

server.listen(3000)