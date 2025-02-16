
//click vào nút "Thêm vào giỏ"
function themgiohang(){
    var giohang = JSON.parse(localStorage.getItem('giohang')); 

    if(giohang == null){
        giohang = [];
    }

    const id = parseInt(document.getElementById("productId").textContent);

    fetch(`./product?id=${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status == 200) {
            let sp = data.data.product;
            // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
            var kt = false;
            if(giohang!=null){
                for (let i = 0; i < giohang.length; i++) {
                    if (giohang[i].name === sp.name) {
                        alert("sản phẩm đã có trong giỏ hàng");
                        kt=true;
                        break;
                    }
                }
            }
            if (!kt) {
                var soLuong = parseInt(document.getElementById('product-quantity').value);
                sp.soLuong=soLuong
                giohang.push(sp);
                localStorage.setItem('giohang', JSON.stringify(giohang));
                showcountsp();                
                alert("Đã thêm sản phẩm vào giỏ");
            }
        }
    });
}

// Mở phần thanh toán
function hienthiGiohang() {
    window.location.href="cart";
}
function laygiohang(){
    if(JSON.parse(localStorage.getItem("giohang")) != null){
        let product = JSON.parse(localStorage.getItem("giohang")) || [];
        let a = '';
        let s = 0;
        let n = 0;
        for (let i = 0; i < product.length; i++) {
            n += product[i].soLuong;
            let gia = parseInt(product[i].price);
            let thanhtien = gia * parseInt(product[i].soLuong);
            s += thanhtien;
            a += `
                <div class="cartinner">
                    <div class="cart">
                        <div>${product[i].name}</div>
                        <div>${gia} * ${product[i].soLuong}</div>
                    </div>
                    <div class="sumofcart">
                        ${thanhtien}
                    </div>
                    <div class="button clear">
                        <div class="plusbtn" onclick="tang(this)" name="${product[i].id}">Tăng</div>
                        <div class="subbtn" onclick="giam(this)" name="${product[i].id}">Giảm</div>
                        <div class="deletebtn" onclick="xoasp(this)" name="${product[i].id}">Xóa</div>
                    </div>
                    <div style="clear:both"></div>
                </div>
            `;
        }
       
        let showCount = document.querySelector(".inner2right .countcart");
        let showSP = document.querySelector(".inner2right .cartoutter .item");
        let showTong = document.querySelector(".sumoutter .suminner");
        showCount.innerHTML = n;
        showSP.innerHTML = a;
        showTong.textContent = `${s}`;
    }

}

function xoasp(a){
    let giohang = JSON.parse(localStorage.getItem("giohang")) || [];
    for(let i = 0 ; i <giohang.length ; i ++){
        if(giohang[i].id == a.getAttribute("name")){
            giohang.splice(i,1);
            break;
        }
    }
    localStorage.setItem("giohang" , JSON.stringify(giohang));
    laygiohang();
}


function tang(a){
    let giohang = JSON.parse(localStorage.getItem("giohang")) || [];
    for(let i = 0 ; i<giohang.length ; i++){
        if(giohang[i].id == a.getAttribute("name")){
            giohang[i].soLuong++;
            break;
        }
    }
    localStorage.setItem("giohang" , JSON.stringify(giohang));
    laygiohang();
}

function giam(a){
    let giohang = JSON.parse(localStorage.getItem("giohang")) || [];
    for(let i = 0 ; i<giohang.length ; i++){
        if(giohang[i].id == a.getAttribute("name")){
            giohang[i].soLuong--;
            if(giohang[i].soLuong <= 0){
                giohang.splice(i,1);
                break;
            }
            break;
        }
    }
    localStorage.setItem("giohang" , JSON.stringify(giohang));
    laygiohang();
}
function showcountsp() {
    let giohang = JSON.parse(localStorage.getItem("giohang")) || [];
    var soLuongSP = giohang.length;
    document.getElementById('cart-count').innerText = soLuongSP;
}
function thanhtoan(){
    let orderdetail = JSON.parse(localStorage.getItem("giohang")) || [];
    let product_ids = orderdetail.map(item => item.id);
    let address = document.getElementById('address').value;

    fetch('./order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            address: address,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status==200) {
            let idOrder = data.data.order.id;
            fetch('./orderdetail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idOrder: idOrder,
                    product_ids: product_ids,
                }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.status==200) {
                    alert("Đặt hàng thành công");
                    window.location.href = '/';
                    localStorage.setItem('giohang', JSON.stringify(null));
                }
            })
        }
    })
}


function renderOrderHistory() {
    fetch('./order', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.status==200) {
            let orderHtml = '';
            if (data.data.order.length === 0) {
                orderHtml = `
                    <div class="order-history-empty">
                        <img src="./assets/User/img/download.png" alt="" class="empty-order-img">
                        <p>Chưa có đơn hàng nào</p>
                    </div>`;
            } else {
                data.data.order.forEach(order => {
                    let productHtml = '';
                    let totalAmount = 0;
        
                    order.products.forEach(product => {
                        let totalPrice = product.price;
                        totalAmount += totalPrice;
        
                        // Tạo HTML cho từng sản phẩm trong đơn hàng
                        productHtml += `
                            <div class="order-history">
                                <div class="order-history-left">
                                    <img src="${product.thumbnail}" alt="${product.name}">
                                    <div class="order-history-info">
                                        <h4>${product.name}</h4>
                                    </div>
                                </div>
                                <div class="order-history-right">
                                    <div class="order-history-price">
                                        <span class="order-history-current-price"></span>
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
        
                    // Tạo HTML cho đơn hàng
                    orderHtml += `
                        <div class="order-history-group">
                            ${productHtml}
                            <div class="order-history-control">
                                <div class="order-history-status">
                                    <span class="order-history-status-sp ${statusText === 'Đã xử lý' ? 'complete' : 'no-complete'}">${statusText}</span>
                                    <button id="order-history-detail" onclick="showOrderDetail('${order.order_id}')">
                                        <i class="fa-regular fa-eye"></i> Xem chi tiết
                                    </button>
                                </div>
                                <div class="order-history-total">
                                    <span class="order-history-total-desc">Tổng tiền:${totalAmount} </span>
                                    <span class="order-history-toltal-price"></span>
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
            const container = document.querySelector(".container");
            const slider = document.querySelector(".slider");

            if (orderHistoryDiv) {
                orderHistoryDiv.style.display = "block"; // Hiển thị phần lịch sử đơn hàng
                container.style.display="none";
                slider.style.display="none";
            }
        
            console.log(localStorage.getItem('donhang'));
        }
    })
    .catch(error => {
    });

    
}

function showOrderDetail(id){
    fetch('./orderid', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status==200) {
            const detailOrderItems = document.querySelectorAll(".detail-order-item-right");
            detailOrderItems[0].textContent = "27/11/2024";           
            detailOrderItems[1].textContent = "Thanh toán khi nhận hàng";
            detailOrderItems[2].textContent = data.data.order.address;
            detailOrderItems[3].textContent = data.data.order.recipientname;  
            detailOrderItems[4].textContent = data.data.order.phone; 

            const modal = document.querySelector(".detail_order");
            if (modal) {
                modal.style.display = "block";
            }
        }
    })
    .catch(error => {
    });
}

function closeProductDetail(){
    const modal = document.querySelector(".detail_order");
    if (modal) {
        modal.style.display = "none";
    }
}