
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

            //deletes what the user entered previously
            $("ul.tasks").text("");

            //the list of name selected shows on the task page in size h4
            $('#task_page h4').text(newTitle.name);

            //goes through the tasks from newTitle and list the description
            newTitle.tasks.forEach(function(task) {
                $('ul.tasks').append('<li>' + task.description + '</li>');

            });

            //off method prevents it from submitting several times , as we are still in the submit function above
            $("form#task").off('submit');
            //new form for task
            $("form#task").submit(function(event) {
                event.preventDefault();
                //user enters a task and saves it as newTask variable
                var inputtedTask = $("input#description").val();
                var newTask = {description : inputtedTask };
                //pushes newTask to the tasks array in newTitle
                newTitle.tasks.push(newTask);

                //deletes what the user entered previously
                $("ul.tasks").text("");
                //goes through the tasks from newTitle and list the description
                newTitle.tasks.forEach(function(task) {
                    $('ul.tasks').append('<li>' + task.description + '</li>');
                });
                //deletes what the user entered previously
                $("input#description").val('');
            });

        });

    });

});
