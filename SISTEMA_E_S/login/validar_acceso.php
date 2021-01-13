<?php
include_once("../conexion/conexion.php");
$user = htmlentities(addslashes($_POST["Nombre"]));
$pass = htmlentities(addslashes($_POST["Password"]));
$sql = "SELECT * FROM tbl_empleados WHERE Correo = :user AND Passw =:pass";
$resultado = $conexion->prepare($sql);
$resultado->bindValue(":user", $user);
$resultado->bindValue(":pass", $pass);
$resultado->execute();
// var_dump($user);
$numero_registro = $resultado->rowCount();

if($numero_registro != 0){
    $row = $resultado->fetch(PDO::FETCH_ASSOC);
    if($user===$row['Correo'] && $pass===$row['Passw']){ 
             if($row['Privilegios']==='A'){                   
             session_start();
             $_SESSION["Correo"] = $user;
             echo 1;
             }
             else{
              
             session_start();
            $_SESSION["Correo"] = $user;
            echo 6;              
           }
        }else{
            echo 101;
        }
        
    }
else{
    echo 45;
}


    // if($numero_registro != 0){
    //     $row = $resultado->fetch(PDO::FETCH_ASSOC);
    //         if($user===$row['Correo'] & $pass===$row['Passw']){
    //             if($row['Privilegios']==='D'){
    //                 echo 23;
    //             }  
    //             else if($row['Privilegios']==='A'){
                   
    //                     session_start();
    //                     $_SESSION["Correo"] = $user;
    //                     echo 1;
    //             }else{
              
    //                  session_start();
    //                 $_SESSION["Correo"] = $user;
    //                 echo 6;
                  
               
    //             }
    //         }else{
    //             echo 9; 
    //         }
    // }else{
    //     echo 45;
    // }
?>