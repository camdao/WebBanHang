<?php
    include './src/domain/product/repository/ProductRepository.php';
    class ProductRepositoryFactory
    {
        public static function createProductRepository(){
            return new ProductRepository();
        }
    }
?>