<?php
    include './src/domain/category/repository/CategoryRepositoryFactory.php';

    class CategoryService{
        private $categoryRepository;
    
        public function __construct()
        {
            $this->categoryRepository = CategoryRepositoryFactory::createCategoryRepository();
        }
        public function categoryFindAll(){
            $categories = $this->categoryRepository->findAll();
            return $categories;
        }
        public function categoryCreate($name){
            $categories = $this->categoryRepository->save($name);

        }
        public function categoryUpdate($id , $name){
            $categories = $this->categoryRepository->categoryUpdate($id , $name);
        }
        public function categoryDelete($id){
            $categories = $this->categoryRepository->categoryDelete($id);
        }
    }
?>