const PERFIL_URL = "meuPerfil.html";
function Perfil () {
   
    window.location = PERFIL_URL;
}

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
var db = JSON.parse(localStorage.getItem('db_denuncia'));
if (!db) {
    db = db_contatos_inicial
};
var db_parceiro_inicial = {
    "data": [
        {
            "id": 1,
            "cidadeOng": "Belo Horizonte",
            "ong": "Cão Viver - Associação particular administrada por voluntários",
            
            
        },
        {
            "id": 2,
            
            "cidadeOng": "Belo Horizonte",
            "ong": "ONG Asas e Amigos",
            
        },
        {
            "id": 3,
           
            "cidadeOng": "Belo Horizonte",
            "ong": "Castrapet",
            
        }
       
        
    ]
}


// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_parceiro'));
if (!db) {
    db = db_parceiro_inicial
};