
<?php

	include "connections.php";
	$query = "SELECT * FROM monhoc";
	$data = mysqli_query($link, $query);

	class Mon{

		function Mon($idMon, $TenMon, $SoTinChi){
			$this->idMon 	= $idMon;
			$this->TenMon 	= $TenMon;
			$this->SoTinChi = $SoTinChi;
		}

	}

	$mangSV = array();

	while ($row = mysqli_fetch_assoc($data)) {
		array_push($mangSV, new Mon($row['idMon'], $row['TenMon'], $row['SoTinChi']));
	}

	echo json_encode($mangSV);

?>