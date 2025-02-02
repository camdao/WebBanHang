<?php
    include './src/domain/product/repository/ProductRepositoryFactory.php';
    class ProductService
    {
        
        private $productRepository;
    
        public function __construct()
        {
            $this->productRepository = ProductRepositoryFactory::createProductRepository();
        }
        public function productFindAll(){
            return $this->productRepository ->productFindAll();
        }
    }
?>