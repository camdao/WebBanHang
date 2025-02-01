<?php
    include './src/domain/user/repository/UserRepositoryFactory.php';

    class AuthService{
        private $userRepository;
    
        public function __construct()
        {
            $this->userRepository = UserRepositoryFactory::createUserRepository();
        }

        public function login($userName, $passWord){
            $user = $this -> userRepository->findUserByUsername($userName);
            if ($user) {
                if(strcmp($user["password"],$passWord)===0){
                    echo " login success.";
                }
            } else {
                echo "Không tìm thấy user.";
            }
        }
    }
?>