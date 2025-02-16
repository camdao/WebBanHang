// ====
function showProduct() {
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
                                <img src="${product.thumbnail}" alt="${product.name}">
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
                    const productId = item.parentElement.getAttribute('data-id');

                    if (productId){
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
}
// ====
function showProductDetail(productId) {
    fetch(`./product?id=${productId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status == 200) {
            let product = data.data.product;

            document.getElementById('product-name').innerText = product.name;
            document.getElementById('product-price').innerText = product.price + '₫';
            document.getElementById('productId').innerText = productId;
            document.getElementById('product-description').innerHTML = product.description;
            document.getElementById('product-main-img').src = product.thumbnail;
            const smallImgContainer = document.getElementById('product-small-imgs');
            smallImgContainer.innerHTML = '';
            product.image.forEach(imgSrc => {
                const smallImgCol = document.createElement('div');
                smallImgCol.classList.add('small_img-col');
                const imgElement = document.createElement('img');
                imgElement.classList.add('small_img');
                imgElement.src = imgSrc.path;
                smallImgCol.appendChild(imgElement);
                smallImgContainer.appendChild(smallImgCol);
                
            });
            let mainImg = document.querySelector('.main_img');
            let smallImgs = document.querySelectorAll('.small_img');

            smallImgs.forEach((img) => {
                img.onclick = function() {
                    console.log('Thumbnail clicked:', img.src);
                    mainImg.src = img.src;
                }
            })

            let detail = document.querySelector('.detail_product');
            detail.style.display = 'block';
            document.querySelector('.product__body i').onclick = function() {
                detail.style.display = 'none';
            }
        }
    });

}
