const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const produtos = require("./src/produtos/produtos.json")

app.get("/produtos", (req,res) => {
    return res.json(produtos)
})

app.listen(port, () => {
    console.log("Servidor está rodando...")
})