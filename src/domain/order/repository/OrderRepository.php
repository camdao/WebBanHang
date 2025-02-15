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
        public function orderFindAll(){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
        
            $sql = "SELECT 
                        o.id AS order_id,
                        o.recipientname,
                        o.address,
                        o.phone,
                        o.user_id,
                        p.id AS product_id,
                        p.name AS product_name,
                        p.price,
                        p.description,
                        p.category_id
                    FROM orders o
                    JOIN orderDetail od ON o.id = od.order_id
                    JOIN products p ON od.product_id = p.id";
            
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();
        
            $orders = [];
        
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $order_id = $row['order_id'];
                    
                    if (!isset($orders[$order_id])) {
                        $orders[$order_id] = [
                            'order_id' => $order_id,
                            'recipientname' => $row['recipientname'],
                            'address' => $row['address'],
                            'phone' => $row['phone'],
                            'user_id' => $row['user_id'],
                            'products' => []
                        ];
                    }
                    
                    $orders[$order_id]['products'][] = [
                        'product_id' => $row['product_id'],
                        'name' => $row['product_name'],
                        'price' => $row['price'],
                        'description' => $row['description'],
                        'category_id' => $row['category_id']
                    ];
                }
            }
        
            $stmt->close();
            $conn->close();
            
            return $orders;
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