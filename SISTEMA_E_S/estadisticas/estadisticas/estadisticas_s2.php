
<link rel="stylesheet" href="../estadisticas/estadisticas/estilo.css">



<!-- <div class="container">
<div class="row">
<div class="col-md-12">
<h5  align="center" >ESTADÍSTICA DE ENTRADAS Y SALIDAS DE CHOFERES</h5 >
</div>
</div>
</div> -->

			<table lass="table table-responsive-sm  table-striped">
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
			include("conexion.php");
			$query = 'SELECT s.Tipo_Accion, COUNT(e.Accion) as total FROM tbl_entradas_salida_choferes e, tbl_Accion s WHERE e.Accion = s.Tipo_Accion GROUP BY e.Accion'; 
			$result = mysqli_query($con, $query);
			$c=0;
			$a=0;
			$total=0;
			while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{
				$categoria[$c] = $row["Tipo_Accion"];
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
			</table><br>
		<!-- </div> -->
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
					text: 'ESTADÍSTICA DE ENTRADAS Y SALIDAS DE CHOFERES'
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
			document.getElementById('inverted2').addEventListener('click', () => {
    chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'CHOFERES'
        }
    });
});
		});
		</script>
		<div id="grafica"></div><br>
	<!-- </div> -->
	<div style=" display: block; text-align: center; width: auto;">
	<button id="Imprimir" class="btn btn-primary" onclick="javascript:window.print()">Imprimir <span class="fas fa-print"></span></button>
	<button class="btn btn-info" id="inverted2">INVERTIR</button>
	</div> <br>
	<div class="container">
	<div class="row">
	<div class="col-md-12">
	<h5  align="center" >GENERAR ESTADÍSTICA POR LAPSO DE TIEMPO</h5 >
	</div>
	</div>
	<div class="row">
	<div style="display:flex; justify-content: center; background: rgb(134, 221, 138); border: 2px solid rgb(67, 76, 80);	color: black;	text-align: center; font-weight: bolder;" class="col-md-12">
	<form  action="javascript:()" id="tiemp1" name="tiemp1"  method="post" enctype="multipart/form-data"><br>
	LAPSO INICIAL: <input class="form-control"  type="datetime-local" name="De1" id="De1"><br>
	LAPSO FINAL: <input class="form-control"  type="datetime-local" name="A1" id="A1"><br>
	<div style="display:flex; justify-content: center;" class="col-md-12">
	<button class="btn btn-success" id="tiempo2" type="submit">CONSULTAR<span class="fas fa-calendar"></span></button>
	</div>
	</form>
	</div>
	</div>
	</div>
	<script src="../js/tabla_chg_tiempo.js"></script>
	<!-- <script src="../../js/bootstrap.min.js"></script> -->
	