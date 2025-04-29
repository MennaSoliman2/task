// Rate page functionality for the Guest Inquiry System
(function() {
  // DOM elements
  let stars;
  let submitButton;
  let skipButton;
  let backButton;
  let commentTextarea;
  
  // Selected rating
  let selectedRating = 0;
  
  // Initialize rate page
  function initRatePage() {
    // Get DOM elements
    stars = document.querySelectorAll('.star');
    submitButton = document.querySelector('.submit-rating-button');
    skipButton = document.querySelector('.skip-button');
    backButton = document.querySelector('.back-button');
    commentTextarea = document.querySelector('.textarea');
    
    // Add event listeners for stars
    stars.forEach(star => {
      // Hover effect
      star.addEventListener('mouseenter', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        
        // Add hovered class to stars up to the hovered one
        stars.forEach(s => {
          const starRating = parseInt(s.getAttribute('data-rating'));
          if (starRating <= rating) {
            s.classList.add('hovered');
          } else {
            s.classList.remove('hovered');
          }
        });
      });
      
      // Remove hover effect when mouse leaves
      star.addEventListener('mouseleave', () => {
        stars.forEach(s => s.classList.remove('hovered'));
      });
      
      // Click event
      star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        selectedRating = rating;
        
        // Update selected stars
        stars.forEach(s => {
          const starRating = parseInt(s.getAttribute('data-rating'));
          if (starRating <= rating) {
            s.classList.add('selected');
          } else {
            s.classList.remove('selected');
          }
        });
        
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
    
    // Add event listener for skip button
    if (skipButton) {
      skipButton.addEventListener('click', () => {
        window.location.href = 'info.html';
      });
    }
    
    // Add event listener for back button
    if (backButton) {
      backButton.addEventListener('click', () => {
        window.location.href = 'info.html';
      });
    }
  }
  
  // Handle form submission
  function handleSubmit() {
    if (selectedRating === 0) return;
    
    // Disable submit button and show loading state
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = window.GISLanguage.translate('submitting');
    }
    
    // Get comment text
    const comment = commentTextarea ? commentTextarea.value.trim() : '';
    
    // Simulate API call
    setTimeout(() => {
      // Navigate to thank you page
      window.location.href = 'thank-you.html?type=rating';
    }, 1000);
  }
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRatePage);
  } else {
    initRatePage();
  }
})();