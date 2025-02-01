// Khai báo các đối tượng cần thiết
var Menu_viewpage = document.querySelector("#Menu .viewpage");
var Menu_merchandise = document.querySelector("#Menu .merchandise");
var Menu_revenue = document.querySelector("#Menu .revenue");
var Menu_userlist = document.querySelector("#Menu .userlist");
var Menu_adminlist = document.querySelector("#Menu .adminlist");
var Menu_order = document.querySelector("#Menu .order");
var Display_viewpage = document.querySelector("#Display .viewpage");
var Display_merchandise = document.querySelector("#Display .merchandise");
var Display_revenue = document.querySelector("#Display .revenue");
var Display_userlist = document.querySelector("#Display .userlist");
var Display_order = document.querySelector("#Display .order");
// var Customer;











Display_viewpage.style.display = "none";
Display_merchandise.style.display = "none";
Display_revenue.style.display = "none";
Display_userlist.style.display = "none";
Display_order.style.display = "block";
// showDonHang();

function reloadIframe() {
    var iframe = document.querySelector(".viewpage iframe");
    // iframe.contentWindow.location.reload(); // Reload iframe
    iframe.setAttribute("src", "index.html");
}


// Bật tắt bật tắt
Menu_viewpage.onclick = () => {
    Display_viewpage.style.display = "block";
    Display_merchandise.style.display = "none";
    Display_revenue.style.display = "none";
    Display_userlist.style.display = "none";
    Display_order.style.display = "none";
    reloadIframe();
}

Menu_merchandise.onclick = () => {
    Display_viewpage.style.display = "none";
    Display_merchandise.style.display = "block";
    Display_revenue.style.display = "none";
    Display_userlist.style.display = "none";
    Display_order.style.display = "none";
}

Menu_revenue.onclick = () => {
    Display_viewpage.style.display = "none";
    Display_merchandise.style.display = "none";
    Display_revenue.style.display = "block";
    Display_userlist.style.display = "none";
    Display_order.style.display = "none";
}

Menu_userlist.onclick = () => {
    Display_viewpage.style.display = "none";
    Display_merchandise.style.display = "none";
    Display_revenue.style.display = "none";
    Display_userlist.style.display = "block";
    Display_order.style.display = "none";
}

function giamdan(arr){
  for(let i = 0 ; i<arr.length - 1;i++){
    for(let j = i+1 ; j<arr.length ; j++){
      if(arr[i].id < arr[j].id){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}


function showDonHang() {
    let donhang = JSON.parse(localStorage.getItem("donhang"));
    if (donhang == null) {
      alert("Chưa có đơn hàng nào");
      let showdon = document.querySelector("#Display .order .main table tbody");
      showdon.innerHTML = "";
      let showbtn = document.querySelector("#Display .order .foot .pagination");
      showbtn.innerHTML = "";
      return 0;
    } else {
      donhang = giamdan(donhang);
      let sosanphammoitrang = 10;
      let sotranghientai = 1;
      let tongsotrang = Math.ceil(donhang.length / sosanphammoitrang);
      let vitrihientai = (sotranghientai - 1) * sosanphammoitrang;
      let btn = "";
      if (tongsotrang != 1) {
        for (let i = 1; i <= tongsotrang; i++) {
          btn += `
                  <div class="item" onclick="nuttrang_order(${i})">${i}</div>	
  
              `;
        }
      }
      let a = "";
      let n = 0;
      for (let i = vitrihientai; i < donhang.length; i++) {
        let trangthai;
        if (donhang[i].status == 0) {
          trangthai = "Chưa xử lý";
        } else if (donhang[i].status == 1) {
          trangthai = "Đã duyệt";
        } else if (donhang[i].status == 2) {
          trangthai = "Đã giao hàng thành công";
        } else if (donhang[i].status == 3) {
          trangthai = `Đã hủy vì ${donhang[i].lydo}`;
        }
        n++;
        a += `
              <tr>
                    <td>${donhang[i].id}</td>
                              <td>${donhang[i].tenKH}</td>
                               <td>${donhang[i].quanKH}</td>
                              <td>${formatVND(donhang[i].tongtien)}</td>
                              <td>${donhang[i].ngaydat}</td>
                              <td>${
                                donhang[i].ngayduyet == 0
                                  ? "Chưa duyệt"
                                  : donhang[i].ngayduyet
                              }</td>
                              <td>${trangthai}</td>
                              <td class="button">
                                  <div name="${
                                    donhang[i].id
                                  }" onclick="xulydonhang(this)">Xem</div>
                              </td>
                      </tr>   
              
              `;
        if (n == sosanphammoitrang) break;
      }
  
      let showbtn = document.querySelector("#Display .order .foot .pagination");
      showbtn.innerHTML = btn;
      let showdon = document.querySelector("#Display .order .main table tbody");
      showdon.innerHTML = a;
    }
  }

showDonHang();


Menu_order.onclick = () => {
    Display_viewpage.style.display = "none";
    Display_merchandise.style.display = "none";
    Display_revenue.style.display = "none";
    Display_userlist.style.display = "none";
    Display_order.style.display = "block";
    showDonHang();
}



function tat_mo_navbar() {
    let menu = document.querySelector("#Menu");
    if (menu.style.display == "") {
        menu.style.display = "block";
        menu.style.position = "fixed";
        menu.style.top = "0";
        menu.style.left = "0";
        menu.style.zIndex = "100";
        return 0;
    }

    if (menu.style.display == "none") {
        menu.style.display = "block";
        menu.style.position = "fixed";
        menu.style.top = "0";
        menu.style.left = "0";
        menu.style.zIndex = "100";
        return 0;
    }

    if (menu.style.display == "block") {
        menu.style.display = "none";
        return 0;
    }

}



window.onload = () =>{
    let a = document.querySelector(".noti");
    if(JSON.parse(localStorage.getItem("donmoi")) == null){
        a.innerHTML = 0;
    }else{
        a.innerHTML = JSON.parse(localStorage.getItem("donmoi")).length;
    }

    let ad = JSON.parse(localStorage.getItem("admin"));
    document.querySelector(".admin_name").innerHTML = ad.name;
    document.querySelector(".admin_phone").innerHTML = `Số điện thoại: ${ad.phone}`;
    document.querySelector(".admin_address").innerHTML = `Chi nhánh: ${ad.address}`;
}


function Whoispokemon(){
  let ad = JSON.parse(localStorage.getItem("admin"));
  document.querySelector(".admin_name").innerHTML = ad.name;
  document.querySelector(".admin_phone").innerHTML = `Số điện thoại: ${ad.phone}`;
  document.querySelector(".admin_address").innerHTML = `Chi nhánh: ${ad.address}`;
}

Whoispokemon();


function formatVND(money){
let data =  money.toLocaleString('vi-VN' , {
      style: `currency`,
      currency: `VND`,
      minimumFractionDigits: 0,
    });
    return data;
}






