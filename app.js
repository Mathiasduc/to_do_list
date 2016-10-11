var todos = [];
var listCount = 0;
var titleCount = 0;
var titles = [];
var currentTitle;

$("#title-button").on("click", function(){
	console.log($("#title-input").val());
	if ($("#title-input").val() !== ""){
		titles[titleCount] = $("#title-input").val();
		var inject = "<div id='title" + titleCount + "' data-title_nbr='" + titleCount + "' ><h2>"+ titles[titleCount] +"</h2></div>";
		$("#listTitle").append(inject);
		currentTitle = titles[titleCount];
		titleCount++;
		display();
		/*$("#current-title").html(currentTitle);*/
		console.log(titles,"titles array", currentTitle, "currentTitle");
	}
});

$("#listTitle").on("click", "div", function(){
	var titleNbr = $(this).data("title_nbr");
	currentTitle = titles[titleNbr];
	/*$("#current-title").html(currentTitle);*/
	console.log(titleNbr);
	console.log(titles,"titles array", currentTitle, "currentTitle");
	display();
});

$("#done").on("click", function(){display("done");});
$("#to-do").on("click", function(){display("to-do");});
$("#all").on("click", function(){display("all");});

$("#list-task").on("click", "input", function(){
	var taskNumber = $(this).data("tasknbr");
	taskNumber = parseInt(taskNumber, 10);
	if ($(this).is(":checked")){
		$("#"+ taskNumber).addClass("checked");
		todos[taskNumber].status = false;
	}
	else{
		$("#"+ taskNumber).removeClass("checked");
		todos[taskNumber].status = true;
	}
});

$("#task-button").on("click", function(){
	todos[listCount] = new Object();
	todos[listCount].task = $("#task").val();
	todos[listCount].title = currentTitle;
	todos[listCount].status = true;
	console.log(todos);
	var inject = "<div id=div" + listCount + " data-tasknbr='" + listCount + "'><input type=checkbox id='checkbox" + listCount + "' data-tasknbr='" + listCount + "'><span id='" + listCount +  "' data-taskNbr='" + listCount + "' class= >" + todos[listCount].task  + "</span></div>";
	$("#list-task").append(inject);
	listCount++;
});

function display(x){
	var i = 0;
	if (x === "done"){
		$("#list-task").html("");
		for (var i = 0; i < todos.length; i++) {
			if (todos[i].status === false){
				var inject = "<div id=div" + i + " data-tasknbr='" + i + "'><input type=checkbox id='checkbox" + i + "' data-tasknbr='" + i + "'><span id='" + i +  "' data-taskNbr='" + i + "' class='checked'>"+ todos[i].task  + "</span></div>";
				$("#list-task").append(inject);
			}
		}
	}
	else if (x === "to-do"){
		$("#list-task").html("");
		for (var i = 0; i < todos.length; i++) {
			if (todos[i].status === true){
				var inject = "<div id=div" + i + " data-tasknbr='" + i + "'><input type=checkbox id='checkbox" + i + "' data-tasknbr='" + i + "'><span id='" + i +  "' data-taskNbr='" + i + "' class=''>"+ todos[i].task  + "</span></div>";
				$("#list-task").append(inject);
			}
		}
	}
	else if (x === "all"){
		$("#list-task").html("");
		for (var i = 0; i < todos.length; i++) {
			if (todos[i].status === false){
				var inject = "<div id=div" + i + " data-tasknbr='" + i + "'><input type=checkbox id='checkbox" + i + "' data-tasknbr='" + i + "'><span id='" + i +  "' data-taskNbr='" + i + "' class='checked'>"+ todos[i].task  + "</span></div>";
				$("#list-task").append(inject);
			}
			else {
				var inject = "<div id=div" + i + " data-tasknbr='" + i + "'><input type=checkbox id='checkbox" + i + "' data-tasknbr='" + i + "'><span id='" + i +  "' data-taskNbr='" + i + "' class=''>"+ todos[i].task  + "</span></div>";
				$("#list-task").append(inject);
			}
		}
	}
	else {
		$("#current-title").html(currentTitle);
		$("#list-task").html("");
		console.log("else");
		for (var i = 0; i < todos.length; i++) {
			console.log(i , "loop|||", todos[i].title, "index title");
			if (todos[i].status === false && todos[i].title == currentTitle){
				console.log("loop if");
				var inject = "<div id=div" + i + " data-tasknbr='" + i + "'><input type=checkbox id='checkbox" + i + "' data-tasknbr='" + i + "'><span id='" + i +  "' data-taskNbr='" + i + "' class='checked'>"+ todos[i].task  + "</span></div>";
				$("#list-task").append(inject);
			}
			else if(todos[i].status === true && todos[i].title == currentTitle) {
				console.log("loop else if");
				var inject = "<div id=div" + i + " data-tasknbr='" + i + "'><input type=checkbox id='checkbox" + i + "' data-tasknbr='" + i + "'><span id='" + i +  "' data-taskNbr='" + i + "' class=''>"+ todos[i].task  + "</span></div>";
				$("#list-task").append(inject);
			}
		}
	}		
}
