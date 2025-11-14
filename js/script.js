        // Custom cursor
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            
            setTimeout(() => {
                follower.style.left = e.clientX - 4 + 'px';
                follower.style.top = e.clientY - 4 + 'px';
            }, 100);
        });
        
        // Hover effect for links and buttons
        const hoverElements = document.querySelectorAll('a, button, .project-card, .cursor-pointer');
        hoverElements.forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.borderColor = '#fff';
            });
            elem.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = '#10b981';
            });
        });
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // Random glitch effect
        const glitchElement = document.querySelector('.glitch');
        setInterval(() => {
            if (Math.random() > 0.95) {
                glitchElement.style.animation = 'none';
                setTimeout(() => {
                    glitchElement.style.animation = 'glitch 2s infinite';
                }, 100);
            }
        }, 3000);
        
        // Console Easter egg
        console.log('%c Hey there, fellow developer! 👋', 'color: #10b981; font-size: 20px; font-weight: bold;');
        console.log('%c Looking for secrets? You found one! 🎉', 'color: #888; font-size: 14px;');
        console.log('%c Email me with the code "CONSOLE_DETECTIVE" for a surprise!', 'color: #888; font-size: 12px;');
        
        // Add slight parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.float');
            
            parallaxElements.forEach(elem => {
                const speed = elem.dataset.speed || 0.5;
                elem.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
        
        // Type writer effect for terminal
        const terminalText = document.querySelector('.typing');
        if (terminalText) {
            const text = terminalText.textContent;
            terminalText.textContent = '';
            let i = 0;
            
            function typeWriter() {
                if (i < text.length) {
                    terminalText.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            setTimeout(typeWriter, 1000);
        }