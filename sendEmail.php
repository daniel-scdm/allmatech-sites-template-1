<?php
    try {

        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');

        $headers = 'From: webmaster@example.com' . "\r\n" .
            'Reply-To: webmaster@example.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        mail($_POST["email"], $_POST["subject"], $_POST["message"], $headers);

        echo json_encode(Array("Success" => true));

    } catch (\Throwable $th) {
        echo json_encode(Array("Success" => false));

    }