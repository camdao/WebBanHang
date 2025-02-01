<?php
    include './src/domain/auth/service/AuthServiceFactory.php';

    class AuthController{

        private $authService;
    
        public function __construct()
        {
            $this->authService = AuthServiceFactory::createAuthService();
        }

        public function login($userName, $passWord){
            $this -> authService->login($userName, $passWord);
        }
    }
?>