<?php
    require("../dompdf/autoload.inc.php");
    require("../conexion/conexion.php");
    date_default_timezone_set('America/Mexico_City');
    $formatoFecha = date("Y-m-d-H-i-s");
    $sql = "SELECT *FROM tbl_entradas_salida_proveedores order by Id_Accion ASC";
    $resultado = $conexion->prepare($sql);
    $resultado->execute();
    $registros = $resultado->fetchAll();
    $cont=1;
    $tr = "";
    foreach ($registros as $fila) {
        $tr .= "
            <tr>
            <td>".$cont++."</td>
            <td>".$fila['Accion']."</td>
            <td>".$fila['Proveedor']."</td>
            <td>".$fila['Fecha_Hora']."</td>
            <td>".$fila['Revision']."</td>  
            <td>".$fila['Notas']."</td>                 
            </tr>
        ";
    }
    use Dompdf\Dompdf;
    $html = file_get_contents("reporteGeneral.html");
	$html = str_replace('{reporteGeneralESP}',$tr,$html);	
    $datosPdf = new DOMPDF();
    $datosPdf->set_paper("letter","landscape");
    $datosPdf->load_html(utf8_decode($html));
    $datosPdf->render();
    $output = $datosPdf->output();
    $nombrePdf = "Reporte-ESP-".$formatoFecha.".pdf";
    file_put_contents(("ReportesPDF/".$nombrePdf),$output);
    $datosPdf->stream($nombrePdf);

?>