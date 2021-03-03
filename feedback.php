<?php
  $name=$_POST['name'];
  $email=$_POST['email'];
  $message=$_POST['message'];

  $servername="fdb23.awardspace.net";
  $username="3199710_2020";
  $password=";HyC{mVa6;64ea,X";
  $dbname="3199710_2020";

  $con=mysqli_connect($servername,$username,$password,$dbname);
  if ($con) {
      $query="INSERT INTO myreviews (`Name`, `Email`, `Message`) VALUES ('$name','$email','$message')";
      $data=mysqli_query($con,$query);
      if ($data) {
        ?>
        <body style="margin:0px;background-color:powderblue; height:100%; margin:0px;">
        <div style=" position:absolute; top:40%; left:40%; right:40%; ">
        <h1 style="text-align:center ; margin:0px;"> Thank You!</h1>
        <p style="text-align:center ;">Your Responce Have Been Sucessfully Submited...<br>
        ⭐⭐⭐⭐⭐
        </p>
        </div>
      </body>
      <script>
      
              alert("Thank You For Feedback!");
              window.location="story-1.html";
      </script>
    <?php
      }
      else {
        echo "but update failedl";
      }
  }

  else {

    die("connection failed because" .mysqli_connect_error());
  }
 ?>
