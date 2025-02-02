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
    <div id="dang-nhap">
        <form class="form-dang-nhap"  id="loginForm" action="" autocomplete="off" >
            <h2>Đăng Nhập</h2>
            <div>
                <label for="username">Tài Khoản:</label>
                <input type="username" id="login-username" name="username" required>
            </div>
            <div>
                <label for="password">Mật Khẩu:</label>
                <input type="password" id="login-password" name="password" required>
            </div>
            <button type="submit">Đăng Nhập</button>
            <p>Chưa Có Tài Khoản? <a href="javascript:void(0)" onclick="window.location.href='/signup'">Đăng Ký</a></p>
            <?php if (isset($error_message)) { ?>
                <div style="color: red;"><?= $error_message ?></div>
            <?php } ?>
        </form>
    </div>
    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            fetch('./login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    document.getElementById('error-message').innerText = data.error;
                } else {
                    window.location.href = '/';
                }
            })
            .catch(error => {
                document.getElementById('error-message').innerText = "Có lỗi xảy ra, vui lòng thử lại.";
            });
        });
    </script>
</body>

</html>                        
