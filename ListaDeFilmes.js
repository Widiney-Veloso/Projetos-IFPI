const prompt = require('prompt-sync')();
let listaDeFilmes = [
    { nome: 'Inception', ano: 2010, assistido: false},
    { nome: 'Matrix', ano: 1999, assistido: false},
    { nome: 'The Godfather', ano: 1972, assistido: false},
    { nome: 'The Dark Knight', ano: 2008, assistido: false}
];

let comando;
do{

function adicionarFilmeNovo(){
    let resposta; 
    do{
        let nomeDoFilme = prompt('Digite o nome do filme você quer adicionar: ')
        let anoDoFilme = Number(prompt('Digite o ano do filme que voê adicionou: '))
        let filmeAdicionar = {nome: nomeDoFilme, ano: anoDoFilme, assistido: false}
        listaDeFilmes.push(filmeAdicionar)
        resposta = prompt('Quer colocar mais algum item na lista? (s/n): ')
    } while (resposta != 'n')
    return;
}

function removerFilme(){
    let resposta1;
    do{
        let nomeRemovido = prompt('Qual o nome do filme você quer remover: ')
        let filmeEncontrado = listaDeFilmes.find(filme => filme.nome === nomeRemovido)
        if (filmeEncontrado) {
            remove(nomeRemovido)
            function remove(nome){
            listaDeFilmes = listaDeFilmes.filter(filme => !(filme.nome == nome))
            console.log(`O filme ${nomeRemovido} foi removido.`);
        }
        } else {
            console.log('Elemento não encontrado na lista!')
        }

        resposta1 = prompt('Quer remover mais algum item na lista? (s/n): ')
    } while (resposta1 != 'n')
    return;
}

function pesquisarFilme(){
    let resposta2;
    do{
        let nomeProcurado = (prompt('Qual item você quer pesquisar: '))
        let filmeEncontrado = listaDeFilmes.find(filme => filme.nome === nomeProcurado);
        if (filmeEncontrado) {
            console.log('Filme encontrado:', filmeEncontrado);
        } else {
            console.log('Filme não encontrado');
        }
        resposta2 = prompt('Quer pesquisar mais algum item na lista? (s/n): ')
    } while (resposta2 != 'n')
    return;
}

function ordenarLista(){
    let qualOrdem = prompt('Você quer ordenar a lista por ano ou por nome? (ano/nome): ')
    if (qualOrdem == 'nome') {
        listaDeFilmes.sort((a, b) => a.nome.localeCompare(b.nome));
        return listaDeFilmes.forEach ((listaOrdenada) => 
        console.log(listaOrdenada)
    ) 
    } else if (qualOrdem == 'ano') {
        listaDeFilmes.sort((a, b) => a.ano - b.ano);
        return listaDeFilmes.forEach ((listaOrdenada) =>
        console.log(listaOrdenada)
        )
    }
}

function exibirLista(){
    console.log('==== Sua Lista de Filmes a Baixo ====')
    listaDeFilmes.forEach((lista) =>
    console.log(lista)
    )
}

function quantosFilmeTemNaLista(){
    console.log(listaDeFilmes.length)
    return
}

function marcarFilmeComoAssistido (){
    let filmeAssistido = prompt('Qual o filme da lista você ja assistiu? ')
    let existeOFilme = listaDeFilmes.find(filme => filme.nome === filmeAssistido)
    if (existeOFilme) {
        existeOFilme.assistido = true
        console.log(`O filme "${filmeAssistido}" foi marcado como assistido.`);
    } else {
        console.log('Filme não encontrado');
    }
}

    comando = prompt("\n=== Comandos ===\n[1] Adicionar um filme;\n[2] Remover um filme;\n[3] Pesquisar filme da lista;\n[4] Ordenar a lista;\n[5] Exibir lista;\n[6] Quantos filmes tem na lista;\n[7] Marcar filme como assistido;\n[8] Encerrar programa.\nDigite a numeração referente a opção que você quer:")

    switch (comando) {
        case '1':
            adicionarFilmeNovo()
            break;
        case '2':
            removerFilme()
            break;
        case '3':
            pesquisarFilme()
            break;
        case '4':
            ordenarLista()
            break;
        case '5':
            exibirLista()
            break;
        case '6':
            quantosFilmeTemNaLista()
            break;
        case '7':
            marcarFilmeComoAssistido()
            break;
        default:
    }

} while (comando != '8');