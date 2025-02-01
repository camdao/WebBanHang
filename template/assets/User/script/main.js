//=================== Slider====================
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {    
    if ( (active + 1) > lengthItems )
        active = 0;
    else 
        active += 1;

    reloadSlider();
}

prev.onclick = function() {
    if ( (active - 1) < 0 )
        active = lengthItems;
    else    
        active -= 1;

    reloadSlider();
}

let refreshSlider = setInterval(() => {next.click()}, 7000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 7000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
});



//================= pagination==================

// Chuyển mảng sản phẩm thành JSON và lưu vào localStorage
// Lấy mảng sản phẩm từ localStorage và chuyển lại thành mảng
const savedProducts = JSON.parse(localStorage.getItem('products'));

if (savedProducts) {
    // Nếu dữ liệu có sẵn trong localStorage, sử dụng nó
    Product = savedProducts;
} else {
    // Nếu không có dữ liệu, bạn có thể sử dụng mảng sản phẩm mặc định hoặc gọi API để lấy dữ liệu
    Product = []; // hoặc gọi API
}

let current = 0;

// ==================product==============
document.addEventListener('DOMContentLoaded', () => {
// let products =Array.from(document.querySelectorAll('.grid__column3'));
const products = Product;
console.log(products);  
// số sản phẩm mỗi trang
const itemsPerPage = 6;
let filteredProducts = products;

// hiển thị sản phẩm theo trang hien tai
function displayProducts(page, filteredProducts) {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;

    console.log(`Displaying products for page ${page+1}`);
    console.log(`Showing products from index ${start} to ${end - 1}`);

    const productContainer = document.getElementById('product-container');
    const productsToDisplay = filteredProducts.slice(start, end);
    productContainer.innerHTML = '';

//=============== tạo sản phẩm tự động ===============
    productsToDisplay.forEach(product => {
        const productHTML = document.createElement('div');
            productHTML.classList.add('grid__column3');
            productHTML.setAttribute('data-category', product.category);
            productHTML.setAttribute('data-id', product.id);

            productHTML.innerHTML = `
                <a href="#" class="home-product-item">
                    <div class="product-img">
                        <img src="${product.images[0]}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <span class="product-prices">${product.price === 0 ? 'Hàng tặng' : product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                    </div>
                </a>
            `;
            productContainer.appendChild(productHTML);
        });
        addClickEventToProducts()
    // Cập nhật các nút phân trang
    updatePagination(page,filteredProducts);
}
// =========== tìm kiếm sản phẩm lọc theo tên,giá
    function searchProducts() {
        const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
        const priceCheckboxes = document.querySelectorAll('.check-box-list input[type="checkbox"]:checked');
        const activeCategory = document.querySelector('.sub_menu .active a')?.getAttribute('data-category');
        console.log('Từ khóa tìm kiếm:', searchTerm);
        console.log("Category dang active:",activeCategory);

         // Lọc theo loại sản phẩm (nếu có)
        let filteredProducts = activeCategory && activeCategory !== 'all' 
        ? products.filter(product => product.category === activeCategory)
        : products;

        // lọc theo tên
        if (searchTerm){
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
        }

        // lọc theo giá
        if (priceCheckboxes.length > 0) {
            filteredProducts = filteredProducts.filter(product => {
                return Array.from(priceCheckboxes).some(checkbox => {
                    const priceCondition = checkbox.getAttribute('data-price');
                    return eval(priceCondition.replace(/price:product/g, product.price));
                });
            });
        }

        console.log('Sản phẩm đã lọc:', filteredProducts);
        
        // Cập nhật tiêu đề tìm kiếm
        const title = document.querySelector('.title');
        if ((searchTerm === '' && priceCheckboxes.length === 0) || (filteredProducts.length > 0 && searchTerm === '')) {
            title.textContent = 'Tất cả sản phẩm';
        } else  {
            title.textContent = `Kết quả tìm kiếm cho: "${searchTerm}"`;
        }

        if (filteredProducts.length > 0) {
            displayProducts(0, filteredProducts); // Gọi hàm hiển thị sản phẩm
        } else {
            const productContainer = document.getElementById('product-container');
            productContainer.innerHTML = '<p>Không tìm thấy sản phẩm nào phù hợp!</p>';
        }
    }
    const buttonSearch = document.querySelector('.button_search');
    buttonSearch.addEventListener('click',searchProducts);

// ============pagination tự động==============

function updatePagination(page, filteredProducts) {
        // Tính toán tổng số trang dựa trên số sản phẩm đã lọc
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    // Cập nhật số lượng các nút phân trang
    const paginationContainer = document.querySelector('.pagination'); 
    // console.log(paginationContainer);
    
    // Reset nội dung pagination
    paginationContainer.innerHTML = ''; 

            // Tạo lại các phần tử <li> mới với các thẻ <a>(nếu cần)
        for (let numIndex = 0; numIndex < totalPages; numIndex++) {
            const li = document.createElement('li');
            li.classList.add('pagination-item');
            const a = document.createElement('a');
            a.classList.add('page-note');
            a.href = '#';  // Đảm bảo rằng link sẽ không làm trang tải lại
            a.textContent = numIndex + 1;

            // Đặt trang hiện tại
            if (numIndex === page) 
                a.classList.add('current');
            
            // Lắng nghe sự kiện click trên các trang
            a.addEventListener('click', (event) => {
                event.preventDefault();  // Ngăn không cho trang reload
                current = numIndex;  // Cập nhật trang hiện tại
                displayProducts(current, filteredProducts);  // Hiển thị lại sản phẩm
            });

            li.appendChild(a);
            paginationContainer.appendChild(li);
        }


            const nextButton = document.createElement('li');
            nextButton.classList.add('buttonNext');
            nextButton.id = 'Next';

            const aNext = document.createElement('a');
            aNext.classList.add('page-button');
            aNext.href = '#';   
            aNext.innerHTML = '<i class="fa-solid fa-arrow-right-long"></i>';

            // Lắng nghe sự kiện click cho nút Next
            aNext.addEventListener('click', () => {
                if (current < totalPages - 1) {
                    current += 1;
                }
                else 
                    current = 0;
                document.querySelector(".current")?.classList.remove('current');
                paginationContainer.querySelectorAll('.page-note')[current].classList.add('current');
                displayProducts(current, filteredProducts);
            });

            nextButton.appendChild(aNext);
            paginationContainer.appendChild(nextButton);
        
        // Cập nhật lại khả năng kích hoạt nút "Next"
    if (totalPages <= 1) {
        nextButton.style.display = 'none'; // Nếu chỉ có một trang, ẩn nút "Next"
    } else {
        nextButton.style.display = 'block'; // Nếu có nhiều hơn 1 trang, hiển thị nút "Next"
    }
}
// Khởi tạo: hiển thị trang đầu tiên
displayProducts(current,filteredProducts);


//=============== lọc theo sản phẩm==========
let choose = document.querySelectorAll('.sub_menu a');
let categoryTitle = document.querySelector('.tilte-product .title');

choose.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const category = link.getAttribute('data-category');
        const categoryName = link.textContent; 

        // Cập nhật tiêu đề
        if ( category === 'all')
            categoryTitle.textContent = `✨${categoryName} sản phẩm`;
        else    
            categoryTitle.textContent = `✨Sản phẩm ${categoryName}`;

        choose.forEach(item => item.parentElement.classList.remove('active'));
        link.parentElement.classList.add('active');
        console.log(`Category: ${category} is actived`);
         // Lọc sản phẩm và cập nhật phân trang
        chooseProducts(category);
    })
})

