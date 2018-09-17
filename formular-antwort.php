
<!DOCTYPE html>

<html lang="de">

<head>
	<meta charset="utf-8">
	<title>Auswertung eines Formulars mit PHP inkl. 
		   Daten an Datenbank senden mit Mysqli
	</title>
</head>

<body>

	<?php

/*LOCALHOST MUSS IN DER BRWOSER 
ADRESSE STEHEN!!! : http://localhost/beispiele/formular.html
, sonst geht der Code nicht. Ohne htdocs
Hier wird die Verbindung zur Datenbank erstellt*/

		$mysqli = new mysqli("localhost", "Binjam", 
							 "1234", "binjamdatenbank");

		if ($mysqli->connect_error) {

		echo "Verbindungsfehler:" .mysqli_connect_error();
		exit();
		}

		/*Hier werden die Variablen global angelegt u. mit $_POST abgefragt*/

		$essen = $_POST["essen"];
	    $trinken = $_POST["trinken"];

	    /*Hier werden die Daten aus dem Formular 
	    in die Tabelle bin eingefügt */
			
	    $sql = "INSERT INTO bin (essen,trinken) 
	    VALUES ('$essen','$trinken')";

	    if(!mysqli_query($mysqli, $sql))
	    {
	    	echo "Leider kein Eintrag";
	    }
	    	else 
	    {
	    	echo "Eintrag erfolgreich";

	    }

		


	    

	    /*Hier wird eine Nachricht an den Nutzer vergeben.*/

	    echo "Sie möchten also " . $essen ." essen.<br>";
	    echo "und dazu " . $trinken ." trinken.<br>";


	    

	?>


		

	<p>
	<?php 

	/*Hier wird der Preis festgelegt */


		$essenpreis;
		$trinkenpreis;

		switch ($essen) {
		case "Fisch": $essenpreis = 8.95;
		break;
		case "Burger": $essenpreis = 10.95;
		break;
		case "Salat": $essenpreis = 7.50;
		break;
		}

		switch ($trinken) {
		case "Cola": $trinkenpreis = 3.20;
		break;
		case "Fanta": $trinkenpreis = 2.50;
		break;
		case "Sprite": $trinkenpreis = 3.20;
		break;
		}


		//Hier werden die Preise addiert-->

	echo "Das macht " .($essenpreis + $trinkenpreis)." Euro."

	?>
	</p>


	
	<?php

	//Hier wird abgefragt wieviele Einträge es 
	#in der Tabelle "bin" gibt.

	$sql = "SELECT * FROM bin";
	$ergebnis = $mysqli->query($sql);
	echo "<p>Es wurden " .$ergebnis->num_rows. " Einträge gefunden.</p>";


	?>

	<?php

	//Hier werden alle Einträge der Tabelle "bin" aufgeführt 
	#muss noch herausfinden wie ich speziel den jeweiligen preis aufzeige..
	

	while ($zeile = $ergebnis->fetch_object()) {

	echo "Der Artikel " .$zeile->trinken. " kostet " 
	.$trinkenpreis ." Euro und " . $zeile->essen." kostet  " .$essenpreis ." Euro.<br>";

	}

	?>
<!--
	<?php
	/*Hier wird die Seite nach  Sekunden geschlossen und 
	    die Startseite wieder gestartet*/

	    header("refresh:5; url=formular.html");

	 ?>

	 

-->

</body>

</html>
