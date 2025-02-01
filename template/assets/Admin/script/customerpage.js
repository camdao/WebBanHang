function checktimedate(receiptime) {
  let arraycopy = JSON.parse(JSON.stringify(receiptime));
  receipt = arraycopy.split("/");
  if (receipt[2].replace(/^0+/, "") < year) {
    return false;
  }
  if (receipt[2].replace(/^0+/, "") > yearsecond) {
    return false;
  }
  if (
    receipt[2].replace(/^0+/, "") < yearsecond &&
    receipt[2].replace(/^0+/, "") > year
  ) {
    return true;
  }
  if (
    receipt[1].replace(/^0+/, "") < month &&
    receipt[2].replace(/^0+/, "") == year
  ) {
    return false;
  }
  if (
    receipt[1].replace(/^0+/, "") > monthsecond &&
    receipt[2].replace(/^0+/, "") == yearsecond
  ) {
    return false;
  }
  if (
    receipt[0].replace(/^0+/, "") < day &&
    receipt[1].replace(/^0+/, "") == month &&
    receipt[2].replace(/^0+/, "") == year
  ) {
    return false;
  }
  if (
    receipt[0].replace(/^0+/, "") > daysecond &&
    receipt[1].replace(/^0+/, "") == monthsecond &&
    receipt[2].replace(/^0+/, "") == yearsecond
  ) {
    return false;
  }
  return true;
}
function taketime(phone){
  let Customer = JSON.parse(localStorage.getItem("users"));
  const time = document.getElementById("taketimefirst").value;
  if (time) {
    day = parseInt(time.split("-")[2].replace(/^0+/, ""), 10);
    month = parseInt(time.split("-")[1].replace(/^0+/, ""), 10);
    year = parseInt(time.split("-")[0].replace(/^0+/, ""), 10);
  }
  const timesec = document.getElementById("taketimesecond").value;
  if (timesec) {
    daysecond = parseInt(timesec.split("-")[2].replace(/^0+/, ""), 10);
    monthsecond = parseInt(timesec.split("-")[1].replace(/^0+/, ""), 10);
    yearsecond = parseInt(timesec.split("-")[0].replace(/^0+/, ""), 10);
  }
  if (timesec && document.getElementById("taketimefirst").value) {
    if (yearsecond < year) {
      alert("Bạn nhập sai ngày");
      yearsecond=null;
      year=null;
      day=null;
      daysecond=null;
      month=null;
      monthsecond=null;
      return;
    }
    if (yearsecond == year && monthsecond < month) {
      alert("Bạn nhập sai ngày");
      yearsecond=null;
      year=null;
      day=null;
      daysecond=null;
      month=null;
      monthsecond=null;
      return;
    }
    if (yearsecond == year && monthsecond == month && daysecond < day) {
      alert("Bạn nhập sai ngày");
      yearsecond=null;
      year=null;
      day=null;
      daysecond=null;
      month=null;
      monthsecond=null;
      return;
    }
    printinforordernew(phone,arrayCustomerr(Customer));
  }
}
function closedproduct() {
  document.getElementById("printorder").style.display = "none";
}
function closededitclient() {
  document.getElementById("sectioneditclient").style.display = "none";
}
function editclient(Phone) {
  // let phone="0"+Phone;
  let phone=Phone;
  let Customer = JSON.parse(localStorage.getItem("users"));
  document.getElementById("sectioneditclient").style.display = "flex";
  document.getElementById("editkh").addEventListener("click", function (event) {
    if (event.target.id == "editkh") {
      let hoten = document.getElementById("editnameofkh").value.trim();
      let thephone = document.getElementById("editphoneofkh").value.trim();
      let email = document.getElementById("editemailofkh").value.trim();
      if (!hoten) {
        alert("Vui lòng nhập tên");
        document.getElementById("editnameofkh").focus();
        return;
      }
      if (!thephone) {
        alert("Vui lòng nhập số điện thoại");
        document.getElementById("editphoneofkh").focus();
        return;
      }
      if (!email) {
        alert("Vui lòng nhập email");
        document.getElementById("editemailofkh").focus();
        return;
      }
      Customer.forEach(customer=>{
        if(customer.phone==phone){
          customer.name = hoten;
          customer.phone = thephone;
          customer.email = email;
          localStorage.setItem('users', JSON.stringify(Customer));
          alert("chỉnh sửa thành công user "+customer.name);
          printinfor(currentpage);
        }
      })

      // Customer.push(
      //     {
      //         ten:hoten,
      //         phone:phone,
      //         email:email
      //     }
      // );
      // document.getElementById("sectioneditclient").style = "none";
    }
  });
}

