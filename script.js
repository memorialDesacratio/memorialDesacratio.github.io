/**
 * CyberDesacratio — все скрипты
 * темы, частицы, модули, модалки, бургер, счётчики
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
    if (typeof drawParticles === 'function') setTimeout(drawParticles, 50);
}

applyTheme(currentTheme);

themeToggle.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ========== БУРГЕР-МЕНЮ ==========
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerBtn.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burgerBtn.classList.remove('active');
    });
});

// ========== МОДУЛИ ==========
const moduleGrid = document.getElementById('moduleGrid');
const moduleModal = document.getElementById('moduleModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalBack = document.getElementById('modalBack');
const modalClose = moduleModal.querySelector('.modal-close');

let currentModule = null;
let currentSubmodule = null;

// Рендер модулей
function renderModules() {
    moduleGrid.innerHTML = '';
    MODULES.forEach(mod => {
        const card = document.createElement('button');
        card.className = 'library-card';
        card.innerHTML = `
            <div class="card-icon">${mod.icon}</div>
            <h3>${mod.title}</h3>
            <p>${mod.desc}</p>
            <span class="card-count">${mod.count} подмодулей</span>
            <span class="card-tag">Открыть модуль →</span>
        `;
        card.addEventListener('click', () => openModule(mod));
        moduleGrid.appendChild(card);
    });
}

// Открыть модуль (список подмодулей)
function openModule(mod) {
    currentModule = mod;
    currentSubmodule = null;
    modalTitle.textContent = `${mod.icon} ${mod.title}`;
    modalBack.style.display = 'none';
    
    let html = `<div class="submodule-grid">`;
    mod.submodules.forEach((sub, i) => {
        html += `
            <button class="submodule-card" data-index="${i}">
                <span class="submodule-title">${sub.title}</span>
                <span class="submodule-arrow">→</span>
            </button>
        `;
    });
    html += `</div>`;
    modalBody.innerHTML = html;
    
    // Клик по подмодулю
    modalBody.querySelectorAll('.submodule-card').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.index);
            openSubmodule(mod, idx);
        });
    });
    
    moduleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Открыть подмодуль (контент)
function openSubmodule(mod, idx) {
    currentSubmodule = idx;
    const sub = mod.submodules[idx];
    modalTitle.textContent = `${mod.icon} ${sub.title}`;
    modalBack.style.display = 'flex';
    modalBody.innerHTML = sub.content;
}

// Закрытие модала
function closeModal() {
    moduleModal.classList.remove('active');
    document.body.style.overflow = '';
    currentModule = null;
    currentSubmodule = null;
}

// Назад к подмодулям
modalBack.addEventListener('click', () => {
    if (currentModule && currentSubmodule !== null) {
        openModule(currentModule);
    }
});

modalClose.addEventListener('click', closeModal);
moduleModal.addEventListener('click', (e) => {
    if (e.target === moduleModal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ========== СЧЁТЧИКИ ==========
function animateCounter(el, target, suffix = '') {
    let current = 0;
    const step = Math.ceil(target / 50);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current + suffix;
    }, 20);
}

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
    let currentW = 0, currentH = 0;
    let resizeTimer = null;

    function rand(min, max) { return Math.random() * (max - min) + min; }
    function isMobile() { return window.innerWidth <= 768; }
    function isTiny() { return window.innerWidth <= 480; }
    function particleCount() {
        if (isTiny()) return 40;
        if (isMobile()) return 65;
        return 110;
    }
    function effectiveDPR() {
        // Cap DPR at 2 for performance on high-DPI mobile screens
        const dpr = window.devicePixelRatio || 1;
        return isMobile() ? Math.min(dpr, 2) : Math.min(dpr, 3);
    }

    function createParticle(w, h, fromBottom) {
        const isSmall = isTiny();
        return {
            x: rand(0, w), y: fromBottom ? rand(h + 5, h + 40) : rand(0, h),
            size: rand(isSmall ? 1.0 : 1.2, isSmall ? 2.5 : 3.2),
            alpha: rand(isSmall ? 0.15 : 0.2, isSmall ? 0.4 : 0.55),
            speedY: rand(0.08, 0.25), driftX: rand(-0.12, 0.12),
            phase: rand(0, Math.PI * 2), phaseSpeed: rand(0.003, 0.01),
            sway: rand(0.015, 0.05),
        };
    }

    window.drawParticles = function() { draw(); };

    function resize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        if (w === currentW && h === currentH) return;
        currentW = w; currentH = h;
        const dpr = effectiveDPR();
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const num = particleCount();
        const next = [];
        for (let i = 0; i < num; i++) {
            if (particles[i]) next.push(particles[i]);
            else next.push(createParticle(w, h, false));
        }
        particles = next;
    }

    function debouncedResize() {
        if (resizeTimer) { cancelAnimationFrame(resizeTimer); resizeTimer = null; }
        resizeTimer = requestAnimationFrame(resize);
    }

    function draw() {
        const w = window.innerWidth, h = window.innerHeight;
        ctx.clearRect(0, 0, w, h);
        const isLight = document.body.classList.contains('light-mode');
        const color = isLight ? '0,0,0' : '255,255,255';
        const mobile = isMobile();

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.phase += p.phaseSpeed;
            p.x += p.driftX + Math.sin(p.phase) * p.sway;
            p.y -= p.speedY;
            if (p.y + p.size < 0) { particles[i] = createParticle(w, h, true); continue; }
            if (p.x < -10) p.x = w + 10;
            if (p.x > w + 10) p.x = -10;
            ctx.beginPath();
            ctx.fillStyle = `rgba(${color},${p.alpha})`;
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }

        // Links — меньше дистанция и макс 2 связи на мобильных
        const linkDist = mobile ? 80 : 150;
        const linkDistSq = linkDist * linkDist;
        const maxLinks = mobile ? 2 : 3;
        for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            let links = 0;
            for (let j = i + 1; j < particles.length; j++) {
                if (links >= maxLinks) break;
                const b = particles[j];
                const dx = a.x - b.x, dy = a.y - b.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > linkDistSq) continue;
                const strength = 1 - (distSq / linkDistSq);
                const alpha = Math.max(0, (mobile ? 0.2 : 0.3) * strength);
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${color},${alpha})`;
                ctx.lineWidth = mobile ? 0.4 : 0.6;
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
        const fps = isMobile() ? 20 : 36;
        const frameMs = 1000 / fps;
        if (!lastFrame || ts - lastFrame >= frameMs) { lastFrame = ts; draw(); }
        rafId = requestAnimationFrame(animate);
    }

    function start() { if (!running) { running = true; rafId = requestAnimationFrame(animate); } }
    function stop() { running = false; if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }

    document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
    window.addEventListener('resize', debouncedResize);
    resize();
    start();
})();

// ========== ТРОТТЛ ==========
function throttle(fn, limit) {
    let last = 0;
    return function(...args) {
        const now = Date.now();
        if (now - last >= limit) { last = now; fn.apply(this, args); }
    };
}

// ========== ПАРАЛЛАКС ==========
window.addEventListener('scroll', throttle(() => {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        const scrolled = window.pageYOffset;
        const h = window.innerHeight;
        if (scrolled < h) {
            hero.style.transform = `translateY(${scrolled * 0.06}px)`;
            hero.style.opacity = 1 - (scrolled / (h * 0.6));
        }
    }
}, 60));

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

// ========== ПОДСВЕТКА РАЗДЕЛА ==========
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', throttle(() => {
    let current = '';
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (scrollY >= top) current = section.getAttribute('id');
    });
    navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
}, 80));

// ========== ЗАПУСК ==========
renderModules();

console.log('%c CyberDesacratio ', 'background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; font-size: 18px; padding: 10px 20px; border-radius: 8px; font-weight: bold;');
console.log('%c In Cyberspace We Trust ', 'color: #667eea; font-size: 13px;');
