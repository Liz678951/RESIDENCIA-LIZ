<link rel="stylesheet" href="../estadisticas/estadisticas/estilo.css">

<div class="container">
<div class="row">
<div class="col-md-12">
<h5  align="center" >ESTADÍSTICA POR LAPSO DE TIEMPO DE ENTRADAS Y SALIDAS DE CHOFERES</h5 >
</div>
</div>
</div>		
			<table>
			<thead>
				<tr>
					<th style="text-align: center;">ACCION</th>
					<th style="text-align: center;">CANTIDAD</th>
					<th style="text-align: center;">PORCENTAJE</th>
					<th style="text-align: center;">TOTAL</th>
				</tr>
			</thead>
			<tbody>
			<?php
		$fecha=$_POST['De1'];
		$fecha2=$_POST['A1'];
		include("conexion.php");
		$query = 'SELECT Accion, COUNT(*) as total FROM tbl_entradas_salida_choferes WHERE Fecha_Hora  Between '. "'". $fecha. "'". ' AND '.  "'". $fecha2. "'".  ' GROUP BY '. 'Accion';
		$result = mysqli_query($con, $query);
			// var_dump($query);
			$c=0;
			$a=0;
			$total=0;
			while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{
				$categoria[$c] = $row["Accion"];
				$datos[$c] = $row["total"];  
				$total = $total + $row["total"];
				$c++;
			}
			for ($j=0;$j<=$c-1;$j++)
			{
				$a++;
				echo "<tr><td>".$categoria[$j];
				echo "</td><td>".$datos[$j];
				echo "</td><td>".number_format((($datos[$j]/$total)*100), 1, ',', '')."%";
				$por[$j]= round( ($datos[$j]/$total)*100, 1);
				if ($j==0) 
				{
					echo "</td><td rowspan=".$c.">".$total."</td></tr>";
				}
			}
			mysqli_close($con);	  
			?>
			</tbody>
			</table>
		</div>
		<script type="text/javascript">
		$(function () {
			var colors = Highcharts.getOptions().colors,
			categories = [<?php for($y=0;$y<=$c-1;$y++){ echo "'".$categoria[$y]."',";}?>	],
			name = 'ACCION REALIZADA',
			data = [
			<?php for($x=0;$x<=$c-1;$x++){?>	
			{
				y: <?php echo $por[$x] ?>,
				color: colors[<?php echo $x?>],                   
			}, 
			<?php }?>	   
			];
			function setChart(name, categories, data, color) {
				chart.xAxis[0].setCategories(categories, false);
				chart.series[0].remove(false);
				chart.addSeries({
					name: name,
					data: data,
					color: color || 'white'
				}, false);
				chart.redraw();
			}
			var chart = $('#grafica').highcharts({
				chart: {
					type: 'column'
				},
				title: {
					text: 'ESTADÍSTICA POR LAPSO DE TIEMPO DE ESTRADAS Y SALIDAS'
				},
				subtitle: {
            text: 'CHOFERES'
        },
				xAxis: {
					categories: categories
				},
				credits: {
					enabled: false
				},
				plotOptions: {
					column: {
						cursor: 'pointer',
						point: {
							events: {
								click: function() {
									var drilldown = this.drilldown;
									if (drilldown) { 
										setChart(drilldown.name, drilldown.categories, drilldown.data, drilldown.color);
									} else { 
										setChart(name, categories, data);
									}
								}
							}
						},
						dataLabels: {
							enabled: true,
							color: colors[0],
							style: {
								fontWeight: 'bold'
							},
							formatter: function() {
								return this.y +' %';
							},
						}
					}
				},
				series: [{
					name: name,
					data: data,
					color: 'Gray'
				}],
				exporting: {
					enabled: true
				}
			})
			.highcharts(); 
		
		});
		</script>
		<div id="grafica"></div>
	</div>
	
	<div style=" display: block; text-align: center; width: auto;">
	<button id="Imprimir" class="btn btn-primary" onclick="javascript:window.print()">Imprimir <span class="glyphicon glyphicon-print"></span></button>
	
	</div>

	<!-- <script src="../../js/bootstrap.min.js"></script> -->
