document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {

        const name = form.name.value.trim();

        let isValid = true; 

        if (!name) {
            alert("El campo 'Nombre' es obligatorio");
            isValid = false;
        } else if (/\d/.test(name)) {
            alert("No ingrese números en el nombre");
            isValid = false;
        }

    });
});
