var $sizePrice = 5;
var $crustPrice = 1;
var $toppingPrice = 0;

var size = 'Medium';

var crust = 'Normal';

var $price = 0;

$(document).ready(function() {
	updatePrice();
	$('#submit').on('click', function() {
		alert(finalOrder());
	})
	$('.sizeRadio').on('click', function() {
		if($(this).val() == 'Small') {
			console.log('Small has been Selected');
			$sizePrice = 3;
			updatePrice();
			size = 'Small';
		} else if ($(this).val() == 'Medium') {
			console.log('Medium has been Selected');
			$sizePrice = 5;
			updatePrice();
			size = 'Medium';
		} else if ($(this).val() == 'Large') {
			console.log('Large has been Selected');
			$sizePrice = 7;
			updatePrice();
			size = 'Large';
		} else if ($(this).val() == 'X-Large') {
			console.log('X-Large has been Selected');
			$sizePrice = 9;
			updatePrice();
			size = 'X-Large';
		}
	});
	$('.crustRadio').on('click', function() {
		if ($('input[name=crust]').is(':checked')) {
			if($(this).val() == 'Thin') {
				console.log('Thin has been Selected');
				$crustPrice = 2;
				updatePrice();
				crust = 'Thin';
			} else if ($(this).val() == 'Normal') {
				console.log('Normal has been Selected');
				$crustPrice = 1;
				updatePrice();
				crust = 'Normal';
			} else if ($(this).val() == 'DeepDish') {
				console.log('Deep Dish has been Selected');
				$crustPrice = 4;
				updatePrice();
				crust = 'Deep Dish';
			}
		}
	});
	$('.toppingCheckbox').on('click', function() {
		if ($(this).prop('checked')) {
			console.log($(this).val() + ' checked');
			switch ($(this).val()) {
				case 'Cheese':
					console.log('price + 1');
					$toppingPrice += 1;
					updatePrice();
					break;
				case 'Pepperoni':
					console.log('price + 2');
					$toppingPrice += 2;
					updatePrice();
					break;
				case 'Sausage':
					console.log('price + 2');
					$toppingPrice += 2;
					updatePrice();
					break;
				case 'Ham':
					console.log('price + 2');
					$toppingPrice += 2;
					updatePrice();
					break;
				case 'Pineapple':
					console.log('price + 3');
					$toppingPrice += 3;
					updatePrice();
					break;
				case 'Onion':
					console.log('price + 2');
					$toppingPrice += 2;
					updatePrice();
					break;
				default:
					break;
			}
		} else if (!$('input[name=topping]').prop('checked')) {
			console.log($(this).val() + ' unChecked');
			switch($(this).val()) {
				case 'Cheese':
					console.log('price - 1');
					$toppingPrice -= 1;
					updatePrice();
					break;
				case 'Pepperoni':
					console.log('price - 2');
					$toppingPrice -= 2;
					updatePrice();
					break;
				case 'Sausage':
					console.log('price - 2');
					$toppingPrice -= 2;
					updatePrice();
					break;
				case 'Ham':
					console.log('price - 2');
					$toppingPrice -= 2;
					updatePrice();
					break;
				case 'Pineapple':
					console.log('price - 3');
					$toppingPrice -= 3;
					updatePrice();
					break;
				case 'Onion':
					console.log('price - 2');
					$toppingPrice -= 2;
					updatePrice();
					break;
				default:
					break;
			}
		}
	});
})

function updatePrice() {
	$price = $sizePrice + $crustPrice + $toppingPrice;
	$('#price').text($price);
}
function finalOrder() {

	var order = 'Thanks for your order! Your ' + size + ' Sized Pizza with ' + crust + ' Crust will be delivered shortly!';

	return order;
}

//xd