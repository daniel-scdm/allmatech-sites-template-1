<?php

$objXmlDocument = simplexml_load_file("public/allmatech.xml", 'SimpleXMLElement', LIBXML_NOCDATA);

if ($objXmlDocument === FALSE) {
    echo "There were errors parsing the XML file.\n";
    foreach(libxml_get_errors() as $error) {
        echo $error->message;
    }
    exit;
}

$objJsonDocument = json_encode($objXmlDocument);
$arrOutput = json_decode($objJsonDocument, TRUE);
 
echo json_encode($arrOutput);