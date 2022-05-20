var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Alicia Moraes Ferreira",
            "cidade": "Vespasiano",
            "especie": "Gato",
            "categoria": "Abandono",
            "email": "alicinha111@hotmail.com",
            "telefone": "98666-5567",
            "info": "Cachorro muito magro"
        },
        {
            "id": 2,
            "nome": "Regina Pereira",
            "cidade": "Lagoa Santa",
            "especie": "Gato",
            "categoria": "Agressão",
            "email": "reginap@gmail.com",
            "telefone": "98887-7876",
            "info": "--"
        },
        {
            "id": 3,
            "nome": "Yuri Fernandes Oliveira",
            "cidade": "Belo Horizonte",
            "especie": "Cachorro",
            "categoria": "Abandono",
            "email": "GamerYuri@gmail.com",
            "telefone": "98854-6556",
            "info": "Sinais de raiva."
        },
        {
            "id": 4,
            "nome": "Carol Kim",
            "cidade": "Pedro Leopoldo",
            "especie": "Cachorro",
            "categoria": "Agressão",
            "email": "kimcarol@gmail.com",
            "telefone": "94848-4683",
            "info": "Animal sangrando."
        },
        
    ]
}


// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbd = JSON.parse(localStorage.getItem('db_denuncia_abandono'));
if (!dbd) {
    dbd = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = dbd.data[dbd.data.length - 1].id + 1;
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
    dbd.data.push(novoContato);
    displayMessage("Denúncia inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_denuncia_abandono', JSON.stringify(dbd));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbd.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbd.data[index].nome = contato.nome,
    dbd.data[index].email = contato.email,
    dbd.data[index].cidade = contato.cidade,
    dbd.data[index].telefone = contato.telefone,  
    dbd.data[index].especie = contato.especie, 
    dbd.data[index].categoria = contato.categoria,
    dbd.data[index].info = contato.info

    displayMessage("Denúncia alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_denuncia_abandono', JSON.stringify(dbd));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbd.data = dbd.data.filter(function (element) { return element.id != id });

    displayMessage("Denúncia removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_denuncia_abandono', JSON.stringify(dbd));
}



var db_relatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "César Felipe",
            "cidade": "Confins",
            "especie": "Cachorro",
            "acao": "Nada",
            "email": "pedroa123@gmail.com",
            "telefone": "99438-4583",
            "ajuda": "Auxílio Médico",
            "info": "Cachorro muito magro"
        }
        
        
    ]
}


// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var dbr = JSON.parse(localStorage.getItem('db_relato_abandono'));
if (!dbr) {
    dbr = db_relatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertRelato(relato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = dbr.data[dbr.data.length - 1].id + 1;
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
    dbr.data.push(novoRelato);
    displayMessage("relato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_relato_abandono', JSON.stringify(dbr));
}

function updateRelato(id, relato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = dbr.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    dbr.data[index].nome = relato.nome,
    dbr.data[index].email = relato.email,
    dbr.data[index].cidade = relato.cidade,
    dbr.data[index].telefone = relato.telefone,  
    dbr.data[index].especie = relato.especie, 
    dbr.data[index].categoria = relato.categoria,
    dbr.data[index].ajuda = relato.ajuda,
    dbr.data[index].info = relato.info

    displayMessage("Denúncia alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_relato_abandono', JSON.stringify(dbr));
}

function deleteRelato(id) {    
    // Filtra o array removendo o elemento com o id passado
    dbr.data = dbr.data.filter(function (element) { return element.id != id });

    displayMessage("Relato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_relato_abandono', JSON.stringify(dbr));
}