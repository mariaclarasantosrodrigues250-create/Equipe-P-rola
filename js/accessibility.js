(() => {
const root = document.documentElement;
const button = document.getElementById('alto-contraste');
function resetContrast() {
  root.classList.remove('alto-contraste');
  button.setAttribute('aria-pressed', 'false');
  button.setAttribute('aria-label', 'Ativar alto contraste');
  button.title = 'Ativar alto contraste';
}
resetContrast();
window.addEventListener('pageshow', resetContrast);
button.addEventListener('click', () => {
  const active = root.classList.toggle('alto-contraste');
  const label = active ? 'Desativar alto contraste' : 'Ativar alto contraste';
  button.setAttribute('aria-pressed', String(active));
  button.setAttribute('aria-label', label);
  button.title = label;
});
})();
