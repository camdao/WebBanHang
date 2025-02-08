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
        public function oderFindAll(){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();

            $sql = "SELECT id, address FROM orders";
            $stmt = $conn->prepare($sql);
            
            $stmt->execute();
            $result = $stmt->get_result();

            $oder = [];
            while ($row = $result->fetch_assoc()) {
                $oder[] = $row;
            }
            $stmt->close();
            $conn->close();
            
            return $oder;
        }
        public function oderUpdate($id,$address){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
            
            $stmt = $conn->prepare("UPDATE orders SET address =? WHERE id =?");
            $stmt->bind_param("si", $address, $id);
            $stmt->execute();

            $oder = null;
            if ($stmt->affected_rows > 0) {
                $oder = [
                    'id' => $id,
                    'address' => $address,
                ];
            }

            $stmt->close(); 
            $conn->close();

            return $oder;
        }
    }
?>