<?php
    include './src/global/config/mysqli.php';
    class UserRepository{
        function findUserByUsername($userName) {
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
        
            $stmt = $conn->prepare("SELECT * FROM users WHERE userName = ? LIMIT 1");
            $stmt->bind_param("s", $userName);
            $stmt->execute();
        
            $result = $stmt->get_result();
            $user = $result->fetch_assoc();
        
            $stmt->close();
            $conn->close();
        
            return $user;
        }
        public function findUserById($id) {
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();

            $stmt = $conn->prepare("SELECT * FROM users WHERE id = ? LIMIT 1");
            $stmt->bind_param("s", $id);
            $stmt->execute();

            
            $result = $stmt->get_result();
            $user = $result->fetch_assoc();

    
            
            $stmt->close(); 
            $conn->close();

            return $user;

        }
        public function save($userName, $passWord) {
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
            
            $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
            $stmt->bind_param("ss", $userName, $passWord);
            $stmt->execute();

            $userId = $conn->insert_id;
            $user = null;
            if ($stmt->affected_rows > 0) {
                $user = [
                    'id' => $userId,
                    'username' => $userName,
                    'password' => $passWord
                ];
            }

            $stmt->close(); 
            $conn->close();

            return $user;

        }
        public function userUpdate($id,$address){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
        
            $sql = "UPDATE users 
                    SET address = ?
                    WHERE id = ?";
            
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("si", $address,$id);
        
            $stmt->execute();
            $user = null;
            if ($stmt->affected_rows > 0) {
                $user = [
                    'id' => $id,
                    'address' => $address,
                ];
            }

            $stmt->close(); 
            $conn->close();

            return $user;
           
        }
        public function userDelete($id){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
        
            $sql = "DELETE FROM users WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);
        
            $stmt->execute();
            $user = null;
            if ($stmt->affected_rows > 0) {
                $user = [
                    'id' => $id,
                ];
            }

            $stmt->close(); 
            $conn->close();

            return $user;
        }
        public function userFindAll(){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();

            $sql = "SELECT id, username ,password ,address ,gender ,status FROM users";

            $stmt = $conn->prepare($sql);
            $stmt->execute();

            $result = $stmt->get_result();
            $users = [];
            while ($row = $result->fetch_assoc()) {
                $userId = $row['id'];
                
                if (!isset($users[$userId])) {
                    $users[$userId] = [
                        'id' => $row['id'],
                        'username' => $row['username'],
                        'password' => $row['password'],
                        'address' => $row['address'],
                        'gender' => $row['gender'],
                        'status' => $row['status'],
                    ];
                }
            }

            $stmt->close();
            $conn->close();

            return array_values($users); 
        }
    }
?>