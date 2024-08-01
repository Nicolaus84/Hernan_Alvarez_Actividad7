CREATE DATABASE IF NOT EXISTS empresadb;

USE empresadb;

CREATE table empleado(

    id INT(10) not null auto_increment,
    nombre varchar(50) default null,
    apellido varchar(50)default null,
    cedula varchar(50)default null,
    primary key(id)

);

describe empleado;

insert into empleado values 
    (101, 'Hernan', 'Alvarez', '1313121690'),
    (102, 'Luis', 'Cedeno', '0985632565'),
    (103, 'Martha', 'Nunez', '1756892356'),
    (104, 'Ana', 'Zamora', '1512689752'),
    (105, 'Enrique', 'Cabrera', '1302568952');