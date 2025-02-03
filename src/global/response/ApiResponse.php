<?php
    class ApiResponse{

        public static function customApiResponse($data, $status)
        {
            echo json_encode([
                'status' => $status,
                'data' => $data
            ]);
        }

        public static function success($data = null, $status = 200)
        {
            echo json_encode([
                'status' => $status,
                'data' => $data
            ]);
        }

        public static function error($status = 400, $data = null)
        {
            echo json_encode([
                'status' => $status,
                'data' => $data
            ]);
        }
    }
?>