const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');
const today = new Date().toISOString().split('T')[0];

const dobInput = document.getElementById('dob');
dobInput.setAttribute('max', today);

form.addEventListener('input', function (event) {
    const target = event.target;

    if (target.id === 'fullName') {
        const namePattern = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s´]+$/;
        showError('nameError', !namePattern.test(target.value));
    } else if (target.id === 'idNumber') {
        const idPattern = /^\d{10}$/;
        showError('idError', !idPattern.test(target.value));
    } else if (target.id === 'dob') {
        const birthDate = new Date(target.value);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        showError('dobError', isNaN(birthDate) || age < 18 || birthDate > new Date());
    } else if (target.id === 'phone') {
        const phonePattern = /^09\d{8}$/;
        showError('phoneError', !phonePattern.test(target.value));
    } else if (target.id === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        showError('emailError', !emailPattern.test(target.value));
    } else if (target.id === 'password') {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        showError('passwordError', !passwordPattern.test(target.value));
    }
});

function showError(errorId, condition) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = condition ? 'block' : 'none';
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const errors = document.querySelectorAll('.error');
    const hasErrors = Array.from(errors).some(error => error.style.display === 'block');
    if (!hasErrors) {
        successMessage.style.display = 'block';
        form.reset();
    } else {
        successMessage.style.display = 'none';
    }
});