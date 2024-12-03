function scrollToTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Définit le point de départ de la vue (en haut de la section)
      });
    });
  });