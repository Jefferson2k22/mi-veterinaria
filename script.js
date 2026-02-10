document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.getElementById('contactForm');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    // Validación y Envío del Formulario
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener valores
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validación básica de email
        if (validateEmail(email)) {
            // Simulamos detección de apertura de correo
            // 1. Abrimos el mailto
            const mailtoLink = `mailto:citas@vetcare.do?subject=Cita de ${nombre}&body=${mensaje} (De: ${email})`;
            window.location.href = mailtoLink;

            // 2. Mostramos el modal de confirmación después de un breve delay
            setTimeout(() => {
                successModal.show();
                contactForm.reset();
            }, 1000);
        } else {
            alert('Por favor, ingresa un correo electrónico válido.');
        }
    });

    // Función de validación de correo con Regex
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Animación suave de scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});