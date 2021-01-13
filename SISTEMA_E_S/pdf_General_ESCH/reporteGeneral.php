<?php
    require("../dompdf/autoload.inc.php");
    require("../conexion/conexion.php");
    date_default_timezone_set('America/Mexico_City');
    $formatoFecha = date("Y-m-d-H-i-s");
    $sql = "SELECT *FROM tbl_entradas_salida_choferes ORDER BY Id_Accion";
    $resultado = $conexion->prepare($sql);
    $resultado->execute();
    $registros = $resultado->fetchAll();
    $cont=1;
    $tr = "";
    foreach ($registros as $fila1) {
 $tr .= "
            <tr>
            <td>".$cont++."</td>
            <td>".$fila1['Accion']."</td>
            <td>".$fila1['Chofer']."</td>
            <td>".$fila1['Fecha_Hora']."</td>
            <td>".$fila1['Matricula']."</td>
            <td>".$fila1['Notas']."</td>                 
            </tr>
        ";
    }
    use Dompdf\Dompdf;
    $html = file_get_contents("reporteGeneral.html");
	$html = str_replace('{reporteGeneralESCH}',$tr,$html);	
    $datosPdf = new DOMPDF();
    $datosPdf->set_paper("letter","landscape");
    $datosPdf->load_html(utf8_decode($html));
    $datosPdf->render();
    $output = $datosPdf->output();
    $nombrePdf = "Reporte-ESCH-".$formatoFecha.".pdf";
    file_put_contents(("ReportesPDF/".$nombrePdf),$output);
    $datosPdf->stream($nombrePdf);

?>