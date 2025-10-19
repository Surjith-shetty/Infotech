// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');

function openMobileMenu() {
  hamburgerBtn.classList.add('active');
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  hamburgerBtn.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}

// Open menu when clicking hamburger
hamburgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (mobileMenu.classList.contains('active')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

// Close menu when clicking close button
mobileMenuClose.addEventListener('click', closeMobileMenu);

// Close menu when clicking on a menu item
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
mobileNavItems.forEach(item => {
  item.addEventListener('click', closeMobileMenu);
});

// Close menu when clicking on overlay (outside menu content)
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    closeMobileMenu();
  }
});

// Prevent menu content clicks from closing menu
document.querySelector('.mobile-menu-content').addEventListener('click', (e) => {
  e.stopPropagation();
});
