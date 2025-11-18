        // ==========================================
        // SYSTÈME DE TRADUCTION
        // ==========================================
        const translations = {
            en: {
                nav: {
                    home: 'home()',
                    about: 'about()',
                    projects: '.projects',
                    skills: 'skills[]',
                    contact: 'connect()'
                },
                hero: {
                    greeting: '// Hello, World! I\'m',
                    title1: 'Full-Stack Developer',
                    title2: 'Creative Coder',
                    description: 'I build things for the web. Sometimes they work on the first try.*',
                    disclaimer: '*Results not typical',
                    workButton: 'View My Work',
                    cvButton: 'Download CV'
                },
                about: {
                    title: 'About Me',
                    text1: 'Hey! I\'m Anis, a developer who enjoys turning caffeine into code. I\'ve been building web experiences for 2+ years, and I still get excited when my code compiles without errors.',
                    text2: 'When I\'m not wrestling with JavaScript frameworks or arguing with CSS, you\'ll find me contributing to open source, learning about new technologies, or explaining to my rubber duck why my code should work.',
                    quote: '"It worked on my machine" - Me, probably',
                    terminalFile: 'about.js',
                    terminalCode: '<span class="text-purple-400">const</span> anis = {<br>&nbsp;&nbsp;<span class="text-blue-400">age:</span> 18,<br>&nbsp;&nbsp;<span class="text-blue-400">location:</span> <span class="text-green-400">"Nancy"</span>,<br>&nbsp;&nbsp;<span class="text-blue-400">coffee:</span> <span class="text-orange-400">true</span>,<br>&nbsp;&nbsp;<span class="text-blue-400">bugs:</span> <span class="text-red-400">false</span>, <span class="text-gray-500">// lies</span><br>&nbsp;&nbsp;<span class="text-blue-400">hobbies:</span> [<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">"building random stuff at 3am"</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">"breaking prod on fridays"</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">"collecting mechanical keyboards"</span><br>&nbsp;&nbsp;]<br>};'
                },
                projects: {
                    title: 'Things I\'ve Built',
                    subtitle: '// Some actually work',
                    project1: {
                        title: 'Rock Paper Scissor',
                        description: 'A rock paper scissor game with a sleek UI and interactive gameplay in dark theme (obviously).'
                    },
                    project2: {
                        title: 'CodeRacer',
                        description: 'Competitive coding game where you race against time and other devs. Warning: May cause excessive competitiveness and keyboard abuse.'
                    },
                    project3: {
                        title: 'BugHunter AI',
                        description: 'An AI that finds bugs in your code. Currently finding bugs in its own code. It\'s complicated.'
                    }
                },
                skills: {
                    title: 'Tech Stack',
                    subtitle: '// Tools I pretend to understand'
                },
                contact: {
                    title: 'Let\'s Connect',
                    description: 'Currently accepting messages, memes, and job offers. Response time varies based on coffee levels.'
                },
                footer: {
                    made: 'Made with ☕ and questionable music choices at 2 AM',
                    copyright: '© 2025 Anis Wagner | Last debugged: Yesterday, probably'
                }
            },
            fr: {
                nav: {
                    home: 'accueil()',
                    about: 'à propos()',
                    projects: '.projets',
                    skills: 'compétences[]',
                    contact: 'contact()'
                },
                hero: {
                    greeting: '// Hello, world ! Je suis',
                    title1: 'Développeur Full-Stack',
                    title2: 'Codeur Créatif',
                    description: 'Je construis des choses pour le web. Parfois ça fonctionne du premier coup.*',
                    disclaimer: '*Résultats non typiques',
                    workButton: 'Voir Mon Travail',
                    cvButton: 'Télécharger CV'
                },
                about: {
                    title: 'À Propos',
                    text1: 'Salut ! Je suis Anis, un développeur qui aime transformer la caféine en code. Je construis des expériences web depuis plus de 2 ans, et je suis toujours excité quand mon code compile sans erreurs.',
                    text2: 'Quand je ne me bats pas avec les frameworks JavaScript ou que je ne discute pas avec CSS, vous me trouverez contribuant à l\'open source, apprenant de nouvelles technologies, ou expliquant à mon canard en caoutchouc pourquoi mon code devrait fonctionner.',
                    quote: '"Ça marchait sur ma machine" - Moi, probablement',
                    terminalFile: 'about.js',
                    terminalCode: '<span class="text-purple-400">const</span> anis = {<br>&nbsp;&nbsp;<span class="text-blue-400">age:</span> 18,<br>&nbsp;&nbsp;<span class="text-blue-400">location:</span> <span class="text-green-400">"Nancy"</span>,<br>&nbsp;&nbsp;<span class="text-blue-400">coffee:</span> <span class="text-orange-400">true</span>,<br>&nbsp;&nbsp;<span class="text-blue-400">bugs:</span> <span class="text-red-400">false</span>, <span class="text-gray-500">// mensonges</span><br>&nbsp;&nbsp;<span class="text-blue-400">hobbies:</span> [<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">"construire des trucs aléatoires à 3h du matin"</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">"casser la prod le vendredi"</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">"collectionner des claviers mécaniques"</span><br>&nbsp;&nbsp;]<br>};'
                },
                projects: {
                    title: 'Ce Que J\'ai Construit',
                    subtitle: '// Certains fonctionnent vraiment',
                    project1: {
                        title: 'Pierre Papier Ciseaux',
                        description: 'Un jeu de pierre-papier-ciseaux avec une interface élégante et un gameplay interactif en thème sombre (évidemment).'
                    },
                    project2: {
                        title: 'CodeRacer',
                        description: 'Jeu de codage compétitif où vous courez contre le temps et d\'autres devs. Attention : Peut causer une compétitivité excessive et des abus de clavier.'
                    },
                    project3: {
                        title: 'BugHunter AI',
                        description: 'Une IA qui trouve des bugs dans votre code. Trouve actuellement des bugs dans son propre code. C\'est compliqué.'
                    }
                },
                skills: {
                    title: 'Stack Technique',
                    subtitle: '// Outils que je prétends comprendre'
                },
                contact: {
                    title: 'Restons en Contact',
                    description: 'J\'accepte actuellement les messages, les mèmes et les offres d\'emploi. Le temps de réponse varie selon le niveau de café.'
                },
                footer: {
                    made: 'Fait avec ☕ et des choix musicaux douteux à 2h du matin',
                    copyright: '© 2025 Anis Wagner | Dernier debug : Hier, probablement'
                }
            }
        };

        // Récupérer la langue sauvegardée ou utiliser l'anglais par défaut
        let currentLang = localStorage.getItem('portfolioLang') || 'en';

        // Fonction pour traduire le contenu
        function translatePage(lang) {
            // Traduire les éléments avec textContent
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(element => {
                const key = element.getAttribute('data-i18n');
                const keys = key.split('.');
                let translation = translations[lang];
                
                for (const k of keys) {
                    translation = translation?.[k];
                }
                
                if (translation) {
                    element.textContent = translation;
                }
            });
            
            // Traduire les éléments avec innerHTML (pour le code terminal)
            const htmlElements = document.querySelectorAll('[data-i18n-html]');
            htmlElements.forEach(element => {
                const key = element.getAttribute('data-i18n-html');
                const keys = key.split('.');
                let translation = translations[lang];
                
                for (const k of keys) {
                    translation = translation?.[k];
                }
                
                if (translation) {
                    element.innerHTML = translation;
                }
            });
            
            // Mettre à jour l'affichage de la langue
            document.getElementById('langDisplay').textContent = lang.toUpperCase();
            
            // Sauvegarder la préférence
            localStorage.setItem('portfolioLang', lang);
            currentLang = lang;
        }

        // Initialiser la traduction et la navigation au chargement du DOM
        document.addEventListener('DOMContentLoaded', () => {
            translatePage(currentLang);
            initNavigation();
            
            // Gérer le clic sur le bouton de langue
            const langToggle = document.getElementById('langToggle');
            if (langToggle) {
                langToggle.addEventListener('click', () => {
                    const newLang = currentLang === 'en' ? 'fr' : 'en';
                    translatePage(newLang);
                });
            }
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
            
            // Gérer le bouton "View My Work" dans le hero
            document.querySelector('[data-i18n="hero.workButton"]')?.addEventListener('click', () => {
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