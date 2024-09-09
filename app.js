function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML= "Por favor, informe o que deseja pesquisar";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = ""

    let titulo = "";
    let descricao = "";
    let tags = "";

for (let dado of dados) {

    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    //cria um novo elemento
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa || tags.includes(campoPesquisa))) {
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">
                ${dado.descricao}
            </p>
            <a href=${dado.link} target="_blank">Mais informações</a>  
        </div>
    `;
    }
}

if (!resultados) {
    resultados = "Nada foi encontrado";
}

section.innerHTML = resultados

}
