/**
 * CyberDesacratio — база модулей и подмодулей
 * Каждый модуль содержит массив подмодулей с контентом
 */

const MODULES = [
    {
        id: 'osint',
        icon: '🕵️',
        title: 'OSINT',
        desc: 'Разведка по открытым источникам: инструменты, техники, базы данных, Google Dorks, поиск информации.',
        count: '14',
        submodules: [
            {
                title: '🔍 Основы OSINT',
                content: `
                    <h3>Что такое OSINT?</h3>
                    <p>OSINT (Open Source Intelligence) — разведка по открытым источникам. Это сбор и анализ информации из общедоступных источников: сайты, соцсети, форумы, утекшие базы, документы.</p>
                    <h3>Ключевые принципы</h3>
                    <ul>
                        <li><strong>Легальность</strong> — только открытые данные</li>
                        <li><strong>Верификация</strong> — перекрёстная проверка</li>
                        <li><strong>Автоматизация</strong> — скрипты для сбора</li>
                        <li><strong>Анализ</strong> — данные → информация → выводы</li>
                    </ul>
                    <h3>Этапы OSINT-исследования</h3>
                    <ol>
                        <li>Определение цели и задач</li>
                        <li>Сбор исходных данных (name, email, username)</li>
                        <li>Поиск по открытым источникам</li>
                        <li>Анализ и верификация</li>
                        <li>Оформление результатов</li>
                    </ol>
                `
            },
            {
                title: '🛠️ Инструменты OSINT',
                content: `
                    <h3>Топ инструментов</h3>
                    <ul>
                        <li><strong>Maltego</strong> — визуализация связей (графы)</li>
                        <li><strong>Shodan</strong> — поиск устройств в интернете</li>
                        <li><strong>theHarvester</strong> — сбор email, поддоменов, IP</li>
                        <li><strong>Recon-ng</strong> — фреймворк для веб-разведки</li>
                        <li><strong>SpiderFoot</strong> — автоматический сканер (200+ модулей)</li>
                        <li><strong>Creepy</strong> — геолокация по фото</li>
                        <li><strong>Telegram OSINT</strong> — поиск по чатам и юзерам</li>
                    </ul>
                    <h3>Установка</h3>
                    <pre><code># Kali Linux — всё предустановлено
# Для установки на Arch:
sudo pacman -S maltego theharvester recon-ng

# Python-инструменты
pip install holehe social-analyzer InstaLoad</code></pre>
                `
            },
            {
                title: '📝 Google Dorks',
                content: `
                    <h3>Что такое Google Dorks?</h3>
                    <p>Специальные операторы поиска для точного нахождения информации.</p>
                    <h3>Основные операторы</h3>
                    <pre><code>site:example.com       — поиск по сайту
filetype:pdf           — поиск по типу файла
intitle:"admin"        — поиск в заголовке
inurl:admin            — поиск в URL
intext:"пароль"        — поиск в тексте
"@" + "example.com"    — поиск email</code></pre>
                    <h3>Примеры доров</h3>
                    <pre><code># Найти папки с бэкапами
intitle:"index of" /backup

# Найти PDF с отчётами
site:target.com filetype:pdf confidential

# Найти уязвимые страницы
inurl:php?id= site:target.com</code></pre>
                `
            },
            {
                title: '👤 Поиск людей',
                content: `
                    <h3>Методы поиска</h3>
                    <ul>
                        <li><strong>По username</strong> — namechk, whatsmy.name, knowem</li>
                        <li><strong>По email</strong> — holehe, emailrep.io</li>
                        <li><strong>По телефону</strong> — getcontact, truecaller</li>
                        <li><strong>По соцсетям</strong> — Facebook, VK, LinkedIn, Telegram</li>
                        <li><strong>По форумам</strong> — Google "username site:forum.ru"</li>
                    </ul>
                    <h3>Проверка утечек</h3>
                    <ul>
                        <li>haveibeenpwned.com</li>
                        <li>leakcheck.io</li>
                        <li>dehashed.com</li>
                    </ul>
                `
            },
            {
                title: '⚖️ Этика OSINT',
                content: `
                    <h3>Правила</h3>
                    <ul>
                        <li>Используй только открытые данные</li>
                        <li>Не публикуй личные данные без согласия</li>
                        <li>Не используй OSINT для вреда</li>
                        <li>Соблюдай законы своей страны</li>
                    </ul>
                    <p>OSINT — это инструмент. Как и любой инструмент, он может быть использован во благо или во вред. Выбор за тобой.</p>
                `
            }
        ]
    },
    {
        id: 'pentest',
        icon: '⚔️',
        title: 'Пентестинг',
        desc: 'Тестирование на проникновение: методологии, инструменты, практика, CTF, отчёты.',
        count: '12',
        submodules: [
            {
                title: '📖 Основы пентеста',
                content: `
                    <h3>Что такое пентест?</h3>
                    <p>Penetration Testing — легальная имитация атаки на систему с целью поиска уязвимостей. От настоящей атаки отличается наличием договора и рамок.</p>
                    <h3>Этапы (PTES)</h3>
                    <ol>
                        <li>Reconnaissance — разведка</li>
                        <li>Scanning — сканирование</li>
                        <li>Exploitation — эксплуатация</li>
                        <li>Privilege Escalation — повышение прав</li>
                        <li>Post-Exploitation — закрепление</li>
                        <li>Reporting — отчёт</li>
                    </ol>
                `
            },
            {
                title: '🔧 Инструменты',
                content: `
                    <h3>Базовый набор</h3>
                    <ul>
                        <li><strong>Nmap</strong> — сканер портов</li>
                        <li><strong>Metasploit</strong> — фреймворк эксплойтов</li>
                        <li><strong>Burp Suite</strong> — перехват HTTP/HTTPS</li>
                        <li><strong>Hydra</strong> — брутфорс</li>
                        <li><strong>Wireshark</strong> — анализ трафика</li>
                        <li><strong>John/Hashcat</strong> — взлом хэшей</li>
                        <li><strong>Gobuster</strong> — перебор директорий</li>
                        <li><strong>Netcat</strong> — швейцарский нож</li>
                    </ul>
                `
            },
            {
                title: '🎯 Практика (легально)',
                content: `
                    <h3>Полигоны</h3>
                    <ul>
                        <li><strong>HackTheBox</strong> — реалистичные машины</li>
                        <li><strong>TryHackMe</strong> — обучение с нуля</li>
                        <li><strong>VulnHub</strong> — уязвимые VM</li>
                        <li><strong>PentesterLab</strong> — веб-пентест</li>
                        <li><strong>OverTheWire</strong> — Linux-задания</li>
                    </ul>
                `
            },
            {
                title: '📋 OWASP Top 10',
                content: `
                    <h3>Топ-10 веб-уязвимостей</h3>
                    <ol>
                        <li>Injection (SQL, NoSQL, OS)</li>
                        <li>Broken Authentication</li>
                        <li>Sensitive Data Exposure</li>
                        <li>XML External Entities (XXE)</li>
                        <li>Broken Access Control</li>
                        <li>Security Misconfiguration</li>
                        <li>Cross-Site Scripting (XSS)</li>
                        <li>Insecure Deserialization</li>
                        <li>Components with Known Vulns</li>
                        <li>Insufficient Logging & Monitoring</li>
                    </ol>
                `
            }
        ]
    },
    {
        id: 'coding',
        icon: '💻',
        title: 'Программирование',
        desc: 'Python, JavaScript, Bash, Node.js. Скрипты, автоматизация, best practices, алгоритмы.',
        count: '16',
        submodules: [
            {
                title: '🐍 Python',
                content: `
                    <h3>Мой основной язык</h3>
                    <p>Python — для всего: боты, парсеры, скрипты, тулы, автоматизация.</p>
                    <h3>Полезные библиотеки</h3>
                    <ul>
                        <li><strong>requests/aiohttp</strong> — HTTP-запросы</li>
                        <li><strong>BeautifulSoup/lxml</strong> — парсинг</li>
                        <li><strong>aiogram</strong> — Telegram-боты</li>
                        <li><strong>pandas</strong> — работа с данными</li>
                        <li><strong>asyncio</strong> — асинхронность</li>
                        <li><strong>argparse</strong> — CLI-аргументы</li>
                    </ul>
                    <pre><code># Пример: простой парсер
import requests
from bs4 import BeautifulSoup

url = "https://example.com"
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
for h2 in soup.find_all('h2'):
    print(h2.text.strip())</code></pre>
                `
            },
            {
                title: '🌐 JavaScript/Node.js',
                content: `
                    <h3>Фронтенд и бэкенд</h3>
                    <ul>
                        <li><strong>Vanilla JS</strong> — анимации, интерактив, canvas</li>
                        <li><strong>Node.js + Express</strong> — сервера, API</li>
                        <li><strong>SQLite/PostgreSQL</strong> — базы данных</li>
                    </ul>
                    <h3>Полезные концепции</h3>
                    <ul>
                        <li>Асинхронность: callbacks → promises → async/await</li>
                        <li>REST API — архитектура запросов</li>
                        <li>JWT — аутентификация</li>
                    </ul>
                `
            },
            {
                title: '🐚 Bash / Shell',
                content: `
                    <h3>Автоматизация в Linux</h3>
                    <pre><code>#!/bin/bash
# Бэкап директории
backup_dir="/var/backups"
timestamp=\$(date +%Y%m%d_%H%M%S)
tar -czf "\${backup_dir}/backup_\${timestamp}.tar.gz" /home/user</code></pre>
                    <h3>Полезные команды</h3>
                    <ul>
                        <li><code>grep</code>, <code>sed</code>, <code>awk</code> — обработка текста</li>
                        <li><code>find</code> — поиск файлов</li>
                        <li><code>xargs</code> — массовые операции</li>
                        <li><code>cron</code> — планировщик задач</li>
                    </ul>
                `
            },
            {
                title: '📐 Best Practices',
                content: `
                    <h3>Как писать хороший код</h3>
                    <ul>
                        <li><strong>DRY</strong> — Don't Repeat Yourself</li>
                        <li><strong>KISS</strong> — Keep It Simple</li>
                        <li><strong>SOLID</strong> — принципы ООП</li>
                        <li>Пиши README — документируй</li>
                        <li>Используй .env для секретов</li>
                        <li>Git — commit часто, push регулярно</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 'linux',
        icon: '🐧',
        title: 'Linux / Unix',
        desc: 'Arch, Debian, Kali. Установка, администрирование, Docker, systemd, сети, безопасность.',
        count: '14',
        submodules: [
            {
                title: '📀 Дистрибутивы',
                content: `
                    <h3>Мои дистрибутивы</h3>
                    <ul>
                        <li><strong>Arch Linux</strong> — основной. Rolling release, полный контроль.</li>
                        <li><strong>Kali Linux</strong> — для пентеста. Всё предустановлено.</li>
                        <li><strong>Debian</strong> — для серверов. Стабильность.</li>
                    </ul>
                `
            },
            {
                title: '⌨️ Команды (must know)',
                content: `
                    <pre><code># Навигация
ls -la          # список
cd /path        # переход
pwd             # где я

# Файлы
cp -r src dst   # копировать
mv src dst      # переместить
rm -rf dir      # удалить
chmod +x file   # сделать исполняемым
ln -s target link # симлинк

# Процессы
ps aux          # все процессы
htop            # мониторинг
kill -9 PID     # убить

# Сеть
ip a            # интерфейсы
ss -tulpn       # порты
ping host       # проверка</code></pre>
                `
            },
            {
                title: '🐳 Docker',
                content: `
                    <h3>Основы Docker</h3>
                    <pre><code># Запустить контейнер
docker run -d --name web -p 80:80 nginx

# Список контейнеров
docker ps -a

# Логи
docker logs web

# Docker Compose
docker compose up -d
docker compose down</code></pre>
                `
            },
            {
                title: '🔐 Безопасность Linux',
                content: `
                    <h3>Базовая защита</h3>
                    <ul>
                        <li>Не работай под root — используй sudo</li>
                        <li>Закрывай ненужные порты (ufw, iptables)</li>
                        <li>SSH: отключи пароль, используй ключи</li>
                        <li>Fail2ban — защита от брутфорса</li>
                        <li>Регулярные обновления: pacman -Syu</li>
                        <li>Audit: auditd, lynis</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 'windows',
        icon: '🪟',
        title: 'Windows',
        desc: 'PowerShell, AD, Group Policy, безопасность, администрирование, автоматизация.',
        count: '8',
        submodules: [
            {
                title: '🔧 PowerShell',
                content: `
                    <h3>PowerShell — must know</h3>
                    <pre><code># Информация о системе
Get-ComputerInfo

# Сеть
Get-NetTCPConnection
Test-NetConnection google.com

# Процессы
Get-Process
Stop-Process -Name notepad

# Логи безопасности
Get-WinEvent -LogName Security -MaxEvents 50

# Скачать файл
Invoke-WebRequest -Uri url -OutFile file</code></pre>
                `
            },
            {
                title: '🏢 Active Directory',
                content: `
                    <h3>Основы AD</h3>
                    <ul>
                        <li>Централизованное управление пользователями</li>
                        <li>Group Policy Objects (GPO) — массовая настройка</li>
                        <li>Kerberos — протокол аутентификации</li>
                        <li>LDAP — протокол доступа к каталогу</li>
                    </ul>
                `
            },
            {
                title: '🛡️ Безопасность Windows',
                content: `
                    <h3>Защита Windows</h3>
                    <ul>
                        <li><strong>BitLocker</strong> — шифрование диска</li>
                        <li><strong>AppLocker</strong> — контроль приложений</li>
                        <li><strong>WDAG</strong> — Windows Defender Application Guard</li>
                        <li><strong>LAPS</strong> — управление локальными паролями</li>
                        <li><strong>Windows Firewall</strong> — сетевой экран</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 'cyber',
        icon: '🛡️',
        title: 'Кибербезопасность',
        desc: 'Основы безопасности, шифрование, VPN, анонимность, защита данных, threat intel.',
        count: '12',
        submodules: [
            {
                title: '🔐 База безопасности',
                content: `
                    <h3>Что делать обязательно</h3>
                    <ul>
                        <li><strong>2FA</strong> — везде, где можно</li>
                        <li><strong>Менеджер паролей</strong> — Bitwarden, KeePass</li>
                        <li><strong>Обновления</strong> — всегда вовремя</li>
                        <li><strong>Бэкапы</strong> — правило 3-2-1</li>
                    </ul>
                `
            },
            {
                title: '🔑 Шифрование',
                content: `
                    <h3>Виды шифрования</h3>
                    <ul>
                        <li><strong>Симметричное</strong> — AES, ChaCha20 (один ключ)</li>
                        <li><strong>Асимметричное</strong> — RSA, ECC (публичный + приватный)</li>
                        <li><strong>Хэширование</strong> — SHA-256, bcrypt, argon2</li>
                    </ul>
                    <h3>GPG</h3>
                    <pre><code># Создать ключ
gpg --full-generate-key

# Зашифровать
gpg -e -r "Name" file.txt

# Расшифровать
gpg -d file.txt.gpg</code></pre>
                `
            },
            {
                title: '🎭 Анонимность',
                content: `
                    <h3>Инструменты анонимности</h3>
                    <ul>
                        <li><strong>Tor</strong> — анонимный веб-сёрфинг</li>
                        <li><strong>VPN</strong> — шифрование + смена IP</li>
                        <li><strong>Tails OS</strong> — анонимная ОС</li>
                        <li><strong>ProtonMail</strong> — приватная почта</li>
                    </ul>
                    <h3>Метаданные</h3>
                    <p>Удаляй EXIF из фото перед публикацией:</p>
                    <pre><code>exiftool -all= photo.jpg</code></pre>
                `
            },
            {
                title: '📊 Threat Intelligence',
                content: `
                    <h3>Следи за угрозами</h3>
                    <ul>
                        <li><strong>MITRE ATT&CK</strong> — база тактик и техник</li>
                        <li><strong>CVE</strong> — уязвимости</li>
                        <li><strong>AlienVault OTX</strong> — threat feeds</li>
                        <li><strong>Shodan</strong> — мониторинг устройств</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 'networks',
        icon: '🌐',
        title: 'Сети / Networking',
        desc: 'TCP/IP, DNS, HTTP, прокси, VPN, протоколы, маршрутизация, анализ трафика.',
        count: '10',
        submodules: [
            {
                title: '📡 Основы TCP/IP',
                content: `
                    <h3>Модель TCP/IP</h3>
                    <ul>
                        <li><strong>Application</strong> — HTTP, FTP, DNS, SSH</li>
                        <li><strong>Transport</strong> — TCP, UDP</li>
                        <li><strong>Internet</strong> — IP, ICMP</li>
                        <li><strong>Link</strong> — Ethernet, Wi-Fi</li>
                    </ul>
                    <h3>Порты (основные)</h3>
                    <pre><code>21  — FTP
22  — SSH
25  — SMTP
53  — DNS
80  — HTTP
443 — HTTPS
3306 — MySQL
8080 — HTTP-alt</code></pre>
                `
            },
            {
                title: '🔗 Прокси и VPN',
                content: `
                    <h3>Типы прокси</h3>
                    <ul>
                        <li><strong>HTTP прокси</strong> — только веб-трафик</li>
                        <li><strong>SOCKS5</strong> — любой трафик</li>
                        <li><strong>Transparent</strong> — прозрачный</li>
                    </ul>
                    <h3>VPN</h3>
                    <ul>
                        <li><strong>OpenVPN</strong> — стандарт</li>
                        <li><strong>WireGuard</strong> — современный, быстрый</li>
                        <li><strong>IKEv2</strong> — мобильный</li>
                    </ul>
                `
            },
            {
                title: '🔍 Анализ трафика',
                content: `
                    <h3>Инструменты</h3>
                    <ul>
                        <li><strong>Wireshark</strong> — графический анализ</li>
                        <li><strong>tcpdump</strong> — CLI-захват</li>
                        <li><strong>tshark</strong> — CLI WireShark</li>
                        <li><strong>ngrep</strong> — grep для сети</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 'tools',
        icon: '🔧',
        title: 'Инструменты',
        desc: 'Полезные утилиты, тулы для OSINT/пентеста, конфигурация окружения, автоматизация.',
        count: '9',
        submodules: [
            {
                title: '💻 Терминал',
                content: `
                    <h3>Мой стек</h3>
                    <ul>
                        <li><strong>Kitty / Alacritty</strong> — терминалы</li>
                        <li><strong>tmux</strong> — мультиплексор</li>
                        <li><strong>neovim</strong> — редактор</li>
                        <li><strong>fzf</strong> — размытый поиск</li>
                        <li><strong>ripgrep (rg)</strong> — быстрый grep</li>
                        <li><strong>bat</strong> — cat с подсветкой</li>
                    </ul>
                `
            },
            {
                title: '🐙 Git',
                content: `
                    <h3>Команды Git</h3>
                    <pre><code>git init
git add .
git commit -m "message"
git push origin main
git pull
git log --oneline
git diff</code></pre>
                `
            },
            {
                title: '🐳 Docker',
                content: `
                    <h3>Основные команды</h3>
                    <pre><code>docker ps -a
docker images
docker build -t name .
docker run -d --name web nginx
docker exec -it container sh
docker compose up -d</code></pre>
                `
            }
        ]
    },
    {
        id: 'crypto',
        icon: '🔐',
        title: 'Криптография',
        desc: 'Основы шифрования, GPG, SSL/TLS, хэширование, симметричное и асимметричное шифрование.',
        count: '6',
        submodules: [
            {
                title: '📖 Основы',
                content: `
                    <h3>Виды криптографии</h3>
                    <ul>
                        <li><strong>Симметричная</strong> — AES, ChaCha20 (один ключ)</li>
                        <li><strong>Асимметричная</strong> — RSA, ECC (пара ключей)</li>
                        <li><strong>Хэширование</strong> — SHA-256, SHA-3, bcrypt</li>
                    </ul>
                    <p>Никогда не придумывай свою криптографию. Используй проверенные стандарты.</p>
                `
            },
            {
                title: '🔑 GPG',
                content: `
                    <h3>GNU Privacy Guard</h3>
                    <pre><code># Генерация ключа
gpg --full-generate-key

# Список ключей
gpg --list-keys

# Экспорт публичного ключа
gpg --export -a "Name" > pubkey.asc

# Шифрование
gpg -e -r "Name" file.txt

# Расшифровка
gpg -d file.txt.gpg

# Подпись
gpg -s file.txt</code></pre>
                `
            },
            {
                title: '🌐 SSL/TLS',
                content: `
                    <h3>Что такое TLS?</h3>
                    <p>Transport Layer Security — протокол шифрования канала связи. HTTPS = HTTP + TLS.</p>
                    <ul>
                        <li><strong>Сертификаты</strong> — LetsEncrypt (бесплатно)</li>
                        <li><strong>mTLS</strong> — взаимная аутентификация</li>
                        <li><strong>HSTS</strong> — принудительный HTTPS</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 'anon',
        icon: '🎭',
        title: 'Анонимность',
        desc: 'Tor, VPN, прокси, OPSEC, приватность, метаданные, безопасная работа в сети.',
        count: '7',
        submodules: [
            {
                title: '🎭 Принципы',
                content: `
                    <h3>OPSEC</h3>
                    <ul>
                        <li>Разделяй активности — разные профили для разного</li>
                        <li>Минимум данных — не оставляй след без нужды</li>
                        <li>Не верь в полную анонимность — её нет</li>
                    </ul>
                `
            },
            {
                title: '🔧 Инструменты',
                content: `
                    <h3>Для анонимности</h3>
                    <ul>
                        <li><strong>Tor Browser</strong> — анонимный веб</li>
                        <li><strong>Tails OS</strong> — RAM-only ОС</li>
                        <li><strong>Whonix</strong> — Gateway + Workstation</li>
                        <li><strong>Proton VPN / Mullvad</strong> — VPN без логов</li>
                        <li><strong>ProtonMail / Tutanota</strong> — приватная почта</li>
                    </ul>
                `
            },
            {
                title: '📸 Метаданные',
                content: `
                    <h3>Опасность метаданных</h3>
                    <p>Фото содержит: GPS-координаты, модель камеры, дату, софт.</p>
                    <pre><code># Удалить всё
exiftool -all= photo.jpg

# Или
convert photo.jpg -strip clean.jpg

# Смотреть метаданные
exiftool photo.jpg</code></pre>
                `
            }
        ]
    }
];
