<?php session_start(); ?>
<?php


$nombre=$_POST['nombre'];
$email=$_POST['email'];
$telefono=$_POST['telefono'];
$asunto=$_POST['asunto'];
$comentario=$_POST['comentario'];


$recibecorreo="rjespinoza1190@gmail.com";
$cuerpo= "Consulta Enviada \n";
$cuerpo .="Nombre: ".$nombre."\n";
$cuerpo .="email: ".$email."\n";
$cuerpo .="Telefono: ".$telefono."\n";
$cuerpo .="asunto: ".$asunto."\n";
$cuerpo .="Comentario: ".$comentario."\n";
$header="From: No Responder Biofarmacia <gerencia@biofarmacia.com.ve>\r\n";
mail($recibecorreo,"Consulta de Empleo Recibida",$cuerpo,$header);
mysql_close($conexion);
echo "Mensaje enviado, en breve contactaremos con Ud.<br>";
echo '
<html>
<head>
<meta http-equiv="REFRESH" content="4; url=index.html">
</head>
</html>';

?>