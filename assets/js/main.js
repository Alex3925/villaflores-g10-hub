// Minimal client scaffold for Phase 1
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement || document.body;
const messages = document.getElementById('messages');
const input = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

// load theme from localStorage
if (localStorage.getItem('vf_theme') === 'dark') {
  document.documentElement.classList.add('dark');
  document.body.classList.add('bg-gray-900','text-gray-100');
}

themeToggle?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  if (isDark) {
    document.body.classList.add('bg-gray-900','text-gray-100');
    localStorage.setItem('vf_theme','dark');
  } else {
    document.body.classList.remove('bg-gray-900','text-gray-100');
    localStorage.setItem('vf_theme','light');
  }
});

sendBtn?.addEventListener('click', () => {
  const v = input.value.trim();
  if (!v) return;
  const el = document.createElement('div');
  el.className = 'max-w-[70%] ml-auto p-3 bg-accent text-white rounded-xl';
  el.textContent = v;
  messages.appendChild(el);
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
});