function printinforordernew(phone,Customer){
  console.log(Customer);
  document.getElementById("innerorder").innerHTML="";
  document.getElementById("printorder").style.display = "flex";
  document.querySelector("#printorder").innerHTML=`
      <div id="innerorder"><i class="fa-solid fa-x" onclick="closedproduct()"></i>
        <div>
            <div class="thehead">
              <div>id</div>
              <div>name</div>
              <div>cate</div>
              <div >receip</div>
              <div class="TheHide">
                <div id="taketimeouter">
                  <input type="date" id="taketimefirst">-<input type="date" id="taketimesecond" onclick="taketime('${phone}')">
                </div>
              </div>
          </div>
        </div>
      </div>
    `;
    let a=0;
  for (let i = 0; i < Customer.length; i++) {
    if (Customer[i].phone == phone) {
      for (let j = 0; j < Customer[i].lichsuMuaHang.length; j++) {
        const product = Customer[i].lichsuMuaHang[j];
        const outercreatediv=document.createElement("div");
        let a;
        if(product.status==0){
            a="delivered";
        }
        else if(product.status==1){
            a="delivering";
        }
        else{
          a="no infor"
        }
        for (let k = 0; k < product.giohang.length; k++) {
          // if(!product.giohang[k].id){
          //   product.giohang[k].id="no infor";
          // }
          // if(!product.giohang[k].ten){
          //   product.giohang[k].ten="no infor";
          // }
          // if(!product.giohang[k].loai){
          //   product.giohang[k].loai="no infor";
          // }
          // if(!product.giohang[k].ngaydat){
          //   product.giohang[k].loai="no infor";
          // }
          const creatediv = document.createElement("div");
          creatediv.innerHTML = `
                    <div>${product.giohang[k].id}</div>
                    <div>${product.giohang[k].ten}</div>
                    <div>${product.giohang[k].loai}</div>
                    <div>${product.ngaydat}</div>
                    `;
          outercreatediv.appendChild(creatediv);
        }
        let k=j;
        let thestatus=document.createElement("div");
        thestatus.className="thestatus";
        thestatus.innerHTML=`     
        <div>
          <div id="outerdelivery-${Customer[i].phone}${k}" class="outerdelivery">
                <div id="deliver-${Customer[i].phone}${k}" class="deliver" onclick="changedelivery('${Customer[i].phone}',${k})">${a} <i class="fa-solid fa-angle-down"></i></div>
                <div class="Delivering" id="delivering-${Customer[i].phone}${k}" onclick="newstatus('${Customer[i].phone}',${k},${1})">
                  delivering  
                </div>
                <div class="Delivered" id="delivered-${Customer[i].phone}${k}" onclick="newstatus('${Customer[i].phone}',${k},${0})">
                  delivered
                </div>
          </div>
        </div>                
`;
        outercreatediv.appendChild(thestatus);
        document.getElementById("innerorder").appendChild(outercreatediv);
      }

    }
  }
  // if(a==0){
  //   const creatediv = document.createElement("div");
  //   creatediv.innerHTML = `
  //   <div>
  //             <div>no infor</div>
  //             <div>no infor</div>
  //             <div>no infor</div>
  //             <div>no infor</div>
  //             <div>no infor</div> </div>
  //             `;
  //             document.getElementById("innerorder").appendChild(creatediv);
  // }
}
function printinfororder(phone) {
  let Customer = JSON.parse(localStorage.getItem("users"));
  document.getElementById("printorder").style.display = "flex";
  document.querySelector("#printorder").innerHTML=`
      <div id="innerorder"><i class="fa-solid fa-x" onclick="closedproduct()"></i>
        <div>
            <div class="thehead">
              <div>id</div>
              <div>name</div>
              <div>cate</div>
              <div >receip</div>
              <div class="TheHide">
                <div id="taketimeouter">
                  <input type="date" id="taketimefirst">-<input type="date" id="taketimesecond" onclick="taketime('${phone}')">
                </div>
              </div>
          </div>
        </div>
      </div>
    `;
    const section=document.getElementById("innerorder");
  for (let i = 0; i < Customer.length; i++) {
    if (Customer[i].phone == phone) {
      for (let j = 0; j < Customer[i].lichsuMuaHang.length; j++) {
        const product = Customer[i].lichsuMuaHang[j];
        const outercreatediv=document.createElement("div");
        outercreatediv.className="outerdiv"
        let u;
        let a;
        if(product.status==0){
            a="delivered";
        }
        else if(product.status==1){
            a="delivering";
        }
        else{
          a="no infor"
        }
        for (let k = 0; k < product.giohang.length; k++) {
          const creatediv = document.createElement("div");
          creatediv.innerHTML = `
                    <div>${product.giohang[k].id}</div>
                    <div>${product.giohang[k].ten}</div>
                    <div>${product.giohang[k].loai}</div>
                    <div>${product.ngaydat}</div>
                    <div class="TheHide"></div>
                    `;
          outercreatediv.appendChild(creatediv);
        }
        let k=j;
        let thestatus=document.createElement("div");
        thestatus.className="thestatus";
        thestatus.innerHTML=`     
        <div>
          <div id="outerdelivery-${Customer[i].phone}${k}" class="outerdelivery">
                <div id="deliver-${Customer[i].phone}${k}" class="deliver" onclick="changedelivery('${Customer[i].phone}',${k})">${a} <i class="fa-solid fa-angle-down"></i></div>
                <div class="Delivering" id="delivering-${Customer[i].phone}${k}" onclick="newstatus('${Customer[i].phone}',${k},${1})">
                  delivering  
                </div>
                <div class="Delivered" id="delivered-${Customer[i].phone}${k}" onclick="newstatus('${Customer[i].phone}',${k},${0})">
                  delivered
                </div>
          </div>
        </div>               
`;
        outercreatediv.appendChild(thestatus);
        section.appendChild(outercreatediv);
      }
    }
  }
}
// function printinforordernew(phone, Customer) {
//   console.log(Customer);
//   document.getElementById("printorder").style.display = "flex";

