var $sizePrice = 5;
var $crustPrice = 0;
var $toppingPrice = 0;
var $price = 0;

$(document).ready(function() {
	changePrice();
	$('#submit').on('click', function() {

	})
	$('input').on('click', function() {
		if($('input[name=size]').is(':checked')) {
			if($(this).val() == 'Small') {
				console.log('Small has been Selected');
				$sizePrice = 3;
				changePrice();
			} else if ($(this).val() == 'Medium') {
				console.log('Medium has been Selected');
				$sizePrice = 5;
				changePrice();
			}
		}
	})
})

function changePrice() {
	$price = $sizePrice + $crustPrice + $toppingPrice;
	$('#price').text($price);
}