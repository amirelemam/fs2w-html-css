<?php

date_default_timezone_set('America/Sao_Paulo');
require 'PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;

$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';

$mail->Port = 587;
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "devnhealth@gmail.com";
//Password to use for SMTP authentication
$mail->Password = "1234";
//Set who the message is to be sent from
$mail->setFrom($_POST['email'], $_POST['name']);
//Set an alternative reply-to address
$mail->addReplyTo('replyto@example.com', 'First Last');
//Set who the message is to be sent to
$mail->addAddress('devnhealth@gmail.com', );
//Set the subject line
$mail->Subject = 'Contato devnhealth site';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->Body = $_POST['msg'];

//send the message, check for errors
if (!$mail->send()) {
    echo "fail";
    //echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "sent";
}

?>
