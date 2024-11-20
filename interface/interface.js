// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const body = document.body;
  
    // Hide splash screen after 2 seconds
    setTimeout(() => {
      splashScreen.style.display = 'none';
      mainContent.style.display = 'block';
      body.style.setProperty('--background-opacity', '0.2');
      body.classList.add('background-visible');
    }, 2000);
  });
  