<?php
    include './src/global/util/UserUtil.php';

    class UserService {
        private $userRepository;
    
        public function __construct()
        {
            $this->userRepository = UserRepositoryFactory::createUserRepository();
        }

        public function findMemberInfo() {
            $userId = UserUtil::getIdUser();
            return $this->userRepository->findUserByUsername($userId);
        }
        public function userFindAll(){
            return $this ->userRepository->userFindAll();
        }
        public function userFindOne($id){
            return $this ->userRepository->findUserById($id);
        }
        public function userUpdate($address ,$gender ,$status){
            $userId = UserUtil::getIdUser();
            return $this->userRepository->userUpdate($userId,$address ,$gender ,$status);
        }
        public function userDelete($id){
            $user = $this ->userRepository->findUserById($id);
            if($user==null){
                throw new Exception("User does not exist", 400);
            }
            $this->userRepository->userDelete($id);
        }
        public function userCreate($username ,$password ,$address ,$gender ,$status){
            return $this->userRepository->save($username ,$password ,$address ,$gender ,$status);
        }

    }
?>