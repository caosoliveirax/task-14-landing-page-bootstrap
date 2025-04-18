$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false,
            },
            mensagem: {
                required:true,
            },
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira um email válido',
            mensagem: 'Por favor, deixe uma mensagem para nós!',
        }
    });
});