create database learnit_db;
use learnit_db;

create table usuario (
id_usuario int auto_increment primary key,
nombre varchar(100) not null,
email varchar(100) unique not null,
password varchar(100) not null,
fecha_registro timestamp default current_timestamp,
fecha_actualiacion timestamp default current_timestamp on update current_timestamp
);