const mysql=require('mysql');
var con = mysql.createConnection({
    host: "localhost:3306",
    user: "root",
    password: "root"
  });
  
  con.connect(function(err){
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });
  