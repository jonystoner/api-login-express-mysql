// criaara a conexão com o banco de dados 

// importa o mysql2
const mysql = require('mysql2/promise');

//carrega as variaveis do .env
require("dotenv").config();

// criar uma variavel e chama o metodo createpool que é um metodo que permite gerenciar as conexões com o banco de dados 
const conexao = mysql.createPool({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db.password,
    database: process.env.db_name
});

// exportando a conexão com o banco de dados 
module_exports = conexao;