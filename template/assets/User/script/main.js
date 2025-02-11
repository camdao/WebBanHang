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



// Lắng nghe sự kiện click trên các sản phẩmso
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


//=================================================================================================================================================================================================

