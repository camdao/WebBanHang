<?php
    include './src/domain/orderdetail/repository/OrderDetailRepositoryFactory.php';

    class OrderDetailService{
        private $orderDetailRepository;

        public function __construct()
        {
            $this ->orderDetailRepository = OrderDetailRepositoryFactory::createOrderDetailRepository();
        }
        public function findAllByOrderId($orderId){
            $order = $this ->orderDetailRepository->findAllByOrderId($orderId);
            ApiResponse::success(["order" =>$order]);
        }
        public function orderCreate($product_id ,$order_id){
            $order = $this->orderDetailRepository->orderCreate($product_id ,$order_id);
            ApiResponse::success(["order" =>$order]);
        }

    }
?>