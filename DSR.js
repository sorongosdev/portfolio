const arrowUp = document.querySelector('.arrow-up');
//Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scollIntoView('#home');
});

function scollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
}