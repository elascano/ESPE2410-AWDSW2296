function validateProductForm(event) {
    const expiryDate = document.getElementById("expiryDate").value;
    const expiryDateObj = new Date(expiryDate);
    const today = new Date();
    if (expiryDateObj <= today) {
        alert("The expiry date must be a future date.");
        event.preventDefault();
        return false;
    }
    return true; 
}
