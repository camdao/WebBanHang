<?php
    include './src/domain/product/service/ProductServiceFactory.php';
    class ProductController{
        private $productService;
    
        public function __construct()
        {
            $this->productService = ProductServiceFactory::createProductService();
        }
        public function productFindAll($page){
            $product = $this ->productService->productFindAll($page);
            ApiResponse::success(["product" =>$product]);
        }
        public function productFindOne($id){
            $product = $this ->productService->productFindOne($id);
            ApiResponse::success(["product" =>$product]);
        }
        public function productCreate($name ,$thumbnail ,$price ,$description ,$category_id){
            $product = $this->productService->productCreate($name ,$thumbnail ,$price ,$description ,$category_id);
            ApiResponse::success(["product" =>$product]);
        }
        public function productDelete($id){
            $this->productService->productDelete($id);
            ApiResponse::success([""]);
        }
        public function productUpdate($id,$name ,$thumbnail ,$price ,$description ,$category_id){
            $product = $this->productService->productUpdate($id,$name ,$thumbnail ,$price ,$description ,$category_id);
            ApiResponse::success(["product" =>$product]);
        }
        public function productFindByCategory($idCategory,$page){
            $product = $this->productService->productFindByCategory($idCategory,$page);
            ApiResponse::success(["product" =>$product]);
        }
    }
?>