DROP SCHEMA IF EXISTS bruno CASCADE;
CREATE SCHEMA bruno
create table bruno.login (
    id_login serial primary key,
    username text,
    password text
);

insert into bruno.login(id_login, username, password) values (1, 'bruno.diniz', 'abc123');
