create database learnit_db;
use learnit_db;

create table curso (
id_curso int auto_increment primary key,
titulo varchar(100) not null,
descripcion text,
duracion varchar(50),
progreso varchar(50),
fecha_creacion timestamp default current_timestamp,
fecha_actualizacion timestamp default current_timestamp on update current_timestamp
);