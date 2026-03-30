    const form = document.getElementById('contact-form');
    const btn  = document.getElementById('submit-btn');
    const ok   = document.getElementById('form-success');
    const err  = document.getElementById('form-error');
 
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      ok.style.display = 'none';
      err.style.display = 'none';
      btn.disabled = true;
      btn.textContent = 'Enviando…';
 
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
 
        if (res.ok) {
          ok.style.display = 'block';
          form.reset();
        } else {
          err.style.display = 'block';
        }
      } catch {
        err.style.display = 'block';
      } finally {
        btn.disabled = false;
        btn.textContent = 'Enviar mensaje →';
      }
    });