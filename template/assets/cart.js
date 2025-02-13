
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
            let sp = data.data.product[0];
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
                
                }
            })
        }
    })
}