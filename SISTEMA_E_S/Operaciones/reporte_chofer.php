<?php

/** Error reporting */
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
date_default_timezone_set('Europe/London');

define('EOL',(PHP_SAPI == 'cli') ? PHP_EOL : '<br />');

date_default_timezone_set('Europe/London');


/** PHPExcel */
require 'Classes/PHPExcel.php';
require '../conexion/conexion_consul.php';

$sql = "SELECT *  FROM tbl_choferes ORDER BY Id_chofer";
	$resultado = $conex->query($sql);
	$fila = 7; //Establecemos en que fila inciara a imprimir los datos

	
	$gdImage = imagecreatefrompng('../img/iconoa.png');//Logotipo
	// $gdImage = imagecreatefrompng('../img/img_3.png');//Logotipo
$objPHPExcel = new PHPExcel();

$objDrawing = new PHPExcel_Worksheet_MemoryDrawing();
	$objDrawing->setName('Logotipo');
	$objDrawing->setDescription('Logotipo');
	$objDrawing->setImageResource($gdImage);
	$objDrawing->setRenderingFunction(PHPExcel_Worksheet_MemoryDrawing::RENDERING_PNG);
	$objDrawing->setMimeType(PHPExcel_Worksheet_MemoryDrawing::MIMETYPE_DEFAULT);
	$objDrawing->setHeight(100);
	$objDrawing->setCoordinates('C1');
	$objDrawing->setWorksheet($objPHPExcel->getActiveSheet());
	$objDrawing = new PHPExcel_Worksheet_MemoryDrawing();
	$objDrawing->setName('Logotipo2');
	$objDrawing->setDescription('Logotipo2');
	$objDrawing->setImageResource($gdImage);
	$objDrawing->setRenderingFunction(PHPExcel_Worksheet_MemoryDrawing::RENDERING_PNG);
	$objDrawing->setMimeType(PHPExcel_Worksheet_MemoryDrawing::MIMETYPE_DEFAULT);
	$objDrawing->setHeight(100);
	$objDrawing->setCoordinates('L1');
	$objDrawing->setWorksheet($objPHPExcel->getActiveSheet());

$objWorksheet = $objPHPExcel->getActiveSheet()->setCellValue('G3', 'CHOFERES EN SERVICIO DEL BAMX');

$estiloTituloReporte = array(
    'font' => array(
	'name'      => 'Arial',
	'bold'      => true,
	'italic'    => false,
	'strike'    => false,
	'size' =>13
    ),
    'fill' => array(
	'type'  => PHPExcel_Style_Fill::FILL_SOLID
	),
    'borders' => array(
	'allborders' => array(
	'style' => PHPExcel_Style_Border::BORDER_NONE
	)
    ),
    'alignment' => array(
	'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER,
	'vertical' => PHPExcel_Style_Alignment::VERTICAL_CENTER
    )
	);
	
	$estiloTituloColumnas = array(
    'font' => array(
	'name'  => 'Arial',
	'bold'  => true,
	'size' =>10,
	'color' => array(
	'rgb' => 'FFFFF'
	)
    ),
    'fill' => array(
	'type' => PHPExcel_Style_Fill::FILL_SOLID,
	'color' => array('rgb' => '27910d')
    ),
    'borders' => array(
	'allborders' => array(
	'style' => PHPExcel_Style_Border::BORDER_THIN
	)
    ),
    'alignment' =>  array(
	'horizontal'=> PHPExcel_Style_Alignment::HORIZONTAL_CENTER,
	'vertical'  => PHPExcel_Style_Alignment::VERTICAL_CENTER
    )
	);
	
	$estiloInformacion = new PHPExcel_Style();
	$estiloInformacion->applyFromArray( array(
    'font' => array(
	'name'  => 'Arial',
	'color' => array(
	'rgb' => '000000'
	)
    ),
    'fill' => array(
	'type'  => PHPExcel_Style_Fill::FILL_SOLID
	),
    'borders' => array(
	'allborders' => array(
	'style' => PHPExcel_Style_Border::BORDER_THIN
	)
    ),
	'alignment' =>  array(
	'horizontal'=> PHPExcel_Style_Alignment::HORIZONTAL_CENTER,
	'vertical'  => PHPExcel_Style_Alignment::VERTICAL_CENTER
    )
	));

	$objPHPExcel->getActiveSheet()->getStyle('B1:L4')->applyFromArray($estiloTituloReporte);
	$objPHPExcel->getActiveSheet()->getStyle('B6:L6')->applyFromArray($estiloTituloColumnas);
	
	$objPHPExcel->getActiveSheet()->getColumnDimension('B')->setWidth(10);
	$objPHPExcel->getActiveSheet()->setCellValue('B6', 'No');
	$objPHPExcel->getActiveSheet()->getColumnDimension('C')->setWidth(20);
	$objPHPExcel->getActiveSheet()->setCellValue('C6', 'NOMBRE');
	$objPHPExcel->getActiveSheet()->getColumnDimension('D')->setWidth(20);
	$objPHPExcel->getActiveSheet()->setCellValue('D6', 'APELLIDO PATERNO');
	$objPHPExcel->getActiveSheet()->getColumnDimension('E')->setWidth(20);
	$objPHPExcel->getActiveSheet()->setCellValue('E6', 'APELLIDO MATERNO');
	$objPHPExcel->getActiveSheet()->getColumnDimension('F')->setWidth(45);
	$objPHPExcel->getActiveSheet()->setCellValue('F6', 'CURP');
	$objPHPExcel->getActiveSheet()->getColumnDimension('G')->setWidth(20);
	$objPHPExcel->getActiveSheet()->setCellValue('G6', 'RFC');
	$objPHPExcel->getActiveSheet()->getColumnDimension('H')->setWidth(20);
	$objPHPExcel->getActiveSheet()->setCellValue('H6', 'TELEFONO');
	$objPHPExcel->getActiveSheet()->getColumnDimension('I')->setWidth(40);
	$objPHPExcel->getActiveSheet()->setCellValue('I6', 'CORREO');
	$objPHPExcel->getActiveSheet()->getColumnDimension('J')->setWidth(20);
	$objPHPExcel->getActiveSheet()->setCellValue('J6', 'MUNICIPIO');
	$objPHPExcel->getActiveSheet()->getColumnDimension('K')->setWidth(70);
	$objPHPExcel->getActiveSheet()->setCellValue('K6', 'LOCALIDAD');
	$objPHPExcel->getActiveSheet()->getColumnDimension('L')->setWidth(80);
	$objPHPExcel->getActiveSheet()->setCellValue('L6', 'REFERENCIA');
	
	$cont=1;
	//Recorremos los resultados de la consulta y los imprimimos
	while($rows = $resultado->fetch_assoc()){
		
		$objPHPExcel->getActiveSheet()->setCellValue('B'.$fila, $cont++);
		$objPHPExcel->getActiveSheet()->setCellValue('C'.$fila, $rows['Nombre']);
		$objPHPExcel->getActiveSheet()->setCellValue('D'.$fila, $rows['Apellido_Paterno']);
		$objPHPExcel->getActiveSheet()->setCellValue('E'.$fila, $rows['Apellido_Materno']);
		$objPHPExcel->getActiveSheet()->setCellValue('F'.$fila, $rows['CURP']);
		$objPHPExcel->getActiveSheet()->setCellValue('G'.$fila, $rows['Licencia']);
		$objPHPExcel->getActiveSheet()->setCellValue('H'.$fila, $rows['Telefono']);
		$objPHPExcel->getActiveSheet()->setCellValue('I'.$fila, $rows['Correo']);
		$objPHPExcel->getActiveSheet()->setCellValue('J'.$fila, $rows['Municipio']);
		$objPHPExcel->getActiveSheet()->setCellValue('K'.$fila, $rows['Localidad']);
		$objPHPExcel->getActiveSheet()->setCellValue('L'.$fila, $rows['Referencia']);
		
		$fila++; //Sumamos 1 para pasar a la siguiente fila
	}
	$fila = $fila-1;
	$objPHPExcel->getActiveSheet()->setSharedStyle($estiloInformacion, "B7:L".$fila);
	$filaGrafica = $fila+2;
