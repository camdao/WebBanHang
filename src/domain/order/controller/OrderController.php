<?php
    include './src/domain/order/service/OrderServiceFactory.php';
    class OrderController{
        private $OrderService;

        public function __construct()
        {
            $this ->OrderService = OrderServiceFactory::createOrderService();
        }
        public function createOrder($address){
            $this ->OrderService->createOrder($address);
        }

        public function deleteOrder($id){
            $this ->OrderService->deleteOrder($id);
        }

    }
?>