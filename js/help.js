// Help page functionality for the Guest Inquiry System
(function() {
  // DOM elements
  let helpCategories;
  let submitButton;
  let cancelButton;
  let commentTextarea;
  
  // Selected category
  let selectedCategory = null;
  
  // Initialize help page
  function initHelpPage() {
    // Get DOM elements
    helpCategories = document.querySelectorAll('.help-category');
    submitButton = document.querySelector('.submit-help-button');
    cancelButton = document.querySelector('.cancel-button');
    commentTextarea = document.querySelector('.textarea');
    
    // Add event listeners for categories
    helpCategories.forEach(category => {
      category.addEventListener('click', () => {
        // Remove selected class from all categories
        helpCategories.forEach(c => c.classList.remove('selected'));
        
        // Add selected class to clicked category
        category.classList.add('selected');
        
        // Update selected category
        selectedCategory = category.getAttribute('data-category');
        
        // Enable submit button
        if (submitButton) {
          submitButton.disabled = false;
        }
      });
    });
    
    // Add event listener for submit button
    if (submitButton) {
      submitButton.addEventListener('click', handleSubmit);
    }
    
    // Add event listener for cancel button
    if (cancelButton) {
      cancelButton.addEventListener('click', () => {
        window.location.href = 'info.html';
      });
    }
  }
  
  // Handle form submission
  function handleSubmit() {
    if (!selectedCategory) return;
    
    // Disable submit button and show loading state
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = window.GISLanguage.translate('sending');
    }
    
    // Get comment text
    const comment = commentTextarea ? commentTextarea.value.trim() : '';
    
    // Simulate API call
    setTimeout(() => {
      // Navigate to thank you page
      window.location.href = 'thank-you.html?type=help';
    }, 1000);
  }
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHelpPage);
  } else {
    initHelpPage();
  }
})();