//	Set the Labels for each data series we want to plot
//		Datatype
//		Cell reference for data
//		Format Code
//		Number of datapoints in series
//		Data values
//		Data Marker
$dataSeriesLabels = array(
	new PHPExcel_Chart_DataSeriesValues('String', 'Worksheet!$G$3', NULL, 1),	//	2010
);
//	Set the X-Axis Labels
//		Datatype
//		Cell reference for data
//		Format Code
//		Number of datapoints in series
//		Data values
//		Data Marker
$xAxisTickValues = array(
	new PHPExcel_Chart_DataSeriesValues('String', 'Worksheet!$G$3', NULL, 4),	//	Q1 to Q4
);
//	Set the Data values for each data series we want to plot
//		Datatype
//		Cell reference for data
//		Format Code
//		Number of datapoints in series
//		Data values
//		Data Marker
$dataSeriesValues = array(
	new PHPExcel_Chart_DataSeriesValues('Number', 'Worksheet!$B$'.$fila),
);

//	Build the dataseries
$series = new PHPExcel_Chart_DataSeries(
	PHPExcel_Chart_DataSeries::TYPE_BARCHART,		// plotType
	PHPExcel_Chart_DataSeries::GROUPING_STANDARD,	// plotGrouping
	range(0, count($dataSeriesValues)-1),			// plotOrder
	$dataSeriesLabels,								// plotLabel
	$xAxisTickValues,								// plotCategory
	$dataSeriesValues								// plotValues
);
//	Set additional dataseries parameters
//		Make it a vertical column rather than a horizontal bar graph
$series->setPlotDirection(PHPExcel_Chart_DataSeries::DIRECTION_COL);

//	Set the series in the plot area
$plotArea = new PHPExcel_Chart_PlotArea(NULL, array($series));
//	Set the chart legend
$legend = new PHPExcel_Chart_Legend(PHPExcel_Chart_Legend::POSITION_RIGHT, NULL, false);

$title = new PHPExcel_Chart_Title('CANTIDAD DE CHOFERES EN EL BAMX TOLUCA');
$yAxisLabel = new PHPExcel_Chart_Title('CANTIDAD');


//	Create the chart
$chart = new PHPExcel_Chart(
	'chart1',		// name
	$title,			// title
	$legend,		// legend
	$plotArea,		// plotArea
	true,			// plotVisibleOnly
	0,				// displayBlanksAs
	NULL,			// xAxisLabel
	$yAxisLabel		// yAxisLabel
);

//	Set the position where the chart should appear in the worksheet
$chart->setTopLeftPosition('N6');
$chart->setBottomRightPosition('W27');

//	Add the chart to the worksheet
$objWorksheet->addChart($chart);


// Save Excel 2007 file
#echo date('H:i:s') . " Write to Excel2007 format\n";
$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
ob_end_clean();
// $objWriter->setIncludeCharts(TRUE);
// $objWriter->save(str_replace('.php', '.xlsx', __FILE__));

	header("Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
	header('Content-Disposition: attachment;filename="choferes.xlsx"');
	header('Cache-Control: max-age=0');
	
	$objWriter->save('php://output');
	
?>
