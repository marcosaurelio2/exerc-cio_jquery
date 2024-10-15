$(document).ready(function(){
    let tarefaAtual = '';

    $('#myBtn').click(function(e){
        e.preventDefault();
        const novaTarefa = $('#tarefaDia').val();

        if(novaTarefa) {
            tarefaAtual = novaTarefa; 
            $('#favoritarSection').show(); 
            $('#tarefaDia').val('');
        }
    });

    $(document).on('click', 'li', function(){
        $(this).toggleClass('completed');
    });
    

    $(document).on('click', '.delete-Btn', function(e){
        e.stopPropagation();
        $(this).parent().remove();
    });

    $('#favoritarSim').click(function() {
        if (tarefaAtual) {
            $('#task-list').append('<li class="favorito">' + tarefaAtual + '<button class="delete-Btn">Limpar</button></li>');
            tarefaAtual = ''; 
            $('#favoritarSection').hide(); 
        }
    });

    $('#favoritarNao').click(function() {
        if (tarefaAtual) {
            $('#task-list').append('<li>' + tarefaAtual + '<button class="delete-Btn">Limpar</button></li>');
            tarefaAtual = '';
            $('#favoritarSection').hide(); 
        }
    });

    $(document).on('click', '.clear-list', function(){
        $('#task-list').empty();
    });
});
