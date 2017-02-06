Hallelujah, processing....
<?php //Aleluya

$json_aleluya = file_get_contents("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUbbaFRpR-3slDEtTwzSLlWw&key=AIzaSyB-cMpJRC1RDU8rsKIIk4cDQOTV_9PQCns&maxResults=50");

file_put_contents("youtube-aleluya.json", $json_aleluya);
?>
Processed, Hallelujah!