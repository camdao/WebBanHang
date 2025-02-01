<?php
    include './src/domain/user/repository/UserRepository.php';
    class UserRepositoryFactory
    {
        public static function createUserRepository(){
            return new UserRepository();
        }
    }
?>