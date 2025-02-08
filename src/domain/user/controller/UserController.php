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
            $product = $this ->userService->userFindAll();
            ApiResponse::success(["product" =>$product]);
        }
        public function userFindOne($id){
            $product = $this ->userService->userFindOne($id);
            ApiResponse::success(["product" =>$product]);
        }
        public function userUpdate($address ,$gender ,$status){
            $product = $this->userService->userUpdate($address ,$gender ,$status);
            ApiResponse::success(["product" =>$product]);
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