// strike of the tasks when clicked
// here we used on instead of just click so that the changes can also be applied to more elements added to the app.
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(){
	$(this).parent().fadeOut("1000",function(){
		// remove is placed inside of a function so that it is executed after the fade has occured.
		$(this).remove();
	});
});

$("input").keypress(function(event){
	if(event.which === 13){
		var text = $(this).val();
		// to clear the input bar after the user pressed enter.
		$("input").val("");
		$("ul").append("<li> <span class='remove-btn'><i class='fas fa-trash-alt'></i></span> "+ text +"</li>");
	}

});
$(".fa-plus").on("click",function(){
	$("input").fadeToggle("1000");
});

