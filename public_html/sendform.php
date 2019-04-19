<?php session_start(); 
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
?>
<?php


$nombre=$_POST['nombre'];
$email=$_POST['email'];
$telefono=$_POST['telefono'];
$asunto=$_POST['asunto'];
$comentario=$_POST['comentario'];


$recibecorreo="hola@bowish.com";
$cuerpo= "Consulta Enviada \n";
$cuerpo .="Nombre: ".$nombre."\n";
$cuerpo .="email: ".$email."\n";
$cuerpo .="Telefono: ".$telefono."\n";
$cuerpo .="asunto: ".$asunto."\n";
$cuerpo .="Comentario: ".$comentario."\n";
$cuerpo=wordwrap($cuerpo, 70);
$header="From: Contacto Bowish <hola@bowish.com>\r\n";
$mail = mail($recibecorreo,"Contacto Bowish",$cuerpo,$header);

if($mail){
echo "Mensaje enviado, en breve contactaremos con Ud.<br>";
echo '
<html>
<head>
<meta http-equiv="REFRESH" content="4; url=index.html">
</head>
</html>';
}
else {
    echo "No se pudo enviar el mail";
    echo '
<html>
<head>
<meta http-equiv="REFRESH" content="4; url=index.html">
</head>
</html>';
}
?>