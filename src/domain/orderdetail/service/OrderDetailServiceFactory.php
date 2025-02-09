<?php
    include './src/domain/orderdetail/service/OrderDetailService.php';

    class OrderDetailServiceFactory{
        public static function createOrderDetailService(){
            return new OrderDetailService();
        }
    }
?>

