$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
    });

    $('button').click(function() {
        const tarefa = $('#nome-tarefa').val();
        if (tarefa.trim() !== "") { 
            const novaTarefa = $('<li></li>').text(tarefa);
            novaTarefa.appendTo('ul');
            $('#nome-tarefa').val('');
        }
    });

    $('ul').on('click', 'li', function(){
        $(this).toggleClass('completo');
    });
});