//   // Cập nhật nội dung cho #printorder
//   const section = document.querySelector("#printorder");
//   section.innerHTML = `                        
//       <div id="innerorder">
//           <i class="fa-solid fa-x" onclick="closedproduct()"></i>
//           <div>
//               <div>id</div>
//               <div>name</div>
//               <div>category</div> <!-- Sửa chính tả từ "catergory" thành "category" -->
//               <div>order receipt time</div> <!-- Sửa chính tả từ "receiptime" thành "receipt time" -->
//               <div>
//                   <input type="date" id="taketimefirst">
//                   <input type="date" id="taketimesecond">
//                   <input type="button" id="buttonclick" onclick="buttoninput(${phone})" value="click">  
//               </div>
//           </div>
//       </div>`;

//   let hasOrders = false; // Biến kiểm tra nếu có đơn hàng

//   // Tìm và hiển thị thông tin đơn hàng cho khách hàng
//   for (let i = 0; i < Customer.length; i++) {
//       if (Customer[i].phone == phone) {
//           console.log("Customer found");
//           for (let j = 0; j < Customer[i].lichsuMuaHang.length; j++) {
//               hasOrders = true; // Đã tìm thấy đơn hàng
//               const product = Customer[i].lichsuMuaHang[j];
//               for (let k = 0; k < product.giohang.length; k++) {
//                   const creatediv = document.createElement("div");
//                   creatediv.innerHTML = `
//                       <div>${product.giohang[k].id}</div>
//                       <div>${product.giohang[k].ten}</div>
//                       <div>${product.giohang[k].loai}</div>
//                       <div>${product.ngaydat}</div>
//                   `;
//                   section.appendChild(creatediv); // Sử dụng appendChild để thêm phần tử
//               }
//           }
//           break; // Ra khỏi vòng lặp nếu đã tìm thấy khách hàng
//       }
//   }

