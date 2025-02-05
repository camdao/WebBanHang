<?php
    class OrderRepository{

        public function save($address, $userId){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();

            $stmt = $conn->prepare("INSERT INTO orders (address, user_id) VALUES (?, ?)");
            $stmt->bind_param("ss", $address, $userId);
            $stmt->execute();

            $orderId = $conn->insert_id;
            
            $order = null;
            if ($stmt->affected_rows > 0) {
                $order = [
                    'id' => $orderId,
                    'address' => $address,
                    'userid' => $userId
                ];
            }

            $stmt->close(); 
            $conn->close();
            
            return $order;

        }
        public function delete($id){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
            
            $stmt = $conn->prepare("DELETE FROM  orders WHERE id =?");
            $stmt->bind_param("i", $id);
            $stmt->execute();

            $order = null;
            if ($stmt->affected_rows > 0) {
                $order = [
                    'id' => $id,
                ];
            }

            $stmt->close(); 
            $conn->close();

            return $order;
        }
    }
?>