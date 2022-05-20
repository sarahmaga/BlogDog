/*window.onload = () => {
    form1.onsubmit = () =>{
        
        if(conf.value.length == 0){
            alert('Campo(s) não pode ficar vazio(s)');
            return false;
        }
        return true;
    };
   
};
*/

let temp = []; //definindo um array para armazenar temporariamente as imagens

window.onload = () => {
      
    bt.onclick= () =>{

        var nome = document.getElementById('exampleFormControlInput1').value;

        var animal_nome = document.getElementById('exampleFormControlInput2').value;

        var animal_idade = document.getElementById('exampleFormControlInput3').value;

        var animal_raca = document.getElementById('exampleFormControlInput4').value;


        var cara_nome = document.getElementById('exampleFormControlInput1').value;

        var cara_email = document.getElementById('exampleFormControlInput5').value;

        var cara_cidade = document.getElementById('exampleFormControlInput7').value;

        
        var cara_telefone = document.getElementById('exampleFormControlInput6').value;


        let inputImg = document.getElementById ('imputImg');//associo o botao com essa variavel  e pega a imagem

        if (inputImg.files && inputImg.files[0]) 
        {
        
            var readerImg = new FileReader ();

            readerImg.onload = function (e)
            {



               if( animal_nome      != '' &&
                   animal_raca      != '' &&
                   animal_idade     != '' && 
                   e.target.result  != '' &&
                   cara_nome        != '' && 
                   cara_email       != '' && 
                   cara_cidade      != '' && 
                   cara_telefone    != '' ){

                salvarImagens(animal_nome, animal_raca, animal_idade, e.target.result, cara_nome, cara_email, cara_cidade, cara_telefone);

                alert('Enviado com sucesso');
                document.getElementById("relatos").reset();
                
                }
              else
              {
                alert("Algum dos campos está vazio.");

              }

            }
        
        };

        readerImg.readAsDataURL (imputImg.files[0]);
    }
 
}

function salvarImagens (animal_nome, animal_raca, animal_idade, animal_imagem, cara_nome, cara_email, cara_cidade, cara_fone) {
    
  // Tenta carregar o array de imagens do Local Storage
  let db_animais = localStorage.getItem ('db_animais'); 
  if (db_animais) {//se ele conseguir, então ele ja pegar os dados existentes,
    temp = JSON.parse (db_animais);
  }//se não o array ja vai começar vazio mesmo 

  // Insere a imagem no array

     var novoAnimal = new NovoUser({     

    nome: cara_nome,
    email: cara_email,
    cidade: cara_cidade,
    phone: cara_fone,

    nome_dog: animal_nome,
    raca_dog: animal_raca,
    idade_dog: animal_idade,
    imagem_dog: animal_imagem
                                    });  


  temp.push (novoAnimal);

  // Salvar o array de imagens no localStorage
  localStorage.setItem ('db_animais', JSON.stringify(temp));

}



let exclusao = (i) => {
  temp.splice(i, 1);
  renderiza();
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
                animal_imagem,) { //construir o sistema do favorito

    this.nome = nome;
    this.email = email;
    this.cidade =cidade;
    this.phone = fone;

    this.nome_dog = animal_nome;
    this.raca_dog = animal_raca;
    this.idade_dog = animal_idade;
    this.imagem_dog = animal_imagem;
    console.log(this.nome);

    this.exclusao = exclusao;

    
  }

    construir() {
    var contador = document.createElement(''); //criar um elemento p na pagina

    contador.innerHTML = `<b>
                        <div class="card">
                            <img src="${this.imagem_dog} " class="card-img-top border-bottom" alt="">
                            <div class="card-body">
                                <h5 class="card-title">CRIOULA</h5>
                                <div class="card-text">
                                    <p>Idade: ${this.idade_dog}</p>
                                    <p>Nome: ${this.nome_dog}</p>
                                    <p>Raça: ${this.raca_dog}</p>
    
                                    <h5>Informações para contato</h5>
            
                                    <p>Nome do anunciante: ${this.nome}</p>
                                    <p>Email: ${this.email}</p>
                                    <p>Cidade: ${this.cidade}</p>
                                    <p>Celular: ${this.phone}</p>

                                </div>
                                
                                    <button class="exclusao"> excluir
       <i class="fas fa-trash"></ asdf i>
     </button>
                            </div>
                        </div>
                            `;

    contador.querySelector('.exclusao').onclick = () => this.exclusao(this.nome);//excluir o favorito baseando-se no id
    return contador;
  }
}


