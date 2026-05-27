const express = require("express")

//importa o modulo path para trabalhar com caminhos de arquivops 
const path = require("path")

//carrega as variaveis de ambinete do arquivo .env 
require("dotenv").config()

const conexao = require("./config/database.js")

// importando as funçõs do conttroller
const {
  cadastrarUsuario,
  realizarLogin,
  exibirSucesso,
} = require("./controllers/authcontrollers.js");



const app = express();

conexao.getConnection()
.then(() => {
    console.log("banco de dados conextado com sucesso");
})
.catch((erro) => {
    console.log("Erro ao conectar com o banco de dados", erro)
})

const port = process.env.port || 3000;

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res) => {
    res.redirect("/login.html")
})

app.post("/cadastro", cadastrarUsuario)

app.post("/login", realizarLogin)

app.get("/sucesso", exibirSucesso)

app.listen (port, () =>{
    console.log(`servidor rodando em localhost:${port}`)
})