

onload = () => {
    fetchJson();
}

async function fetchJson(url = 'http://localhost:4567/dicas', method = 'GET') {
    const response = await fetch(url, { method });
    const data = await response.json();
    let codigo_html = '';
    //var div = document.getElementById('dica');
    new BlipChat()
        .withAppKey('cGVkcm8yODo5NjgxZjNkMS1hZWU3LTQxNTctOTk5OC0yMjcxNmFmYTgzNjY=')
        .withButton({"color":"#2CC3D5","icon":""})
        .withCustomCommonUrl('https://chat.blip.ai/')
        .build();

    console.log(data);

    for (let i = 0; i < data.length; i++) {

        //let aux = new cards(data[i].id, data[i].nome, data[i].titulo, data[i].conteudo);
        //console.log(data[i].id);
         id = data[i].id;
         nome = data[i].nome;
         titulo = data[i].titulo;
         conteudo = data[i].conteudo; 
         codigo_html += `
        <div class="col-12 col-sm-12 col-md-12 col-lg-4" style = "padding-top: 30px">
        <div class="card card-dica">
            <img src="imgs/home/logo.png" class="card-img-top" alt="">
            <div class="card-body">
                <h3 class="card-title">${titulo}
                </h3>
                <p class="card-text">Dica: ${conteudo}</p> 
                <h5 class="card-text">Autor: ${nome}</h5> 
            </div>
                
        
        </div>
        </div>
        `;
        //div.appendChild(aux.construir());
    }
     // Repassar os cards para a página
     $('#dica').html(codigo_html)
}


