<?php
    class ProductRepository{
        public function productFindAll(){
            $mysql = new configMysqli();
            $conn = $mysql->connectDatabase();

            $sql = "SELECT p.id, p.name, p.price, p.description, c.name AS category, i.path AS image_path
            FROM products p
            LEFT JOIN categorys c ON p.category_id = c.id
            LEFT JOIN images i ON p.id = i.product_id";

            $stmt = $conn->prepare($sql);
            $stmt->execute();

            $result = $stmt->get_result();
            $products = [];
            while ($row = $result->fetch_assoc()) {
                $productId = $row['id'];
                
                if (!isset($products[$productId])) {
                    $products[$productId] = [
                        'id' => $row['id'],
                        'name' => $row['name'],
                        'price' => $row['price'],
                        'description' => $row['description'],
                        'category' => $row['category'],
                        'images' => []
                    ];
                }

                if ($row['image_path']) {
                    $products[$productId]['images'][] = $row['image_path'];
                }
            }

            $stmt->close();
            $conn->close();

            return array_values($products); 
        }
    }
?>