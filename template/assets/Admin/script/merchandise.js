function stripHtml(html) {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = html;
    return temporaryElement.textContent || temporaryElement.innerText || "";
}

document.addEventListener("DOMContentLoaded", () => {
    const rowsPerPage = 5; // Number of rows to show per page
    let currentPage = 1;
    let products = [];
    let editingItemIndex = null;

    // Load JSON data from `data.json`
    function loadData() {
        try {
            // Embedded JSON data
            products = JSON.parse(localStorage.getItem("products"));
            filteredProducts=null;
            displayPaginationButtons();
            displayPage(currentPage);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }
    // Function to display the product data for a specific page
    function displayPage(page) {
        const mainContent = document.getElementById("main-content");
        mainContent.innerHTML = ""; // Clear existing content
    
        const dataToDisplay = filteredProducts || products; // Use filtered or original products
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = Math.min(startIndex + rowsPerPage, dataToDisplay.length);
    
        // Generate rows for the current pag
        for (let i = startIndex; i < endIndex; i++) {
            const product = dataToDisplay[i];
            const productDiv = document.createElement("div");
            productDiv.classList.add("table");
            let hi;
            if(product.category == "watch"){
                hi = "Đồng hồ";
            }
            if(product.category == "ring"){
                hi = "Nhẫn";
            }
            if(product.category == "necklace"){
                hi = "Vòng cổ";
            }
            if(product.category == "bracelet"){
                hi = "Vòng tay";
            }
            if(product.category == "earring"){
                hi = "Khuyên tai";
            }
            productDiv.innerHTML = `
                <img src="${product.images[0]}" width="20%">
                <div class="product-info">
                    <span>ID: ${product.id}</span>
                    <span>Tên sản phẩm: ${product.name}</span>
                    <span>Loại sản phẩm: ${hi}</span>
                    <span>Giá tiền: ${formatVND(product.price)}</span>
                    <span>Mô tả: ${stripHtml(product.description)}</span>
                </div>
                <div class="button-group">
                    <button class="edit-buttons1" onclick="openEditBlock(${i})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="edit-buttons2" onclick="confirmDelete(${i})"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            mainContent.appendChild(productDiv);
        }
    }
    
    document.getElementById("searchInput").addEventListener("input", dynamicSearch);

    function dynamicSearch() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
    
        // Handle ID search if input is a number
        const isNumeric = !isNaN(searchInput) && searchInput.trim() !== "";
    
        filteredProducts = products.filter(product => {
            if (isNumeric) {
                // Match numeric IDs
                return product.id.toString().includes(searchInput);
            } else {
                // Match other fields (name, category, description)
                return product.name.toLowerCase().includes(searchInput) ||
                       product.category.toLowerCase().includes(searchInput) ||
                       product.description.toLowerCase().includes(searchInput);
            }
        });
    
        // If search input is empty, reset to original products
        if (searchInput === "") {
            filteredProducts = null;
        }
    
        // Reset pagination and display filtered results
        currentPage = 1;
        displayPaginationButtons(filteredProducts || products);
        displayPage(currentPage);
    }
    
    // Function to handle search functionality
    function searchProducts() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const searchFilter = document.getElementById("searchFilter").value;
    
        // Handle case where search filter is not valid
        if (searchFilter === "0" || !searchFilter) {
            alert("Vui lòng chọn giá trị để lọc trước khi tìm kiếm theo giá trị đã lọc");
            return;
        }
    
        const isNumeric = !isNaN(searchInput) && searchInput.trim() !== "";
    
        // Filter products based on the search criteria
        filteredProducts = products.filter(product => {
            if (searchFilter === "id" && isNumeric) {
                // Match numeric IDs
                return product.id.toString().includes(searchInput);
            } else {
                // Match selected filter field
                const value = product[searchFilter]?.toString().toLowerCase();
                return value?.includes(searchInput);
            }
        });
    
        if (filteredProducts.length === 0) {
            alert("Không có giá trị nào trung với giá trị bạn muốn tìm");
        }
    
        // Update pagination and display the first page of filtered results
        currentPage = 1;
        displayPaginationButtons(filteredProducts);
        displayPage(currentPage);
    }




    function sortProducts() {
        const sortFilter = document.getElementById("searchFilter").value;
    
        // Reset to original state if "Sort by: " is selected
        if (sortFilter === "0") {
            filteredProducts = null; // Reset any filtered products
            displayPaginationButtons(products); // Reset pagination
            displayPage(currentPage); // Show original products
            return;
        }
    
        // Sorting logic
        const dataToSort = filteredProducts || products; // Sort filtered or all products
        switch (sortFilter) {
            case "id":
                dataToSort.sort((a, b) => b.id - a.id);
                break;
            case "name":
                dataToSort.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "category":
                dataToSort.sort((a, b) => a.category.localeCompare(b.category));
                break;
            case "low-price":
                dataToSort.sort((a, b) => a.price - b.price);
                break;
            case "high-price":
                dataToSort.sort((a, b) => b.price - a.price);
                break;
            case "recent":
                dataToSort.sort((a, b) => b.id - a.id);
                break;
            case "description":
                dataToSort.sort((a, b) => a.description.localeCompare(b.description));
                break;
            default:
                return;
        }
    
        // Re-render sorted products
        currentPage = 1;
        displayPaginationButtons(dataToSort);
        displayPage(currentPage);
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        loadData(); // Ensure products are loaded
        document.getElementById("searchFilter").addEventListener("change", sortProducts);
    });
    
    document.getElementById("searchSubmitButton").addEventListener("click", () => {
        searchProducts();
        sortProducts();
    });
    document.getElementById("searchFilter").addEventListener("change", () => {
        sortProducts(); // Trigger sorting
    });
    
    // Function to display filtered results
    function displayFilteredResults(filteredProducts) {
        const mainContent = document.getElementById("main-content");
        mainContent.innerHTML = ""; // Clear existing rows

        filteredProducts.forEach((product, index) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("table");
            let hi;
            if(product.category == "watch"){
                hi = "Đồng hồ";
            }
            if(product.category == "ring"){
                hi = "Nhẫn";
            }
            if(product.category == "necklace"){
                hi = "Vòng cổ";
            }
            if(product.category == "bracelet"){
                hi = "Vòng tay";
            }
            if(product.category == "earring"){
                hi = "Khuyên tai";
            }
            productDiv.innerHTML = `
                <img src="${product.images[0]}" width="20%">
                <div class="product-info">
                    <span>ID: ${product.id}</span>
                    <span>Tên sản phẩm: ${product.name}</span>
                    <span>Loại sản phẩm: ${hi}</span>
                    <span>Giá tiền: ${formatVND(product.price)}</span>
                    <span>Mô tả: ${product.description}</span>
                </div>
                <div class="button-group">
                    <button class="edit-buttons1" onclick="openEditBlock(${i})"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="edit-buttons2" onclick="confirmDelete(${i})"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            mainContent.appendChild(productDiv);
        });
    }

    // Function to display pagination buttons
    function displayPaginationButtons(data = null) {
        const buttonGroup = document.querySelector("#Display .merchandise .pagination-buttons");
        buttonGroup.innerHTML = ""; // Clear existing buttons

        // Use the provided data (filtered or original) to calculate total pages
        const dataToPaginate = data || (filteredProducts || products);
        const totalPages = Math.ceil(dataToPaginate.length / rowsPerPage);

        // Create Previous button
        // const prevButton = document.createElement("button");
        // prevButton.classList.add("prev-page");
        // prevButton.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
        // prevButton.addEventListener("click", () => {
        //     if (currentPage > 1) {
        //         currentPage--;
        //         displayPage(currentPage);
        //     }
        // });
        // buttonGroup.appendChild(prevButton);

        // Create page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.classList.add("page-button");
            pageButton.textContent = i;
            pageButton.addEventListener("click", () => {
                currentPage = i;
                displayPage(currentPage);
            });
            buttonGroup.appendChild(pageButton);
        }

        // Create Next button
        // const nextButton = document.createElement("button");
        // nextButton.classList.add("next-page");
        // nextButton.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
        // nextButton.addEventListener("click", () => {
        //     if (currentPage < totalPages) {
        //         currentPage++;
        //         displayPage(currentPage);
        //     }
        // });
        // buttonGroup.appendChild(nextButton);
    }
    loadData();

    // Function to toggle search block visibility
    document.getElementById("searchButton").addEventListener("click", () => {
        const searchBlock = document.getElementById("searchBlock");
        searchBlock.style.display = searchBlock.style.display === "none" ? "block" : "none";
    });

    // Trigger search when the search button is clicked
    document.getElementById("searchSubmitButton").addEventListener("click", searchProducts);

    // Function to open the Edit block (for editing or adding an item)
    window.openEditBlock = function(index = null) {
        editingItemIndex = index;
        const overlay = document.getElementById("modalOverlay");
        const editBlock = overlay.querySelector(".DisplayEditItemBlock");
    
        overlay.style.display = "block"; // Show overlay
        editBlock.style.display = "flex"; // Show the block
    
        if (index !== null) {
            const product = products[index];
            // document.getElementById('idInput').value = product.id;
            document.getElementById('nameInput').value = product.name;
            document.getElementById('categoryInput').value = product.category;
            document.getElementById('priceInput').value = product.price;
            document.getElementById('descInput').value = stripHtml(product.description);
            document.getElementById('uploadedImage').src = product.images[0];
            document.getElementById('uploadedImage').style.display = 'block';
            document.getElementById('uploadText').style.display = 'none';
        } else {
            document.getElementById('itemForm').reset();
            document.getElementById('uploadedImage').style.display = 'none';
            document.getElementById('uploadText').style.display = 'block';
        }
    };
    

    // Function to close the Edit block
    window.closeEditBlock = function() {
        const overlay = document.getElementById("modalOverlay");
        overlay.style.display = "none"; // Hide overlay
    };
    

    // Function to validate and update/add the item
    window.updateItem = function() {
        let id;
        let name = document.getElementById('nameInput').value.trim();
        let category = document.getElementById('categoryInput').value;
        let price = document.getElementById('priceInput').value.trim();
        let desc = document.getElementById('descInput').value.trim();
        let imageUploaded = document.getElementById('uploadedImage').src;

     

        if (editingItemIndex !== null) {
            // Update existing item
            let gia;
            if(name == ""){
                name =  products[editingItemIndex].name;
            }
            if(category == ""){
                category ==  products[editingItemIndex].category;
            }
            if(price == ""){
                price = parseInt(products[editingItemIndex].price);
                console.log(price , typeof(price));
            }
            if(desc == ""){
                desc = products[editingItemIndex].description;
            }
            if(imageUploaded == ""){
                imageUploaded = products[editingItemIndex].images[0];
            }
            gia = parseInt(price);
            id =  parseInt(products[editingItemIndex].id);
            products[editingItemIndex] = {
                id,
                name,
                category,
                price: gia, // Use lowercase 'price'
                description: desc,// Use lowercase 'description'
                images: [imageUploaded],
            };
            localStorage.setItem("products", JSON.stringify(products));
            displayPage(currentPage);
            alert('Sản phẩm cập nhật thành công');
        } else {
            // Add a new item
            if (name == "" || price == "" || desc == "" || imageUploaded == "") {
                alert('Vui lòng thêm đầy đủ thuộc tính');
                return 0;
            }
            let max = 0;
            for(let i = 0 ; i<products.length;i++){
                if(max < products[i].id) max = products[i].id;
            }
            let ma = parseInt(max) + 1;
            id = parseInt(ma);
            let gia = parseInt(price);
            price = gia;
            products.push({
                id,
                name,
                category,
                price, // Use lowercase 'price'
                description: desc, // Use lowercase 'description'
                images: [document.getElementById('uploadedImage').src]
            });
            localStorage.setItem("products", JSON.stringify(products));
            alert('Sản phầm đã được thêm thành công');
        }
        loadData();
        displayPage(currentPage);
        closeEditBlock();
    };

    // Function to confirm deletion of a product
    window.confirmDelete = function (index) {
        const dataToDisplay = filteredProducts || products; // Use filtered data if available
        const productToDelete = dataToDisplay[index]; // Identify product to delete
    
        // Find the product in the original list
        const originalIndex = products.findIndex(product => product.id === productToDelete.id);
        if (originalIndex === -1) {
            alert("Không tìm thấy sản phẩm");
            return;
        }
    
        // Confirm deletion
        const confirmation = confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${productToDelete.name}"?`);
        if (confirmation) {
            products.splice(originalIndex, 1); // Remove from original array
            if (filteredProducts) {
                filteredProducts.splice(index, 1); // Remove from filtered array
            }
            localStorage.setItem("products" , JSON.stringify(products));
            // Update UI
            displayPaginationButtons(filteredProducts || products);
            displayPage(currentPage);
        }
    };
    function confirmDelete(index) {
        const dataToDisplay = filteredProducts || products; // Use filtered products if active
        const productToDelete = dataToDisplay[index]; // Get the product to delete
    
        // Find the actual index in the original `products` array
        const originalIndex = products.findIndex(product => product.id === productToDelete.id);
    
        // Handle if product is not found (edge case)
        if (originalIndex === -1) {
            alert("Error: Could not find the product in the original list.");
            return;
        }
    
        // Confirm deletion
        const confirmation = confirm(`Are you sure you want to delete "${productToDelete.name}"?`);
        if (confirmation) {
            // Delete from original products array
            products.splice(originalIndex, 1);
    
            // If using filteredProducts, delete from the filtered list as well
            if (filteredProducts) {
                filteredProducts.splice(index, 1);
            }
    
            // Re-render the updated list
            displayPaginationButtons(filteredProducts || products);
            displayPage(currentPage);
        }
    }
    // Load initial data and set up pagination
    loadData();
});

