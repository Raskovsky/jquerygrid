/*global $, jQuery, alert, document, prompt, x, i*/
function popup() {
	if($('table').children().length !== 0){
		$('table').empty();
	};
	var trside = prompt("Please type...", 16);
	var trsize = (960-trside)/trside;
	var master = $('table');
	var cellnumber = '<td></td>';
	cellnumber = '<tr>' + cellnumber.repeat(trside) + '</tr>';
	cellnumber = cellnumber.repeat(trside);
	master.append($(cellnumber));
	$('td').css('height', trsize);
	$('td').css('width', trsize);
	$('td').css('background-color', '#00ff00');
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

function hover(color) {
	if($(color).css('background-color') === 'rgb(0, 255, 0)' && $(color).hasClass('black') === false){
	var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	$(color).css('background-color', newColor);
	} else {
		var color2  = icolor($(color).css("background-color"));
		$(color).css("background-color", color2);
		$(color).addClass('black');
	}

}

$(document).ready(function(){
	$('#creategrid').click(function(){
		popup();
	});
	$(document).on('mouseenter', 'td', function(){
		hover(this);
	});

});