//   // Nếu không có đơn hàng, hiển thị thông báo
//   if (!hasOrders) {
//       const creatediv = document.createElement("div");
//       creatediv.innerHTML = `
//           <div>No information available</div>
//       `;
//       section.appendChild(creatediv); // Thêm thông điệp vào section
//   }
// }
function arrayCustomerr(Customer) {
  return Customer.map((Customer) => {
    let filteredlichsuMuaHangs=Customer.lichsuMuaHang.filter(lichsu=>{
      return checktimedate(lichsu.ngaydat);
    })
    console.log(filteredlichsuMuaHangs);
    if (filteredlichsuMuaHangs.length > 0) {
      console.log(Customer);
      return {
        ...Customer,
        lichsuMuaHang: filteredlichsuMuaHangs,
      };
    }
  }).filter((Customer) => Customer);
}
function changedelivery(Phone,key){
  // let phone="0"+Phone;
  let phone=Phone;
  let k="outerdelivery-"+phone+key;
    let a="deliver-"+phone+key;
    let b="delivering-"+phone+key;
    let c="delivered-"+phone+key;
    document.getElementById(b).style.display="flex";
    document.getElementById(c).style.display="flex";
}
function newstatus(phone,key,status){
  let Customer = JSON.parse(localStorage.getItem("users"));
  // let b="delivering-"+"0"+phone+key;
  // let c="delivered-"+"0"+phone+key;
  // let d="outerdelivery-"+"0"+phone+key;
  let b="delivering-"+phone+key;
  let c="delivered-"+phone+key;
  let d="outerdelivery-"+phone+key;
  Customer.forEach(customer=>{
    if(customer.phone==phone){
      customer.lichsuMuaHang.forEach(lichsu=>{
        if(status==0){
          lichsu=0;
          document.getElementById(b).style.display="none";
          document.getElementById(c).style.display="none";
          document.getElementById(d).innerHTML=`                        
            <div id="deliver-${customer.phone}${key}" class="deliver" onclick="changedelivery('${customer.phone}',${key})">delivered <i class="fa-solid fa-angle-down"></i></div>
            <div class="Delivering" id="delivering-${customer.phone}${key}" onclick="newstatus('${customer.phone}',${key},${1})">
              delivering
            </div>
            <div class="Delivered" id="delivered-${customer.phone}${key}" onclick="newstatus('${customer.phone}',${key},${0})">
              delivered
            </div>`;
        }
        else if(status==1){
          lichsu.status=1;
          document.getElementById(b).style.display="none";
          document.getElementById(c).style.display="none";
          document.getElementById(d).innerHTML=`                        
            <div id="deliver-${customer.phone}${key}" class="deliver" onclick="changedelivery('${customer.phone}',${key})">delivering <i class="fa-solid fa-angle-down"></i></div>
            <div class="Delivering" id="delivering-${customer.phone}${key}" onclick="newstatus('${customer.phone}',${key},${1})">
              delivering
            </div>
            <div class="Delivered" id="delivered-${customer.phone}${key}" onclick="newstatus('${customer.phone}',${key},${0})">
              delivered
            </div>`;
        }
      })
    }
  })
  localStorage.setItem('users', JSON.stringify(Customer));
}
// function newstatus(customer,status){
//   console.log(customer);
//     let b="delivering-"+"0"+customer.phone;
//     let c="delivered-"+"0"+customer.phone;
//     let d="outerdelivery-"+"0"+customer.phone;
//     console.log(d);
//     console.log(a);
//     if(status==0){
//         customer.status=status
//         document.getElementById(b).style.display="none";
//         document.getElementById(c).style.display="none";
//         document.getElementById(d).innerHTML=`                        
//         <div id="deliver-${customer.phone}" class="deliver" onclick="changedelivery(${customer.phone})">delivered</div>
//         <div class="Delivering" id="delivering-${customer.phone}" onclick="newstatus(${customer.phone},${1})">
//           delivering  
//         </div>
//         <div class="Delivered" id="delivered-${customer.phone}" onclick="newstatus(${customer.phone},${0})">
//           delivered
//         </div>`;
//     }
//     else if(status==1){
//       customer.status=status
//       document.getElementById(b).style.display="none";
//       document.getElementById(c).style.display="none";
//       document.getElementById(d).innerHTML=`                        
//       <div id="deliver-${customer.phone}" class="deliver" onclick="changedelivery(${customer.phone})">delivering</div>
//       <div class="Delivering" id="delivering-${customer.phone}" onclick="newstatus(${customer.phone},${1})">
//         delivering  
//       </div>
//       <div class="Delivered" id="delivered-${customer.phone}" onclick="newstatus(${customer.phone},${0})">
//         delivered
//       </div>`;
//     }
// }
function addaccount(phone){
  let Customer=JSON.parse(localStorage.getItem("users"));
  Customer.forEach(customer=>{
    if(customer.phone==phone){
      const name=document.getElementById("nameofkh").value.trim();
      const address=document.getElementById("addressofkh").value.trim();
      const phone=document.getElementById("phoneofkh").value.trim();
      const email=document.getElementById("emailofkh").value.trim();
      const gender=document.getElementById("genderofkh").value.trim();
      const password=document.getElementById("passofkh").value.trim();
      if(!name){
        alert("bạn chưa nhập đủ form");
        return;
      }
      if(!address){
        alert("bạn chưa nhập đủ form");
        return;
      }
      if(!phone){
        alert("bạn chưa nhập đủ form");
        return;
      }
      if(!email){
        alert("bạn chưa nhập đủ form");
        return;
      }
      if(!gender){
        alert("bạn chưa nhập đủ form");
        return;
      }
      if(!password){
        alert("bạn chưa nhập đủ form");
        return;
      }
      
    }
  })
}
function printinfor(page) {

  let Customer = JSON.parse(localStorage.getItem("users"));

  const start = (page-1) * 7;
  const end = start + 7;
  const newCustomer = Customer.slice(start, end);
  document.getElementById("container4").innerHTML = "";
  document.getElementById("container4").innerHTML = `<div class="clientouter" id="clientouter">
        <div>Tên khách hàng</div>
        <div>Số điện thoại</div>
        <div class="Thehide">Email</div>
    </div>`;
  newCustomer.forEach((Customer) => {
    const clientouterr = `<div class="clientouter" id="clientouter-${Customer.phone}">
            <div>${Customer.name}</div>
            <div>${Customer.phone}</div>
            <div class="Thehide">${Customer.email}</div>
            <div></i> <i class="fa-solid fa-key" id="khoa-${Customer.phone}" onclick="hienkhoa('${Customer.phone}')"></i> <i class="fa-regular fa-pen-to-square edit"  onclick="editclient('${Customer.phone}')"></i> <i id="show" class="fa-solid fa-angle-down angle" onclick="printinfororder('${Customer.phone.toString()}')"></i></div>
        </div>`;
        document.getElementById("container4").innerHTML += clientouterr;
    const a = "khoa-" + Customer.phone;
    if (Customer.status == 1) {
      document.getElementById(a).style.color = "#bcbcbc";
    }
    if (Customer.status == 0) {
      document.getElementById(a).style.color = "#62c7ff";
    }
  });
}

