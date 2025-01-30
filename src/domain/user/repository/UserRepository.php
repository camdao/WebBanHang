<?php
    include './src/global/config/mysqli.php';

    class UserRepository{
        public function findMemberInfo($id) {
            $conn = connectDatabase();

            $query = "SELECT * FROM users WHERE id = ?";
            $result = $conn->query($query);

            $users = [];
            while ($row = $result->fetch_assoc()) {
                $users[] = $row;
            }
            return $users;
            $conn->close();

        }
    }
?>