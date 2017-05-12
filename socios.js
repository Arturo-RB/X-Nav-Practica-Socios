$(document).ready(function() {
	var contador_msgs = 0;

	$.getJSON("json/timeline.json").done(function(data) {
		printMsgs(data.Msgs, "#msgs");
	}).fail(function(){
		alert("Error loading messages");
	});

	$.getJSON("json/myline.json").done(function(data) {
		printMsgs(data.Msgs, "#msgs2");
	}).fail(function(){
		alert("Error loading messages");
	});

	$("#update").click(function(){
		$.getJSON("json/update.json").done(function(data) {
			console.log("update");
			if(contador_msgs == 0){
				contador_msgs++;
				printMsgs(data.Msgs, "#newMsgs");
			}else{
				alert("no hay ningun mensaje nuevo");
			}
		}).fail(function(){
			alert("No se han podido cargar los nuevos mensajes");
		});
	});

	function printMsgs (msgs, id){ 
        for (var i in msgs){
			$(id).prepend("<div>" + msgs[i].contenido + "<li>" + msgs[i].fecha + "</li>" + "</div>");
            $(id).prepend("<div>" + '<img id="img" src='+ msgs[i].avatar + '>' + " " + msgs[i].autor + ", Asunto:  " + msgs[i].titulo + "  <div>");
        }
        $(id).accordion({collapsible: true, active:false, heightStyle: "content"});
    };
});