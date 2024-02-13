/* Script para seleccionar formulario */
  var btnForms = document.querySelectorAll('.btnform');
  btnForms.forEach(function(btn) {
      btn.addEventListener('mouseover', function() {
          this.style.backgroundColor = '#25336C';
         
          this.querySelector('p').classList.add('textobco');
         
      });

      btn.addEventListener('mouseout', function() {
          // Restaura el color de fondo del botón a su estado original
          this.style.backgroundColor = '';
          this.querySelector('p').classList.remove('textobco');
      });
  });