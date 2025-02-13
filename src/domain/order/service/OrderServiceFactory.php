<?php
    include './src/domain/order/service/OrderService.php';
    class OrderServiceFactory{
        public static function createOrderService(){
            return new OrderService();
        }
    }
?>