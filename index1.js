document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      validateInputs();
    });
  
    function validateInputs() {
      resetErrors();
      let isValid = true;
  
      if (usernameInput.value.trim() === '') {
        usernameError.textContent = '* Username is required';
        isValid = false;
      }
  
      if (emailInput.value.trim() === '') {
        emailError.textContent = '* Email is required';
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = '* Enter a valid email';
        isValid = false;
      }
  
      if (passwordInput.value.trim() === '') {
        passwordError.textContent = '* Password is required';
        isValid = false;
      }
  
      if (isValid) {
        // Perform actions after successful validation (e.g., form submission)
        console.log('Form submitted!');
        // Replace this console.log with your desired action, like sending data to a server
      }
    }
  
    function resetErrors() {
      usernameError.textContent = '';
      emailError.textContent = '';
      passwordError.textContent = '';
    }
  
    function isValidEmail(email) {
      // Simple email validation regex
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }
  });