function closedkhoa() {
  document.getElementById("khoaclient").style.display = "none";
}
function khoanguoidung(phone) {
  let Customer = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < Customer.length; i++) {
    if (Customer[i].phone == phone) {
      Customer[i].status = 0;
      localStorage.setItem('users', JSON.stringify(Customer));
      // const a = "khoa-" + "0"+phone;
      const a = "khoa-" +phone;
      document.getElementById(a).style.color = "#62c7ff";
      alert("đã bỏ khóa");
    }
  }
}
function search() {
  let Customer = JSON.parse(localStorage.getItem("users"));
  let valuesearchinput = document.getElementById("search").value.toUpperCase();
  if (valuesearchinput == "") {
    printinfor(1);
    return 0;
  }
  let namesearch = Customer.filter((Customer) => {
    return Customer.name.toUpperCase().includes(valuesearchinput);
  });

  let emailsearch = Customer.filter((Customer) => {
    return Customer.email.toUpperCase().includes(valuesearchinput);
  });

  let phonesearch = Customer.filter((Customer) => {
    return Customer.phone.includes(valuesearchinput);
  });

  let newarray = [];
  let uniqueRanks = new Set();

  namesearch.forEach((Customer) => {
    uniqueRanks.add(Customer.phone);
    newarray.push(Customer);
  });

  emailsearch.forEach((Customer) => {
    if (!uniqueRanks.has(Customer.phone)) {
      uniqueRanks.add(Customer.phone);
      newarray.push(Customer);
    }
  });

  phonesearch.forEach((Customer) => {
    if (!uniqueRanks.has(Customer.phone)) {
      uniqueRanks.add(Customer.phone);
      newarray.push(Customer);
    }
  });
  printsearcharray(newarray);
}
function search(){

}
function printsearcharray(newarray) {
    document.getElementById("container4").innerHTML = "";
    document.getElementById("container4").innerHTML = `            
    <div class="clientouter" id="clientouter">
        <div>Tên khách hàng</div>
        <div>Số điện thoại</div>
        <div>Email</div>
    </div>`;
  newarray.forEach((Customer) => {
    const clientouterr = `<div class="clientouter" id="clientouter-${Customer.phone}">
            <div>${Customer.name}</div>
            <div>${Customer.phone}</div>
            <div class="Thehide">${Customer.email}</div>
            <div><i class="fa-solid fa-key" id="khoa-${Customer.phone}" onclick="hienkhoa('${Customer.phone}')"></i> <i class="fa-regular fa-pen-to-square edit"  onclick="editclient('${Customer.phone}')"></i> <i id="show" class="fa-solid fa-angle-down angle" onclick="printinfororder('${Customer.phone.toString()}')"></i></div>
        </div>`;
        document.getElementById("container4").innerHTML += clientouterr;
    const a = "khoa-" + Customer.phone;
    if (Customer.status == 1) {
      document.getElementById(a).style.color = "#bcbcbc";
    }
    if (Customer.status == 0) {
      document.getElementById(a).style.color = "#62c7ff";
    }
  });
}
function hienkhoa(phone) {
  let Customer=JSON.parse(localStorage.getItem("users"));
  document.getElementById("khoaclient").style.display = "flex";
  let hienkh = document.querySelector(".printkh");
  hienkh.innerHTML="";
  document.getElementById("contentkhoa").innerHTML = "";
  Customer.forEach(customer=>{
    if(customer.phone==phone){
      customer.lichsuMuaHang.forEach(lichsu=>{
        lichsu.giohang.forEach(product=>{
          if(customer.status==0){
            document.getElementById("contentkhoa").innerHTML="";
            const creatediv = document.createElement("div");
            creatediv.innerHTML = `
                        <div><div class="TheHide">Người dùng sẽ bị khóa cho đến khi admin mở lại</div></div>
                        <label for="inputkhoand">Hãy nhập lý do khóa người dùng : </label> 
                        <input type="text" id="inputkhoand" placeholder="Enter"> 
                        <input type="submit" id="submitkhoa" onclick="submitkhoa('${customer.phone.toString()}')"><br>
                    `;
            document.getElementById("contentkhoa").appendChild(creatediv);
          }
          else if (customer.status == 1) {
            document.getElementById("contentkhoa").innerHTML="";
            document.getElementById("contentkhoa").innerHTML = `
                        <div>Bỏ khóa người dùng  
                        <input type="button" onclick="khoanguoidung('${phone}')" class="bokhoa" value="click"></div>
                        Lý do khóa : ${customer.reasonkhoa}:
                    `;
          }
        })
      })
    }
  })
  for (let i = 0; i < Customer.length; i++) {
    if (Customer[i].phone == phone) {
      // if (Customer.status == 0) {
      //   document.getElementById("contentkhoa").innerHTML="";
      //   const creatediv = document.createElement("div");
      //   creatediv.innerHTML = `
      //               <div>Người dùng sẽ bị khóa cho đến khi admin mở lại</div>
      //               <label for="inputkhoand">Hãy nhập lý do khóa người dùng: </label> 
      //               <input type="text" id="inputkhoand" placeholder="Enter"> 
      //               <input type="submit" id="submitkhoa" onclick="submitkhoa('${Customer[i].phone}')"><br>
      //           `;
      //   document.getElementById("contentkhoa").appendChild(creatediv);
      // } 
      // else if (Customer.status == 1) {
      //   document.getElementById("contentkhoa").innerHTML="";
      //   document.getElementById("contentkhoa").innerHTML = `
      //               <div>Bỏ khóa người dùng  
      //               <input type="button" onclick="khoanguoidung('${phone}')" class="bokhoa" value="click"></div>
      //           `;
      // }      
      let creatediv = document.createElement("div");
      creatediv.innerHTML = `
                <div>${Customer[i].name}</div>
                <div class="theHide">${Customer[i].phone}</div>
                <div>${Customer[i].address}</div>
                <div>${Customer[i].email}</div>
            `;
      hienkh.appendChild(creatediv);

      document.querySelector(".printorderkh").innerHTML="";
        if(Customer[i].lichsuMuaHang){
          Customer[i].lichsuMuaHang.forEach(lichsu=>{
            if(lichsu.giohang){
              lichsu.giohang.forEach(product=>{
                const orderDiv = document.createElement("div");
                orderDiv.innerHTML = `
                              <div class="theHide">${product.id}</div>
                              <div>${product.ten}</div>
                              <div>${product.loai}</div>
                              <div>${lichsu.ngaydat}</div>
                          `;
                document.querySelector(".printorderkh").appendChild(orderDiv);
              })
            }
          })
        }
    }
  }
  // if(document.getElementById("submitkhoa")){
  //   const submit = document.getElementById("submitkhoa");
  //   submit.addEventListener("click", function(event) {
  //       const reason = document.getElementById("inputkhoand").value.trim();
  //       if (!reason) {
  //           alert("Bạn chưa nhập lý do khóa người dùng");
  //           return;
  //       }
  //       for (let i = 0; i < Customer.length; i++) {
  //           if (Customer[i].phone == phone) {
  //               console.log("heheh");
  //               Customer[i].status = 1; 
  //               Customer[i].reasonkhoa = reason;
  //               break;
  //           }
  //       }
  //       alert("đã khóa người dùng");
  //   });
  // }

}

