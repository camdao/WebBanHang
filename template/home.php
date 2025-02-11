<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jewelry Shop</title>
    <!-- reset css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <!-- google font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <!-- main/base.css -->
    <link rel="stylesheet" href="./template/assets/User/style/base.css">
    <link rel="stylesheet" href="./template/assets/User/style/main.css">
    <link rel="stylesheet" href="./template/assets/User/style/reponsive.css">
    <link rel="stylesheet" href="./template/assets/User/style/grid.css">
    <link rel="stylesheet" href="./template/assets/User/style/login_signin.css">
    <link rel="stylesheet" href="./template/assets/User/style/cart.css">
    <link rel="stylesheet" href="./template/assets/User/style/payment.css">
</head>

<body>
    <!-- block element modifier -->
    <div class="app">
        <!-- header -->
        <?php
            include './template/header.php';
        ?>
        <!-- slider -->
        <div class="slider">
            <div class="list">
                <div class="item">
                    <img src="template/assets/User/img/4.jpg" alt="">
                </div>
                <div class="item">
                    <img src="template/assets/User/img/2.jpg" alt="">
                </div>
                <div class="item">
                    <img src="template/assets/User/img/5.jpg" alt="">
                </div>
            </div>
            <!-- button prev and next -->
            <div class="buttons">
                <button id="prev">
                    <</button> <button id="next">>
                </button>
            </div>
            <!-- dots -->
            <ul class="dots">
                <li class="active"></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <!-- body -->
        <div class="container">
            <div class="grid wide">
                <div class="row grid_app">
                    <div class="grid__column">
                        <div class="tilte-product">
                            <h1 class="title">✨Tất cả sản phẩm</h1>
                        </div>
                        <div class="home-product">
                            <div class="row" id="product-container">


                            </div>
                        </div>
                        <!-- pagination -->
                        <ul class="pagination">
                            <li class="pagination-item">
                                <a href="#" class="page-note current">1</a>
                            </li>
                            <li class="pagination-item">
                                <a href="#" class="page-note">2</a>
                            </li>
                            <li class="buttonNext" id="Next">
                                <a href="#" class="page-button"><i class="fa-solid fa-arrow-right-long"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- detail product -->
        <div class="detail_product">
            <div class="overlay">
                <div class="product__body">
                    <i class="fa-solid fa-xmark" aria-hidden="true"></i>
                    <div class="row">
                        <div class="grid__column35">
                            <div class="product_img">
                                <img src="" alt="" class="main_img" id="product-main-img">
                                <div class="small_img-group" id="product-small-imgs">
                                    <div class="small_img-col">
                                        <img src="" alt="" class="small_img">
                                    </div>
                                    <div class="small_img-col">
                                        <img src="" alt="" class="small_img">
                                    </div>
                                    <div class="small_img-col">
                                        <img src="" alt="" class="small_img">
                                    </div>
                                    <div class="small_img-col">
                                        <img src="" alt="" class="small_img">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column65">
                            <div class="product_info">
                                <div id="productId" style="display: none;"></div>
                                <h1 id="product-name">Rose Gold Diamond Vine Pendant</h1>
                                <h4 id="product-price">1,650,000₫</h4>
                                <input type="number" value="1" id="product-quantity" min="1">
                                <button id="add-to-cart" class="btn">Thêm vào giỏ</button>
                                <h2>Mô tả</h2>
                                <p id="product-description">Metal: 14K Gold</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- giỏ hàng -->
        <div id="giohang">
            <div class="showcart">
                <h2>Giỏ hàng</h2>
                <i id="close-cart" onclick="closeCart()" class="fa-solid fa-xmark"></i>
                <table class="cart-item">
                    <tr class="row-start">
                        <th>Hình</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th>Sửa</th>
                    </tr>
                    <tbody id="myCart">
                    </tbody>
                </table>
                <button id="deleteAll" onclick="deleteAll()">Xóa tất cả</button>
                <button id="thanhtoan" onclick="openPayment()">Tiến hành đặt hàng</button>
            </div>
        </div>
        <!-- footer -->
        <?php
            include './template/footer.php';
        ?>
    </div>
    <script>
      
    </script>
    <script src="./template/assets/User/script/main.js"></script>
    <script src="./template/assets/User/script/cart.js"></script>
    <script src="./template/assets/product.js"></script>
    <!-- awesome font -->
    <script src="https://kit.fontawesome.com/097a4985d9.js" crossorigin="anonymous"></script>
</body>

</html>