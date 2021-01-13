<?php

include_once "../dompdf/autoload.inc.php";
    require("../conexion/conexion.php");

    date_default_timezone_set('America/Mexico_City');
    $id=$_GET['Id_Proveedor'];
    $formatoFecha = date("Y-m-d-H-i-s");
    $sql = "SELECT *FROM tbl_proveedores_morales WHERE Id_Proveedor = :id";
    $resultado = $conexion->prepare($sql);
    $resultado->execute(array(":id"=>$id));
    $registros = $resultado->fetchAll();

    $tr = "";

    foreach ($registros as $fila) {
        $tr .= "
            <tr> 
                <td>".$fila['Id_Proveedor']."</td>
                <td>".$fila['Nombre']."</td>
                <td>".$fila['Fotografia']."</td>
                <td>".$fila['RFC']."</td>
                <td>".$fila['Fecha_Registro']."</td>
                <td>".$fila['Telefono']."</td>
                <td>".$fila['Calle']."</td>
                <td>".$fila['Colonia']."</td>
                <td>".$fila['Localidad']."</td>
                <td>".$fila['Municipio']."</td>
                <td>".$fila['CP']."</td>
                <td>".$fila['Referencia']."</td>
                <td>".$fila['Correo']."</td>
                <td>".$fila['NI']."</td>
                <td>".$fila['NE']."</td>    
                <td>".$fila['Servicio']."</td>             
            </tr>
        ";
    }
    $html = file_get_contents("reporteGeneral.html");
    $html = str_replace('{reporteGeneralUsuarios1}',$fila['Nombre'],$html);
    $html = str_replace('{reporteGeneralUsuarios7}',$fila['RFC'],$html);
    $html = str_replace('{reporteGeneralUsuarios11}',$fila['Calle'],$html);
    $html = str_replace('{reporteGeneralUsuarios12}',$fila['Colonia'],$html);
    $html = str_replace('{reporteGeneralUsuarios13}',$fila['NI'],$html);
    $html = str_replace('{reporteGeneralUsuarios14}',$fila['NE'],$html);
    $html = str_replace('{reporteGeneralUsuarios15}',$fila['Localidad'],$html);
    $html = str_replace('{reporteGeneralUsuarios16}',$fila['Municipio'],$html);
    $html = str_replace('{reporteGeneralUsuarios17}',$fila['CP'],$html);
    $html = str_replace('{reporteGeneralUsuarios18}',$fila['Referencia'],$html);
    $html = str_replace('{reporteGeneralUsuarios19}',$fila['Telefono'],$html);
    $html = str_replace('{reporteGeneralUsuarios20}',$fila['Correo'],$html);
    $html = str_replace('{reporteGeneralUsuarios21}',$fila['Fecha_Registro'],$html);    
    $html = str_replace('{reporteGeneralUsuarios22}',$fila['Servicio'],$html);

    use Dompdf\Dompdf;
    $datosPdf = new DOMPDF();
    $datosPdf->set_paper("A4","Portriot");
    $datosPdf->load_html(utf8_decode($html));
    $datosPdf->render();

    $output = $datosPdf->output();

    $nombrePdf = $fila['Nombre']." ".$formatoFecha.".pdf";
    file_put_contents(("ReportesPDF_proveedor/".$nombrePdf),$output);
    $datosPdf->stream($nombrePdf);

?>