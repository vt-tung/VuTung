<?php
	include 'connections.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$idMon = $obj['idMon'];
	$TenMon = $obj['TenMon'];
	$SoTinChi = $obj['SoTinChi'];
	if ($TenMon=="" || $SoTinChi=="") {
		echo json_encode('Fields must not be empty!');
	}else{
		$result = mysqli_query($link, "UPDATE monhoc SET TenMon='$TenMon', SoTinChi='$SoTinChi' WHERE idMon='$idMon'");
		if ($result) {
			echo json_encode('Update subjects successfully');
		}else {
			echo json_encode('Update subjects not successfully');
		}
	}

	mysqli_close($link);
?>