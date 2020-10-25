
<?php

	include "connections.php";
	// $query = "SELECT diem.*, users.name

 //        FROM diem INNER JOIN users ON diem.id = users.id

 //        order by diem.id desc";
        	$query = "SELECT users.*, diem.diemMon

        FROM users INNER JOIN diem ON users.id = diem.id

        order by users.id desc";
	$data = mysqli_query($link, $query);

	class User{

		function User($id, $name, $diemMon){
			$this->id 			= $id;
			$this->name 		= $name;
			$this->diemMon = $diemMon;
		}

	}

	$mangSV = array();

	while ($row = mysqli_fetch_assoc($data)) {
		array_push($mangSV, new User($row['id'], $row['name'], $row['diemMon']));
	}

	echo json_encode($mangSV);

?>