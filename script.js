document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  const emailLink = document.getElementById('email-link');

  sections.forEach(section => {
      const title = section.querySelector('.section-title');
      title.addEventListener('click', () => {
          const content = section.querySelector('p, h3');
          if (content.style.display === 'none') {
              content.style.display = 'block';
          } else {
              content.style.display = 'none';
          }
      });
  });

  emailLink.addEventListener('click', (event) => {
      event.preventDefault();
      alert('You are about to send an email to Adarsh Vishwakarma');
      window.location.href = emailLink.href;
  });
});
