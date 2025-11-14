<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Chen | Creative Developer</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="bg-black text-gray-100 relative">
    
    <div class="noise"></div>
    
    
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
    
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
        <div class="container mx-auto px-6 py-4">
            <div class="flex justify-between items-center">
                <div class="mono text-green-400 text-sm">
                    <span class="text-gray-500">alex@dev:</span><span class="text-blue-400">~</span>$
                    <span class="typing"> portfolio --run</span>
                </div>
                <div class="flex gap-6">
                    <a href="#about" class="hover:text-green-400 transition-colors cursor-pointer">about()</a>
                    <a href="#projects" class="hover:text-green-400 transition-colors cursor-pointer">.projects</a>
                    <a href="#skills" class="hover:text-green-400 transition-colors cursor-pointer">skills[]</a>
                    <a href="#contact" class="hover:text-green-400 transition-colors cursor-pointer">connect()</a>
                </div>
            </div>
        </div>
    </nav>
    
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div class="absolute top-20 right-10 text-green-400/20 ascii-art hidden lg:block">
    ██████╗ ███████╗██╗   ██╗
    ██╔══██╗██╔════╝██║   ██║
    ██║  ██║█████╗  ██║   ██║
    ██║  ██║██╔══╝  ╚██╗ ██╔╝
    ██████╔╝███████╗ ╚████╔╝ 
    ╚═════╝ ╚══════╝  ╚═══╝  
        </div>
        
        <div class="container mx-auto px-6 z-10">
            <div class="max-w-4xl">
                <p class="text-green-400 mono mb-4">// Hello, World! I'm</p>
                <h1 class="glitch mb-6">Alex Chen</h1>
                <div class="flex items-center gap-4 mb-8">
                    <div class="blob w-3 h-3 bg-green-400"></div>
                    <h2 class="text-2xl md:text-3xl font-light">
                        Full-Stack Developer & 
                        <span class="text-green-400">Creative Coder</span>
                    </h2>
                </div>
                <p class="text-gray-400 text-lg mb-8 leading-relaxed">
                    I build things for the web. Sometimes they work on the first try.*
                    <br>
                    <span class="text-xs">*Results not typical</span>
                </p>
                <div class="flex gap-4">
                    <button class="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all hover:scale-105 cursor-pointer">
                        View My Work
                    </button>
                    <button class="px-6 py-3 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/10 transition-all cursor-pointer">
                        Download CV
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Floating elements -->
        <div class="absolute bottom-20 right-20 float">
            <div class="w-20 h-20 border border-green-400/30 rounded-full"></div>
        </div>
        <div class="absolute top-40 left-10 float" style="animation-delay: 2s;">
            <div class="w-10 h-10 bg-green-400/10 rounded-full"></div>
        </div>
    </section>
    
    <!-- About Section -->
    <section id="about" class="py-20 relative">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 class="text-3xl font-bold mb-6">
                        <span class="text-green-400 mono">&lt;</span>
                        About Me
                        <span class="text-green-400 mono">/&gt;</span>
                    </h3>
                    <div class="terminal">
                        <div class="terminal-header">
                            <div class="terminal-dot bg-red-500"></div>
                            <div class="terminal-dot bg-yellow-500"></div>
                            <div class="terminal-dot bg-green-500"></div>
                            <span class="text-xs text-gray-500 ml-2">about.js</span>
                        </div>
                        <div class="p-4 mono text-sm">
                            <p class="text-gray-400">
                                <span class="text-purple-400">const</span> alex = {<br>
                                &nbsp;&nbsp;<span class="text-blue-400">age:</span> 27,<br>
                                &nbsp;&nbsp;<span class="text-blue-400">location:</span> <span class="text-green-400">"San Francisco"</span>,<br>
                                &nbsp;&nbsp;<span class="text-blue-400">coffee:</span> <span class="text-orange-400">true</span>,<br>
                                &nbsp;&nbsp;<span class="text-blue-400">bugs:</span> <span class="text-red-400">false</span>, <span class="text-gray-500">// lies</span><br>
                                &nbsp;&nbsp;<span class="text-blue-400">hobbies:</span> [<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">"building random stuff at 3am"</span>,<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">"breaking prod on fridays"</span>,<br>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-400">"collecting mechanical keyboards"</span><br>
                                &nbsp;&nbsp;]<br>
                                };
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="text-gray-300 mb-4">
                        Hey! I'm Alex, a developer who enjoys turning caffeine into code. 
                        I've been building web experiences for 5+ years, and I still get excited 
                        when my code compiles without errors.
                    </p>
                    <p class="text-gray-300 mb-4">
                        When I'm not wrestling with JavaScript frameworks or arguing with CSS, 
                        you'll find me contributing to open source, learning about new technologies, 
                        or explaining to my rubber duck why my code should work.
                    </p>
                    <p class="text-gray-400 text-sm italic">
                        "It worked on my machine" - Me, probably
                    </p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Projects Section -->
    <section id="projects" class="py-20">
        <div class="container mx-auto px-6">
            <h3 class="text-3xl font-bold mb-12 text-center">
                Things I've Built
                <span class="text-green-400 text-lg block mt-2">// Some actually work</span>
            </h3>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="project-card bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-400/50 transition-all">
                    <div class="flex justify-between items-start mb-4">
                        <div class="text-green-400 text-3xl">📱</div>
                        <div class="flex gap-2">
                            <span class="text-xs px-2 py-1 bg-green-400/20 text-green-400 rounded">Live</span>
                        </div>
                    </div>
                    <h4 class="text-xl font-semibold mb-2">TaskFlow Pro</h4>
                    <p class="text-gray-400 text-sm mb-4">
                        A task management app that actually makes you want to be productive. 
                        Features include dark mode (obviously) and a pomodoro timer that judges you.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-xs px-2 py-1 bg-gray-800 rounded">React</span>
                        <span class="text-xs px-2 py-1 bg-gray-800 rounded">Node.js</span>
                        <span class="text-xs px-2 py-1 bg-gray-800 rounded">MongoDB</span>
                    </div>
                </div>
                
                <!-- Project 2 -->
                <div class="project-card bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-400/50 transition-all">
                    <div class="flex justify-between items-start mb-4">
                        <div class="text-green-400 text-3xl">🎮</div>
                        <div class="flex gap-2">
                            <span class="text-xs px-2 py-1 bg-blue-400/20 text-blue-400 rounded">Beta</span>
                        </div>
                    </div>
                    <h4 class="text-xl font-semibold mb-2">CodeRacer</h4>
                    <p class="text-gray-400 text-sm mb-4">
                        Competitive coding game where you race against time and other devs. 
                        Warning: May cause excessive competitiveness and keyboard abuse.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-xs px-2 py-1 bg-gray-800 rounded">Vue.js</span>
                        <span class="text-xs px-2 py-1 bg-gray-800 rounded">Socket.io</span>
                        <span class="text-xs px-2 py-1 bg-gray-800 rounded">Redis</span>
                    </div>
                </div>
                
                <!-- Project 3 -->
                <div class="project-card bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-400/50 transition-all">
                    <div class="flex justify-between items-start mb-4">
                        <div class="text-green-400 text-3xl">🤖</div>
                        <div class="flex gap-2">
                            <span class="text-xs px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded">WIP</span>
                        </div>
                    </div>
                    <h4 class="text-xl font-semibold mb-2">BugHunter AI</h4>
                    <p class="text-gray-400 text-sm mb-4">
                        An AI that finds bugs in your code. Currently finding bugs in its own code. 
                        It's complicated.
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-xs px-2 py-1 bg-gray-800 rounded">Python</span>
                        <span class="text-xs px-2 py-1 bg-gray-800 rounded">TensorFlow</span>
                        <span class="text-xs px-2 py-1 bg-gray-800 rounded">Coffee</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Skills Section -->
    <section id="skills" class="py-20">
        <div class="container mx-auto px-6">
            <h3 class="text-3xl font-bold mb-12 text-center">
                Tech Stack
                <span class="text-green-400 text-lg block mt-2">// Tools I pretend to understand</span>
            </h3>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div class="text-center group cursor-pointer">
                    <div class="text-5xl mb-2 group-hover:scale-110 transition-transform">⚛️</div>
                    <p class="text-sm">React</p>
                    <div class="w-full bg-gray-800 rounded-full h-1 mt-2">
                        <div class="bg-green-400 h-1 rounded-full" style="width: 90%"></div>
                    </div>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="text-5xl mb-2 group-hover:scale-110 transition-transform">🟨</div>
                    <p class="text-sm">JavaScript</p>
                    <div class="w-full bg-gray-800 rounded-full h-1 mt-2">
                        <div class="bg-green-400 h-1 rounded-full" style="width: 85%"></div>
                    </div>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="text-5xl mb-2 group-hover:scale-110 transition-transform">🐍</div>
                    <p class="text-sm">Python</p>
                    <div class="w-full bg-gray-800 rounded-full h-1 mt-2">
                        <div class="bg-green-400 h-1 rounded-full" style="width: 75%"></div>
                    </div>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="text-5xl mb-2 group-hover:scale-110 transition-transform">🗄️</div>
                    <p class="text-sm">PostgreSQL</p>
                    <div class="w-full bg-gray-800 rounded-full h-1 mt-2">
                        <div class="bg-green-400 h-1 rounded-full" style="width: 70%"></div>
                    </div>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="text-5xl mb-2 group-hover:scale-110 transition-transform">🎨</div>
                    <p class="text-sm">CSS/Tailwind</p>
                    <div class="w-full bg-gray-800 rounded-full h-1 mt-2">
                        <div class="bg-green-400 h-1 rounded-full" style="width: 80%"></div>
                    </div>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="text-5xl mb-2 group-hover:scale-110 transition-transform">🚀</div>
                    <p class="text-sm">Node.js</p>
                    <div class="w-full bg-gray-800 rounded-full h-1 mt-2">
                        <div class="bg-green-400 h-1 rounded-full" style="width: 85%"></div>
                    </div>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="text-5xl mb-2 group-hover:scale-110 transition-transform">🐳</div>
                    <p class="text-sm">Docker</p>
                    <div class="w-full bg-gray-800 rounded-full h-1 mt-2">
                        <div class="bg-green-400 h-1 rounded-full" style="width: 65%"></div>
                    </div>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="text-5xl mb-2 group-hover:scale-110 transition-transform">☕</div>
                    <p class="text-sm">Coffee Making</p>
                    <div class="w-full bg-gray-800 rounded-full h-1 mt-2">
                        <div class="bg-green-400 h-1 rounded-full" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="py-20">
        <div class="container mx-auto px-6 text-center">
            <h3 class="text-3xl font-bold mb-6">Let's Connect</h3>
            <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
                Currently accepting messages, memes, and job offers. 
                Response time varies based on coffee levels.
            </p>
            
            <div class="flex justify-center gap-6 mb-8">
                <a href="#" class="text-3xl hover:text-green-400 transition-colors hover:scale-110 cursor-pointer">📧</a>
                <a href="#" class="text-3xl hover:text-green-400 transition-colors hover:scale-110 cursor-pointer">🐙</a>
                <a href="#" class="text-3xl hover:text-green-400 transition-colors hover:scale-110 cursor-pointer">💼</a>
                <a href="#" class="text-3xl hover:text-green-400 transition-colors hover:scale-110 cursor-pointer">🐦</a>
            </div>
            
            <p class="text-xs text-gray-600">
                Made with ☕ and questionable music choices at 2 AM<br>
                © 2024 Alex Chen | Last debugged: Yesterday, probably
            </p>
        </div>
    </section>
    
    <script src="js/script.js"></script>
</body>
</html>