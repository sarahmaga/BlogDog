var db_dica_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Gatil Hauser",
            "conteudo": "Você sabia que é muito importante para seu gato comer grama? Aprenda o porquê dessa importância e a fazer graminha com milho de pipoca no link a seguir! https://www.youtube.com/watch?v=MvHtExpvFMI</p>",
            "titulo": "Como fazer grama para seu gatinho em casa!",
        },
        
        {
            "id": 2,
            "nome": "Globo.com",
            "conteudo": "Aproveitar esse tempo em casa para adestrar o seu pet pode ser uma boa. São atividades que no dia-a-dia poucas pessoas têm tempo e paciência para se dedicar. Ao ensinar os truques de petiscos e elogios.",
            "titulo": "Pratique exercícios de adestramento",
        },

        {
            "id": 3,
            "nome": "Globo.com",
            "conteudo": "Escovar os animais todos os dias é uma coisa que deveria entrar na rotina, especialmente os cães e gatos muito peludos.Assim, evita-se uma enorme quantidade de pelos que cairiam pelos cantos da casa",
            "titulo": "Escove o pêlo do seu pet!",
        }
    ]
}


// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbc = JSON.parse(localStorage.getItem('db_dica'));
if (!dbc) {
    dbc = db_dica_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertDica(dica) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = dbc.data[dbc.data.length - 1].id + 1;
    let novoDica = {
        "id": novoId,
        "nome": dica.nome,
        "titulo" : dica.titulo,
        "conteudo": dica.conteudo,
        "imagem" : dica.imagem,
        
    };

    // Insere o novo objeto no array
    dbc.data.push(novoDica);
    displayMessage("dica inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_dica', JSON.stringify(dbc));
}

function updateDica(id, dica) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbc.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbc.data[index].nome = dica.nome,
    dbc.data[index].titulo = dica.titulo,
    dbc.data[index].conteudo = dica.conteudo,
    dbc.data[index].imagem = dica.imagem,  
    

    displayMessage("Denúncia alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_dica', JSON.stringify(dbc));
}

function deleteDica(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbc.data = dbc.data.filter(function (element) { return element.id != id });

    displayMessage("dica removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_dica', JSON.stringify(dbc));
}


