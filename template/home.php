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
        <!-- footer -->
        <?php
            include './template/footer.php';
        ?>
    </div>
    <script>
        window.onload = function() {
            let product = []

            fetch('./product', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    document.getElementById('error-message').innerText = data.error;
                } else {
                    const productContainer = document.getElementById('product-container');
                    data.forEach(product => {  // Using 'data' here instead of 'Product'
                        let productHTML =`
                            <div class="grid__column3" data-category="${product.category}" data-id="${product.id}">
                                <a href="#" class="home-product-item">
                                    <div class="product-img">   
                                        <img src="${product.images[0]}" alt="${product.name}">
                                    </div>
                                    <div class="product-info">
                                        <h3 class="product-name">${product.name}</h3>
                                        <span class="product-prices">${product.price === 0 ? 'Hàng tặng' : product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                                    </div>
                                </a>
                            </div>
                        `;
                        productContainer.innerHTML += productHTML;
                    });
                }
            })
            .catch(error => {
            });
        };

    </script>
    <!-- js -->
    <!-- <script src="./template/assets/User/script/history.js"></script> -->
    <script src="./template/assets/User/script/main.js"></script>
    <!-- <script src="./template/assets/User/script/Login_Signin.js"></script> -->
    <!-- <script src="./template/assets/User/script/cart.js"></script> -->
    <!-- awesome font -->
    <script src="https://kit.fontawesome.com/097a4985d9.js" crossorigin="anonymous"></script>
</body>

</html>