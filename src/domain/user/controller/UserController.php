<?php
    include './src/domain/user/service/UserServiceFactory.php';
    class UserController
    {   
        private $userService;
    
        public function __construct()
        {
            $this->userService = UserServiceFactory::createUserService();
        }

        public function memberInfo() {
            return $this->userService->findMemberInfo();
        }
    }
    
?>