        // Skills component for languages
        function skillsComponent() {
            return {
                languages: [],
                async loadSkills() {
                    try {
                        const response = await fetch('JSON/competence.json');
                        const data = await response.json();
                        this.languages = data[0].languages || [];
                    } catch (error) {
                        console.error('Error loading skills:', error);
                    }
                },
                getIconClass(name) {
                    const icons = {
                        'HTML': 'icon/html.png',
                        'CSS': 'icon/css.png',
                        'JavaScript': 'icon/javascript.png',
                        'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
                        'PHP': 'icon/php.png',
                        'Python': 'icon/python.png',
                        'Java': 'icon/java.png',
                        'SQL': 'icon/sql.png',
                        'Bash': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg',
                        'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
                    };
                    return icons[name] || 'icon/default.png';
                },
                getColor(name) {
                    const colors = {
                        'HTML': '#E34F26',
                        'CSS': '#1572B6',
                        'JavaScript': '#F7DF1E',
                        'TypeScript': '#3178C6',
                        'PHP': '#777BB4',
                        'Python': '#3776AB',
                        'Java': '#007396',
                        'SQL': '#336791',
                        'Bash': '#4EAA25',
                        'C#': '#239120'
                    };
                    return colors[name] || '#0d9488';
                }
            }
        }

        // Experience component
        function experienceComponent() {
            return {
                experiences: [],
                async loadExperience() {
                    try {
                        const response = await fetch('JSON/experience.json');
                        const data = await response.json();
                        this.experiences = data || [];
                    } catch (error) {
                        console.error('Error loading experience:', error);
                    }
                }
            }
        }

        // Réalisations component
        function realisationsComponent() {
            return {
                realisations: [],
                async loadRealisations() {
                    try {
                        const response = await fetch('JSON/realisations.json');
                        const data = await response.json();
                        this.realisations = data || [];
                    } catch (error) {
                        console.error('Error loading realisations:', error);
                    }
                }
            }
        }

        // Projects component
        function projectsComponent() {
            return {
                projects: [],
                async loadProjects() {
                    try {
                        const response = await fetch('JSON/projet.json');
                        const data = await response.json();
                        this.projects = data || [];
                    } catch (error) {
                        console.error('Error loading projects:', error);
                    }
                }
            }
        }

        // Tools component for technologies
        function toolsComponent() {
            return {
                technologies: [],
                async loadTools() {
                    try {
                        const response = await fetch('JSON/competence.json');
                        const data = await response.json();
                        this.technologies = data[1].technologies || [];
                    } catch (error) {
                        console.error('Error loading tools:', error);
                    }
                },
                getIconClass(name) {
                    const icons = {
                        'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
                        'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
                        'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
                        'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
                        'Symfony': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg',
                        'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
                        'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
                        'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
                        'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
                        'Nginx': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',
                        'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
                    };
                    return icons[name] || '';
                },
                getColor(name) {
                    const colors = {
                        'React': '#61DAFB',
                        'Vue.js': '#4FC08D',
                        'Next.js': '#000000',
                        'Node.js': '#339933',
                        'Symfony': '#000000',
                        'Tailwind CSS': '#06B6D4',
                        'Docker': '#2496ED',
                        'Git': '#F05032',
                        'PostgreSQL': '#4169E1',
                        'Nginx': '#009639',
                        'Figma': '#F24E1E'
                    };
                    return colors[name] || '#0d9488';
                }
            }
        }

        // Load included HTML files
        async function loadIncludes() {
            const includes = [
                { id: 'header-include', file: 'section/header.html' },
                { id: 'home-include', file: 'section/home.html' },
                { id: 'about-include', file: 'section/about.html' },
                { id: 'experience-include', file: 'section/experience.html' },
                { id: 'realisations-include', file: 'section/realisations.html' },
                { id: 'projects-include', file: 'section/projects.html' },
                { id: 'skills-include', file: 'section/skills.html' },
                { id: 'veille-include', file: 'section/veille.html' }
            ];

            for (const include of includes) {
                try {
                    const response = await fetch(include.file);
                    const html = await response.text();
                    const el = document.getElementById(include.id);
                    el.innerHTML = html;
                    Alpine.initTree(el);
                } catch (error) {
                    console.error(`Error loading ${include.file}:`, error);
                }
            }

            // Set dynamic content after includes are loaded
            const birthday = new Date(2006,12,17);
            const age = new Date().getFullYear() - birthday.getFullYear();
            document.getElementById("age").textContent = age;
        }

        // Load includes and then initialize navigation
        loadIncludes().then(() => {
            initNavigation();
        });

        // Custom cursor
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            if (!cursor || !follower) return;
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
                if (!cursor) return;
                cursor.style.transform = 'scale(2)';
                cursor.style.borderColor = '#0d9488';
            });
            elem.addEventListener('mouseleave', () => {
                if (!cursor) return;
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = '#0d9488';
            });
        });
        
        // ==========================================
        // SYSTÈME DE NAVIGATION SPA
        // ==========================================
        function showPage(pageId) {
            // Masquer toutes les sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Afficher la section demandée
            const targetSection = document.getElementById(pageId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Scroll en haut de la page avec animation
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Mettre à jour l'URL sans recharger
                history.pushState({ page: pageId }, '', `#${pageId}`);
            }
        }
        
        function updateActiveNav(pageId) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelectorAll(`.nav-link[data-page="${pageId}"]`).forEach(link => {
                link.classList.add('active');
            });
        }
        
        function navigateToPage(pageId) {
            showPage(pageId);
            updateActiveNav(pageId);
        }
        
        // Initialiser la page au chargement
        function initNavigation() {
            const hash = window.location.hash.slice(1);
            const initialPage = hash || 'home';
            navigateToPage(initialPage);
            
            // Gérer les clics sur les liens de navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const pageId = this.getAttribute('data-page');
                    navigateToPage(pageId);
                });
            });
            
            // Gérer le bouton "Voir Mon Travail" dans le hero
            document.getElementById('workButton')?.addEventListener('click', () => {
                navigateToPage('projects');
            });
            
            // Gérer le changement d'URL (back/forward du navigateur)
            window.addEventListener('popstate', (e) => {
                const pageId = e.state?.page || window.location.hash.slice(1) || 'home';
                navigateToPage(pageId);
            });
        }
        
        // Random glitch retiré (titre hero sobre)
        // Console Easter egg
        console.log('%c Bonjour !', 'color: #0d9488; font-size: 18px; font-weight: bold;');
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
        
        // ==========================================
        // EFFET DE CLIC AMÉLIORÉ
        // ==========================================
        document.addEventListener('click', (e) => {
            // Ne pas créer d'effet sur les éléments interactifs (boutons, liens)
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
                return;
            }
            
            const x = e.clientX;
            const y = e.clientY;
            
            // Effet ripple subtil
            const ripple = document.createElement('div');
            ripple.className = 'click-effect';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            document.body.appendChild(ripple);
            
            // Supprimer l'élément après l'animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Particules visibles autour du clic
            const particleCount = 8;
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'click-particle';
                
                // Angle uniforme pour une distribution en cercle
                const angle = (Math.PI * 2 * i) / particleCount;
                // Distance modérée pour être visible mais pas trop
                const distance = 25 + Math.random() * 25;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.setProperty('--tx', tx + 'px');
                particle.style.setProperty('--ty', ty + 'px');
                
                // Délai aléatoire minimal
                particle.style.animationDelay = (Math.random() * 0.1) + 's';
                
                document.body.appendChild(particle);
                
                // Supprimer après l'animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.remove();
                    }
                }, 1000);
            }
        });