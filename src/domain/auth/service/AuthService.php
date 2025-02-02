<?php
    include './src/domain/user/repository/UserRepositoryFactory.php';

    class AuthService{
        private $userRepository;
    
        public function __construct()
        {
            $this->userRepository = UserRepositoryFactory::createUserRepository();
        }

        public function login($userName, $passWord) {
            $user = $this->userRepository->findUserByUsername($userName);
        
            if (!$user || $user["password"] !== $passWord) {
                throw new Exception("Incorrect username or password", 400);
            }
        
            return $user;
        }        
        public function signup($userName, $passWord) {
            $existingUser = $this->userRepository->findUserByUsername($userName);
        
            if ($existingUser) {
                throw new Exception("User already exists", 400);
            }
        
            $user = $this->userRepository->save($userName, $passWord);
            if (!$user) {
                throw new Exception("Failed to create user", 500);
            }
        
            return $user;
        }
        
    }
?>