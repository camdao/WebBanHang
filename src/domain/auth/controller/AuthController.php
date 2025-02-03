<?php
    include './src/domain/auth/service/AuthServiceFactory.php';

    class AuthController{

        private $authService;
    
        public function __construct()
        {
            $this->authService = AuthServiceFactory::createAuthService();
        }

        public function login($userName, $passWord){
            $user = $this -> authService->login($userName, $passWord);
            $_SESSION['user'] =  [
                'id' => $user['id'],
                'username' => $user['username']
            ];        
            ApiResponse::success("Login successful");
        }

        public function signup($userName, $passWord){
            $user =  $this -> authService->signup($userName, $passWord);
            $_SESSION['user'] =  [
                'id' => $user['id'],
                'username' => $user['username']
            ];  
            ApiResponse::success("Signup successful");
        }
        
    }
?>