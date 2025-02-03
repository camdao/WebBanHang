<?php
    include './src/domain/category/service/CategoryService.php';

    class CategoryServiceFactory{
        public static function createCategoryService(){
            return new CategoryService();
        }
    }
?>