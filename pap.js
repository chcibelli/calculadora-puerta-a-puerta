$(function() {

	var valorDolar = getDolar();
	var franquicia = 25;

	$('#valor_dolar').html('COTIZACIÓN DEL DÓLAR <span style="color:#d02128">$ ' + valorDolar + '</span>');

	$("#calcular-btn").click(function() {

		var aplicaFranquicia = false;
		if ($('#primera').is(':checked')) {
			aplicaFranquicia = true;
		}

		var a = parseFloat($("#valor_otro").val());

		if ((a != "" && a > 0)) {

			if (a > 1000) {
				alert('El valor total no puede superar los U$$ 1000');
				return false;
			}

			if (aplicaFranquicia) {
				if (a > 25) {
					i = (a - franquicia);
					i = i / 2;
				} else {
					i = 0;
				}
			} else {
				i = a / 2;
			}

			var pep = a * valorDolar;
			ipep = i * valorDolar;
			var t = parseFloat(pep + ipep);

			$('#valor_final').html('$' + pep);
			$('#impuesto').html('$' + ipep);
			$('#impuestod').html('U$$' + i);
			$('#total').html('$' + t);

		} else {
			alert("Ingresá el valor total del producto con envío incluido");
			return false;
		}
	})
	
	function getDolar() {
		$.getJSON("http://api-editoriales.clarin.com/api/mercados/monedas?callback=?", function(data) {
			var items = [];
			$.each(data, function(key, val) {
				if (val[0].papel == 'DLRBILL') {
					var f = val[0].ultimo;
					return f.replace(',','.');
				}
			});
		});
		
		return 15.18;
	}

});
