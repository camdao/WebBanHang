CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    address VARCHAR(255),
    gender VARCHAR(255),
    status INT
);

CREATE TABLE categories(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    thumbnail VARCHAR(255),
    price INT,
    description VARCHAR(255),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
)

CREATE TABLE images(
    id INT AUTO_INCREMENT PRIMARY KEY,
    path VARCHAR(255),
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipientname VARCHAR(255),
    address VARCHAR(255),
    phone INT,
    status INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE orderDetail(
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    order_id INT,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

--categories
INSERT INTO categories(id, name) 
VALUES 
    ('1','watch'),
    ('2','ring')
-- init products
INSERT INTO products (id, name, thumbnail, price, description, category_id)
VALUES
    (1, 'Đồng Hồ Vàng Sang Trọng', 'image/watch/1-1.jpg', 47500000, 'Chất liệu: Vàng 18K, Chuyển động: Tự động, Có khả năng chống nước, Chức năng: Ngày, Chức năng bấm giờ', 1),
    (2, 'Đồng Hồ Đính Kim Cương', 'image/watch/2-1.jpg', 71250000, 'Chất liệu: Vàng Trắng 14K, Đá: Kim Cương Tròn 1.5 carat, Chuyển động: Quartz, Có khả năng chống nước', 1),
    (3, 'Đồng Hồ Bạch Kim', 'image/watch/3-1.jpg', 114000000, 'Chất liệu: Bạch Kim, Chuyển động: Cơ học, Chức năng: Chức năng bấm giờ, Ngày, Có khả năng chống nước', 1),
    (4, 'Đồng Hồ Vàng Hồng Sang Trọng', 'image/watch/4-1.jpg', 80750000, 'Chất liệu: Vàng Hồng 18K, Chuyển động: Tự động, Đá: Kim Cương Accent, Có khả năng chống nước', 1),
    (5, 'Đồng Hồ Mặt Sapphire', 'image/watch/5-1.jpg', 93100000, 'Chất liệu: Vàng 14K, Đá: Mặt Sapphire Xanh, Chuyển động: Cơ học Thụy Sĩ, Không chống nước', 1),
    (6, 'Nhẫn Đính Hôn Kim Cương', 'image/ring/1-1.jpg', 142500000, 'Chất liệu: Bạch Kim, Đá: Kim Cương Tròn 2 Carat, Size Nhẫn: 6, Kiểu Dáng: Đặt Chân', 2),
    (7, 'Nhẫn Vàng và Ruby', 'image/ring/2-1.jpg', 80750000, 'Chất liệu: Vàng 18K, Đá: Ruby Tròn 1.5 Carat, Size Nhẫn: 7, Kiểu Dáng: Bezel', 2),
    (8, 'Nhẫn Solitaire Ngọc Lục Bảo', 'image/ring/3-1.jpg', 90250000, 'Chất liệu: Vàng Trắng 18K, Đá: Ngọc Lục Bảo 2 Carat, Size Nhẫn: 6.5, Kiểu Dáng: Đặt Chân', 2),
    (9, 'Nhẫn Ngọc Lục Bảo và Kim Cương', 'image/ring/4-1.jpg', 104500000, 'Chất liệu: Vàng Trắng 14K, Đá: Ngọc Lục Bảo 1.2 Carat, Kim Cương 0.5 Carat, Size Nhẫn: 8, Kiểu Dáng: Kênh', 2),
    (10, 'Bộ Nhẫn Cưới Bạch Kim', 'image/ring/5-1.jpg', 161500000, 'Chất liệu: Bạch Kim, Đá: Kim Cương Tròn 1 Carat, Bộ Sản Phẩm: Nhẫn Đính Hôn và Nhẫn Cưới, Kiểu Dáng: Đặt Chân', 2);


-- init images
INSERT INTO images (path, product_id) VALUES
    ('image/watch/1-1.jpg', 1),
    ('image/watch/1-2.jpg', 1),
    ('image/watch/1-3.jpg', 1),
    ('image/watch/1-4.jpg', 1),

    ('image/watch/2-1.jpg', 2),
    ('image/watch/2-2.jpg', 2),
    ('image/watch/2-3.jpg', 2),
    ('image/watch/2-4.jpg', 2),

    ('image/watch/3-1.jpg', 3),
    ('image/watch/3-2.jpg', 3),
    ('image/watch/3-3.jpg', 3),
    ('image/watch/3-4.jpg', 3),

    ('image/watch/4-1.jpg', 4),
    ('image/watch/4-2.jpg', 4),
    ('image/watch/4-3.jpg', 4),
    ('image/watch/4-4.jpg', 4),

    ('image/watch/5-1.jpg', 5),
    ('image/watch/5-2.jpg', 5),
    ('image/watch/5-3.jpg', 5),
    ('image/watch/5-4.jpg', 5),

    ('image/ring/1-1.jpg', 6),
    ('image/ring/1-2.jpg', 6),
    ('image/ring/1-3.jpg', 6),
    ('image/ring/1-4.jpg', 6),

    ('image/ring/2-1.jpg', 7),
    ('image/ring/2-2.jpg', 7),
    ('image/ring/2-3.jpg', 7),
    ('image/ring/2-4.jpg', 7),

    ('image/ring/3-1.jpg', 8),
    ('image/ring/3-2.jpg', 8),
    ('image/ring/3-3.jpg', 8),
    ('image/ring/3-4.jpg', 8),

    ('image/ring/4-1.jpg', 9),
    ('image/ring/4-2.jpg', 9),
    ('image/ring/4-3.jpg', 9),
    ('image/ring/4-4.jpg', 9),

    ('image/ring/5-1.jpg', 10),
    ('image/ring/5-2.jpg', 10),
    ('image/ring/5-3.jpg', 10),
    ('image/ring/5-4.jpg', 10);

