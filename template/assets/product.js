// ====

fetch('./product', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    if (data.status==200) {
        const productContainer = document.getElementById('product-container');
        data.data.product.forEach(product => {
            let productHTML =`
                <div class="grid__column3" data-category="${product.category}" data-id="${product.id}">
                    <a href="javascript:void(0)" class="home-product-item">
                        <div class="product-img">   
                            <img src="image/${product.thumbnail}" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${product.name}</h3>
                            <span class="product-prices">${product.price === 0 ? 'Hàng tặng' : product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                        </div>
                    </a>
                </div>
            `;
            productContainer.innerHTML += productHTML;
        });
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
    }
})
.catch(error => {
});


// ====

// Hàm để hiển thị thông tin chi tiết sản phẩm khi click vào sản phẩm
function showProductDetail(productId) {
    // Tìm sản phẩm tương ứng trong mảng products
    fetch(`./product?id=${productId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status == 200) {
            let product = data.data.product[0]
            console.log("Thông tin sản phẩm:", product);
            // Cập nhật thông tin vào div chi tiết sản phẩm
            document.getElementById('product-name').innerText = product.name;
            document.getElementById('product-price').innerText = product.price + '₫';
            document.getElementById('productId').innerText = productId;

            // Hiển thị mô tả với các thẻ HTML
            document.getElementById('product-description').innerHTML = product.description;
            // document.getElementById('product-main-img').src = product.images[0];

            // // Hiển thị các ảnh nhỏ (nếu có)
            // const smallImgContainer = document.getElementById('product-small-imgs');
            // smallImgContainer.innerHTML = '';
            // product.images.forEach(imgSrc => {
            //     // Tạo div nhỏ để bọc ảnh
            //     const smallImgCol = document.createElement('div');
            //     smallImgCol.classList.add('small_img-col');
            //     // Tạo thẻ img và thêm ảnh
            //     const imgElement = document.createElement('img');
            //     imgElement.classList.add('small_img');
            //     imgElement.src = imgSrc;
            //     // Thêm ảnh vào div nhỏ
            //     smallImgCol.appendChild(imgElement);
            //     // Thêm div này vào container
            //     smallImgContainer.appendChild(smallImgCol);
                
            // });
            // //hàm chuyển ảnh nhỏ sang ảnh chính
            // let mainImg = document.querySelector('.main_img');
            // let smallImgs = document.querySelectorAll('.small_img');

            // smallImgs.forEach((img) => {
            //     img.onclick = function() {
            //         console.log('Thumbnail clicked:', img.src);
            //         mainImg.src = img.src;
            //     }
            // })

            // Hiển thị div chi tiết sản phẩm
            let detail = document.querySelector('.detail_product');
            detail.style.display = 'block';
            document.querySelector('.product__body i').onclick = function() {
                detail.style.display = 'none';
            }
        }
    });

}
