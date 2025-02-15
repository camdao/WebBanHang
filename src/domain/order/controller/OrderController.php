<?php
    include './src/domain/order/service/OrderServiceFactory.php';
    class OrderController{
        private $OrderService;

        public function __construct()
        {
            $this ->OrderService = OrderServiceFactory::createOrderService();
        }
        public function orderCreate($address){
            $order = $this ->OrderService->createOrder($address);
            ApiResponse::success(["order" =>$order]);
        }
        public function orderDelete($id){
            $this ->OrderService->deleteOrder($id);
            ApiResponse::success([""]);

        }
        public function orderFindAll(){
            $order = $this ->OrderService->orderFindAll();
            ApiResponse::success(["order" =>array_values($order)]);
        }
        public function oderUpdate($id,$address){
            $this->OrderService->oderUpdate($id,$address);
            ApiResponse::success([""]);
        }
    }
?>