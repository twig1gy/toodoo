refreshTasks();

$('#btn_addTask').on("click",function(){
    console.log('add task');
    //get task-clone in dom + duplicate
    $('.task-clone:eq(0)').clone(true).appendTo("#task-list")
        .removeClass("hidden task-clone").addClass("new-task")
        .find("input").attr("ID","newTask").focus();

    $(this).addClass("disabled");
});

$(".delTask").on("click",function(e){
    e.preventDefault();
    $(".new-task").remove();
    $("#btn_addTask").removeClass("disabled");
});

$(".saveTask").on("click",function(e){
    e.preventDefault();
    console.log('adding');
    $.ajax({
        url: "/php/todo.php",
        type: "post",
        data: {
            newTask: true,
            taskTitle: $('#newTask').val()
        }
    })
    .success(function( data ) {
        refreshTasks();
    });

    $("#btn_addTask").removeClass("disabled");
});

function refreshTasks(){
    $.get( "/php/getAllTasks.php", function( data ) {
        // $( "body" )
        //     .append( "Name: " + data.name ) // John
        //     .append( "Time: " + data.time ); //  2pm
    }, "json" );
}