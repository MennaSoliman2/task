// Session timeout management for the Guest Inquiry System
(function() {
  const INACTIVE_TIMEOUT = 50000; // 50 seconds
  const WARNING_DURATION = 10; // 10 seconds
  
  let inactivityTimer;
  let countdownTimer;
  let isWarningShown = false;
  let countdown = WARNING_DURATION;
  
  // DOM elements
  const sessionTimeoutElement = document.getElementById('session-timeout');
  const countdownElement = document.getElementById('timeout-countdown');
  const countdownValueElement = document.getElementById('countdown-value');
  const continueSessionButton = document.getElementById('continue-session');
  const endSessionButton = document.getElementById('end-session');
  
  // Reset the inactivity timer
  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    clearInterval(countdownTimer);
    
    if (!isWarningShown) {
      inactivityTimer = setTimeout(showWarning, INACTIVE_TIMEOUT);
    }
  }
  
  // Show the timeout warning
  function showWarning() {
    isWarningShown = true;
    countdown = WARNING_DURATION;
    
    if (sessionTimeoutElement) {
      sessionTimeoutElement.classList.remove('hidden');
      
      // Update countdown display
      if (countdownElement) countdownElement.textContent = countdown;
      if (countdownValueElement) countdownValueElement.textContent = countdown;
      
      // Update progress circle
      updateCountdownCircle(countdown);
      
      // Start countdown
      countdownTimer = setInterval(() => {
        countdown--;
        
        if (countdownElement) countdownElement.textContent = countdown;
        if (countdownValueElement) countdownValueElement.textContent = countdown;
        
        // Update progress circle
        updateCountdownCircle(countdown);
        
        if (countdown <= 0) {
          clearInterval(countdownTimer);
          endSession();
        }
      }, 1000);
    }
  }
  
  // Update the countdown circle
  function updateCountdownCircle(value) {
    const progressCircle = document.querySelector('.countdown-progress');
    if (progressCircle) {
      const circumference = 2 * Math.PI * 45; // 2πr where r=45
      const offset = circumference * (1 - value / WARNING_DURATION);
      progressCircle.style.strokeDasharray = `${circumference}`;
      progressCircle.style.strokeDashoffset = offset;
    }
  }
  
  // Continue the session
  function continueSession() {
    isWarningShown = false;
    clearInterval(countdownTimer);
    
    if (sessionTimeoutElement) {
      sessionTimeoutElement.classList.add('hidden');
    }
    
    resetInactivityTimer();
  }
  
  // End the session
  function endSession() {
    window.location.href = 'index.html';
  }
  
  // Initialize session timeout
  function initSessionTimeout() {
    // Only initialize if the session timeout element exists
    if (!sessionTimeoutElement) return;
    
    // Add event listeners for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, resetInactivityTimer);
    });
    
    // Add event listeners for buttons
    if (continueSessionButton) {
      continueSessionButton.addEventListener('click', continueSession);
    }
    
    if (endSessionButton) {
      endSessionButton.addEventListener('click', endSession);
    }
    
    // Start the initial timer
    resetInactivityTimer();
  }
  
  // Make functions available globally
  window.GISSession = {
    resetTimer: resetInactivityTimer,
    endSession
  };
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSessionTimeout);
  } else {
    initSessionTimeout();
  }
})();