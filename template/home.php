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
        <header class="header">
            <div class="grid wide">
                <nav class="navbar_one">
                    <div class="navbar_logo">
                        <a class="navbar_logo-link" href="index.html">
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
                        <div class="navbar_account" onclick="moDangNhap()">
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
                                    <a href="#" onclick="chuyenFormLichSuDonHang()">Đơn mua</a>
                                </li>
                                <li class="navbar_user-item navbar_user-item-out">
                                    <a href="" onclick="dangxuat()">Đăng xuất</a>
                                </li>
                            </ul>
                        </div>
                        <!-- <div class="navbar_user" onclick="moDangNhap()">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            -->
                        <div class="navbar_cart-warp">
                            <div class="navbar_cart" onclick="hienthiGiohang()">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            <span class="navbar__cart-notice" id="cart-count">0</span>
                            <!-- nocart thì add navbar_cart-dropdown-nocart -->
                            <!-- <div class="navbar_cart-dropdown ">
                                <img src="assets/User/img/download.png" alt="" class="no-cart">
                                <span class="navbar_cart-dropdown-mess">
                                    Chưa có sản phẩm
                                </span>
                            </div> -->
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
                            <a href="index.html" class="navbar_link-name">
                                Trang Chủ
                            </a>
                        </li>
                        <li>
                            <a href="" class="navbar_link-name">
                                Bộ sưu tầm
                                <i class="fa-sharp fa-solid fa-chevron-down"></i>
                            </a>
                            <ul class="sub_menu">
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                        <li>
                            <a href="" class="navbar_link-name">
                                Sản Phẩm
                                <i class="fa-sharp fa-solid fa-chevron-down"></i>
                            </a>
                            <ul class="sub_menu">
                                <li class="active" style="display: none;">
                                    <a href="" data-category="all">Tất cả</a>
                                </li>
                                <li>
                                    <a href="" data-category="ring">Nhẫn</a>
                                </li>
                                <li>
                                    <a href="" data-category="watch">Đồng hồ</a>
                                </li>
                                <li>
                                    <a href="" data-category="bracelet">Vòng tay</a>
                                </li>
                                <li>
                                    <a href="" data-category="necklace">Vòng cổ</a>
                                </li>
                                <li>
                                    <a href="" data-category="earring">Khuyên tai</a>
                                </li>
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
            <!-- cố định 1 trang web 80% -->
            <div class="grid wide">
                <div class="row grid_app">
                    <div class="grid__column">
                        <div class="tilte-product">
                            <h1 class="title">✨Tất cả sản phẩm</h1>
                        </div>
                        <div class="home-product">
                            <div class="row" id="product-container">
                                <!-- <div class="grid__column3" data-category="ring" data-id="1">
                                    <a href="#" class="home-product-item">
                                        <div class="product-img">   
                                                <img src="assets/User/img/ring/1.png" alt="">
                                        </div>
                                        <div class="product-info">
                                            <h3 class="product-name">Nhẫn</h3>
                                            <span class="product-prices"> 1,300,000₫</span>
                                        </div>
                                    </a>
                                </div> -->
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
        <!-- body account info -->
        <div class="container_account" style="display: none;">
            <div class="grid wide1">
                <div class="row account-app">
                    <div class="grid__column">
                        <div class="main_account">
                            <div class="tittle-main_account">
                                <h3>Thông tin tài khoản của bạn</h3>
                                <p>Quản lý thông tin để bảo mật tài khoản</p>
                            </div>
                            <div class="body-main_account row">
                                <div class="grid__column5">
                                    <form action="" class="info-user">
                                        <div class="form-group">
                                            <label for="infoname" class="form-label">Họ và tên</label>
                                            <input class="form-control" type="text" name="infoname" id="infoname" placeholder="">
                                        </div>
                                        <div class="form-group">
                                            <label for="infophone" class="form-label">Số điện thoại</label>
                                            <input class="form-control" type="text" name="infophone" id="infophone" disabled="true" placeholder="">
                                        </div>
                                        <!-- <div class="form-group">
                                            <label for="infoemail" class="form-label">Email</label>
                                            <input class="form-control" type="email" name="infoemail" id="infoemail" placeholder="Thêm địa chỉ email của bạn">
                                            <span class="inforemail-error form-message"></span>
                                        </div> -->
                                        <div class="form-group">
                                            <label for="infoaddress" class="form-label">Địa chỉ</label>
                                            <input class="form-control" type="text" name="infoaddress" id="infoaddress" placeholder="Thêm địa chỉ giao hàng của bạn">
                                            <select id="infoquan" required syle="text-align:center">
                                                <option value="Quận 1">Quận 1</option>
                                                <option value="Quận 2">Quận 2</option>
                                                <option value="Quận 3">Quận 3</option>
                                                <option value="Quận 4">Quận 4</option>
                                                <option value="Quận 5">Quận 5</option>
                                                <option value="Quận 6">Quận 6</option>
                                                <option value="Quận 7">Quận 7</option>
                                                <option value="Quận 8">Quận 8</option>
                                                <option value="Quận 9">Quận 9</option>
                                                <option value="Quận 10">Quận 10</option>
                                                <option value="Quận 11">Quận 11</option>
                                                <option value="Quận 12">Quận 12</option>
                                                <option value="Quận Bình Thạnh">Bình Thạnh</option>
                                                <option value="Quận Gò Vấp">Gò Vấp</option>
                                                <option value="Quận Phú Nhuận">Phú Nhuận</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div class="grid__column5">
                                    <form action="" class="change-password">
                                        <div class="form-group">
                                            <label for="" class="form-label w60">Mật khẩu hiện tại</label>
                                            <input class="form-control" type="password" name="" id="password-cur-info" placeholder="Nhập mật khẩu hiện tại">
                                            <span class="password-cur-info-error form-message"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="form-label w60">Mật khẩu mới </label>
                                            <input class="form-control" type="password" name="" id="password-after-info" placeholder="Nhập mật khẩu mới">
                                            <span class="password-after-info-error form-message"></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="form-label w60">Xác nhận mật khẩu mới</label>
                                            <input class="form-control" type="password" name="" id="password-comfirm-info" placeholder="Nhập lại mật khẩu mới">
                                            <span class="password-after-comfirm-error form-message"></span>
                                        </div>
                                    </form>
                                </div>
                                <div class="body-main_account-action ">
                                    <div class="grid__column5">
                                        <button id="save-info-user" onclick="changeInformation()"><i class="fa-solid fa-floppy-disk"></i> Lưu thay đổi</button>
                                    </div>
                                    <div class="grid__column5">
                                        <button id="save-password" onclick="changePassword()"><i class="fa-solid fa-key"></i> Đổi mật khẩu</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- body payment history -->
        <div class="order_history" style="display: none;">
            <div class="grid wide1">
                <div class="row account-app">
                    <div class="grid__column">
                        <div class="main_account">
                            <div class="tittle-main_account">
                                <h3>Quản lý đơn hàng của bạn</h3>
                                <p>Xem chi tiết,trạng thái của những đơn hàng đã đặt</p>
                            </div>
                            <div class="order-history-group">
                                <div class="order-history">
                                    <div class="order-history-left">
                                        <img src="./template/assets/User/img/4.jpg" alt="">
                                        <div class="order-history-info">
                                            <h4>Đồng hồ(hàng tặng)</h4>
                                            <p class="order-history-quantity">x1</p>
                                        </div>
                                    </div>
                                    <div class="order-history-right">
                                        <div class="order-history-price">
                                            <span class="order-history-current-price">200.000&nbsp;₫</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-history">
                                    <div class="order-history-left">
                                        <img src="./template/assets/User/img/4.jpg" alt="">
                                        <div class="order-history-info">
                                            <h4>Đồng hồ(hàng tặng)</h4>
                                            <p class="order-history-quantity">x1</p>
                                        </div>
                                    </div>
                                    <div class="order-history-right">
                                        <div class="order-history-price">
                                            <span class="order-history-current-price">200.000&nbsp;₫</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-history">
                                    <div class="order-history-left">
                                        <img src="./template/assets/User/img/4.jpg" alt="">
                                        <div class="order-history-info">
                                            <h4>Đồng hồ(hàng tặng)</h4>
                                            <p class="order-history-quantity">x1</p>
                                        </div>
                                    </div>
                                    <div class="order-history-right">
                                        <div class="order-history-price">
                                            <span class="order-history-current-price">200.000&nbsp;₫</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-history-control">
                                    <div class="order-history-status">
                                        <span class="order-history-status-sp no-complete">Đang xử lý</span>
                                        <button id="order-history-detail" onclick="showOrderDetail('${order.id}')"><i class="fa-regular fa-eye"></i> Xem chi tiết</button>
                                    </div>
                                    <div class="order-history-total">
                                        <span class="order-history-total-desc">Tổng tiền: </span>
                                        <span class="order-history-toltal-price">440.000&nbsp;₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- footer -->
        <footer class="footer" id="footerpage">
            <div class="grid wide">
                <div class="row footer_app">
                    <div class="grid__column2">
                        <div class="foot_block">
                            <h4 class="footer-tittle">PHÁP LÝ & CÂU HỎI</h4>
                            <div class="footer-content">
                                <ul>
                                    <li class="footer-item">
                                        <a href="">Tìm kiếm</a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="">Giới thiệu</a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="">Chính sách đổi trả</a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="">Chính sách bảo mật</a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="">Điều khoản dịch vụ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="grid__column2">
                        <div class="foot_block">
                            <h4 class="footer-tittle">DANH MỤC</h4>
                            <div class="footer-content">
                                <ul>
                                    <li class="footer-item">
                                        <a href="">Trang chủ</a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="">Bộ siêu tập</a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="">Sản phẩm</a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="">Giới thiệu</a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="#footerpage">Liên hệ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="grid__column2">
                        <div class="foot_block">
                            <h4 class="footer-tittle"> ĐĂNG KÍ NHẬN TIN</h4>
                            <div class="footer-content">
                                <p>Đăng ký ngay để nhận thông tin khuyến mãi, các chương trình quà tặng từ shop.</p>
                                <div class="form_newsletter">
                                    <form accept-charset="UTF-8" action="" class="contact-form" method="post">
                                        <input name="form_type" type="hidden" value="customer">
                                        <input name="utf8" type="hidden" value="✓">
                                        <div class="input-group">
                                            <input type="hidden" id="newsletter_tags" name="contact" value="khach hang tiem nang">
                                            <input required type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Nhập email của bạn" name="contact[email]">
                                            <button type="submit" class="button dark">Đăng kí</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid__column2">
                        <div class="foot_block">
                            <h4 class="footer-tittle">FANPAGE</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid wide">
                <div class="row footer_app1">
                    <div class="grid__column">
                        <p class="polity">
                            Copyright © 2024 Jewelry Store.
                            Powered by Haravan
                        </p>
                        <div class="social-list">
                            <a href="https://www.facebook.com/" class="facebook">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/" class="facebook">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/?lang=vi" class="facebook">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://www.tiktok.com/vi-VN/" class="facebook">
                                <i class="fa-brands fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- detail product -->
        <div class="detail_product">
            <div class="overlay">
                <div class="product__body">
                    <i class="fa-solid fa-xmark"></i>
                    <div class="row">
                        <div class="grid__column35">
                            <div class="product_img">
                                <img src="template/assets/User/img/earrings/1.png" alt="" class="main_img" id="product-main-img">
                                <div class="small_img-group" id="product-small-imgs">
                                    <div class="small_img-col">
                                        <img src="template/assets/User/img/earrings/3.png" alt="" class="small_img">
                                    </div>
                                    <div class="small_img-col">
                                        <img src="template/assets/User/img/earrings/4.png" alt="" class="small_img">
                                    </div>
                                    <div class="small_img-col">
                                        <img src="template/assets/User/img/earrings/2.png" alt="" class="small_img">
                                    </div>
                                    <div class="small_img-col">
                                        <img src="template/assets/User/img/earrings/5.png" alt="" class="small_img">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid__column65">
                            <div class="product_info">
                                <h1 id="product-name">Rose Gold Diamond Vine Pendant</h1>
                                <h4 id="product-price">1,650,000₫</h4>
                                <input type="number" value="1" id="product-quantity" min="1">
                                <button id="add-to-cart" class="btn">Thêm vào giỏ</button>
                                <h2>Mô tả</h2>
                                <p id="product-description">Metal: 14K Gold</p>
                                <!-- <p>Metal Color: Rose</p> -->
                                <!-- <p>Stones: Round Diamond 0.95</p> -->
                                <!-- <p>18" Chain Included. Pendant Length: 1.25"</p> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- detail order -->
        <div class="detail_order">
            <div class="overlay">
                <div class="order_body">
                    <i class="fa-solid fa-xmark" aria-hidden="true" onclick="closeProductDetail()"></i>
                    <h3 class="tittle_order">Thông tin đơn hàng</h3>
                    <div class="detail-order-content">
                        <ul class="detail-order-group">
                            <li class="detail-order-item">
                                <span class="detail-order-item-left"><i class="fa-solid fa-calendar-days"></i> Ngày đặt hàng</span>
                                <span class="detail-order-item-right">27/11/2024</span>
                            </li>
                            <li class="detail-order-item">
                                <span class="detail-order-item-left"><i class="fa-solid fa-calculator"></i> Hình thức thanh toán</span>
                                <span class="detail-order-item-right">Thanh toán bằng zalopay</span>
                            </li>
                            <li class="detail-order-item">
                                <span class="detail-order-item-left"><i class="fa-solid fa-location-dot"></i> Địa điểm nhận</span>
                                <span class="detail-order-item-right">ădwa</span>
                            </li class="detail-order-item">

                            <li class="detail-order-item">
                                 <span class="detail-order-item-left"><i class="fa-solid fa-building"></i> Quận </span>
                                <span class="detail-order-item-right">hihihi</span>
                            </li>

                            <li class="detail-order-item">
                                <span class="detail-order-item-left"><i class="fa-solid fa-person"></i> Người nhận</span>
                                <span class="detail-order-item-right">nhd</span>
                            </li>
                            <li class="detail-order-item">
                                <span class="detail-order-item-left"><i class="fa-solid fa-phone"></i> Số điện thoại nhận</span>
                                <span class="detail-order-item-right">0982870931</span>
                            </li>
                        </ul>
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
                <!-- <tr class="row-end">
                    <th colspan="4">Tổng đơn giá</th>
                    <th>
                        <div>Tiền không quan trọng</div>
                    </th>
                </tr> -->
            </table>
            <button id="deleteAll" onclick="deleteAll()">Xóa tất cả</button>
            <button id="thanhtoan" onclick="openPayment()">Tiến hành đặt hàng</button>
        </div>
    </div>
    <!--  thanh toán -->
    <!-- <div id="payment">
        <div id="paymentForm">
            <h2>Thông tin thanh toán</h2>
            <form id="paymentFormContent">
                <label for="name">Họ tên:</label>
                <input type="text" id="name" name="name" required><br>
        
                <label for="address">Địa chỉ:</label>
                <input type="text" id="address" name="address" required><br>
        
                <label for="phone">Số điện thoại:</label>
                <input type="text" id="phone" name="phone" required><br>
        
                <label for="paymentMethod">Phương thức thanh toán:</label>
                <select id="paymentMethod" name="paymentMethod" required>
                    <option value="cash">Thanh toán khi nhận hàng</option>
                    <option value="online">Thanh toán trực tuyến</option>
                </select><br>
                <br>
                <h2>Sản phẩm đã chọn</h2>
                <br>
                <table class="cart-item">
                    <tr class="row-start">
                        <th>Hình</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                    <tbody id="paying">
    
                    </tbody>
                
                </table>
                
                <button id="nutThanhToan" type="submit">Xác nhận thanh toán</button>
                <button id="nutHuyTT" type="button" onclick="cancelPayment()">Hủy</button>
            </form>
        </div>
    </div> -->
    <!-- modal -->
    <div id="dang-nhap" style="display:none;">
        <form class="form-dang-nhap" onsubmit="dangnhap(event);">
            <div onclick="tatDangNhap()" class="nut-tat-dn">X</div>
            <h2>Đăng Nhập</h2>
            <div>
                <label for="phone">Số Điện Thoại:</label>
                <input type="tel" id="login-phone" name="phone" required>
            </div>
            <div>
                <label for="password">Mật Khẩu:</label>
                <input type="password" id="login-password" name="password" required>
            </div>
            <button type="submit">Đăng Nhập</button>
            <p>Chưa Có Tài Khoản? <a href="javascript:void(0)" onclick="chuyenFormDangKy()">Đăng Ký</a></p>
        </form>
    </div>
    <div id="dang-ky" style="display:none;">
        <form class="form-dang-ky" onsubmit="dangky(event);">
            <div onclick="tatDangKy()" class="nut-tat-dk">X</div>
            <h2>Đăng Ký</h2>
            <div>
                <label for="phone">Số Điện Thoại:</label>
                <input type="tel" id="register-phone" name="phone" placeholder="Nhập số điện thoại..." required>
            </div>
            <div>
                <label for="name">Họ tên:</label>
                <input type="text" id="register-name" name="name" placeholder="Họ và Tên" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="register-email" name="email" required>
            </div>
            <div>
                <label for="gender">Giới tính:</label>
                <select id="register-gender" name="gender" required>
                    <option value="">Chọn Giới Tính</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                </select>
            </div>
            <div>
                <label for="address">Địa Chỉ:</label>
                <input type="text" id="register-address" name="address" placeholder="Số nhà,Đường,Phường" required style="width: 80%;">
                <select id="register-quan" required syle="text-align:center">
                    <option value="Quận 1">Quận 1</option>
                    <option value="Quận 2">Quận 2</option>
                    <option value="Quận 3">Quận 3</option>
                    <option value="Quận 4">Quận 4</option>
                    <option value="Quận 5">Quận 5</option>
                    <option value="Quận 6">Quận 6</option>
                    <option value="Quận 7">Quận 7</option>
                    <option value="Quận 8">Quận 8</option>
                    <option value="Quận 9">Quận 9</option>
                    <option value="Quận 10">Quận 10</option>
                    <option value="Quận 11">Quận 11</option>
                    <option value="Quận 12">Quận 12</option>
                    <option value="Quận Bình Thạnh">Bình Thạnh</option>
                    <option value="Quận Gò Vấp">Gò Vấp</option>
                    <option value="Quận Phú Nhuận">Phú Nhuận</option>
                </select>
            </div>
            <div>
                <label for="password">Mật khẩu:</label>
                <input type="password" id="register-password" name="password" required>
            </div>
            <div>
                <label for="confirm-password">Gõ lại mật khẩu:</label>
                <input type="password" id="register-confirm-password" name="confirm-password" required>
            </div>
            <button type="submit">Đăng Ký</button>
            <p>Đã có tài khoản? <a href="javascript:void(0)" onclick="chuyenFormDangNhap()">Đăng nhập</a></p>
        </form>
    </div>
    <script>
    function moDangNhap() {
        document.getElementById("dang-nhap").style.display = "flex";
        document.getElementById("dang-ky").style.display = "none";
    }

    function tatDangNhap() {
        document.getElementById("dang-nhap").style.display = "none";
    }

    function tatDangKy() {
        document.getElementById("dang-ky").style.display = "none";
    }

    function chuyenFormDangKy() {
        document.getElementById("dang-nhap").style.display = "none";
        document.getElementById("dang-ky").style.display = "flex";
    }

    function chuyenFormDangNhap() {
        document.getElementById("dang-ky").style.display = "none";
        document.getElementById("dang-nhap").style.display = "flex";
    }
    </script>
    <!-- js -->
    <script src="./template/assets/User/script/history.js"></script>
    <script src="./template/assets/User/script/main.js"></script>
    <script src="./template/assets/User/script/Login_Signin.js"></script>
    <script src="./template/assets/User/script/cart.js"></script>
    <!-- awesome font -->
    <script src="https://kit.fontawesome.com/097a4985d9.js" crossorigin="anonymous"></script>
</body>

</html>