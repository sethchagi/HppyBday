// Portal Navigation
function enterPortal() {
    document.body.classList.remove('landing-page');
    document.body.classList.add('portal-page');
    document.body.innerHTML = `
        <div class="portal-container">
            <div class="nav-menu">
                <button class="nav-button active" onclick="showSection('meet-ludvig')">Meet Ludvig</button>
                <button class="nav-button" onclick="showSection('pokemon')">Pokémon</button>
                <button class="nav-button" onclick="showSection('jazz')">Jazz</button>
                <button class="nav-button" onclick="showSection('monet')">Monet</button>
                <button class="nav-button" onclick="showSection('japan')">Japan</button>
            </div>

            <!-- Meet Ludvig Section -->
            <div id="meet-ludvig" class="section active">
                <div class="meet-ludvig-container">
                    <div class="carousel">
                        <div class="slide active">
                            <h2>🎉 Welcome to Ludvig's Birthday World! 🎉</h2>
                            <p style="font-size: 24px; margin-top: 40px;">Let me tell you about him...</p>
                            <div class="pokemon-animation" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22%23FFD700%22/><circle cx=%2235%22 cy=%2240%22 r=%228%22 fill=%22%23000%22/><circle cx=%2265%22 cy=%2240%22 r=%228%22 fill=%22%23000%22/><path d=%22M 35 60 Q 50 70 65 60%22 stroke=%22%23000%22 stroke-width=%222%22 fill=%22none%22/></svg>');"></div>
                        </div>

                        <div class="slide">
                            <h2>Ludvig's Appearance</h2>
                            <p>A 6 ft tall, funky, and dorky man with such <strong>glorious, blonde hair</strong> 💛</p>
                            <div class="pokemon-animation" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect x=%2220%22 y=%2210%22 width=%2260%22 height=%2280%22 fill=%22%23FFD700%22 rx=%225%22/><circle cx=%2250%22 cy=%2230%22 r=%2212%22 fill=%22%23F5DEB3%22/><circle cx=%2242%22 cy=%2225%22 r=%223%22 fill=%22%23000%22/><circle cx=%2258%22 cy=%2225%22 r=%223%22 fill=%22%23000%22/></svg>');"></div>
                        </div>

                        <div class="slide">
                            <h2>His Intellect & Drive</h2>
                            <p>He is smart. But he is so much more – he is a <strong>bright student, driven, and disciplined</strong> 🧠✨</p>
                            <div class="pokemon-animation" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2240%22 r=%2225%22 fill=%22%23228B22%22/><path d=%22M 40 50 L 50 60 L 60 45%22 stroke=%22%23FFD700%22 stroke-width=%223%22 fill=%22none%22/></svg>');"></div>
                        </div>

                        <div class="slide">
                            <h2>His Reliability</h2>
                            <p>He is someone you can depend on. A person who will be there for you through tough times, be <strong>patient with you, and listen to you</strong> 💚</p>
                            <div class="pokemon-animation" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22%23228B22%22/><path d=%22M 35 50 Q 50 65 65 50%22 stroke=%22%23FFD700%22 stroke-width=%223%22 fill=%22none%22/></svg>');"></div>
                        </div>

                        <div class="slide">
                            <h2>Our Connection</h2>
                            <p>He gets annoyed pretty easily, but he said <strong>having me around doesn't annoy him as much</strong>. We go well together because I love being angry, and he gets that. I don't feel weird and alone when I'm angry 😊</p>
                            <div class="pokemon-animation" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2230%22 cy=%2250%22 r=%2220%22 fill=%22%23D4AF37%22/><circle cx=%2270%22 cy=%2250%22 r=%2220%22 fill=%22%23D4AF37%22/><path d=%22M 25 55 L 75 55%22 stroke=%22%23228B22%22 stroke-width=%222%22/></svg>');"></div>
                        </div>

                        <div class="slide">
                            <h2>His Emotional Depth</h2>
                            <p>He is someone who <strong>sits with my mess and still talks to it in the softest way</strong> 💭</p>
                            <div class="pokemon-animation" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22%23A0826D%22/><circle cx=%2240%22 cy=%2240%22 r=%225%22 fill=%22%23FFD700%22/><circle cx=%2260%22 cy=%2240%22 r=%225%22 fill=%22%23FFD700%22/></svg>');"></div>
                        </div>

                        <div class="slide">
                            <h2>My Favorite Thing About Him</h2>
                            <p>I don't really need AI because <strong>I have him</strong> when I'm curious about silly things 💛</p>
                            <div class="pokemon-animation" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2235%22 fill=%22%23FFD700%22/><circle cx=%2250%22 cy=%2235%22 r=%223%22 fill=%22%23D4AF37%22/><circle cx=%2250%22 cy=%2235%22 r=%221.5%22 fill=%22%23000%22/></svg>');"></div>
                        </div>

                        <div class="slide">
                            <h2>The "Well, Actually..." Guy</h2>
                            <p>He is the <strong>"Well, actually…" guy and I don't mind at all</strong>. I thought it would be annoying, but I can learn a ton from his insights 📚</p>
                            <div class="pokemon-animation" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><path d=%22M 50 10 L 61 40 L 90 40 L 67 58 L 78 88 L 50 70 L 22 88 L 33 58 L 10 40 L 39 40 Z%22 fill=%22%23FFD700%22/></svg>');"></div>
                        </div>

                        <div class="slide">
                            <h2>His True Nature</h2>
                            <p>A person with the <strong>strongest will and the gentlest heart</strong> 💪💚</p>
                            <div class="pokemon-animation" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><path d=%22M 50 20 L 80 80 L 50 70 L 20 80 Z%22 fill=%22%23228B22%22/><circle cx=%2250%22 cy=%2245%22 r=%2210%22 fill=%22%23FFD700%22/></svg>');"></div>
                        </div>

                        <div class="slide">
                            <h2>A Message for the World</h2>
                            <p style="font-size: 20px; font-weight: bold;">Now that you have met him...</p>
                            <p style="margin-top: 20px;">🤝 <strong>Please be kinder to him</strong></p>
                            <p>🧠 <strong>Please give him a little break and don't let his head get stuck in his ass</strong></p>
                            <p>👏 <strong>Please give him a little clap for each of his wins, big or small</strong></p>
                        </div>

                        <div class="slide">
                            <h2 style="font-size: 56px; color: #D4AF37;">🎂 HAPPY BIRTHDAY 🎂</h2>
                            <p style="font-size: 32px; margin-top: 30px;">Ludvig, you deserve all the happiness in the world!</p>
                            <div class="pokemon-animation" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22%23FFD700%22/><text x=%2250%22 y=%2265%22 font-size=%2250%22 text-anchor=%22middle%22 fill=%22%23D4AF37%22>26</text></svg>');"></div>
                        </div>

                        <div class="slide">
                            <h2 style="font-size: 56px; color: #228B22;">I LOVE YOU 💚</h2>
                            <p style="font-size: 24px; margin-top: 40px;">From your girlfriend with all my heart...</p>
                            <div class="pokemon-animation" style="background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><path d=%22M 50 85 C 20 70 10 50 10 35 C 10 20 25 10 35 10 C 42 10 50 15 50 15 C 50 15 58 10 65 10 C 75 10 90 20 90 35 C 90 50 80 70 50 85 Z%22 fill=%22%23228B22%22/></svg>');"></div>
                        </div>

                        <div class="slide-counter">
                            <span id="current-slide">1</span> / <span id="total-slides">13</span>
                        </div>

                        <div class="carousel-controls">
                            <button class="carousel-button" onclick="prevSlide()">← Previous</button>
                            <button class="carousel-button" onclick="nextSlide()">Next →</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pokémon Section -->
            <div id="pokemon" class="section">
                <div class="pokemon-world">
                    <h1>🎮 Pokémon World 🎮</h1>
                    <div class="pokemon-grid">
                        <div class="pokemon-card">
                            <div class="pokemon-emoji">🔴</div>
                            <h3>Pokéball</h3>
                            <p>The classic symbol of adventure!</p>
                        </div>
                        <div class="pokemon-card">
                            <div class="pokemon-emoji">⚡</div>
                            <h3>Pikachu</h3>
                            <p>Electric vibes all the way!</p>
                        </div>
                        <div class="pokemon-card">
                            <div class="pokemon-emoji">🔥</div>
                            <h3>Charizard</h3>
                            <p>Fire and passion combined!</p>
                        </div>
                        <div class="pokemon-card">
                            <div class="pokemon-emoji">💧</div>
                            <h3>Blastoise</h3>
                            <p>Cool and collected!</p>
                        </div>
                        <div class="pokemon-card">
                            <div class="pokemon-emoji">🌿</div>
                            <h3>Venusaur</h3>
                            <p>Growth and nature!</p>
                        </div>
                        <div class="pokemon-card">
                            <div class="pokemon-emoji">👻</div>
                            <h3>Gengar</h3>
                            <p>Mysterious and fun!</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Jazz Section -->
            <div id="jazz" class="section">
                <div class="jazz-world">
                    <h1>🎷 Jazz Vibes 🎷</h1>
                    <p style="font-size: 24px; margin: 40px 0; color: #8b7355;">
                        <span class="musical-note">♪</span>
                        Feel the rhythm
                        <span class="musical-note">♪</span>
                    </p>
                    <div style="background: linear-gradient(135deg, #a0826d 0%, #d4af37 100%); padding: 40px; border-radius: 15px; color: white; font-size: 18px; line-height: 1.8;">
                        <p>Jazz is a language spoken by the soul. It's improvisation, it's feeling, it's freedom.</p>
                        <p style="margin-top: 20px;">Like jazz, life is best when you embrace the unexpected and dance to your own beat.</p>
                        <p style="margin-top: 20px; font-style: italic; font-size: 20px;">Keep swinging, Ludvig! 🎵</p>
                    </div>
                </div>
            </div>

            <!-- Monet Section -->
            <div id="monet" class="section">
                <div class="monet-world">
                    <h1>🎨 Monet's World 🎨</h1>
                    <div class="monet-description">
                        <p style="font-size: 20px; margin-bottom: 20px;"><strong>Water Lilies & Light</strong></p>
                        <p>Claude Monet taught us that beauty lies in how light transforms everything it touches. His water lilies shimmer with possibility, just like how you bring light to my world.</p>
                        <p style="margin-top: 20px;">Every moment with you is like a brushstroke of color on the canvas of my life – vibrant, thoughtful, and beautiful.</p>
                    </div>
                </div>
            </div>

            <!-- Japan Section -->
            <div id="japan" class="section">
                <div class="japan-world">
                    <h1>🗾 Japan Explorer 🗾</h1>
                    <div class="japan-info">
                        <div class="japan-card">
                            <h3>🏯 Culture</h3>
                            <p>Ancient temples, modern cities, and timeless traditions blend seamlessly in Japan.</p>
                        </div>
                        <div class="japan-card">
                            <h3>🍣 Cuisine</h3>
                            <p>From street food to fine dining, every bite is an experience of perfection and care.</p>
                        </div>
                        <div class="japan-card">
                            <h3>🌸 Nature</h3>
                            <p>Cherry blossoms, misty mountains, and serene gardens inspire the soul.</p>
                        </div>
                        <div class="japan-card">
                            <h3>⛩️ Spirituality</h3>
                            <p>A country where spirit and matter dance in beautiful harmony.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <audio id="background-music" autoplay loop style="display: none;">
            <source src="birthday-music.mp3" type="audio/mpeg">
        </audio>

        <script>
            let currentSlide = 0;
            const slides = document.querySelectorAll('.slide');
            const totalSlides = slides.length;

            function showSlide(n) {
                slides[currentSlide].classList.remove('active');
                currentSlide = (n + totalSlides) % totalSlides;
                slides[currentSlide].classList.add('active');
                
                document.getElementById('current-slide').textContent = currentSlide + 1;
                
                document.querySelector('[onclick="prevSlide()"]').disabled = currentSlide === 0;
                document.querySelector('[onclick="nextSlide()"]').disabled = currentSlide === totalSlides - 1;
            }

            function nextSlide() {
                if (currentSlide < totalSlides - 1) {
                    showSlide(currentSlide + 1);
                }
            }

            function prevSlide() {
                if (currentSlide > 0) {
                    showSlide(currentSlide - 1);
                }
            }

            function showSection(sectionId) {
                // Hide all sections
                document.querySelectorAll('.section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show selected section
                document.getElementById(sectionId).classList.add('active');
                
                // Update nav buttons
                document.querySelectorAll('.nav-button').forEach(button => {
                    button.classList.remove('active');
                });
                event.target.classList.add('active');

                // Reset carousel if showing meet-ludvig
                if (sectionId === 'meet-ludvig') {
                    currentSlide = 0;
                    showSlide(0);
                }
            }

            // Initialize slide buttons
            showSlide(0);
        </script>
    `;
}

// Add enter button animation on page load
document.addEventListener('DOMContentLoaded', function() {
    const enterBtn = document.querySelector('.enter-button');
    if (enterBtn) {
        enterBtn.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.5s ease-in-out';
        });
    }
});
