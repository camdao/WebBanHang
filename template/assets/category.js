function loadCategory(){
    fetch('./category', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.status==200) {
            const categoriesContainer = document.getElementById('sub_menu');
            data.data.categories.forEach(category => {
                let categoryHTML =`
                    <li>
                        <a href="#" class="category-link" data-category="${category.id}">${category.name}</a>
                    </li>
                `;
                categoriesContainer.innerHTML += categoryHTML;
            });
        }
    })
    .catch(error => {
    });
}

function filterProducts(categoryId) {
    fetch(`./product?category=${categoryId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status == 200) {
            let productContainer = document.getElementById("product-container");
            productContainer.innerHTML = "";

            data.data.product.forEach((product) => {
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
    .catch((error) => {
        console.error("Error fetching products:", error);
    });
}
