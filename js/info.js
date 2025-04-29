// Info page functionality for the Guest Inquiry System
(function() {
  // DOM elements
  let tabTriggers;
  let tabContents;
  let helpRequestButton;
  let rateServiceButton;
  let backButton;
  
  // Initialize info page
  function initInfoPage() {
    // Get DOM elements
    tabTriggers = document.querySelectorAll('.tab-trigger');
    tabContents = document.querySelectorAll('.tab-content');
    helpRequestButton = document.querySelector('.help-request-button');
    rateServiceButton = document.querySelector('.rate-service-button');
    backButton = document.querySelector('.back-button');
    
    // Add event listeners for tabs
    tabTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        // Remove active class from all triggers
        tabTriggers.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked trigger
        trigger.classList.add('active');
        
        // Hide all tab contents
        tabContents.forEach(content => content.classList.add('hidden'));
        
        // Show selected tab content
        const tabId = trigger.getAttribute('data-tab');
        const tabContent = document.getElementById(`${tabId}-tab`);
        if (tabContent) {
          tabContent.classList.remove('hidden');
        }
      });
    });
    
    // Add event listeners for buttons
    if (helpRequestButton) {
      helpRequestButton.addEventListener('click', () => {
        window.location.href = 'help.html';
      });
    }
    
    if (rateServiceButton) {
      rateServiceButton.addEventListener('click', () => {
        window.location.href = 'rate.html';
      });
    }
    
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.location.href = 'identify.html';
      });
    }
  }
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInfoPage);
  } else {
    initInfoPage();
  }
})();