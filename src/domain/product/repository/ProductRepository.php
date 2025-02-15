<?php
    class ProductRepository{
        public function productFindAll($page){
            $perPage = 6;
            $offset = ($page - 1) * $perPage;

            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();

            $sql = "SELECT p.id, p.name, p.thumbnail, p.price, p.description
            FROM products p
            LIMIT ? OFFSET ?";
            
            $stmt = $conn->prepare($sql);
            $stmt->bind_param('ii', $perPage, $offset);
            $stmt->execute();

            $result = $stmt->get_result();
            $products = [];
            while ($row = $result->fetch_assoc()) {
                $products[] = [
                    'id' => $row['id'],
                    'name' => $row['name'],
                    'thumbnail' => $row['thumbnail'],
                    'price' => $row['price'],
                    'description' => $row['description'],
                ];
            }

            $stmt->close();
            $conn->close();

            return $products; 
        }
        public function productFindOne($id){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();

            $sql =  "SELECT p.id as product_id, p.name,p.thumbnail, p.price, p.description ,i.id as image_id,i.path 
                    FROM products p 
                    LEFT JOIN images i ON p.id = i.product_id
                    WHERE p.id =?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $id);
            $stmt->execute();
            $result = $stmt->get_result();

            $products = [];
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {                    
                    if (!$products) {
                        $products = [
                            'id' => $row['product_id'],
                            'name' => $row['name'],
                            'thumbnail' => $row['thumbnail'],
                            'price' => $row['price'],
                            'description' => $row['description'],
                            'image' => []
                        ];
                    }
                    if ($row['image_id']) { 
                        $products['image'][] = [
                            'image_id' => $row['image_id'],
                            'path' => $row['path'],
                        ];
                    }
                }
            }
            $stmt->close();
            $conn->close();
            
            return $products;
        }
        public function productUpdate($id, $name, $thumbnail, $price, $description, $category_id){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
        
            $sql = "UPDATE products 
                    SET name = ?, thumbnail = ?, price = ?, description = ?, category_id = ? 
                    WHERE id = ?";
            
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssdsii", $name, $thumbnail, $price, $description, $category_id, $id);
        
            $stmt->execute();
            $category = null;
            if ($stmt->affected_rows > 0) {
                $category = [
                    'id' => $id,
                    'name' => $name,
                    'thumbnail' => $thumbnail,
                    'price' => $price,
                    'description' => $description,
                    'category_id' => $category_id,
                ];
            }

            $stmt->close(); 
            $conn->close();

            return $category;
           
        }
        public function productDelete($id){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
        
            $sql = "DELETE FROM products WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);
        
            $stmt->execute();
            $product = null;
            if ($stmt->affected_rows > 0) {
                $product = [
                    'id' => $id,
                ];
            }

            $stmt->close(); 
            $conn->close();

            return $product;
        }
        public function productCreate($name ,$thumbnail ,$price ,$description ,$category_id){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();
        
            $sql = "INSERT TO products(name,thumbnail,price,description,category_id)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssisi", $name ,$thumbnail ,$price ,$description ,$category_id);
            $stmt->execute();

            $productId = $conn->insert_id;
            $product = null;
            if ($stmt->affected_rows > 0) {
                $product = [
                    'id' => $productId,
                    'name' => $name,
                    'thumbnail'=> $thumbnail ,
                    '$price'=>$price ,
                    'description' =>$description ,
                    'category_id' =>$category_id
                ];
            }

            $stmt->close(); 
            $conn->close();

            return $product;
        }
        public function productFindByCategory($idCategory,$page){
            $perPage = 6;
            $offset = ($page - 1) * $perPage;

            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();

            $sql = "SELECT * FROM products WHERE category_id = ?
            LIMIT ? OFFSET ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("iii", $idCategory,$perPage, $offset);
            $stmt->execute();
            $result = $stmt->get_result();

            $products = [];
            while ($row = $result->fetch_assoc()) {
                $products[] = $row;
            }
            $stmt->close();
            $conn->close();
            
            return $products;
        }
    }
?>