<?php
$servername = "database-1.cyc2ywmoxfol.ap-south-1.rds.amazonaws.com";
$username = "admin";
$password = "admin1234";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>