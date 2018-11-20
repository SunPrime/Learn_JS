var goods = {
		 "эклеры" 			: 40 
		,"торт Захер" 		: 180
		,"яблочный пирог" 	: 100
	};
	
	$.each(goods, function(title, price){
		console.log(title, "-", price, "грн.");
		});