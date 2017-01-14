// require('../style/style.scss');

// var $ = require("jquery");


var $lights = $("#box").children();

console.log($lights);

setInterval(function() {
	var randomNumb = Math.floor(Math.random() * 37);
	var $randomLight = $lights.eq(randomNumb);
	$randomLight.toggleClass("active");

}, 1000);

setInterval(function() {
	var randomNumb = Math.floor(Math.random() * 37);
	var $randomLight = $lights.eq(randomNumb);
	$randomLight.toggleClass("active");

}, 500);

setInterval(function() {
	var randomNumb = Math.floor(Math.random() * 37);
	var $randomLight = $lights.eq(randomNumb);
	$randomLight.toggleClass("active");

}, 800);
