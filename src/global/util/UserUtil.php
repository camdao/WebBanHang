<?php
    class UserUtil{
        public static function getIdUser() {
            if (!isset($_SESSION['user']['id'])) {
                throw new Exception("User is not logged in", 400);
            }
        
            return $_SESSION['user']['id'];
        }
    }

?>