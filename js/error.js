// Error page functionality for the Guest Inquiry System
(function() {
  // DOM elements
  let errorMessageElement;
  let tryAgainButton;
  let returnToStartButton;
  
  // Initialize error page
  function initErrorPage() {
    // Get DOM elements
    errorMessageElement = document.getElementById('error-message');
    tryAgainButton = document.querySelector('.try-again-button');
    returnToStartButton = document.querySelector('.return-to-start-button');
    
    // Get error type from URL
    const urlParams = new URLSearchParams(window.location.search);
    const errorType = urlParams.get('type') || 'not_found';
    
    // Set error message based on type
    if (errorMessageElement) {
      if (errorType === 'not_found') {
        errorMessageElement.textContent = window.GISLanguage.translate('error_not_found_message');
      } else if (errorType === 'server') {
        errorMessageElement.textContent = window.GISLanguage.translate('error_server_message');
      } else {
        errorMessageElement.textContent = window.GISLanguage.translate('error_generic_message');
      }
    }
    
    // Add event listener for try again button
    if (tryAgainButton) {
      tryAgainButton.addEventListener('click', () => {
        window.location.href = 'identify.html';
      });
    }
    
    // Add event listener for return to start button
    if (returnToStartButton) {
      returnToStartButton.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }
  }
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initErrorPage);
  } else {
    initErrorPage();
  }
})();