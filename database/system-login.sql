create database sistema_login;

use sistema_login;

CREATE TABLE usuario (
	id int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null,
    senha varchar(100) not null
);

