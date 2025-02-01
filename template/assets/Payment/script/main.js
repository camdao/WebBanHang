
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let display = document.querySelector("#Display");
let form = document.querySelector("#Form");
let purchase = document.querySelector("#Purchase");
let contact = document.querySelector("#Contact");

function formatVND(money){
    let data =  money.toLocaleString('vi-VN' , {
          style: `currency`,
          currency: `VND`,
          minimumFractionDigits: 0,
        });
        return data;
    }
    

 function showContact(){
    contact.style.display = "block";
    purchase.style.display = "none";
    form.style.display = "none";
    display.style.display = "none"
}


function showTomtatsp(){
    if(JSON.parse(localStorage.getItem("giohang")) != null){
    let product = currentUser.giohang;
    let a = '';
    let s = 0;
    let n = 0;
    for(let i = 0 ; i < product.length ; i++){
        n += product[i].soLuong;
        let gia = parseInt(product[i].gia);
        let thanhtien = gia * parseInt(product[i].soLuong);
        s += thanhtien;
        a += `
        <div class="cartinner">
            <div class="cart">
                <div>${product[i].ten}</div>
                <div>${formatVND(gia)} * ${product[i].soLuong} </div>
            </div>
            <div class="sumofcart">
                ${formatVND(thanhtien)}
            </div>
            <div class="button clear">
            <div class="plusbtn" onclick="tang(this)" name="${product[i].id}">Tăng</div>
            <div class="subbtn" onclick="giam(this)" name="${product[i].id}">Giảm</div>
            <div class="deletebtn"  onclick="xoasp(this)" name="${product[i].id}">Xóa</div>
            </div>
             <div style="clear:both"></div>
        </div>
        

        `
    }
   
 

    let showCount = document.querySelector(".inner2right .countcart");
    let showSP = document.querySelector(".inner2right .cartoutter .item");
    let showTong = document.querySelector(".sumoutter .suminner");
    showCount.innerHTML = n;
    showSP.innerHTML = a;
    showTong.textContent = `${formatVND(s)}`;
}else{
    
}
}

showTomtatsp();


display.style.display = "none";
purchase.style.display = "none";


function showSanPham(){
     contact.style.display = "none";
    form.style.display = "none"; 
    display.style.display = "block";
    purchase.style.display = "none";
    let Product = JSON.parse(localStorage.getItem("products"));
    let sosanphammoitrang = 3;
    let tongsotrang = Math.ceil(Product.length/sosanphammoitrang);
    let sotranghientai = 1;
    let vitrihientai = (sotranghientai -1)  * sosanphammoitrang;


    let butt = ``;
    for(let i = 1 ; i<=tongsotrang;i++)
        butt += `
        <div class="item" onclick="nuttrang(this)" name="${i}">${i}</div>
    `;


    let n = 0;
    let a = ``;
    for(let i = vitrihientai     ; i < Product.length;i++){
        if(n == sosanphammoitrang) break; 

        a += `
        <div class="item">
                                    <img src="${Product[i].images[0]}">
                                    <div class="content">
                                        <p>Tên: ${Product[i].name}</p>
                                        <p>Loại: ${Product[i].category}</p>
                                        <p>Giá: ${formatVND(Product[i].price)} VNĐ</p>
                                    </div>
                                    <div class="button">
                                        <div class="add">
                                        <input type="number" value="1" min="1" name = "${Product[i].id}" id="soluong">
                                        <div name = "${Product[i].id}" onclick="themsp(this)">Thêm vào giỏ</div>
                                        </div>
                                    </div>
            </div>
        `
        n++;
    }


    let showsanpham = document.querySelector("#Display .display");
    showsanpham.innerHTML = a;
    if(tongsotrang == 1) return 0;
    let shownut = document.querySelector("#Display .foot .button");
    if(tongsotrang != 1) 
     shownut.innerHTML = butt;
    else shownut.innerHTML = "";
}



function showThanhToan(){
    form.style.display  = "block";
     contact.style.display = "none";
    display.style.display = "none";
    purchase.style.display = "none";
}



function showMethodPurchase(){
    if(JSON.parse(localStorage.getItem("isLoggedIn"))  == null ){
        alert("Vui lòng đăng nhập trước khi đặt hàng");
        window.location.href = "index.html";
    }
    form.style.display = "none";
    display.style.display = "none";
    purchase.style.display = "block";
     contact.style.display = "none";
}


function nuttrang(trang){
    let Product = JSON.parse(localStorage.getItem("products"));
    let sosanphammoitrang = 3;
    let tongsotrang = Math.ceil(Product.length/sosanphammoitrang);
    let vitrihientai = (trang.getAttribute("name")-1)  * sosanphammoitrang;

let n =0 ;
let a = ``;
    for(let i = vitrihientai     ; i <Product.length;i++){
        if(n == sosanphammoitrang) break; 

        a += `
        <div class="item">
                                    <img src="${Product[i].images[0]}">
                                    <div class="content">
                                        <p>Tên: ${Product[i].name}</p>
                                        <p>Loại: ${Product[i].category}</p>
                                        <p>Giá: ${formatVND(Product[i].price)} VNĐ</p>
                                    </div>
                                    <div class="button">
                                        <select name="size">
                                            <option value="none" selected>Select Size</option>
                                            <option value="xxl">XXL</option>
                                            <option value="xl">XL</option>
                                            <option value="large">Large</option>
                                            <option value="medium">Medium</option>
                                            <option value="small">Small</option>
                                        </select>
                                        <div class="add">
                                        <input type="number" value="1" min="1" name = "${Product[i].id}" id="soluong">
                                        <div onclick="themsp(this)" name = "${Product[i].id}">Thêm vào giỏ</div>
                                        </div>
                                    </div>
            </div>
        `
        n++;
    }
    let showsanpham = document.querySelector("#Display .display");
    showsanpham.innerHTML = a;

}







    let ten = document.querySelector("#name");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#tele");
    let address = document.querySelector("#address");
    let gender = document.querySelector("#sex");
    let quan = document.querySelector("#newquan");

    ten.value = currentUser.name;
    email.value = currentUser.email;
    phone.value = currentUser.phone;
    address.value = currentUser.address;
    quan.value = currentUser.quan;
    gender.value = currentUser.gender;
  






function dangxuat() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    // Ẩn giao diện người dùng đã đăng nhập
    const navbarUser = document.querySelector('.navbar_user');
    if (navbarUser) 
        navbarUser.style.display = 'none';

    // Hiển thị lại nút đăng nhập
    const navbarAccount = document.querySelector('.navbar_account');
    if (navbarAccount) 
        navbarAccount.style.display = 'block';


    alert("Đã đăng xuất khỏi tài khoản");
    window.location.href="index.html";
}


function contactPhone(){
    let a = JSON.parse(localStorage.getItem("admin"));
    let b = document.querySelector(".contact_phone");
    b.innerHTML = a.phone;
}

contactPhone();