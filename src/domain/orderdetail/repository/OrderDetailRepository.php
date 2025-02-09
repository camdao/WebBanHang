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
        
            $values = array_map(fn($pid) => "($order_id, $pid)", $product_ids);
            $valuesString = implode(", ", $values);
        
            $sql = "INSERT INTO orderDetail (order_id, product_id) VALUES $valuesString";
            $conn->query($sql);
        
            $conn->close();
        }
        

    }
?>