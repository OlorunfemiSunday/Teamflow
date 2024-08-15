 const hamburger = document.querySelector('.hamburger');
 const navContent = document.querySelector('.nav-content');

 hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navContent.classList.toggle('active');
 })

document.querySelectorAll('.nav-links').forEach(link => link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navContent.classList.remove('active');
}))