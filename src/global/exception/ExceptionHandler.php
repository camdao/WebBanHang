<?php
    include'./src/global/response/ApiResponse.php';
    function handleException($exception) {
        ApiResponse::customApiResponse($exception->getCode(),$exception->getMessage());
    }
    set_exception_handler('handleException');
?>