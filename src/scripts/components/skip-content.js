window.onload = () => {
  const skipButton = document.querySelector('.skip-link');
  skipButton.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const mainContent = document.querySelector('#mainContent');
      mainContent.focus();
      console.log('Klik lagi nih');
    } else {
      console.log(event.key);
    }
  });
};
