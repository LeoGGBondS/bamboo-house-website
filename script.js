
function switchLanguage(lang) {
  localStorage.setItem('bamboo_house_lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('.en').forEach(el => el.classList.toggle('hidden', lang === 'zh'));
  document.querySelectorAll('.zh').forEach(el => el.classList.toggle('hidden', lang === 'en'));
  document.querySelectorAll('.lang button').forEach(btn => btn.classList.remove('active'));
  const active = document.getElementById('btn-' + lang);
  if (active) active.classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('bamboo_house_lang');
  const browserIsZh = (navigator.language || '').toLowerCase().startsWith('zh');
  switchLanguage(saved || (browserIsZh ? 'zh' : 'en'));
});
