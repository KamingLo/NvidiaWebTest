// JavaScript for interactive elements (optional)
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Button Clicked! Let\'s explore more!');
  });

  // JavaScript to toggle the mobile menu on hamburger click
document.getElementById('hamburger-icon').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggle the "active" class to show/hide menu
  });
  