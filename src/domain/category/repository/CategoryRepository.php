<?php
    class CategoryRepository{
        public function findAll(){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();

            $sql = "SELECT id, name FROM categories";
            $stmt = $conn->prepare($sql);
            
            $stmt->execute();
            $result = $stmt->get_result();

            $categories = [];
            while ($row = $result->fetch_assoc()) {
                $categories[] = $row;
            }
            $stmt->close();
            $conn->close();
            
            return $categories;
        }
        public function save($name){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
            
            $stmt = $conn->prepare("INSERT INTO categories (username, password) VALUES (?)");
            $stmt->bind_param("s", $name);
            $stmt->execute();

            $categoryId = $conn->insert_id;
            $category = null;
            if ($stmt->affected_rows > 0) {
                $category = [
                    'id' => $categoryId,
                    'name' => $name,
                ];
            }

            $stmt->close(); 
            $conn->close();

            return $category;

        }
        public function categoryUpdate($id , $name){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
            
            $stmt = $conn->prepare("UPDATE categories SET name =? WHERE id =?");
            $stmt->bind_param("si", $name, $id);
            $stmt->execute();

            $category = null;
            if ($stmt->affected_rows > 0) {
                $category = [
                    'id' => $id,
                    'name' => $name,
                ];
            }

            $stmt->close(); 
            $conn->close();

            return $category;
        }
        public function categoryDelete($id){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
            
            $stmt = $conn->prepare("DELETE FROM  categories WHERE id =?");
            $stmt->bind_param("i", $id);
            $stmt->execute();

            $category = null;
            if ($stmt->affected_rows > 0) {
                $category = [
                    'id' => $id,
                ];
            }

            $stmt->close(); 
            $conn->close();

            return $category;
        }
        public function categoryFindOne($id){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();

            $sql =  "SELECT * FROM categories WHERE id =?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $id);
            $stmt->execute();
            $result = $stmt->get_result();

            $product = [];
            while ($row = $result->fetch_assoc()) {
                $product[] = $row;
            }
            $stmt->close();
            $conn->close();
            
            return $product;
        }
    }
?>