<?php

require_once("PHPMailer/PHPMailerAutoload.php");

    try {

       $mail = new PHPMailer();
       $mail->isSMTP();
       $mail->SMTPAuth = true;
       $mail->SMTPSecure = "ssl";
       $mail->Host = "smtp.gmail.com";
       $mail->Port = "465";
       $mail->isHTML();
       $mail->Username = "vitorbretasprata@gmail.com";
       $mail->Password = "cortez34653456";
       $mail->SetForm("no-reply@howcode.org");
       $mail->Subject = "Teste";
       $mail->Body = "Email de teste";
       $mail->AddAddress($_POST["email"]);

       $mail->Send();

    } catch (\Throwable $th) {
        echo json_encode(Array("Success" => false));

    }