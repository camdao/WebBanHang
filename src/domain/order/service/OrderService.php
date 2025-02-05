<?php
    include './src/domain/order/repository/OrderRepositoryFactory.php';
    include './src/global/util/UserUtil.php';
    class OrderService{
        private $oderRepository;
        public function __construct()
        {
            $this ->oderRepository = OrderRepositoryFactory::createOrderRepository();


        }
        public function createOrder($address){
            $userId = UserUtil::getIdUser();
            $this ->oderRepository->save($address, $userId);
        }
        public function deleteOrder($id){
            $this ->oderRepository->delete($id);
        }
    }
?>