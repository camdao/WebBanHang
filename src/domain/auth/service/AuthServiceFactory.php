<?php
    include './src/domain/auth/service/AuthService.php';
    class AuthServiceFactory
    {
        public static function createAuthService(){
            return new AuthService();
        }
    }
?>