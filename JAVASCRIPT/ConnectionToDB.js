var mysql = require('mysql');

var con = mysql.createConnection({
  host: "database-1.cyc2ywmoxfol.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "admin1234",
  database: "trailDatabase"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
<<<<<<< HEAD
  var sql = "INSERT INTO TRAIL VALUES('Aul',20)";
=======
  var sql = "INSERT INTO TRAIL VALUES('Abhay Mukul',20)";
>>>>>>> master
  con.query(sql,function(err,result){
      if (err) throw err;
      console.log(result);
      console.log("done")
      })
});