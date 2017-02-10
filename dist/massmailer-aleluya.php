<?php // Hallelujah

$email_to_aleluya = "loveJesus@loves.church";
$email_subject_aleluya = "Hallelujah";
$email_message_aleluya = file_get_contents("email1aleluya.html");
$email_from_aleluya    = "aleluya-info@gtlegal.review";

$headers_aleluya = 'From: '.$email_from_aleluya."\r\n". 
'Reply-To: '.$email_from_aleluya."\r\n" . 
'X-Mailer: PHP/' . phpversion() ."\r\n" .
"MIME-Version: 1.0\r\n" .
"Content-Type: text/html; charset=ISO-8859-1\r\n";
 
@mail($email_to_aleluya, $email_subject_aleluya, $email_message_aleluya, $headers);  