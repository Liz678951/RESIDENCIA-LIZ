<?php
    try {
        $conexion = new PDO('mysql:host=localhost; dbname=banco_de_alimentos', 'root', '');
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conexion->exec("SET CHARACTER SET utf8");
    }catch(PDOException $e) {
        die('No se establecio la conexion: ' . $e->getMessage());
    }
?>