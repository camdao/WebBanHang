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
            ApiResponse::success($categories);
        }

        public function categoryCreate($name){
            $categories = $this->categoryService->categoryCreate($name);
        }

        public function categoryUpdate($id , $name){
            $categories = $this->categoryService->categoryUpdate($id , $name);
        }
        public function categoryDelete($id){
            $categories = $this->categoryService->categoryDelete($id);
        }

    }

?>