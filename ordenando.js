function swap(lista) {
    let teste = lista[0];
    lista[0] = lista[1];
    lista[1] = teste;
    console.log(lista);

}

function shuffle(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const aux = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[aux]] = [lista[aux], lista[i]];
    }
    printarNovaLista(lista, "listaNumeros");
    console.log(lista);
    return lista;
}

function auxShuffle(){
    shuffle(listaGlobal);
}

function bubbleSort(lista) {
    let x = lista.length;
    let teste;

    do {
        teste = false;
        for (let i = 0; i < x - 1; i++) {
            if (lista[i] > lista[i + 1]) {
                [lista[i], lista[i + 1]] = [lista[i + 1], lista[i]];
                teste = true;
            }
        }
        x--;
    } while (teste);
    printarNovaLista(lista, "listaNumeros");
    console.log(lista);
    return lista;
}

function selectionSort(lista) {
    let aux = lista.length;
    
    
    for (let i = 0; i < aux - 1; i++) {
        
        let teste = i;
        for (let x = i + 1; x < aux; x++) {
            if (lista[x] < lista[teste]) {
                teste = x;
            }
        }
        
        if (teste !== i) {
            [lista[i], lista[teste]] = [lista[teste], lista[i]];
        }
    }
    printarNovaLista(lista, "listaNumeros");
    console.log(lista);
    return lista;
}

function quickSort(lista) {
    if (lista.length <= 1) {
        return lista;
    }
    
    let ult_lista = lista[lista.length - 1];
    
    let esq = [];
    let dir = [];

    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] < ult_lista) {
            esq.push(lista[i]);
        } else {
            dir.push(lista[i]);
        }
    }
    console.log(lista);
    printarNovaLista(lista, "listaNumeros");
    return [...quickSort(esq), ult_lista, ...quickSort(dir)];
}

function particionamento(lista, num) {
    let aux1 = [];
    let aux2 = [];
  
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] <= num) {
        aux1.push(lista[i]);
      } else {
        aux2.push(lista[i]);
      }
    }
    console.log(lista);
    return { aux1, aux2 };
}

function adicionarNumero() {
    const numero = document.getElementById("inputValor").value;
    if (numero !== "") {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = numero;
    document.getElementById("listaNumeros").appendChild(li);
    document.getElementById("inputValor").value = "";
    } else {
    alert("Ocorreu algum erro.");
    }
}

function novoVetor() {
    const listaNumeros = document.getElementById("listaNumeros").getElementsByTagName("li");
    const vetorNumeros = [];
    for (let i = 0; i < listaNumeros.length; i++) {
      vetorNumeros.push(Number(listaNumeros[i].textContent));
    }
    console.log(vetorNumeros);
    listaGlobal = vetorNumeros;
    return vetorNumeros;
}

function executarFuncao() {
    const selectElement = document.getElementById("selecaoTeste");
    const opcaoSelecionada = selectElement.value;

    switch (opcaoSelecionada) {
        case "1":
            bubbleSort(listaGlobal);
        break;
        case "2":
            quickSort(listaGlobal);
        break;
        
        default:
        alert("Ocorreu algum erro.");
    }
}

function printarNovaLista(aux, idLista) {
    
    const lista = document.getElementById(idLista);
  
    
    lista.innerHTML = '';
  
    aux.forEach(item => {
      const li = document.createElement('li');
      li.className = "list-group-item";
      li.textContent = item;
      lista.appendChild(li);
    });
}

let listaGlobal = [];
