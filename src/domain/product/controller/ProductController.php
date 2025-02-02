<?php
    include './src/domain/product/service/ProductServiceFactory.php';
    class ProductController{
        private $productService;
    
        public function __construct()
        {
            $this->productService = ProductServiceFactory::createProductService();
        }
        public function productFindAll(){
            $product = $this ->productService->productFindAll();
            echo json_encode(["product" =>$product]);
        }
    }
?>