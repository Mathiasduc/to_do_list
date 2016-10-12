var todos = [];
var listCount = 0;
var titleCount = 0;
var titles = [];
var currentTitle;

$("#title-button").on("click", function(){
	if ($("#title-input").val() !== ""){
		titles[titleCount] = $("#title-input").val();
		var inject = "<div id='title" + titleCount + "' class='dynamicTitle' data-title_nbr='" + titleCount + "' ><span>"+ titles[titleCount] +"</span></div>";
		$("#listTitle").append(inject);
		currentTitle = titles[titleCount];
		titleCount++;
		$("#title-input").val("");
		$("#task-input").focus();
		display();
		console.log(titles,"titles array", currentTitle, "currentTitle");
	}
});

$("#task-button").on("click", function(){
	if ($("#task-input").val() !== ""){
		todos[listCount] = new Object();
		todos[listCount].task = $("#task-input").val();
		todos[listCount].title = currentTitle;
		todos[listCount].status = true;
		console.log(todos);
		listCount++;
		$("#task-input").val("");
		$("#task-input").focus();
		display();
	}
});

$("#listTitle").on("click", "div", function(){
	var titleNbr = $(this).data("title_nbr");
	currentTitle = titles[titleNbr];	
	display();
	$("#task-input").focus();
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

function display(x){
	var i = 0;
	if (x === "done"){
		$("#list-task").html("");
		for (var i = 0; i < todos.length; i++) {
			if (todos[i].status === false && todos[i].title == currentTitle){
				var inject = "<div id=div" + i + " data-tasknbr='" + i + "'><input type=checkbox class ='checky' id='checkbox" + i + "' data-tasknbr='" + i + "'><span id='" + i +  "' data-taskNbr='" + i + "' class='checked'>"+ todos[i].task  + "</span></div>";
				$("#list-task").append(inject);
			}
		}
	}
	else if (x === "to-do"){
		$("#list-task").html("");
		for (var i = 0; i < todos.length; i++) {
			if (todos[i].status === true && todos[i].title == currentTitle){
				var inject = "<div id=div" + i + " data-tasknbr='" + i + "'><input type=checkbox class ='checky' id='checkbox" + i + "' data-tasknbr='" + i + "'><span id='" + i +  "' data-taskNbr='" + i + "' class=''>"+ todos[i].task  + "</span></div>";
				$("#list-task").append(inject);
			}
		}
	}
	else {
		$("#current-title").html(currentTitle);
		$("#list-task").html("");
		for (var i = 0; i < todos.length; i++) {
			if (todos[i].status === false && todos[i].title == currentTitle){
				var inject = "<div id=div" + i + " data-tasknbr='" + i + "'><input type=checkbox class ='checky' id='checkbox" + i + "' data-tasknbr='" + i + "'><span id='" + i +  "' data-taskNbr='" + i + "' class='checked'>"+ todos[i].task  + "</span></div>";
				$("#list-task").append(inject);
			}
			else if(todos[i].status === true && todos[i].title == currentTitle) {
				var inject = "<div id=div" + i + " data-tasknbr='" + i + "'><input type=checkbox class ='checky' id='checkbox" + i + "' data-tasknbr='" + i + "'><span id='" + i +  "' data-taskNbr='" + i + "' class=''>"+ todos[i].task  + "</span></div>";
				$("#list-task").append(inject);
			}
		}
	}		
}
