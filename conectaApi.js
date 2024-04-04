// Função para carregar e exibir os dados do arquivo JSON
function listAluguel() {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            const alugueis = data.alugueis;
            const listaElement = document.getElementById('alugueis-lista');

            alugueis.forEach(aluguel => {
                const item = document.createElement('div'); // Alterado de <li> para <div>
                item.classList.add('aluguel-item'); // Adiciona uma classe para estilização
                const imagem = document.createElement('img');
                imagem.src = aluguel.imagem;
                const nome = document.createElement('span');
                nome.textContent = aluguel.nome;
                nome.classList.add('nome');
                const dataNascimento = document.createElement('span');
                dataNascimento.textContent = aluguel.data_de_nascimento;

                const sexo = document.createElement('span');
                sexo.textContent = aluguel.sexo;
                //  const texto = document.createTextNode(`${aluguel.nome} - ${aluguel.data_de_nascimento} - ${aluguel.sexo}`);
                item.appendChild(imagem);
                item.appendChild(nome);
                item.appendChild(dataNascimento);
                item.appendChild(sexo);
                listaElement.appendChild(item);
            });
        })
        .catch(error => console.error('Erro ao carregar dados:', error));
}

// Chama a função para listar os aluguéis
listAluguel();
