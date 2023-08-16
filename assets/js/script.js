window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});
window.addEventListener('scroll', function() {
  document.body.classList.toggle('scrolled', window.scrollY > 50);
});

window.addEventListener('scroll', function() {
  document.body.classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


var navbarLinks = document.querySelectorAll('.navbar-link');

// Add a click event listener to each link
navbarLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // When a link is clicked, first remove the active class from all links
    navbarLinks.forEach(function(innerLink) {
      innerLink.classList.remove('active');
    });

    // Then add the active class to the clicked link
    this.classList.add('active');
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const scrollableContainer = document.querySelector('.horizontal-scrollable-container');
  let plansRevealed = false;

  function getMaxScrollLeft() {
      const buffer = 50;
      return scrollableContainer.scrollWidth - scrollableContainer.clientWidth - buffer;
  }

  scrollableContainer.addEventListener('scroll', function() {
      if (plansRevealed) {
          return;
      }

   
      
  });

  // Adjust the maxScrollLeft calculation when the window is resized
  window.addEventListener('resize', getMaxScrollLeft);
});
