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
    }
?>