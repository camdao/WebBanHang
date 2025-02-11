<?php 
    session_start();
    include './src/global/exception/ExceptionHandler.php';
    include './src/domain/auth/controller/AuthController.php';
    include './src/domain/product/controller/ProductController.php';
    include './src/domain/category/controller/CategoryController.php';
    include './src/domain/user/controller/UserController.php';


    $authController = new AuthController();
    $productController = new ProductController();
    $categoryController = new CategoryController();
    $userController = new UserController();

    $requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $method = $_SERVER['REQUEST_METHOD'];

    if ($requestUri === '/' && $method === 'GET') {
        include './template/home.php';
    }
    if ($requestUri === '/login' && $method === 'GET') {
        include './template/login.php';
    }
    if ($requestUri === '/signup' && $method === 'GET') {
        include './template/signup.php';
    }
    if ($requestUri === '/user' && $method === 'GET') {
        include './template/userinfo.php';
    }
    // Auth
    if ($requestUri === '/info' && $method === 'GET') {
        $userController->memberInfo();
    }
    if ($requestUri === '/logout' && $method === 'POST') {
        $authController->logout();
    }
    if ($requestUri === '/login' && $method === 'POST') {
        $data = json_decode(file_get_contents("php://input"), true);
        $username = $data['username'] ?? '';
        $password = $data['password'] ?? '';
        if (empty($username) || empty($password)) {
            echo json_encode(["error" => "Vui lòng nhập đủ thông tin"]);
            return;
        }
        $authController->login( $username, $password);
    }
    if ($requestUri === '/signup' && $method === 'POST') {
        $data = json_decode(file_get_contents("php://input"), true);
        $username = $data['username'] ?? '';
        $password = $data['password'] ?? '';
        if (empty($username) || empty($password)) {
            echo json_encode(["error" => "Vui lòng nhập đủ thông tin"]);
            return;
        }
        $authController->signup( $username, $password);
    }
    //Product
    if ($requestUri === '/product' && $method === 'GET') {
        if (isset($_GET['category'])) {
            $categoryId = $_GET['category'];
            $productController->productFindByCategory($categoryId);
        } elseif(isset($_GET['id'])){
            $productId = $_GET['id'];
            $productController->productFindOne($productId);
        }else{
            $productController->productFindAll();
        }
    }
    //Category
    if ($requestUri === '/category' && $method === 'GET') {
        $categoryController->categoryFindAll();
    }

    
?>