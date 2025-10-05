// Fade-in animation for bio text
window.addEventListener('DOMContentLoaded', () => {
  const bioTexts = document.querySelectorAll('.bio p');
  bioTexts.forEach((p, index) => {
    setTimeout(() => {
      p.style.opacity = '1';
      p.style.transform = 'translateY(0)';
    }, index * 300);
  });
});
