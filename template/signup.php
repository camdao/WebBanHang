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
    <div id="dang-ky"">
        <form class="form-dang-ky" id="dangkyForm" action="" autocomplete="off" ">
            <h2>Đăng Ký</h2>
            <div>
                <label for="username">Tài Khoản:</label>
                <input type="tel" id="register-username" name="username" placeholder="Nhập Tên Tài Khoản..." required>
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
                <label for="password">Mật khẩu:</label>
                <input type="password" id="register-password" name="password" required>
            </div>
            <div>
                <label for="confirm-password">Gõ lại mật khẩu:</label>
                <input type="password" id="register-confirm-password" name="confirm-password" required>
            </div>
            <button type="submit">Đăng Ký</button>
            <p>Đã có tài khoản? <a href="javascript:void(0)" onclick="window.location.href='/login'">Đăng nhập</a></p>
        </form>
    </div>
    <script>
        document.getElementById('dangkyForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;

            fetch('./signup', {
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
                    // window.location.href = '/';
                }
            })
            .catch(error => {
                document.getElementById('error-message').innerText = "Có lỗi xảy ra, vui lòng thử lại.";
            });
        });
    </script>
</body>

</html>