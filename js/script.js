        // Manejo del envío del formulario
        document.getElementById('formContacto').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Aquí normalmente enviaríamos los datos a un servidor
            alert('¡Gracias por tu mensaje! Te contactaré pronto.');
            this.reset();
        });
        
        // Smooth scrolling para los enlaces de navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Cambiar clase activa en la navbar al hacer scroll
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.navbar-nav a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 70;
                const sectionHeight = section.clientHeight;
                if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });