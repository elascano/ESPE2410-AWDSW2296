// Form Validation Function
function validateForm(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value.trim();
    const productType = document.getElementById("productType").value;
    const price = parseFloat(document.getElementById("price").value);
    const stock = parseInt(document.getElementById("stock").value, 10);
    const description = document.getElementById("description").value.trim();
    const expirationDate = document.getElementById("expirationDate").value;
    const discount = document.getElementById("discount").value;

    // Validate Product Name
    if (productName.length < 2 || productName.length > 50) {
        alert("Product name must be between 2 and 50 characters.");
        return;
    }

    // Validate Product Type
    if (!productType) {
        alert("Please select a product type.");
        return;
    }

    // Validate Price
    if (isNaN(price) || price <= 0) {
        alert("Price must be a positive number.");
        return;
    }

    // Validate Stock
    if (isNaN(stock) || stock < 0) {
        alert("Stock must be a non-negative integer.");
        return;
    }

    // Validate Description
    if (description.length < 10 || description.length > 200) {
        alert("Description must be between 10 and 200 characters.");
        return;
    }

    // Validate Expiration Date
    if (expirationDate) {
        const today = new Date().toISOString().split("T")[0];
        if (expirationDate < today) {
            alert("Expiration date must be in the future.");
            return;
        }
    }

    // Validate Discount
    if (discount && (discount < 0 || discount > 100)) {
        alert("Discount must be between 0 and 100.");
        return;
    }

    alert("Product successfully added to the catalog.");
    // Here, you can add the code to send data to the server or store it locally.
}
