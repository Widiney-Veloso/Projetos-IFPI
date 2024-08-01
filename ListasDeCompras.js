const prompt = require('prompt-sync')();

let listaDeCompras = ['Arroz', 'Feijão', 'Carne', 'pão', 'maçã', 'bolacha',]

let comando;

do {

function adicionarItemNovo() {
    let resposta; 
    do{
        listaDeCompras.push(prompt('Qual item você quer adicionar: '))
        resposta = prompt('Quer colocar mais algum item na lista? (s/n): ')
    } while (resposta != 'n')
    return;
}

function removerItem(){
    let resposta1;
    do{
        let removido = listaDeCompras.indexOf(prompt('Qual elemento você quer remover: '))
        if (removido != -1) {
            listaDeCompras.splice(removido, 1);
        } else {
            console.log('Elemento não encontrado na lista!')
        }
        resposta1 = prompt('Quer remover mais algum item na lista? (s/n): ')
    } while (resposta1 != 'n')
    return;
}

function pesquisarItem(){
    let resposta2;
    do{
        console.log(listaDeCompras.includes(prompt('Qual item você quer pesquisar: ')))
        resposta2 = prompt('Quer pesquisar mais algum item na lista? (s/n): ')
    } while (resposta2 != 'n')
    return;
}

function ordenarLista(){
    listaDeCompras.sort((a, b) => a.localeCompare(b));
    return listaDeCompras.forEach ((listaOrdenada) => 
        console.log(listaOrdenada)
    )
}

function exibirLista(){
    listaDeCompras.forEach((lista) =>
    console.log(lista)
    )
}

function quantosItensTemNaLista(){
    console.log(listaDeCompras.length)
    return
}

function limparLista(){
    listaDeCompras.length = 0;
}

    comando = prompt("\n=== Lista de compras ===\n[1] Adicionar um item;\n[2] Remover um item;\n[3] Pesquisar item;\n[4] Ordenar a lista;\n[5] Exibir lista;\n[6] Quantos itens tem na lista;\n[7] Limpar a lista;\n[8] Encerrar programa.\nDigite a numeração referente a opção que você quer:")

    switch (comando) {
        case '1':
            adicionarItemNovo()
            break;
        case '2':
            removerItem()
            break;
        case '3':
            pesquisarItem()
            break;
        case '4':
            ordenarLista()
            break;
        case '5':
            exibirLista()
            break;
        case '6':
            quantosItensTemNaLista()
            break;
        case '7':
            limparLista()
            break;
        default:
    }

} while (comando != '8');