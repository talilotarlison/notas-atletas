let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

function calculaMediaAtletlas(atletas) {
    let notasOrdenadas = ordenaNotasAtletas(atletas);
    let notasRemovidas = retiraNotasMaiorMenorDosAtletas(notasOrdenadas);
    //console.log(notasRemovidas);

    let dadosFormatados = notasRemovidas.map(atleta => {
        let somaNotas = atleta.notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
        let totalNotas = atleta.notas.length;
        return {
            nome: atleta.nome,
            todasNotas: atleta.todasNotas,
            notas: atleta.notas,
            totalNotas: totalNotas,
            somaNotas: somaNotas,
            mediaNotas: somaNotas / totalNotas
        }
    })
    //console.log(dadosFormatados);
    apresentaçãoDosDados(dadosFormatados);
}


function ordenaNotasAtletas(dadosAtletas) {
    let dadosOrdenados = dadosAtletas.map(atleta => {
        return {
            nome: atleta.nome,
            notas: atleta.notas.sort((a, b) => a - b)
        }

    })

    return dadosOrdenados;
    //console.log(dadosOrdenados);
}


function retiraNotasMaiorMenorDosAtletas(dadosAtletas) {
    let notasRemovidas = dadosAtletas.map(atleta => {
        return {
            nome: atleta.nome,
            todasNotas: atleta.notas,
            notas: atleta.notas.slice(1, 4)
        }

    })
    return notasRemovidas;
}


function apresentaçãoDosDados(atletas) {
    atletas.forEach((atleta) => {
        console.log("Atleta: ", atleta.nome)
        console.log("Notas Obtidas: ", atleta.todasNotas.join(", "))
        console.log("Média Válida: ", atleta.mediaNotas)
    })
}

calculaMediaAtletlas(atletas)