document.addEventListener('DOMContentLoaded', function () {
  const toggleTheme = document.getElementById('theme');

  if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
      toggleTheme.checked = true;
  }

  toggleTheme.addEventListener('change', function () {
      document.body.classList.toggle('dark-theme');
      
      if (toggleTheme.checked) {
          localStorage.setItem('theme', 'dark');
      } else {
          localStorage.setItem('theme', 'light');
      }
  });
});