document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('billing-form');
    const productsContainer = document.getElementById('product-container');
    const totalPriceInput = document.getElementById('price');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const successMessage = document.getElementById('success-message');
    let totalPrice = 0;

    emailInput.addEventListener('input', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailError.textContent = '';
        }
    });

    productsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-product')) {
            const productRow = document.createElement('div');
            productRow.classList.add('product-row');
            productRow.innerHTML = `
                <select class="product-dropdown">
                    <option value="" disabled selected>Select a product</option>
                    <option value="10">Chocolates - $10</option>
                    <option value="15">Souvenirs - $15</option>
                    <option value="25">Gift Box - $25</option>
                    <option value="50">Special Bundle - $50</option>
                </select>
                <button type="button" class="delete-product">Delete</button>
            `;
            productsContainer.appendChild(productRow);
        } else if (event.target.classList.contains('delete-product')) {
            const productRow = event.target.closest('.product-row');
            const dropdown = productRow.querySelector('.product-dropdown');
            const selectedValue = parseFloat(dropdown.value) || 0;
            totalPrice -= selectedValue;
            totalPriceInput.value = totalPrice.toFixed(2);
            productRow.remove();
        }
    });

    productsContainer.addEventListener('change', (event) => {
        if (event.target.classList.contains('product-dropdown')) {
            const dropdown = event.target;
            const oldValue = parseFloat(dropdown.getAttribute('data-price')) || 0;
            const newValue = parseFloat(dropdown.value) || 0;
            totalPrice = totalPrice - oldValue + newValue;
            dropdown.setAttribute('data-price', newValue);
            totalPriceInput.value = totalPrice.toFixed(2);
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (emailError.textContent === '') {
            successMessage.classList.remove('hidden');
            form.reset();
            totalPrice = 0;
            totalPriceInput.value = '';
            productsContainer.innerHTML = `
                <div class="product-row">
                    <select class="product-dropdown">
                        <option value="" disabled selected>Select a product</option>
                        <option value="10">Chocolates - $10</option>
                        <option value="15">Souvenirs - $15</option>
                        <option value="25">Gift Box - $25</option>
                        <option value="50">Special Bundle - $50</option>
                    </select>
                    <button type="button" class="add-product">Add Product</button>
                </div>
            `;
        } else {
            alert('Please fix the errors before submitting the form.');
        }
    });
});
