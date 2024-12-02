document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const salesForm = document.getElementById("salesForm");
    const salesTable = document.getElementById("salesTable");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
      
            window.location.href = "sales.html";
        });
    }

    if (salesForm) {
        salesForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const saleId = document.getElementById("saleId").value;
            const productId = document.getElementById("productId").value;
            const buyerId = document.getElementById("buyerId").value;
            const total = document.getElementById("total").value;
            const status = document.getElementById("status").value;

            const newRow = `
                <tr>
                    <td>${saleId}</td>
                    <td>${productId}</td>
                    <td>${buyerId}</td>
                    <td>${total}</td>
                    <td>${status}</td>
                </tr>
            `;
            salesTable.innerHTML += newRow;

            salesForm.reset();
        });
    }
});


