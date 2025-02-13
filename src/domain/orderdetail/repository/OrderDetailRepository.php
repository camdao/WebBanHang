<?php
    class OrderDetailRepository{
        public function findAllByOrderId($orderId){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
        
            $sql = "SELECT * FROM orderDetail p
                    LEFT JOIN products c ON p.product_id = c.id
                    WHERE p.order_id = ?";
            
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $orderId);
            $stmt->execute();
            $result = $stmt->get_result();
        
            $orderDetail = [];
            while ($row = $result->fetch_assoc()) {
                $orderDetail[] = $row;
            }
            
            $stmt->close();
            $conn->close();
            
            return $orderDetail;
        }
        
        public function orderCreate($product_ids, $order_id){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
            
            $placeholders = implode(',', array_fill(0, count($product_ids), '(?, ?)'));

            $stmt = $conn->prepare("INSERT INTO orderDetail (order_id, product_id) VALUES $placeholders");

            $params = [];
            foreach ($product_ids as $pid) {
                $params[] = $order_id;
                $params[] = $pid;
            }

            $types = str_repeat('ii', count($product_ids));
            $stmt->bind_param($types, ...$params);
            
            $stmt->execute();
            
            $stmt->close();
            $conn->close();
            return 'order success';
        }
    }
?>