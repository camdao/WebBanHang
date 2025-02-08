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
        public function productFindOne($id){
            $product = $this ->productRepository->productFindOne($id);
            if($product==null){
                throw new Exception("Product does not exist", 400);
            }
            return $product;
        }
        public function productUpdate($id,$name,$thumbnail,$price,$description,$category_id){
            $product = $this ->productRepository->productFindOne($id);
            if($product==null){
                throw new Exception("Product does not exist", 400);
            }
            $product = $this ->productRepository->productUpdate($id,$name,$thumbnail,$price,$description,$category_id);
            return $product;
        }
        public function productDelete($id){
            $product = $this ->productRepository->productFindOne($id);
            if($product==null){
                throw new Exception("Product does not exist", 400);
            }
            $this ->productRepository->productDelete($id);
        }

        public function productCreate($name ,$thumbnail ,$price ,$description ,$category_id){
            $product = $this ->productRepository->productCreate($name ,$thumbnail ,$price ,$description ,$category_id);
            return $product;
        }
    }
?>