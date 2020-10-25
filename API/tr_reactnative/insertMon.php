<?php
	include 'connections.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$TenMon = $obj['TenMon'];
	$SoTinChi = $obj['SoTinChi'];
	$check = mysqli_query($link, "SELECT * FROM monhoc WHERE TenMon='$TenMon' LIMIT 1");
	if ($TenMon=="" || $SoTinChi=="") {
		echo json_encode('Fields must not be empty!');
	}else {
		if (mysqli_num_rows($check)>0) {
			echo json_encode('Subjects already exist');
		}else{
			$result = mysqli_query($link, "INSERT INTO monhoc(TenMon, SoTinChi) VALUES('$TenMon','$SoTinChi')");
			if ($result) {
				echo json_encode('Insert subjects successfully');
			}else {
				echo json_encode('Insert subjects not successfully');
			}
		}
	}
	mysqli_close($link);
?>