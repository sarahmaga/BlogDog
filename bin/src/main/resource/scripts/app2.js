var db_contatos_inicial2 = {
    "data": [
        {
            "id": 1,
            "nome": "Lívia Souza",
            "cidade": "Belo Horizonte",
            "especie": "Gato",
            "categoria": "Abandono",
            "email": "livia111@hotmail.com",
            "telefone": "98966-5656",
            "info": "--"
        },
        {
            "id": 2,
            "nome": "Augustina Santos",
            "cidade": "Sete Lagoas",
            "especie": "Gato",
            "categoria": "Agressão",
            "email": "agustina@gmail.com",
            "telefone": "XX",
            "info": "--"
        }
       
        
    ]
}


// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbdd = JSON.parse(localStorage.getItem('db_denuncia_agressao'));
if (!dbdd) {
    dbdd = db_contatos_inicial2
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = dbdd.data[dbdd.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "especie": contato.especie,
        "categoria": contato.categoria,
        "info": contato.info
    };

    // Insere o novo objeto no array
    dbdd.data.push(novoContato);
    displayMessage("Denúncia inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_denuncia_agressao', JSON.stringify(dbdd));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbdd.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbdd.data[index].nome = contato.nome,
    dbdd.data[index].email = contato.email,
    dbdd.data[index].cidade = contato.cidade,
    dbdd.data[index].telefone = contato.telefone,  
    dbdd.data[index].especie = contato.especie, 
    dbdd.data[index].categoria = contato.categoria,
    dbdd.data[index].info = contato.info

    displayMessage("Denúncia alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_denuncia_agressao', JSON.stringify(dbdd));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbdd.data = dbdd.data.filter(function (element) { return element.id != id });

    displayMessage("Denúncia removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_denuncia_agressao', JSON.stringify(dbdd));
}

var db_relatos_inicial2 = {
    "data": [
        {
            "id": 1,
            "nome": "Pedro Augusto",
            "cidade": "Vespasiano",
            "especie": "Gato",
            "acao": "Nada",
            "email": "pedroa123@gmail.com",
            "telefone": "99438-4583",
            "ajuda": "Auxílio Médico",
            "info": "Gato muito magro"
        }
        
        
    ]
}


// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbrr = JSON.parse(localStorage.getItem('db_relato_agressao'));
if (!dbrr) {
    dbrr = db_relatos_inicial2
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertRelato(relato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = dbrr.data[dbrr.data.length - 1].id + 1;
    let novoRelato = {
        "id": novoId,
        "nome": relato.nome,
        "email" : relato.email,
        "telefone": relato.telefone,
        "cidade" : relato.cidade,
        "especie": relato.especie,
        "acao": relato.acao,
        "ajuda": relato.ajuda,
        "info": relato.info
    };

    // Insere o novo objeto no array
    dbrr.data.push(novoRelato);
    displayMessage("relato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_relato_agressao', JSON.stringify(dbrr));
}

function updateRelato(id, relato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbrr.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbrr.data[index].nome = relato.nome,
    dbrr.data[index].email = relato.email,
    dbrr.data[index].cidade = relato.cidade,
    dbrr.data[index].telefone = relato.telefone,  
    dbrr.data[index].especie = relato.especie, 
    dbrr.data[index].categoria = relato.categoria,
    dbrr.data[index].ajuda = relato.ajuda,
    dbrr.data[index].info = relato.info

    displayMessage("Denúncia alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_relato_agressao', JSON.stringify(dbrr));
}

function deleteRelato(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbrr.data = dbrr.data.filter(function (element) { return element.id != id });

    displayMessage("Relato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_relato_agressao', JSON.stringify(dbrr));
}