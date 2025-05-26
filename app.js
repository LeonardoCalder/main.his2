document.addEventListener('DOMContentLoaded', () => {
  const loadingText = document.getElementById('loading');

  const navigateWithFeedback = (buttonId, url) => {
    const button = document.getElementById(buttonId);
    button.disabled = true;
    button.textContent = 'Cargando...';
    loadingText.style.display = 'block';

    // Pequeña demora para que el usuario vea la animación
    setTimeout(() => {
      window.location.href = url;
    }, 1200);
  };

  document.getElementById('btnSolicitud').addEventListener('click', () => {
    navigateWithFeedback('btnSolicitud', 'https://solicitud-del-procedimiento-quirurgico.onrender.com/');
  });

  document.getElementById('btnProgramacion').addEventListener('click', () => {
    navigateWithFeedback('btnProgramacion', 'https://programacion-del-procedimiento-quirurgico.onrender.com/');
  });

  document.getElementById('btnFormulario').addEventListener('click', () => {
    navigateWithFeedback('btnFormulario', 'https://realizacion-del-procedimiento-quirurgico.onrender.com/');
  });
});
