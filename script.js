/**
 * memorialDesacratio — все скрипты
 * темы, частицы, модалки, бургер, счётчики
 */

// ========== ПЕРЕКЛЮЧЕНИЕ ТЕМЫ ==========
const themeToggle = document.getElementById('themeToggle');
let currentTheme = localStorage.getItem('mTheme') || 'dark';

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '🌙';
    }
    localStorage.setItem('mTheme', theme);
    currentTheme = theme;
    // обновляем частицы при смене темы
    if (typeof drawParticles === 'function') drawParticles();
}

applyTheme(currentTheme);

themeToggle.addEventListener('click', () => {
    const next = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
});

// ========== БУРГЕР-МЕНЮ ==========
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerBtn.classList.toggle('active');
});

// закрываем меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burgerBtn.classList.remove('active');
    });
});

// ========== МОДАЛКИ ==========
document.querySelectorAll('.library-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// закрытие по крестику
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal-overlay');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// закрытие по клику на фон
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// закрытие по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(m => {
            m.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

// ========== СЧЁТЧИКИ В HERO ==========
function animateCounter(el, target, suffix = '') {
    let current = 0;
    const step = Math.ceil(target / 50);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = current + suffix;
    }, 20);
}

// запускаем счётчики когда они в зоне видимости
const counterObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            const el = entry.target;
            const id = el.id;
            if (id === 'articlesCount') animateCounter(el, 100, '+');
            if (id === 'projectsCount') animateCounter(el, 25, '+');
            if (id === 'expYears') animateCounter(el, 3, '+');
            counterObserver.unobserve(el);
        }
    }
}, { threshold: 0.5 });

['articlesCount', 'projectsCount', 'expYears'].forEach(id => {
    const el = document.getElementById(id);
    if (el) counterObserver.observe(el);
});

// ========== ЧАСТИЦЫ ==========
(function() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particles = [];
    let rafId = null;
    let running = false;
    let lastFrame = 0;
    let currentW = 0;
    let currentH = 0;

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function isMobile() { return window.innerWidth <= 768; }

    function particleCount() {
        if (window.innerWidth <= 480) return 45;
        if (isMobile()) return 70;
        return 120;
    }

    function createParticle(w, h, fromBottom) {
        return {
            x: rand(0, w),
            y: fromBottom ? rand(h + 5, h + 40) : rand(0, h),
            size: rand(1.2, 3.2),
            alpha: rand(0.2, 0.55),
            speedY: rand(0.08, 0.25),
            driftX: rand(-0.12, 0.12),
            phase: rand(0, Math.PI * 2),
            phaseSpeed: rand(0.003, 0.01),
            sway: rand(0.015, 0.05),
        };
    }

    window.drawParticles = function() {
        draw();
    };

    function resize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        if (w === currentW && h === currentH) return;
        currentW = w;
        currentH = h;
        canvas.width = w * devicePixelRatio;
        canvas.height = h * devicePixelRatio;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

        const num = particleCount();
        const next = [];
        for (let i = 0; i < num; i++) {
            if (particles[i]) next.push(particles[i]);
            else next.push(createParticle(w, h, false));
        }
        particles = next;
    }

    function draw() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        ctx.clearRect(0, 0, w, h);

        const isLight = document.body.classList.contains('light-mode');
        const color = isLight ? '0,0,0' : '255,255,255';

        // рисуем частицы
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.phase += p.phaseSpeed;
            p.x += p.driftX + Math.sin(p.phase) * p.sway;
            p.y -= p.speedY;

            if (p.y + p.size < 0) {
                particles[i] = createParticle(w, h, true);
                continue;
            }
            if (p.x < -10) p.x = w + 10;
            if (p.x > w + 10) p.x = -10;

            ctx.beginPath();
            ctx.fillStyle = `rgba(${color},${p.alpha})`;
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }

        // паутина между частицами
        const linkDist = isMobile() ? 100 : 150;
        const linkDistSq = linkDist * linkDist;
        for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            let links = 0;
            for (let j = i + 1; j < particles.length; j++) {
                if (links >= 3) break;
                const b = particles[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > linkDistSq) continue;
                const strength = 1 - (distSq / linkDistSq);
                const alpha = Math.max(0, 0.3 * strength);
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${color},${alpha})`;
                ctx.lineWidth = 0.6;
                ctx.moveTo(a.x, a.y);
                const mx = (a.x + b.x) / 2 + Math.sin(a.phase + b.phase) * 1;
                const my = (a.y + b.y) / 2 + Math.cos(a.phase + b.phase) * 0.8;
                ctx.quadraticCurveTo(mx, my, b.x, b.y);
                ctx.stroke();
                links++;
            }
        }
    }

    function animate(ts) {
        if (!running) return;
        const fps = isMobile() ? 24 : 40;
        const frameMs = 1000 / fps;
        if (!lastFrame || ts - lastFrame >= frameMs) {
            lastFrame = ts;
            draw();
        }
        rafId = requestAnimationFrame(animate);
    }

    function start() {
        if (running) return;
        running = true;
        rafId = requestAnimationFrame(animate);
    }

    function stop() {
        running = false;
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stop();
        else start();
    });

    window.addEventListener('resize', resize);
    resize();
    start();
})();

// ========== ПАРАЛЛАКС ==========
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.06}px)`;
            hero.style.opacity = 1 - (scrolled / (window.innerHeight * 0.6));
        }
    }
});

// ========== ПЛАВНЫЙ СКРОЛЛ ==========
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ========== ПОДСВЕТКА ТЕКУЩЕГО РАЗДЕЛА ==========
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (window.pageYOffset >= top) current = section.getAttribute('id');
    });
    navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
});

console.log('%c memorialDesacratio ', 'background: #667eea; color: #fff; font-size: 16px; padding: 8px 16px; border-radius: 8px; font-weight: bold;');
console.log('%c In Cyberspace We Trust ', 'color: #667eea; font-size: 12px;');
