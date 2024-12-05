    const names = document.getElementById('names');
    const idNumber = document.getElementById('idNumber');
    const dob = document.getElementById('dob');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const country = document.getElementById('country');

    names.addEventListener('input', function () {
      validateField(this, /^[A-Za-z\s]+$/, 'nameError');
    });

    idNumber.addEventListener('input', function () {
      validateField(this, /^\d{10}$/, 'idError');
    });

    dob.addEventListener('blur', function () {
      const age = calculateAge(this.value);
      const ageError = document.getElementById('ageError');
      if (age < 18) {
        this.classList.add('error');
        ageError.style.display = 'block';
      } else {
        this.classList.remove('error');
        this.classList.add('valid');
        ageError.style.display = 'none';
      }
    });

    email.addEventListener('input', function () {
      validateField(this, /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, 'emailError');
    });

    phone.addEventListener('input', function () {
      const countryValue = country.value;
      let regex;

      switch (countryValue) {
        case 'ecuador':
          regex = /^9\d{8}$/; 
          break;
        case 'peru':
          regex = /^9\d{8}$/; 
          break;
        case 'colombia':
          regex = /^\d{10}$/; 
          break;
        default:
          regex = /^\d{10}$/;
      }

      validateField(this, regex, 'phoneError');
    });

    function validateField(field, regex, errorId) {
      const errorMessage = document.getElementById(errorId);
      if (!regex.test(field.value)) {
        field.classList.add('error');
        field.classList.remove('valid');
        errorMessage.style.display = 'block';
      } else {
        field.classList.remove('error');
        field.classList.add('valid');
        errorMessage.style.display = 'none';
      }
    }

    // Calcular edad
    function calculateAge(dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }