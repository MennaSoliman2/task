// Thank You page functionality for the Guest Inquiry System
(function() {
  // DOM elements
  let countdownElement;
  let messageElement;
  let returnButton;
  
  // Countdown value
  let countdown = 5;
  let countdownInterval;
  
  // Initialize thank you page
  function initThankYouPage() {
    // Get DOM elements
    countdownElement = document.getElementById('thank-you-countdown');
    messageElement = document.getElementById('thank-you-message');
    returnButton = document.querySelector('.return-button');
    
    // Get type from URL
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type') || 'help';
    
    // Set message based on type
    if (messageElement) {
      if (type === 'help') {
        messageElement.textContent = window.GISLanguage.translate('help_submitted');
      } else if (type === 'rating') {
        messageElement.textContent = window.GISLanguage.translate('rating_submitted');
      }
    }
    
    // Start countdown
    startCountdown();
    
    // Add event listener for return button
    if (returnButton) {
      returnButton.addEventListener('click', () => {
        window.location.href = 'info.html';
      });
    }
  }
  
  // Start countdown
  function startCountdown() {
    // Update countdown display
    if (countdownElement) {
      countdownElement.textContent = countdown;
    }
    
    // Start interval
    countdownInterval = setInterval(() => {
      countdown--;
      
      // Update countdown display
      if (countdownElement) {
        countdownElement.textContent = countdown;
      }
      
      // Redirect when countdown reaches 0
      if (countdown <= 0) {
        clearInterval(countdownInterval);
        window.location.href = 'info.html';
      }
    }, 1000);
  }
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThankYouPage);
  } else {
    initThankYouPage();
  }
})();