// Event listener for the image file input
document.getElementById('imageInput').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('uploadedImage').src = e.target.result;
            document.getElementById('uploadedImage').style.display = 'block';
            document.getElementById('uploadText').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

//========================= thông báo đơn hàng mới ============================

function hienthiTT() {
    var tb = "";
    var tongDHM = 0;
    var donhang = JSON.parse(localStorage.getItem('donmoi'));
    if(donhang == null){
        alert("Chưa có đơn hàng mới nào");
        return 0;
    }
    if (donhang && donhang.length > 0){
        for (let i = donhang.length - 1; i >= 0; i--) {

            //        let thanhtien = gia * parseInt(giohang[i].soLuong);
                    if (donhang[i].ngayduyet =='0'){
                        // var orderDate = new Date(donhang[i].ngaydat);
                        // var nowDate = new Date();
                        // var timeD = nowDate - orderDate; 
                        // var days = Math.floor(timeD / (100000 * 3600 * 24)); 

                            tb += '<tr>' +
                            '<td>' + donhang[i].id + '</td>' +
                            '<td>' + donhang[i].tenKH + '</td>' +
                            '<td>' + donhang[i].tongtien.toLocaleString() + '</td>' +
                            '<td>' + donhang[i].ngaydat + '</td>' +
                            '</tr>';
                            tongDHM++;
                        }
                    
                    
                }
    }
    
    
    document.getElementById('donHangMoi').innerHTML = tb;
    document.getElementById('noti').innerHTML = tongDHM;
    if (tongDHM === 0) {
        document.getElementById('donHangMoi').innerHTML = "<tr><td colspan='4'>Không có đơn hàng mới.</td></tr>";
        document.getElementById('noti').style.backgroundColor='green';
    }
    else{
        document.getElementById('noti').style.backgroundColor='red';
    }

}

function showTB() {
    var donHangMoi = document.getElementById('neworder');
    
    if (donHangMoi.style.display == "none" ) {
        donHangMoi.style.display = "block";  
        hienthiTT();  
    } else {
        donHangMoi.style.display = "none";  
    }
}

// Gọi hàm hienthiTT để cập nhật thông tin về số lượng đơn mới ngay khi trang tải
window.onload = () => {
    hienthiTT();  
}