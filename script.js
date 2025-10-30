// Add copy-to-clipboard buttons functionality
(function () {
  function copyCode(btn) {
    const pre = btn.nextElementSibling; // <pre>
    const code = pre && pre.querySelector('code');
    if (!code) return;
    const text = code.innerText; // preserves formatting
    navigator.clipboard.writeText(text).then(() => {
      btn.setAttribute('aria-pressed', 'true');
      btn.textContent = 'Copied';
      setTimeout(() => {
        btn.setAttribute('aria-pressed', 'false');
        btn.textContent = 'Copy';
      }, 1200);
    }).catch(() => {
      btn.textContent = 'Copy failed';
      setTimeout(() => (btn.textContent = 'Copy'), 1200);
    });
  }

  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', () => copyCode(btn));
  });

  // Smooth scrolling is handled via CSS (scroll-behavior), but ensure focus for accessibility
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      // Allow default scroll then move focus
      setTimeout(() => target.setAttribute('tabindex', '-1') || target.focus(), 200);
    });
  });
})();
