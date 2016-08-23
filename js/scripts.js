var Tasks = function(input){
  this.input = input;
}

//////////
$(function(){
  $("form").submit(function(event){

    event.preventDefault();
    var taskInput = $("#taskInput").val();
    var newTask = new Tasks(taskInput);
    $("#resultsList").append("<li>" + newTask.input + " <span class='glyphicon glyphicon-remove'></span><span class='glyphicon glyphicon-ok'></span>" + "</li>");
    $(".glyphicon-ok").click(function(){
      $(this).parent().toggleClass("completed");
    });
    $(".glyphicon-remove").click(function(){
      $(this).parent().remove("li")
    });
    $("button").toggleClass("rotate");
  });

});
