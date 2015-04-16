
$(document).ready(function() {

    $("form#list").submit(function(event){
        event.preventDefault();

        //user enters title value and then saves it as newTitle
        var inputtedTitle = $("input#new-title").val();
        var newTitle = { name : inputtedTitle, tasks :[]};

        //append the list of names user enters
        $('ul#lists').append('<li><span class="list">' + newTitle.name + '</span></li>');

        //deletes what the user entered in the value box
        $("input#new-title").val('');


        //the last click along with its information is included
        $('.list').last().click(function() {
            //after the click, show the task page
            $('#task_page').show();

            //deletes what the user entered in the value box
            $("ul.tasks").text("");

            //the list of name selected shows on the task page in size h4
            $('#task_page h4').text(newTitle.name);

            //goes through the tasks in the newTitle and lists description
            newTitle.tasks.forEach(function(task) {
                $('ul.tasks').append('<li>' + task.description + '</li>');

            //close
            });

            //
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
