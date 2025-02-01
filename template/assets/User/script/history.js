function renderOrderHistory() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const donhang = JSON.parse(localStorage.getItem('donhang')) || [];
    
    // Lọc các đơn hàng của khách hàng hiện tại
    const userOrders = donhang.filter(order => order.phoneKH === currentUser.phone);
    let orderHtml = '';

    // Kiểm tra xem người dùng có đơn hàng không
    if (userOrders.length === 0) {
        orderHtml = `
            <div class="order-history-empty">
                <img src="./assets/User/img/download.png" alt="" class="empty-order-img">
                <p>Chưa có đơn hàng nào</p>
            </div>`;
    } else {
        userOrders.forEach(order => {
            let productHtml = '';
            let totalAmount = 0;

            // Duyệt qua các sản phẩm trong đơn hàng
            order.giohang.forEach(product => {
                let totalPrice = product.gia * product.soLuong;
                totalAmount += totalPrice;

                // Tạo HTML cho từng sản phẩm trong đơn hàng
                productHtml += `
                    <div class="order-history">
                        <div class="order-history-left">
                            <img src="${product.hinh}" alt="${product.ten}">
                            <div class="order-history-info">
                                <h4>${product.ten}</h4>
                                <p class="order-history-quantity">x${product.soLuong}</p>
                            </div>
                        </div>
                        <div class="order-history-right">
                            <div class="order-history-price">
                                <span class="order-history-current-price">${vnd(totalPrice)}</span>
                            </div>
                        </div>
                    </div>`;
            });

            // Trạng thái đơn hàng
            let statusText = order.status;
            if(statusText == 0){
                statusText = "Chưa xử lý";
            }else if(statusText == 1){
                statusText = "Đã dhuyệt";
            }else if(statusText == 2){
                statusText = "Đã giao thành công";
            }else{
                statusText = `Đã hủy vì ${order.lydo}`;
            }            

            let orderDate = order.ngaydat;
            let deliveryDate = order.ngayduyet !== 0 ? order.ngayduyet : "Chưa duyệt";

            // Tạo HTML cho đơn hàng
            orderHtml += `
                <div class="order-history-group">
                    ${productHtml}
                    <div class="order-history-control">
                        <div class="order-history-status">
                            <span class="order-history-status-sp ${statusText === 'Đã xử lý' ? 'complete' : 'no-complete'}">${statusText}</span>
                            <button id="order-history-detail" onclick="showOrderDetail('${order.id}')">
                                <i class="fa-regular fa-eye"></i> Xem chi tiết
                            </button>
                        </div>
                        <div class="order-history-total">
                            <span class="order-history-total-desc">Tổng tiền: </span>
                            <span class="order-history-toltal-price">${vnd(totalAmount)}</span>
                        </div>
                    </div>
                </div>`;
        });
    }

    // Cập nhật HTML vào phần hiển thị lịch sử đơn hàng
    const orderHistorySection = document.querySelector(".order_history .main_account");
    if (orderHistorySection) {
        orderHistorySection.innerHTML = `
            <div class="tittle-main_account">
                <h3>Quản lý đơn hàng của bạn</h3>
                <p>Xem chi tiết, trạng thái của những đơn hàng đã đặt</p>
            </div>
            ${orderHtml}`;
    }

    // Hiển thị phần lịch sử đơn hàng
    const orderHistoryDiv = document.querySelector(".order_history");
    if (orderHistoryDiv) {
        orderHistoryDiv.style.display = "block"; // Hiển thị phần lịch sử đơn hàng
    }

    console.log(localStorage.getItem('donhang'));
}

// Định dạng tiền tệ VND
function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

function showOrderDetail(orderId) {
    // Lấy dữ liệu đơn hàng từ localStorage
    const donhang = JSON.parse(localStorage.getItem('donhang')) || [];
   
    for(let i = 0 ; i<donhang.length ; i++){
        if(donhang[i].id == parseInt(orderId))
            order = donhang[i];
    }
    if (!order) {
        console.error("Không tìm thấy đơn hàng với ID:", orderId);
        return;
    }
    const detailOrderItems = document.querySelectorAll(".detail-order-item-right");
    if (detailOrderItems.length >= 6) {

        detailOrderItems[0].textContent = order.ngaydat;           // Ngày đặt hàng
        detailOrderItems[1].textContent = getPaymentMethod(order); // Hình thức thanh toán
        detailOrderItems[2].textContent = order.diachiKH;
        detailOrderItems[3].textContent = order.quanKH;          // Địa chỉ nhận
        detailOrderItems[4].textContent = order.tenKH;             // Người nhận
        detailOrderItems[5].textContent = order.phoneKH;           // Số điện thoại
    } else {
        console.error("Không tìm thấy đủ các phần tử .detail-order-item-right");
    }

       // Hiển thị modal chi tiết đơn hàng
    const modal = document.querySelector(".detail_order");
    if (modal) {
        modal.style.display = "block";
    }
    
    console.log("Mã đơn hàng: ", orderId);
}

function closeProductDetail() {
    const modal = document.querySelector(".detail_order");
    if (modal) {
        modal.style.display = "none"; // Ẩn modal chi tiết đơn hàng
    }
}

function getPaymentMethod(order) {
    if (order.stk !== -1 && order.bank === -1) {
        return `Thanh toán bằng ZaloPay (STK: ${order.stk})`;
    } else if (order.stk === -1 && order.bank === -1) {
        return "Thanh toán khi nhận hàng";
    } else if (order.stk !== -1 && order.bank !== -1) {
        return `Thanh toán bằng ${order.bank} (STK: ${order.stk})`;
    } else {
        return "Hình thức thanh toán không xác định";
    }
}


window.onload = () =>{
    renderOrderHistory();
}