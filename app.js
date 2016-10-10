
var strike = "line-through";
var todos = [];
var listCount = 0;
var titleCount = 0;
var newTitle;

$("#title-button").on("click", function(){
	newTitle = $("#title-input").val();
	var inject = "<div><h2>"+ newTitle +"</h2>"+"<input type=\"checkbox\" class=\"check\"></div>";
	$("#title").prepend(inject);
});

$("#task-button").on("click", function(){
	todos[listCount] = new Object();
	todos[listCount].task = $("#task").val();
	todos[listCount].title = newTitle;
	todos[listCount].status = true;	
	console.log(todos);
	var inject = "<div><input type="+ "checkbox " + "class=\"" + listCount +"\">"+ "<span class=\"" + listCount +"\">"+ todos[listCount].task  + "</span>" + "</div>";
	$("#list-task").append(inject);
	listCount++;
	listenerCheckbox();
});

function listenerCheckbox(){
	$("input[type=checkbox]").on("click", function(){
		console.log($(this),  "jq");
		var numClass = $(this)[0].className;
		numClass = parseInt(numClass, 10);
		console.log($("."+ numClass));	
		if ($(this).is(":checked")){
			$("."+ numClass)[1].style.textDecoration = strike;
			todos[numClass].status = false;
			console.log(todos);
		}
		else{
			$("." + numClass)[1].style.textDecoration = "";
			todos[numClass].status = true;
			console.log(todos);	
		}
	});
}