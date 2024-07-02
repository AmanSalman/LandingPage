document.addEventListener('DOMContentLoaded', ()=>{
  const Sections = document.querySelectorAll('section');
  const NavBarList = document.getElementById('navbar-list');
  
  Sections.forEach(sec => {
    const Item = document.createElement('li');
    const sectionNumber = sec.getAttribute('id');
    const SecName = sec.getAttribute('data-nav');
    Item.innerHTML = `<a href="#${sectionNumber}" class="list-link">${SecName}</a>`;
    NavBarList.appendChild(Item);
  })

  const links = document.querySelectorAll('.list-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(e.target.getAttribute('href'));
      const offsetTop = targetSection.offsetTop - document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      highlightLink(e);
    });
  });
  

  const highlightLink = (e) => {
    links.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
  }

  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  function toggleScrollToTopButton() {
      if (window.scrollY > window.innerHeight * 0.9) {
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  }
  
  window.addEventListener('scroll', toggleScrollToTopButton);
  
  scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  

});


