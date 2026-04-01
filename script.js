const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');

// Toggle sidebar open/close
toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
  mainContent.classList.add('shifted');
  toggleBtn.classList.add('hidden');
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (e) => {
  const isInsideSidebar = sidebar.contains(e.target);
  const isToggleBtn = toggleBtn.contains(e.target);

  if (!isInsideSidebar && !isToggleBtn && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    mainContent.classList.remove('shifted');
    toggleBtn.classList.remove('hidden');
  }
});

// Active link highlighting
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