function chooseProducts(category) {
     // Lọc sản phẩm theo category
    const filteredProducts = products.filter(product => {
        return category === 'all' || category === product.category;;
    })

    console.log('Filtered products:', filteredProducts);
    current = 0;  // Đặt lại trang hiện tại về trang đầu tiên sau khi lọc
    displayProducts(current, filteredProducts);
}

});

// ==========fix lỗi đề lên nhau khi sử dụng các thanh công cụ

//=================== search ===================
let search = document.querySelector('.navbar_search');

search.addEventListener('click', () => {
    let dropdownsearch= document.querySelector('.navbar_search-dropdown');
    if ( dropdownsearch.style.display === 'block' )
        dropdownsearch.style.display = 'none';
    else{
        dropdownsearch.style.display = 'block';
        let dropdownaccount = document.querySelector('.navbar_user-items');
        dropdownaccount.style.display = 'none';
        let x = document.getElementById('giohang');
        x.style.display = 'none';
    }
})

// =====================account ==================
let account = document.querySelector('.navbar_user');

account.addEventListener('click', () => {
    let dropdownaccount = document.querySelector('.navbar_user-items');
    if ( dropdownaccount.style.display === 'block' )
        dropdownaccount.style.display = 'none';
    else{
        dropdownaccount.style.display = 'block';
        let dropdownsearch= document.querySelector('.navbar_search-dropdown');
        dropdownsearch.style.display = 'none';
        let x = document.getElementById('giohang');
        x.style.display = 'none';
    }
})

// ==============menuicon==========
let menu = document.querySelector('.navbar_two');
let menuButton = document.querySelector('.navbar__menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('navbar__open');
})





//==========================================================================================================================================================================


