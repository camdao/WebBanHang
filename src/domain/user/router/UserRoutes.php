<?php 
    $requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $method = $_SERVER['REQUEST_METHOD'];

    $controller = new UserController();

    if ($requestUri === '/me' && $method === 'GET') {
        $controller->memberInfo();
    }

?>