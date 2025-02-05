<?php
    include './src/domain/order/service/OrderService.php.php';
    class OrderServiceFactory{
        public static function createOrderService(){
            return new OrderService();
        }
    }
?>