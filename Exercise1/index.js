// on this js file we try to create database and create table

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'sample'
})

// open the connection
connection.connect();

// create the table
let create_query = "CREATE TABLE project(project_id int, project_name varchar(50), start_date date, manager varchar(50))";

// execute the query
connection.query(create_query, (error, result, fields) => {
    if(error) throw error;
    console.log("Table created successfully : " + result[0]);
});
// close the connection
connection.end();