// Selección del campo de entrada
document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.querySelector("#phone");
    const phoneError = document.querySelector("#phone-error");

    // Función de validación
    function validatePhoneNumber(phoneValue) {
        const phoneRegex = /^09\d{8}$/; // Expresión regular para números válidos en Ecuador
        return phoneRegex.test(phoneValue);
    }

    // Evento al presionar una tecla
    phoneInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evitar que el formulario se envíe

            const phoneValue = phoneInput.value;

            if (validatePhoneNumber(phoneValue)) {
                phoneError.textContent = "Número válido.";
                phoneError.style.color = "green";
                alert("Número válido");
            } else {
                phoneError.textContent = "Error: Número incorrecto.";
                phoneError.style.color = "red";
                alert("Error: Número incorrecto");
            }
        }
    });
});
