document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevenir el envío del formulario si hay errores

        
        const phone = form.phone.value.trim();

        let isValid = true; 

        // Validar campo "Teléfono"
        const phoneRegex = /^0[2-7]\d{7}$|^09\d{8}$/; // Para números fijos y celulares en Ecuador
        if (!phone) {
            alert("El campo 'Teléfono' es obligatorio");
            isValid = false;
        } else if (!phoneRegex.test(phone)) {
            alert("[ERROR] The number must contain the international prefix and 9 digits");
            isValid = false;
        }

        if (isValid) {
            alert("Formulario enviado correctamente");
            form.submit();
        }
    });
});
