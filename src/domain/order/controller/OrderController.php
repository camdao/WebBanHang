<?php
    include './src/domain/order/service/OrderServiceFactory.php';
    class OrderController{
        private $OrderService;

        public function __construct()
        {
            $this ->OrderService = OrderServiceFactory::createOrderService();
        }
        public function orderCreate($address,$name,$tele){
            $order = $this ->OrderService->createOrder($address,$name,$tele);
            ApiResponse::success(["order" =>$order]);
        }
        public function orderDelete($id){
            $this ->OrderService->deleteOrder($id);
            ApiResponse::success([""]);

        }
        public function orderFindId($id){
            $order = $this ->OrderService->orderFindId($id);
            ApiResponse::success(["order" =>$order]);
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