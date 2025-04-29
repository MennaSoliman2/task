// Welcome page functionality for the Guest Inquiry System
(function() {
  // Update current time
  function updateCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    if (currentTimeElement) {
      const now = new Date();
      currentTimeElement.textContent = now.toLocaleTimeString();
    }
  }
  
  // Text to speech functionality
  function initTextToSpeech() {
    const textToSpeechButton = document.querySelector('.text-to-speech');
    if (textToSpeechButton && 'speechSynthesis' in window) {
      textToSpeechButton.addEventListener('click', () => {
        const welcomeMessage = window.GISLanguage.translate('Welcome to the Guest Inquiry System ');
        const utterance = new SpeechSynthesisUtterance(welcomeMessage);
        utterance.lang = window.GISLanguage.getCurrentLanguage() === 'ar' ? 'ar-SA' : 'en-US';
        window.speechSynthesis.speak(utterance);
      });
    }
  }
  
  // Initialize welcome page
  function initWelcomePage() {
    updateCurrentTime();
    setInterval(updateCurrentTime, 60000); // Update time every minute
    initTextToSpeech();
  }
  
  // Initialize when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWelcomePage);
  } else {
    initWelcomePage();
  }
})();