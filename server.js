const express = require('express');
const path = require('path')

require("dotenv").config();

const {
    cadastrarUsuario,
    realizarLogin,
    exibirSucesso,
} = require("./controllers/authControllers");

const app = express();

const conexao = require("./config/database")


conexao.getConnection()
.then (() =>{
    console.log("Banco de dados encontrado com suceso");
})

.catch((erro) => {
    console.log("Erro ao conectar no banco de dados:", erro);
});

const PORT = process.env.PORT || 3000;

//Middleware para ler dados enviados de formularios HTML
app.use(express.urlencoded({extended:true})) 

//Middleware para ler dados de JASON 
app.use(express.json())

app.use(express.static(path.join(__dirname,"public")));



app.get("/", (req, res) =>{
    res.redirect("/login.html")
})


app.post("/cadastro", cadastrarUsuario);

app.post("/login", realizarLogin)

app.get("/sucesso", exibirSucesso)


app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})