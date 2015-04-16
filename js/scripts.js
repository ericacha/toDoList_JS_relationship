$(document).ready(function() {
    $("form#list").submit(function(event){
        event.preventDefault();

    var inputtedTitle = $("input#new-title").val();
    newTitle = { name : inputtedTitle, tasks :[]};

    $('ul#lists').append('<li><span class="list">' + newTitle.name + '</span></li>');

    $("input#new-title").val('');

    });
});
