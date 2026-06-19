const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const year = document.getElementById('year');

function handleScroll() {
  header.classList.toggle('scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', handleScroll);
handleScroll();

year.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});


const langButtons = document.querySelectorAll('.lang-btn');
const translatableNodes = document.querySelectorAll('[data-zh][data-en]');

function setLanguage(lang) {
  const nextLang = lang === 'en' ? 'en' : 'zh';

  document.documentElement.lang = nextLang === 'en' ? 'en' : 'zh-CN';

  translatableNodes.forEach((node) => {
    const value = nextLang === 'en' ? node.dataset.en : node.dataset.zh;
    node.innerHTML = value;
  });

  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === nextLang);
  });

  localStorage.setItem('omhLang', nextLang);
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage(localStorage.getItem('omhLang') || 'zh');
