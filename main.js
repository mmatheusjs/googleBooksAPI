let url = 'https://www.googleapis.com/books/v1/volumes?q=';
let keyAcesso = 'AIzaSyDA-MZMNZQF1C7AzfrpbtDkvFYckNCa4pI';    
const containerBooks = document.getElementById('containerBooks');

// document.getElementById('btnSearch').addEventListener('click', function() {
//         document.querySelector('.load').style.display = 'flex';
      
//   })  


    function loadLivros(){
    
    document.querySelector('.load').style.display = 'flex';
    const selectValue = document.getElementById('userSelect').value;
    const inputValue = document.getElementById('userInput').value; 
    
    fetch (`${url}+${selectValue}+${inputValue}&key=${keyAcesso}`).then(resposta => resposta.json()).then((dados) => {
        
        containerBooks.innerHTML = '';
        
        for (let i = 0; i < dados.items.length; i++) {

            // Tratando o valor undefined de retorno da API, '!' negando, '?' if verificando a condição, ':' else retorno
            
            let subtitulo = !dados.items[i].volumeInfo.subtitle ? "Sem informação" : dados.items[i].volumeInfo.subtitle;

            let categoria = !dados.items[i].volumeInfo.categories ? "Sem informação" : dados.items[i].volumeInfo.categories;

            let publicacao = !dados.items[i].volumeInfo.publishedDate ? "Sem informação" : dados.items[i].volumeInfo.publishedDate;

            let description = !dados.items[i].volumeInfo.description ? "Sem informação" : dados.items[i].volumeInfo.description;

            
                   
            containerBooks.innerHTML +=
                `
                <div class="books">

                    <h1 class="title">${dados.items[i].volumeInfo.title}</h1>
                
                    <div class="img_book">
                        <img id="thumbnail" alt ="Foto do livro"src="${dados.items[i].volumeInfo.imageLinks.thumbnail}">
                    </div>
                    
                    <p class="infos">Subtitulo: ${subtitulo}</p>

                    <p class="infos">Categoria: ${categoria}</p>

                    <p class="infos">Data de publicação: ${publicacao}</p>

                    <p class="infos" id="description">Descrição: ${description}</p>

                    <div class="detalhes">
                        <a href="${dados.items[i].saleInfo.buyLink}" target="_blank">
                            <button id="btn_link" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                Comprar
                            </button>
                        </a>

                        <a href="${dados.items[i].volumeInfo.infoLink}" target="_blank">
                            <button id="btn_link" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                Mais informações
                            </button>
                        </a>

                        <a href="${dados.items[i].selfLink}" target="_blank">
                            <button id="btn_link" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                API do Livro
                            </button>
                        </a>
                    </div>
                </div>
                `
          }
          document.querySelector('.load').style.display = 'none';      
    })
}
