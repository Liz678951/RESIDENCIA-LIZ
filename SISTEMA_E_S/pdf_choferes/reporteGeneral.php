<?php

include_once "../dompdf/autoload.inc.php";
    require("../conexion/conexion.php");

    date_default_timezone_set('America/Mexico_City');
    $id=$_GET['Id_chofer'];
    $formatoFecha = date("Y-m-d-H-i-s");
    $sql = "SELECT *FROM tbl_choferes WHERE Id_chofer = :id";
    $resultado = $conexion->prepare($sql);
    $resultado->execute(array(":id"=>$id));
    $registros = $resultado->fetchAll();

    $tr = "";

    foreach ($registros as $fila) {
        $tr .= "
            <tr> 
                <td>".$fila['Id_chofer']."</td>
                <td>".$fila['Nombre']."</td>
                <td>".$fila['Apellido_Paterno']."</td>
                <td>".$fila['Apellido_Materno']."</td>
                <td>".$fila['CURP']."</td>
                <td>".$fila['Sexo']."</td>
                <td>".$fila['Fotografia']."</td>
                <td>".$fila['Licencia']."</td>
                <td>".$fila['Estado_civil']."</td>
                <td>".$fila['Fecha_Nac']."</td>
                <td>".$fila['Telefono']."</td>
                <td>".$fila['Estudios']."</td>
                <td>".$fila['Ocupacion']."</td>
                <td>".$fila['Calle']."</td>
                <td>".$fila['Colonia']."</td>
                <td>".$fila['Municipio']."</td>
                <td>".$fila['CP']."</td>
                <td>".$fila['Referencia']."</td>
                <td>".$fila['Vehiculo']."</td>
                <td>".$fila['Correo']."</td>
                <td>".$fila['Num_int']."</td>
                <td>".$fila['Num_ext']."</td>                
            </tr>
        ";
    }
    $html = file_get_contents("reporteGeneral.html");
    $html = str_replace('{reporteGeneralUsuarios1}',$fila['Nombre'],$html);
    $html = str_replace('{reporteGeneralUsuarios2}',$fila['Apellido_Paterno'],$html);
    $html = str_replace('{reporteGeneralUsuarios3}',$fila['Apellido_Materno'],$html);
    $html = str_replace('{reporteGeneralUsuarios4}',$fila['CURP'],$html);
    $html = str_replace('{reporteGeneralUsuarios5}',$fila['Sexo'],$html);
    $html = str_replace('{reporteGeneralUsuarios6}',$fila['Fotografia'],$html);
    $html = str_replace('{reporteGeneralUsuarios7}',$fila['Licencia'],$html);
    $html = str_replace('{reporteGeneralUsuarios8}',$fila['Estado_civil'],$html);
    $html = str_replace('{reporteGeneralUsuarios9}',$fila['Ocupacion'],$html);
    $html = str_replace('{reporteGeneralUsuarios10}',$fila['Estudios'],$html);
    $html = str_replace('{reporteGeneralUsuarios11}',$fila['Calle'],$html);
    $html = str_replace('{reporteGeneralUsuarios12}',$fila['Colonia'],$html);
    $html = str_replace('{reporteGeneralUsuarios13}',$fila['Num_int'],$html);
    $html = str_replace('{reporteGeneralUsuarios14}',$fila['Num_ext'],$html);
    $html = str_replace('{reporteGeneralUsuarios15}',$fila['Localidad'],$html);
    $html = str_replace('{reporteGeneralUsuarios16}',$fila['Municipio'],$html);
    $html = str_replace('{reporteGeneralUsuarios17}',$fila['CP'],$html);
    $html = str_replace('{reporteGeneralUsuarios18}',$fila['Referencia'],$html);
    $html = str_replace('{reporteGeneralUsuarios19}',$fila['Telefono'],$html);
    $html = str_replace('{reporteGeneralUsuarios20}',$fila['Correo'],$html);
    $html = str_replace('{reporteGeneralUsuarios21}',$fila['Fecha_Nac'],$html);

    use Dompdf\Dompdf;
    $datosPdf = new DOMPDF();
    $datosPdf->set_paper("A4","Portriot");
    $datosPdf->load_html(utf8_decode($html));
    $datosPdf->render();

    $output = $datosPdf->output();

    $nombrePdf = $fila['Nombre']." ".$fila['Apellido_Paterno']." ".$fila['Apellido_Materno']." ".$formatoFecha.".pdf";
    file_put_contents(("ReportesPDF_Chofer/".$nombrePdf),$output);
    $datosPdf->stream($nombrePdf);

?>