<?php
    include './src/domain/user/service/UserService.php';
    class UserServiceFactory
    {
        public static function createUserService(){
            return new UserService();
        }
    }
?>