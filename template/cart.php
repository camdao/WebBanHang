<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="template/assets/Payment/style/main.css">
    <link rel="stylesheet" href="template/assets/Payment/style/display.css">
    <link rel="stylesheet" href="template/assets/Payment/style/purchase.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="template/assets/Payment/style/responsive.css">
    <link rel="stylesheet" href="./template/assets/User/style/main.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet">
    <title>Thanh Toán</title>
</head>
<body>
    <?php
        include './template/header.php';
    ?>
    <div class="outter" style="margin-top: 120.7px;">
        <div>
            <div class="inner1">
                <div><i class="fa-regular fa-credit-card"></i></div>
                <div>Thanh toán</div>
                <div>Vui lòng kiểm tra Địa Chỉ , thông tin Giỏ hàng trước khi đặt hàng<br>
                    Nếu gặp sự cố vui lòng liên hệ với chúng tôi để được hỗ trợ
                </div>
            </div>
            <div class="inner2">
                <div class="inner2left">
                    <div  id = "Form">
                        <div style="color:black; opacity: 1">Thông tin Khách Hàng</div>
                        <div><label for="name">Họ tên</label> <br><input type="text" id="name" name="name" ></div>
                        <div><label for="tele">Điện thoại</label><br> <input type="tel" id="tele" name="tele" ></div>
                        <div><label for="address"> Địa chỉ</label> <br><input type="text" id="address" name="address" ></div>
                        <input type="submit" value="Đặt hàng" class="sub-button" onclick="thanhtoan()"> 
                    </div>
                    <div id="Contact">
    <div class="item">Số điện thoại: <span class="contact_phone"></span></div>
    <div class="item">Email: jewlrystore@gmail.com</div>
    <div class="item">Facebook: <a href="https://www.facebook.com/?locale=vi_VN">Jewelrystore</a></div>
</div>
                        

                    <!-- .inner2left>input -->
                </div>
                <div class="inner2right">
                    <div>
                        <div>Giỏ hàng</div>
                        <div class="countcart"></div>
                    </div>
                    <div class="cartoutter">
                        <div class="item">
                        <div class="cartinner">
                           
                        </div>
                    </div>
                        <div class="sumoutter">
                            <div>Tổng thành tiền :</div>
                            <div class="suminner"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="./template/assets/cart.js"></script>
    <script>
        laygiohang();
    </script>
</body>
</html>