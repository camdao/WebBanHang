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
            $user =  $this->userService->findMemberInfo();
            ApiResponse::success(["user" =>$user]);
        }
        public function userFindAll(){
            $user = $this ->userService->userFindAll();
            ApiResponse::success(["user" =>$user]);
        }
        public function userFindOne($id){
            $user = $this ->userService->userFindOne($id);
            ApiResponse::success(["user" =>$user]);
        }
        public function userUpdate($address ,$gender ,$status){
            $user = $this->userService->userUpdate($address ,$gender ,$status);
            ApiResponse::success(["user" =>$user]);
        }
        public function userDelete($id){
            $this->userService->userDelete($id);
            ApiResponse::success([""]);
        }
        public function userCreate($username ,$password ,$address ,$gender ,$status){
            $this->userService->userCreate($username ,$password ,$address ,$gender ,$status);
            ApiResponse::success([""]);
        }
    }
?>