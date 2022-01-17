const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'biruketblem@gmail.com'
});

// open connection
connection.connect();

// query to create database
let create_database_query = "CREATE DATABASE IF NOT EXISTS sample";

// end connection
connection.end();