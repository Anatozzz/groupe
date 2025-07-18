document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quick-contact-form');
  const confirmMsg = document.getElementById('form-confirm');
  form.addEventListener('submit', e => {
    e.preventDefault();
      confirmMsg.style.display = 'block';
      setTimeout(() => {
        confirmMsg.style.display = 'none';
        form.reset();
      }, 3000);
  });
});
