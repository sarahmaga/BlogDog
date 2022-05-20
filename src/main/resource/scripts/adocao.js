
var temp = [];
onload = () => {

  recarregar();

}

class NovoUser {

  constructor(
    nome,
    email,
    cidade,
    fone,
    animal_nome,
    animal_raca,
    animal_idade,
    animal_imagem) { //construir o sistema do favorito

    this.nome_c = nome;
    this.email_c = email;
    this.cidade_c = cidade;
    this.phone_c = fone;

    this.nome_dog = animal_nome;
    this.raca_dog = animal_raca;
    this.idade_dog = animal_idade;
    this.imagem_dog = animal_imagem;

    this.exclusao = exclusao;
  }

  construir() {
    var contador = document.createElement('p'); //criar um elemento p na pagina

    contador.innerHTML = `
                         <div class="card novo_card">
                            <img src="${this.imagem_dog} " class="card-img-top border-bottom" alt="" max-width="100%" max-height="100%">
                            <div class="card-body">
                         
                                <div class="card-text">
                                    <p>Idade: ${this.idade_dog}</p>
                                    <p>Nome: ${this.nome_dog}</p>
                                    <p>Raça: ${this.raca_dog}</p>
    
                                    <h5>Informações para contato</h5>
            
                                    <p>Nome do anunciante: ${this.nome_c}</p>
                                    <p>Email: ${this.email_c}</p>
                                    <p>Cidade: ${this.cidade_c}</p>
                                    <p>Celular: ${this.phone_c}</p>

                                </div>
                                <a href="" class="btn btn-warning exclusao">Excluir</a>
                                    
     </button>
                            </div>
                        </div>
                            `;
    console.log(contador);
    contador.querySelector('.exclusao').onclick = () => this.exclusao(this.nome_dog);//excluir o favorito baseando-se no id
    return contador;
  }
}

var recarregar = () => {


  let db_animais = localStorage.getItem('db_animais');
  if (db_animais) {//se ele conseguir, então ele ja pegar os dados existentes,
    temp = JSON.parse(db_animais);

  }//
  var div = document.getElementById("JSarea");

  for (i = 0; i < temp.length; i++) {
    var teste = temp[i].nome;

    var c = new NovoUser(

      teste.nome,
      teste.email,
      teste.cidade,
      teste.phone,

      teste.nome_dog,
      teste.raca_dog,
      teste.idade_dog,
      teste.imagem_dog,
      exclusao
    );

    div.appendChild(c.construir());

  }
}

let exclusao = (i) => {

  if (usuarioCorrente.nome != "Administrador do Sistema") {
    alert(usuarioCorrente.nome);
    alert('Apenas Administradores do Sistema podem apagar dados');
  }
  else {
    alert(usuarioCorrente.nome);
    alert('Sim');

    var jsonString = localStorage.getItem("db_animais");
    var arr = JSON.parse(jsonString);

    arr = arr.filter(function (item) {

      console.log(i);
      console.log(item.nome.nome_dog);
      return item.nome.nome_dog !== i;

    });

    localStorage.setItem("db_animais", JSON.stringify(arr));
  }
}

