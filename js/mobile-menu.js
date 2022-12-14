(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');
  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    document.body.style.overflow="hidden"
  });
  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    document.body.style.overflow = 'visible';
  });
})();
