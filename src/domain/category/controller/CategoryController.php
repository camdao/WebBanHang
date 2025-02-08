<?php
    include './src/domain/category/service/CategoryServiceFactory.php';

    class CategoryController{
        private $categoryService;
    
        public function __construct()
        {
            $this->categoryService = CategoryServiceFactory::createCategoryService();
        }

        public function categoryFindAll(){
            $categories = $this->categoryService->categoryFindAll();
            ApiResponse::success(["categories" =>$categories]);
        }

        public function categoryCreate($name){
            $categories = $this->categoryService->categoryCreate($name);
            ApiResponse::success(["categories" =>$categories]);
        }

        public function categoryUpdate($id , $name){
            $categories = $this->categoryService->categoryUpdate($id , $name);
            ApiResponse::success(["categories" =>$categories]);
        }
        public function categoryDelete($id){
            $categories = $this->categoryService->categoryDelete($id);
            ApiResponse::success([""]);
        }

    }

?>