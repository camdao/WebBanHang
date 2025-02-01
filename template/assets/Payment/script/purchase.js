let chooseZalopay = document.querySelector("#zalopay");
let chooseCash = document.querySelector("#bycash");
let chooseCard = document.querySelector("#bycard");
let Bank = document.querySelector("#bank");
let stk = document.querySelector("#stk input");
let confirm = document.querySelector(".confirm");

window.onload = () =>{
chooseZalopay.checked = false;
chooseCash.checked = false;
chooseCard.checked = false;
Bank.style.display = "none";
stk.style.display = "none";
confirm.style.display = "none";
contactPhone();
}

stk.style.display = "none";
confirm.style.display = "none";
Bank.style.display = "none";

function showPurchase(){
if(chooseZalopay.checked == true){
Bank.style.display = "none";
stk.style.display = "block";
confirm.style.display = "block";
}

if(chooseCash.checked == true){
Bank.style.display = "none";
stk.style.display = "none";
confirm.style.display = "block";

}

if(chooseCard.checked == true){
Bank.style.display = "block";
stk.style.display = "block";
confirm.style.display = "block";

}


}


confirm.onclick = () =>{

if(currentUser.status == 1){
    alert("Người dùng đang bị khóa");
    return 0;
}


stk.value = stk.value.replace(/\.$/, '');
if(stk.value == "" && stk.style.display == "block"){
    alert("Vui lòng nhập số tài khoản");
    stk.focus();
    return 0;
}
else{
let checkstk = parseInt(stk.value);

if(checkstk != stk.value    && stk.style.display == "block" ){
    alert("Vui lòng nhập số tài khoản là số");
    stk.focus();
    return 0;
}

if(Bank.style.display == "block" && stk.style.display == "block"){
let co = 0;
let a = document.querySelectorAll(".choose_bank");
a.forEach(function(radio){
    if(radio.checked == true) co = 1;
});
if (co == 0){
    alert("Vui lòng chọn ngân hàng");
    return 0;
}
}
}

if(currentUser.giohang.length == 0){
    alert("Vui lòng chọn sản phẩm cần mua");
    showSanPham();
    return 0;
}

if(stk.value <= 0 && stk.style.display == "block"){
    alert("Vui lòng nhập đúng số tài khoản");
    return 0;
}




let s = 0;
for(let i = 0; i < currentUser.giohang.length ;i++){
    let thanhtien = currentUser.giohang[i].gia * currentUser.giohang[i].soLuong;
    s += thanhtien;
}

let today =   new Date();
let madon;
let donhang = JSON.parse(localStorage.getItem("donhang"));
if(donhang == null){
    madon = 1;
    donhang = [];
}else{
    let max = 0;
    for(let i = 0 ; i < donhang.length ; i++)
        if(max < donhang[i].id) max = donhang[i].id;
    madon = max+1;
}

let diachi = document.querySelector("#address").value;
let quanmoi = document.querySelector("#newquan").value;

let phieumua;
if(chooseZalopay.checked == true){
 phieumua = {
    id: madon,
    stk: stk.value,
    bank: -1,
    ngaydat: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} `,
    ngayduyet: 0 ,
    diachiKH: diachi,
    quanKH: quanmoi,
    tongtien: s,
    status: 0,
    tenKH: currentUser.name,
    phoneKH: currentUser.phone,
    emailKH: currentUser.email,
    genderKH: currentUser.gender,
    giohang: currentUser.giohang,
}
}

if(chooseCash.checked == true){
    phieumua = {
        id: madon,
        stk: -1,
        bank: -1,
        ngaydat: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} ` ,
        ngayduyet: 0 ,
        diachiKH: diachi,
        quanKH: quanmoi,
        tongtien: s,
        status: 0,
        tenKH: currentUser.name,
        phoneKH: currentUser.phone,
        emailKH: currentUser.email,
        genderKH: currentUser.gender,
        giohang: currentUser.giohang,
    }
}

if(chooseCard.checked == true){
let nganhang = document.querySelectorAll("#bank .choose_bank");
let bank;
for(let i = 0 ; i < nganhang.length;i++){
    if(nganhang[i].checked == true){
        bank = nganhang[i].value;
        break;
    }
}

    phieumua = {
        id: madon,
        stk: stk.value,
        bank: bank,
        ngaydat: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}` ,
        ngayduyet: 0 ,
        diachiKH: diachi,
        quanKH: quanmoi,
        tongtien: s,
        status: 0,
        tenKH: currentUser.name,
        phoneKH: currentUser.phone,
        emailKH: currentUser.email,
        genderKH: currentUser.gender,
        giohang: currentUser.giohang,
    }
}



donhang.push(phieumua);
localStorage.setItem("donhang", JSON.stringify(donhang));
let users = JSON.parse(localStorage.getItem("users"));
for(let i = 0 ; i<users.length;i++){
    if(users[i].phone == currentUser.phone){
        if(users[i].lichsuMuaHang == null){
            users[i].lichsuMuaHang = [];
            users[i].lichsuMuaHang.push(phieumua);
        } else{
        users[i].lichsuMuaHang.push(phieumua);
    }
    }
}

if(JSON.parse(localStorage.getItem("donmoi")) == null){
    let donmoi = [];
    donmoi.push(phieumua);
    localStorage.setItem("donmoi" , JSON.stringify(donmoi));
}else{
    let donmoi = JSON.parse(localStorage.getItem("donmoi"));
    donmoi.push(phieumua);
    localStorage.setItem("donmoi" , JSON.stringify(donmoi));
}



let giohang = [];
currentUser.giohang = giohang;
localStorage.setItem("giohang", JSON.stringify(giohang));
localStorage.setItem("currentUser", JSON.stringify(currentUser));
localStorage.setItem("users" , JSON.stringify(users));


showTomtatsp();
alert("Đặt hàng thành công quay về trang chủ");
window.location.href = "index.html";
}

