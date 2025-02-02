<?php
    include './src/domain/product/service/ProductService.php';
    class ProductServiceFactory
    {
        public static function createProductService(){
            return new ProductService();
        }
    }
?>