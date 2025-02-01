<?php
    session_start();
    class UserUtil{
        public function getIdUser(){
            return $_SESSION['id'];
        }
    }

?>