$(function() {

	var valorDolar = 15.16;
	var franquicia = 25;

	$('#valor_dolar').html('$' + valorDolar);

	$("#calcular-btn").click(function() {

		var aplicaFranquicia = false;
		if($('#primera').is(':checked')) {
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
					i = i/2;
				} else {
					i = 0;
				}
			} else {
				i = a / 2;
			}
			
			var pep = a*valorDolar;
			ipep = i*valorDolar;
			var t = pep + ipep;

			$('#valor_final').html('$' + pep);
			$('#impuesto').html('$' + ipep);
			$('#impuestod').html('U$$' + i);
			$('#total').html('$' + t);

		} else {
			alert("Ingresá el valor total del producto con envío incluido");
			return false;
		}
	})

	$("#producto").change(function() {
		if ($(this).val() > 0) {
			$('#valor_otro').val($(this).val());
		} else {
			$('#valor_otro').val('');
		}
	});

});
