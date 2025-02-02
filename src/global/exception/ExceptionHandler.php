<?php
    function handleException($exception) {
        echo json_encode([
            'message' => $exception->getMessage(),
            'code' => $exception->getCode(),
        ]);
    }

    set_exception_handler('handleException');
?>