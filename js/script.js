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
                        'PHP': 'icon/php.png',
                        'Python': 'icon/python.png',
                        'Java': 'icon/java.png',
                        'SQL': 'icon/sql.png'
                    };
                    return icons[name] || 'icon/default.png';
                },
                getColor(name) {
                    const colors = {
                        'HTML': '#E34F26',
                        'CSS': '#1572B6',
                        'JavaScript': '#F7DF1E',
                        'PHP': '#777BB4',
                        'Python': '#3776AB',
                        'Java': '#007396',
                        'SQL': '#336791'
                    };
                    return colors[name] || '#10b981';
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

        // Veille informatique component (Dev.to API)
        function veilleComponent() {
            return {
                articles: [],
                loading: true,
                error: false,
                async loadVeille() {
                    try {
                        this.loading = true;
                        this.error = false;
                        const response = await fetch('https://dev.to/api/articles?per_page=6&tag=webdev');
                        const data = await response.json();
                        this.articles = data || [];
                    } catch (err) {
                        console.error('Error loading veille:', err);
                        this.error = true;
                        this.articles = [];
                    } finally {
                        this.loading = false;
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
                },
                getStatusClass(status) {
                    const classes = {
                        'Live': 'bg-green-400/20 text-green-400',
                        'Beta': 'bg-blue-400/20 text-blue-400',
                        'WIP': 'bg-yellow-400/20 text-yellow-400'
                    };
                    return classes[status] || 'bg-gray-400/20 text-gray-400';
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
                        'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
                        'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
                        'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
                    };
                    return icons[name] || '';
                },
                getColor(name) {
                    const colors = {
                        'React': '#61DAFB',
                        'Node.js': '#339933',
                        'Docker': '#2496ED',
                        'Git': '#F05032'
                    };
                    return colors[name] || '#10b981';
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
                { id: 'veille-include', file: 'section/veille.html' },
                { id: 'contact-include', file: 'section/contact.html' }
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
            document.getElementById('today_date').textContent = new Date().getFullYear();
        }

        // Load includes and then initialize navigation
        loadIncludes().then(() => {
            initNavigation();
        });

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
            // Retirer la classe active de tous les liens
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Ajouter la classe active au lien correspondant
            const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
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