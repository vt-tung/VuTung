<?php
	include 'connections.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$id_class = $obj['id_class'];
	$query = "SELECT * FROM users WHERE id_class='$id_class'";
	$data = mysqli_query($link, $query);
	class User{

		function User($id, $id_class, $MaSV, $name, $image, $email, $phone_number){
			$this->id 			= $id;
			$this->id_class 	= $id_class;
			$this->MaSV 		= $MaSV;
			$this->name 		= $name;
			$this->image 		= $image;
			$this->email 		= $email;
			$this->phone_number = $phone_number;
		}

	}

	$mangSV = array();

	while ($row = mysqli_fetch_assoc($data)) {
		array_push($mangSV, new User($row['id'], $row['id_class'], $row['MaSV'], $row['name'], $row['image'], $row['email'], $row['phone_number']));
	}

	echo json_encode($mangSV);
?>