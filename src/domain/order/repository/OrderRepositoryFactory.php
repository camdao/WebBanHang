<?php
        include './src/domain/order/repository/OrderRepository.php';
    class OrderRepositoryFactory{
        public static function createOrderRepository(){
            return new OrderRepository();
        }
    }
?>