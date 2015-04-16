
$(document).ready(function() {

    $("form#list").submit(function(event){
        event.preventDefault();

        var inputtedTitle = $("input#new-title").val();
        var newTitle = { name : inputtedTitle, tasks :[]};

        $('ul#lists').append('<li><span class="list">' + newTitle.name + '</span></li>');


        $("input#new-title").val('');



        $('.list').last().click(function() {
            $('#task_page').show();

            $("ul.tasks").text("");

            $('#task_page h4').text(newTitle.name);
            debugger;

            newTitle.tasks.forEach(function(task) {
                $('ul.tasks').append('<li>' + task.description + '</li>');
            });

            $("form#task").off('submit');
            $("form#task").submit(function(event) {
                event.preventDefault();

                var inputtedTask = $("input#description").val();
                var newTask = {description : inputtedTask };
                newTitle.tasks.push(newTask);

                $("ul.tasks").text("");
                newTitle.tasks.forEach(function(task) {
                    $('ul.tasks').append('<li>' + task.description + '</li>');
                });

                $("input#description").val('');
            });

        });

    });





});
