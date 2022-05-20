

onload = () => {
    fetchJson();
}

async function fetchJson(url = 'http://localhost:4567/ong', method = 'GET') {
    const response = await fetch(url, { method });
    const data = await response.json();
    new BlipChat()
        .withAppKey('cGVkcm8yODo5NjgxZjNkMS1hZWU3LTQxNTctOTk5OC0yMjcxNmFmYTgzNjY=')
        .withButton({"color":"#2CC3D5","icon":""})
        .withCustomCommonUrl('https://chat.blip.ai/')
        .build();

    var div = document.getElementById('ONGS');

    console.log(data);

    for (let i = 0; i < data.length; i++) {

        let aux = new cards(data[i].id, data[i].nome, data[i].telefone, data[i].cidade);
        console.log(data[i].id);
        div.appendChild(aux.construir());
    }
}

class cards {

    constructor(id, nome, telefone, cidade) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.cidade = cidade;

    }

    construir() {

        let card = document.createElement("div");

        card.innerHTML = `
        <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
            <table id="grid-contatos" class="table table-striped">
                <tbody id="table-contatos">
                    <tr>
                        <th scope="col">${this.id}</th>
                        <th scope="col">${this.nome}</th>
                        <th scope="col">${this.telefone}</th>
                        <th scope="col">${this.cidade}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        `;

        return card;
    }
}