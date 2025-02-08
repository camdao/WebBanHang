<?php
    include './src/domain/category/repository/CategoryRepositoryFactory.php';

    class CategoryService{
        private $categoryRepository;
    
        public function __construct()
        {
            $this->categoryRepository = CategoryRepositoryFactory::createCategoryRepository();
        }
        public function categoryFindAll(){
            return $this->categoryRepository->findAll();
        }
        public function categoryCreate($name){
            $category = $this->categoryRepository->save($name);
            return $category;
        }
        public function categoryUpdate($id , $name){
            $category = $this ->categoryRepository->categoryFindOne($id);
            if($category==null){
                throw new Exception("Category does not exist", 400);
            }
            return $this->categoryRepository->categoryUpdate($id , $name);
        }
        public function categoryDelete($id){
            $category = $this ->categoryRepository->categoryFindOne($id);
            if($category==null){
                throw new Exception("Category does not exist", 400);
            }
            return $this->categoryRepository->categoryDelete($id);
        }
    }
?>