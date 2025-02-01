<?php
    include './src/global/config/mysqli.php';

    class UserRepository{
        function findUserByUsername($userName) {
            $conn = connectDatabase();
        
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
            $conn = connectDatabase();

            $stmt = $conn->prepare("SELECT * FROM users WHERE id = ? LIMIT 1");
            $stmt->bind_param("s", $id);
            $stmt->execute();

            
            $result = $stmt->get_result();
            $user = $result->fetch_assoc();

    
            
            $stmt->close(); 
            $conn->close();

            return $user;

        }
    }
?>