document.getElementById('admin-btn').onclick = () => {
  document.getElementById('admin-panel').classList.remove('hidden');
};
document.getElementById('unlock-btn').onclick = () => {
  const pass = document.getElementById('admin-pass').value;
  const status = document.getElementById('auth-status');
  if (pass === 'Rodoil123@@') {
    status.textContent = '✅ Admin mode activated';
    status.style.color = 'lightgreen';
    alert('You are now in admin mode! Editable features go here.');
  } else {
    status.textContent = '❌ Incorrect password';
    status.style.color = 'red';
  }
};