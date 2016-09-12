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
    var taskItemClone = $('.task-item:eq(0)').html();
    $.get( "/php/getAllTasks.php", function( data ) {
        $.each( data, function( i, item ) {
            var task_id = "task-"+item.task_id;
            var task_title = item.task_title;
            taskItemClone.appendTo( "#task-list" )
                .find("input").attr({id:task_id,class: task_id})
                .next("label").attr("for",task_id).text(task_title);
        });


        // var taskItemClone = $('.task-item:eq(0)').clone(true).appendTo("#task-list")
        //     .removeClass("hidden task-item").addClass("task-" + data.task_id)
        //     .find("input").attr("ID","task-" + data.task_id);

        // $( "body" )
        //     .append( "Name: " + data.name ) // John
        //     .append( "Time: " + data.time ); //  2pm
    }, "json" );
}