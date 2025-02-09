<?php
    include './src/domain/orderdetail/service/OrderDetailServiceFactory.php';

    class OrderDetailController{
        private $orderDetailService;

        public function __construct()
        {
            $this ->orderDetailService = OrderDetailServiceFactory::createOrderDetailService();
        }
        public function findAllByOrderId($orderId){
            $order = $this ->orderDetailService->findAllByOrderId($orderId);
            ApiResponse::success(["order" =>$order]);
        }
        public function orderCreate($product_id ,$order_id){
            $order = $this->orderDetailService->orderCreate($product_id ,$order_id);
            ApiResponse::success(["order" =>$order]);
        }
    }
?>