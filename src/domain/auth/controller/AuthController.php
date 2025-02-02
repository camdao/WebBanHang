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
            echo json_encode(["id" => $user['id'],"username" => $user['username']]);
        }

        public function signup($userName, $passWord){
            $user =  $this -> authService->signup($userName, $passWord);
            $_SESSION['user'] =  [
                'id' => $user['id'],
                'username' => $user['username']
            ];  
            echo json_encode(["id" => $user['id'],"username" => $user['username'],"password" => $user['password']]);
        }
        
    }
?>