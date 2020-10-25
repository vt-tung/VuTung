
<?php

	include "connections.php";
	$query = "SELECT * FROM class";
	$data = mysqli_query($link, $query);

	class Lop{

		function Lop($id_class, $class_name){
			$this->id_class 	= $id_class;
			$this->class_name 	= $class_name;
		}

	}

	$mangSV = array();

	while ($row = mysqli_fetch_assoc($data)) {
		array_push($mangSV, new Lop($row['id_class'], $row['class_name']));
	}

	echo json_encode($mangSV);

?>