function submitkhoa(phone) {
  let Customer = JSON.parse(localStorage.getItem("users"));
  const reason = document.getElementById("inputkhoand").value.trim();
  if (!reason) {
    alert("Bạn chưa nhập lý do khóa người dùng");
    return;
  }
  for (let i = 0; i < Customer.length; i++) {
    if (Customer[i].phone == phone) {
      let a="khoa-"+phone;
      document.getElementById(a).style.color="#bcbcbc"
      Customer[i].status = 1;
      localStorage.setItem('users', JSON.stringify(Customer));
      Customer[i].reasonkhoa = reason;
      alert("đã khóa người dùng");
      break;
    }
  }
  localStorage.setItem('users', JSON.stringify(Customer));
}
let currentpage;
function nutphantrang() {
  let Customer = JSON.parse(localStorage.getItem("users"));
  const slnutphantrang = Math.ceil(Customer.length / 7);
  const nutphantrangouterNode = document.getElementById("phantrangouter");
  for (let i = 1; i <= slnutphantrang; i++) {
    const nutphantrangNode = document.createElement("span");
    nutphantrangNode.innerText = i;
    nutphantrangNode.className = "nutphantrang";
    nutphantrangNode.onclick = function () {
      currentpage = i;
      printinfor(currentpage);
      customnutphantrang(currentpage);
    };
    nutphantrangouterNode.appendChild(nutphantrangNode);
  }
}
function customnutphantrang(page) {
  const nutphantrangNode = document.querySelectorAll(".nutphantrang");
  nutphantrangNode.forEach((nut) => {
    nut.classList.remove("active");
  });
  nutphantrangNode[page-1].classList.add("active");
}


