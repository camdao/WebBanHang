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
    <link rel="stylesheet" href="./template/assets/User/style/login_signin.css">
</head>

<body>
<header class="header">
    <div class="grid wide">
        <nav class="navbar_one">
            <div class="navbar_logo">
                <a class="navbar_logo-link" href="/">
                    <img src="template/assets/User/img/logo.png" alt="" class="logo">
                </a>
            </div>
            <div class="navbar_name">
                <h1>Jewelry Store</h1>
            </div>
            <div class="navbar_action">
                <div class="navbar_search-warp">
                    <div class="navbar_search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div class="navbar_search-dropdown">
                        <p class="titlebox">Tìm kiếm</p>
                        <div class="navbar_search-warpper">
                            <!-- tìm kiếm theo tên -->
                            <div class="input_search-warpper">
                                <input type="text" class="input_search" placeholder="Tìm kiếm" id="search-input">
                            </div>
                            <div class="btn button_search" id="search-button">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                        <!-- check giá -->
                        <div class="navbar_search-cost">
                            <div class="cost_search-warpper">
                                <span>Giá sản phẩm</span>
                                <ul class="check-box-list">
                                    <li>
                                        <input type="checkbox" id="p1" name="cc" data-price="(price:product<=500000)">
                                        <label for="p1">Dưới 500,000₫</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="p2" name="cc" data-price="((price:product>500000)&amp;&amp;(price:product<=1000000))">
                                        <label for="p2">500,000₫ - 1,000,000₫</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="p3" name="cc" data-price="((price:product>1000000)&amp;&amp;(price:product<=1500000))">
                                        <label for="p3">1,000,000₫ - 1,500,000₫</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="p4" name="cc" data-price="((price:product>2000000)&amp;&amp;(price:product<=5000000))">
                                        <label for="p4">2,000,000₫ - 5,000,000₫</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="p5" name="cc" data-price="(price:product>=5000000)">
                                        <label for="p5">Trên 5,000,000₫</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar_account" onclick="window.location.href='/login';">
                    <i class="fa-regular fa-user"></i>
                </div>
                <div class="navbar_user" style="display: none;">
                    <img src="https://lh3.googleusercontent.com/ogw/AF2bZygaTCHJ0-cu_s_w-JZ4EqMjLBVHkul4IqhfoF-_D2Nok74=s32-c-mo" alt="" class="navbar__user-avata">
                    <span class="navbar_user-name">Hi, Duy</span>
                    <ul class="navbar_user-items">
                        <li class="navbar_user-item">
                            <a href="#" onclick="chuyenFormThongTin()">Tài khoản của tôi</a>
                        </li>
                        <li class="navbar_user-item">
                            <a href="#" onclick="renderOrderHistory()">Đơn mua</a>
                        </li>
                        <li class="navbar_user-item navbar_user-item-out">
                            <a href="" onclick="dangxuat()">Đăng xuất</a>
                        </li>
                    </ul>
                </div>
                <div class="navbar_cart-warp">
                    <div class="navbar_cart" onclick="hienthiGiohang()">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <span class="navbar__cart-notice" id="cart-count">0</span>
                </div>
                <div class="navbar__menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                </div>
            </div>
        </nav>
        <nav class="navbar_two">
            <!-- <div class="fa-solid fa-xmark"></div> -->
            <ul class="navbar_link">
                <li class="active">
                    <a href="/" class="navbar_link-name">
                        Trang Chủ
                    </a>
                </li>
                <li>
                    <a href="" class="navbar_link-name">
                        Sản Phẩm
                        <i class="fa-sharp fa-solid fa-chevron-down"></i>
                    </a>
                    <ul class="sub_menu" id="sub_menu">

                    </ul>
                </li>
                <li>
                    <a href="#footerpage" class="navbar_link-name">
                        Liên Hệ
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>
<script src="./template/assets/category.js"></script>
<script src="./template/assets/user.js"></script>
<script>
    loadCategory()
    infoUser()
    let categoriesContainer = document.getElementById("sub_menu");
    categoriesContainer.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("category-link")) {
        event.preventDefault();
        let categoryId = target.dataset.category;
        let pageElement = document.querySelector('.page-note.current');
        pageElement.innerText = 1;
        let oldElement = document.getElementById('Next');
        let newElement = oldElement.cloneNode(true);
        oldElement.parentNode.replaceChild(newElement, oldElement); 
        filterProducts(categoryId);
        document.getElementById('Next').addEventListener('click', function() {
            let pageElement = document.querySelector('.page-note.current');
            let page = parseInt(pageElement.innerText, 10) || 1;
            page += 1;
            pageElement.innerText = page; 
            filterProducts(categoryId,page);
        });
    }
    });


    let account = document.querySelector('.navbar_user');
    account.addEventListener('click', () => {
        let dropdownaccount = document.querySelector('.navbar_user-items');
        if ( dropdownaccount.style.display === 'block' )
            dropdownaccount.style.display = 'none';
        else{
            dropdownaccount.style.display = 'block';
            let dropdownsearch= document.querySelector('.navbar_search-dropdown');
            dropdownsearch.style.display = 'none';
            let x = document.getElementById('giohang');
            x.style.display = 'none';
        }
    })
</script>
<!-- awesome font -->
<script src="https://kit.fontawesome.com/097a4985d9.js" crossorigin="anonymous"></script>
</body>
</html>                        
