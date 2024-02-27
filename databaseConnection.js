
/*
//-----creating database-------

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Uvajay@255"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE kmsdb", function (err) {
    if (err) throw err;
    console.log("Database created");
  });
});
*/


/*----creating table in database-------

var Mysql=require('mysql')
var con=Mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Uvajay@255',
    database:'kmsdb'
})


con.connect(err=>{
if(err) throw err;
console.log (err)
}) 

var table="create table person_details(id int,name varchar(20),mob_num int,email varchar(20))"
con.query(table,(err,result)=>{
    if(err){ 
        throw err
console.log(err)
}
    else{
console.log ("table created",result);
    }
})
*/


/*
//inserting details in a table 
var Mysql=require('mysql')
var con=Mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Uvajay@255',
    database:'kmsdb',
    table:'person_details'
})


con.connect(err=>{
if(err) throw err;
console.log (err)
}) 

var insert1="insert into person_details(id,name,mob_num,email) values (1,'ajay',100,'ajayuv21@gmail.com')";
var insert2="insert into person_details(id,name,email) values (2,'ajay','uvajay19@gmail.com')"
con.query(insert1,(err,result)=>{
    if(err){ 
        throw err
console.log(err)
}
    else{
console.log ("inserted",result);
    }
})
con.query(insert2,(err,result)=>{
    if(err){ 
        throw err
console.log(err)
}
    else{
console.log ("inserted",result);
    }
})
*/

//--deleteing table ------
var Mysql=require('mysql')
var con=Mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Uvajay@255',
    database:'kmsdb'
})
con.connect(err=>{
    if(err) throw err;
    console.log (err)
    }) 
    var del="drop table person_details";
con.query(del,(err,result)=>{
    if(err){ 
        throw err
console.log(err)
}
    else{
console.log ("table deleted",result);
    }
})