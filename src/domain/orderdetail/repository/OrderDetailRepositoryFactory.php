<?php
    include './src/domain/orderdetail/repository/OrderDetailRepository.php';

    class OrderDetailRepositoryFactory{
        public static function createOrderDetailRepository(){
            return new OrderDetailRepository();
        }
    }
?>

