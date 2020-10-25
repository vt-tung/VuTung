
<?php

	include "connections.php";
	$query = "SELECT users.*, class.class_name

        FROM users INNER JOIN class ON users.id_class = class.id_class

        order by users.id desc";
	$data = mysqli_query($link, $query);

	class User{

		function User($id, $id_class, $MaSV, $class_name, $name, $image, $email, $phone_number){
			$this->id 			= $id;
			$this->id_class 	= $id_class;
			$this->MaSV 		= $MaSV;
			$this->class_name 	= $class_name;
			$this->name 		= $name;
			$this->image 		= $image;
			$this->email 		= $email;
			$this->phone_number = $phone_number;
		}

	}
	$mangSV = array();

	while ($row = mysqli_fetch_assoc($data)) {
		array_push($mangSV, new User($row['id'], $row['id_class'], $row['MaSV'], $row['class_name'],$row['name'], $row['image'], $row['email'], $row['phone_number']));
	}

	echo json_encode($mangSV);

?>