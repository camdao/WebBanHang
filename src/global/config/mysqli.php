<?php
    
    function connectDatabase(){
        include './resources/settings.php';
        $host = $configDatabase['db_host'];
        $user = $configDatabase['db_user'];
        $pass = $configDatabase['db_pass'];
        $database = $configDatabase['db_database'];
        
        $conn = new mysqli($host, $user, $pass, $database);

        if($conn){
            return $conn;
        }else{
            echo"Could not connect database";
        }
    }

?>