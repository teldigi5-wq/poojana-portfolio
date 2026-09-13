const root=document.documentElement;
const themeToggle=document.getElementById('themeToggle');
const menuToggle=document.getElementById('menuToggle');
const mobileNav=document.getElementById('mobileNav');

const savedTheme=localStorage.getItem('portfolio-theme');
if(savedTheme){root.dataset.theme=savedTheme;}

function syncTheme(){
  const isDark=root.dataset.theme==='dark';
  themeToggle.textContent=isDark?'Light':'Dark';
  themeToggle.setAttribute('aria-label',isDark?'Switch to light mode':'Switch to dark mode');
}

syncTheme();

themeToggle.addEventListener('click',()=>{
  root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
  localStorage.setItem('portfolio-theme',root.dataset.theme);
  syncTheme();
});

menuToggle.addEventListener('click',()=>{
  const open=mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
});

mobileNav.querySelectorAll('a').forEach((link)=>{
  link.addEventListener('click',()=>{
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
  });
});

const heroProfile=document.querySelector('.profile>img');
if(heroProfile){
  heroProfile.src='assets/images/poojana-kaveesh-website-profile.svg?v=12';
  heroProfile.alt='Portrait of Poojana Kaveesh';
}

document.getElementById('year').textContent=new Date().getFullYear();
