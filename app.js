function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

    let valorPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    
    if (!valorPesquisa){
        section.innerHTML = "<p>Por favor preencha o campo de busca</p>";
        return;
    }

    let resultados = ""
    for (artista of artistas) {
        if (artista.titulo.toLowerCase().includes(valorPesquisa) ||
            artista.descricao.toLowerCase().includes(valorPesquisa)){
            resultados += `
            <div class="item-resultado">
            <h2>
            <a href=${artista.linkSobre} target="_blank">${artista.titulo}</a>
            </h2>
            <p class="descricao-meta">${artista.descricao}</p>
            <a href=${artista.linkInstagram} target="_blank">Instagram</a>
            </div>
            `;   
        }
    }

    if (!resultados.trim()){
        resultados = "<p>Nenhum artista foi encontrado</p>";
    }

    section.innerHTML = resultados;
}