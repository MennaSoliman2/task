// Identify page functionality for the Guest Inquiry System
(function() {
  // DOM elements
  let idInput;
  let errorMessage;
  let searchButton;
  let clearButton;
  let backButton;
  let tabTriggers;
  let letterKeys;
  let virtualKeyboard;
  
  // Current ID type
  let currentIdType = 'national_id';
  
  // Initialize identify page
  function initIdentifyPage() {
    // Get DOM elements
    idInput = document.getElementById('id-input');
    errorMessage = document.getElementById('error-message');
    searchButton = document.getElementById('search-button');
    clearButton = document.getElementById('clear-button');
    backButton = document.querySelector('.back-button');
    tabTriggers = document.querySelectorAll('.tab-trigger');
    letterKeys = document.getElementById('letter-keys');
    virtualKeyboard = document.querySelector('.virtual-keyboard');
    
    // Add event listeners
    if (idInput) {
      idInput.addEventListener('input', validateInput);
    }
    
    if (searchButton) {
      searchButton.addEventListener('click', handleSubmit);
    }
    
    if (clearButton) {
      clearButton.addEventListener('click', clearInput);
    }
    
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }
    
    // Tab triggers
    tabTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        // Remove active class from all triggers
        tabTriggers.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked trigger
        trigger.classList.add('active');
        
        // Update current ID type
        currentIdType = trigger.getAttribute('data-tab');
        
        // Show/hide letter keys based on ID type
        if (currentIdType === 'passport') {
          letterKeys.classList.remove('hidden');
        } else {
          letterKeys.classList.add('hidden');
        }
        
        // Clear input and validate
        clearInput();
      });
    });
    
    // Virtual keyboard
    if (virtualKeyboard) {
      virtualKeyboard.addEventListener('click', (e) => {
        if (e.target.classList.contains('key')) {
          const key = e.target.getAttribute('data-key');
          
          if (key === 'backspace') {
            idInput.value = idInput.value.slice(0, -1);
          } else {
            idInput.value += key;
          }
          
          validateInput();
        }
      });
    }
    
    // Set placeholder based on ID type
    updatePlaceholder();
  }
  
  // Update input placeholder based on ID type
  function updatePlaceholder() {
    if (!idInput) return;
    
    if (currentIdType === 'passport') {
      idInput.placeholder = 'A1234567';
    } else {
      idInput.placeholder = '1234567890';
    }
  }
  
  // Validate input
  function validateInput() {
    if (!idInput || !errorMessage || !searchButton) return;
    
    const value = idInput.value.trim();
    
    // Enable/disable search button
    searchButton.disabled = value.length === 0;
    
    // Clear error message
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
    
    // No need to validate empty input
    if (value.length === 0) return;
    
    // Validate based on ID type
    let isValid = false;
    
    if (currentIdType === 'national_id' || currentIdType === 'iqama') {
      // Saudi National ID and Iqama: 10 digits
      isValid = /^\d{10}$/.test(value);
    } else if (currentIdType === 'passport') {
      // Passport: alphanumeric, typically 8-9 characters
      isValid = /^[A-Za-z0-9]{6,15}$/.test(value);
    }
    
    // Show error message if invalid
    if (!isValid) {
      errorMessage.textContent = window.GISLanguage.translate('invalid_id_format');
      errorMessage.classList.remove('hidden');
    }
    
    // Enable/disable search button based on validation
    searchButton.disabled = !isValid;
  }
  
  // Clear input
  function clearInput() {
    if (!idInput) return;
    
    idInput.value = '';
    
    if (errorMessage) {
      errorMessage.textContent = '';
      errorMessage.classList.add('hidden');
    }
    
    if (searchButton) {
      searchButton.disabled = true;
    }
    
    updatePlaceholder();
  }
  
  // Handle form submission
  function handleSubmit(e) {
    if (e) e.preventDefault();
    
    if (!idInput) return;
    
    const value = idInput.value.trim();
    
    if (value.length === 0) {
      if (errorMessage) {
        errorMessage.textContent = window.GISLanguage.translate('please_enter_id');
        errorMessage.classList.remove('hidden');
      }
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, always navigate to info page
      window.location.href = 'info.html';
    }, 500);
  }
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIdentifyPage);
  } else {
    initIdentifyPage();
  }
})();