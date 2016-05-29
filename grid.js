/*global $, jQuery, alert, document, prompt, x, i*/
function popup() {
	if($('#master').children().length !== 0){
		$('#master').empty();
	};
	var divside = prompt("Please type the number of square per side", 16);
	var divheight = (960-(divside*1.5))/divside;
	var divwidth = 960/divside;
	var master = $('#master');
	var blocks = '<div class="blocks"></div>';
	var br = '<br>';
	for( i = 0; i < divside; i++){
		for( x  = 0; x < divside; x++){
			master.append($(blocks));
		}
		master.append($(br));
	}	
	$('.blocks').css("height", divheight);
	$('.blocks').css("width", divwidth);
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function icolor(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	var red= parseInt(rgb[1], 10);
	red = red - 26;
	if(red < 0){
		red = 0;
	}
	var green= parseInt(rgb[2],10);
	green = green - 26;
	if(green < 0){
		green = 0;
	}
	var blue= parseInt(rgb[3],10);
	blue = blue - 26;
	if(blue < 0){
		blue = 0;
	}
	return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);

	
}

function hover(cor) {
	if( $(cor).css("background-color") === 'rgb(0, 0, 0)' && $(cor).hasClass('black') === false){	
		var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$(cor).css("background-color", newColor);
	} else {
		var cor2  = icolor($(cor).css("background-color"));
		$(cor).css("background-color", cor2);
		$(cor).addClass('black');
	}
}

$(document).ready(function(){
	$('#creategrid').click(function(){
		popup();
	});
	$(document).on('mouseenter', '.blocks', function() {
		hover(this);
	});

});

