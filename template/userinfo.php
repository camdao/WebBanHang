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
<!-- header -->
<?php
    include './template/header.php';
?>
<div class="container_account" style="display: block;">
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
                                    <label for="infophone" class="form-label">username</label>
                                    <input class="form-control" type="text" name="infophone" id="infophone" disabled="true" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="infoaddress" class="form-label">Địa chỉ</label>
                                    <input class="form-control" type="text" name="infoaddress" id="infoaddress" placeholder="Thêm địa chỉ giao hàng của bạn">
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
                                <button id="save-info-user" onclick="changeInformation()"><i class="fa-solid fa-floppy-disk" aria-hidden="true"></i> Lưu thay đổi</button>
                            </div>
                            <div class="grid__column5">
                                <button id="save-password" onclick="changePassword()"><i class="fa-solid fa-key" aria-hidden="true"></i> Đổi mật khẩu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- footer -->
<?php
    include './template/footer.php';
?>
    <script>
       window.onload = function() {
        fetch('./info', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.status==200) {
                const infoname = document.getElementById('infoname');
                infoname.value=data.data.user.username;

                const infophone = document.getElementById('infophone');
                infophone.value=data.data.user.username;

                const infoaddress = document.getElementById('infoaddress');
                infoaddress.value=data.data.user.address;
            }
        })
        .catch(error => {
        });
    }
    
    </script>
</body>

</html>