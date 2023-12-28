document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.ph');

    images.forEach(image => {
      image.addEventListener('click', () => {
        image.classList.toggle('enlarged');
      });
    });
  });
  
