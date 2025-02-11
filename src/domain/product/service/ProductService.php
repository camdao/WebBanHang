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
            return $this ->productRepository->productFindOne($id);
        }
        public function productUpdate($id,$name,$thumbnail,$price,$description,$category_id){
            $this->productExits($id);
            $product = $this ->productRepository->productUpdate($id,$name,$thumbnail,$price,$description,$category_id);
            return $product;
        }
        public function productDelete($id){
            $this->productExits($id);
            $this ->productRepository->productDelete($id);
        }

        public function productCreate($name ,$thumbnail ,$price ,$description ,$category_id){
            $product = $this ->productRepository->productCreate($name ,$thumbnail ,$price ,$description ,$category_id);
            return $product;
        }

        private function productExits($id){
            $product = $this ->productRepository->productFindOne($id);
            if($product==null){
                throw new Exception("Product does not exist", 400);
            }
            return $product;
        }
        public function productFindByCategory($idCategory){
            $product = $this->productRepository->productFindByCategory($idCategory);
            return $product;
        }
    }
?>