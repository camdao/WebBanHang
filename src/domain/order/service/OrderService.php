<?php
    include './src/domain/order/repository/OrderRepositoryFactory.php';
    class OrderService{
        private $oderRepository;
        public function __construct()
        {
            $this ->oderRepository = OrderRepositoryFactory::createOrderRepository();
        }
        public function createOrder($address,$name,$tele){
            $userId = UserUtil::getIdUser();
            return $this ->oderRepository->save($address,$name,$tele, $userId);
        }
        public function deleteOrder($id){
            return $this ->oderRepository->delete($id);
        }
        public function orderFindAll(){
            return $this ->oderRepository->orderFindAll();
        }
        public function oderUpdate($id,$address){
            return $this->oderRepository->oderUpdate($id,$address);
        }
        public function orderFindId($id){
            return $this ->oderRepository->orderFindId($id);
        }
    }
?>