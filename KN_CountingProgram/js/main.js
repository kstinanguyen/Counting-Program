
// $("h1").on("click", function(){
// 	$("h3").text("new text!")
// })
// .text will make text appear

// $ is how you tell the browser you want to use the jquery online library that is linked. function does NOT have a name because it's anonymous -- inside of a .on event, only ran once


var person = prompt("Please enter your name:");

$("h2").text("Welcome, " +person+"! I like to count. Enter a number, go ahead and try it out below!")
// $("h2") is the syntax to 'select'. To change it, .text is used to print what is in the parenthesis into h2.

$("#a").on("click", function(){
	$("#count-1").empty();
	var num1=$("input[name*='by1']").val()
	for (i=0;i<=num1; i++){
	console.log(i)
	$("#count-1").append(i+"<br>")
	}
});
// .append method can be used to append everything

$("#b").on("click", function(){
	$("#count-2").empty();
	var num2=$("input[name*='by2']").val()
	for (i=0;i<=num2; i+=2){
	console.log(i)
	$("#count-2").append(i+"<br>")
	}
});

$("#c").on("click", function(){
	$("#count-3").empty();
	var num3=$("input[name*='by3']").val()
	for (i=0;i<=num3; i+=3){
	console.log(i)
	$("#count-3").append(i+"<br>")
	}
});