// Hàm để hiển thị thông tin chi tiết sản phẩm khi click vào sản phẩm
function showProductDetail(productId) {
    // Tìm sản phẩm tương ứng trong mảng products
    const product = Product.find(p => p.id === productId);

    if (product) {
        console.log("Thông tin sản phẩm:", product);
        // Cập nhật thông tin vào div chi tiết sản phẩm
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-price').innerText = product.price + '₫';

        // Hiển thị mô tả với các thẻ HTML
        document.getElementById('product-description').innerHTML = product.description;
        document.getElementById('product-main-img').src = product.images[0];

        // Hiển thị các ảnh nhỏ (nếu có)
        const smallImgContainer = document.getElementById('product-small-imgs');
        smallImgContainer.innerHTML = '';
        product.images.forEach(imgSrc => {
             // Tạo div nhỏ để bọc ảnh
            const smallImgCol = document.createElement('div');
            smallImgCol.classList.add('small_img-col');
            // Tạo thẻ img và thêm ảnh
            const imgElement = document.createElement('img');
            imgElement.classList.add('small_img');
            imgElement.src = imgSrc;
             // Thêm ảnh vào div nhỏ
            smallImgCol.appendChild(imgElement);
            // Thêm div này vào container
            smallImgContainer.appendChild(smallImgCol);
            
        });
        //hàm chuyển ảnh nhỏ sang ảnh chính
        let mainImg = document.querySelector('.main_img');
        let smallImgs = document.querySelectorAll('.small_img');

        smallImgs.forEach((img) => {
            img.onclick = function() {
                console.log('Thumbnail clicked:', img.src);
                mainImg.src = img.src;
            }
        })

         // Hiển thị div chi tiết sản phẩm
        let detail = document.querySelector('.detail_product');
        detail.style.display = 'block';
        document.querySelector('.product__body i').onclick = function() {
            detail.style.display = 'none';
        }
    }else {
        console.error("Không tìm thấy sản phẩm với productId:", productId);
    }
}

// Lắng nghe sự kiện click trên các sản phẩmso
// document.addEventListener('DOMContentLoaded', function () {
function addClickEventToProducts() {
    document.querySelectorAll('.home-product-item').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            // Lấy id sản phẩm từ data-id
            const productId = item.parentElement.getAttribute('data-id');//.closest('.grid__column3')

            if (productId){
                console.log(`Product ID: ${productId}`);
                showProductDetail(parseInt(productId));
            } else {
                console.error('Không tìm thấy data-id cho sản phẩm này!');
            }
        });
    });
    console.log('Trang đã tải xong!');
}
// });


//=============== tạo sản phẩm tự động ===============
const productContainer = document.getElementById('product-container');

Product.forEach(product => {
    let productHTML =`
        <div class="grid__column3" data-category="${product.category}" data-id="${product.id}">
            <a href="#" class="home-product-item">
                <div class="product-img">   
                    <img src="${product.images[0]}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <span class="product-prices">${product.price === 0 ? 'Hàng tặng' : product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                </div>
            </a>
        </div>
    `;
    productContainer.innerHTML += productHTML;
})
console.log(document.querySelectorAll('.grid__column3'));




function hienthi(){
    document.getElementById("dang-nhap").style.display="flex";
}
function hienthii(){
    document.getElementById("dang-ky").style.display="flex";
}
function tatDangNhap(){
    document.getElementById("dang-nhap").style.display="none";
}
function tatDangKy(){
    document.getElementById("dang-ky").style.display="none";
}


function home() {
    const showFull = ["carousel","sp-hot", "sp-watch", "sp-ring", "sp-earrings", "sp-bracelet", "sp-necklace"];
    
    showFull.forEach(id => {
        document.getElementById(id).style.display = "block";
    });
}


function listMenu(abc) {
    const elementsToHide = ["carousel","sp-hot", "sp-watch", "sp-ring", "sp-earrings", "sp-bracelet", "sp-necklace"];

    elementsToHide.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
    const bien = abc.id;
    switch (bien) {
        // case "carousel":
        //     document.getElementById("carousel").style.display = "block";
        //     break;
        case "dong-ho":
            document.getElementById("sp-watch").style.display = "block";
            break;
        case "nhan":
            document.getElementById("sp-ring").style.display = "block";
            break;
        case "khuyen-tai":
            document.getElementById("sp-earrings").style.display = "block";
            break;
        case "vong-tay":
            document.getElementById("sp-bracelet").style.display = "block";
            break;
        case "vong-co":
            document.getElementById("sp-necklace").style.display = "block";
            break;
        default:
            break; 
    }
}




//=================================================================================================================================================================================================






let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); 
showSlide(currentIndex); 




