<?php 
    session_start();
    include './src/global/exception/ExceptionHandler.php';
    include './src/domain/auth/controller/AuthController.php';
    $authController = new AuthController();

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

    // Auth
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
?>