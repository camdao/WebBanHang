<?php
    include './src/domain/category/repository/CategoryRepository.php';
    class CategoryRepositoryFactory{
        public static function CreateCategoryRepository(){
            return new CategoryRepository();
        }
    }
?>