currentpage=1;
printinfor(1);
nutphantrang();


//================= thoong tin admin ==========
function showAdmin(){
  var adm = document.getElementById('ttadmin');
    
    if (adm.style.display === "none" ) {
        adm.style.display = "flex";  
        hienThiThongTinAdmin();
    } else {
        adm.style.display = "none";  
    }
}

function closettAdmin(){
  showAdmin();
}

function hienThiThongTinAdmin(){
  let ad = JSON.parse(localStorage.getItem("admin"));
  if (ad) {
    document.getElementById('ad-taikhoan').value=ad.name;
    document.getElementById('ad-sdt').value=ad.phone;
    document.getElementById('ad-chinhanh').value=ad.address;
  } else {
    alert('Không có dữ liệu admin');
  }
}


function luuAdminTT(){
  let ad = JSON.parse(localStorage.getItem("admin"));
  let tenad=document.getElementById('ad-taikhoan').value;
  let sdtad=document.getElementById('ad-sdt').value;
  let chinhanhad=document.getElementById('ad-chinhanh').value;
  let check = JSON.parse(localStorage.getItem("users"));
  for(let i = 0 ; i<check.length ; i++){
    if(check[i].phone == sdtad){
      alert("Số điện thoại đã tồn tại!");
      document.getElementById('ad-sdt').value = ad.phone;
      sdtad = ad.phone;
      return 0;
    }
  }

  if(sdtad == ""){
    document.getElementById('ad-sdt').value = ad.phone;
    sdtad = ad.phone;
  }
  if(tenad == ""){
    document.getElementById('ad-taikhoan').value = ad.name;
    tenad = ad.name;
  }

  ad.name=tenad;
  ad.phone=sdtad;
  ad.address=chinhanhad;
  document.querySelector(".admin_name").innerHTML = ad.name;
  document.querySelector(".admin_phone").innerHTML = `Số điện thoại: ${ad.phone}`;
  document.querySelector(".admin_address").innerHTML = `Chi nhánh: ${ad.address}`;
  localStorage.setItem('admin', JSON.stringify(ad));
  alert("Cập nhật thông tin thành công.")
}



function doiAdminMk() {
  let ad = JSON.parse(localStorage.getItem("admin"));
  let adminMk = document.getElementById('ad-old').value;
  let adminMkMoi1 = document.getElementById('ad-new').value;
  let adminMkMoi2 = document.getElementById('ad-newnew').value;

  if (ad) {
    if (ad.password === adminMk) {
      if (adminMkMoi1 === adminMkMoi2) {
        ad.password = adminMkMoi1;
        localStorage.setItem('admin', JSON.stringify(ad));
        alert('Đổi mật khẩu thành công.');
      } else {
        alert('Mật khẩu mới không trùng khớp!');
      }
    } else {
      alert('Mật khẩu cũ không đúng!');
    }
  } else {
    alert('Không tìm thấy dữ liệu admin trong localStorage!');
  }

  

}




// hienThiThongTinAdmin();
