const grupoEstilo = ['newspaper','magazine1','magazine2']
const grupoTamanho = ['medium','big','reallybig']
const grupoRotacao = ['rotateleft','rotateright']
const grupoInclinacao =['skewleft','skewright']

function selecionaEstilo(){
    // let est = Math.floor(Math.random()*3)
    // let tam = Math.floor(Math.random()*3)
    // let rot = Math.floor(Math.random()*2)
    // let inc = Math.floor(Math.random()*2)
    let est = parseInt(Math.random()*3)
    let tam = parseInt(Math.random()*3)
    let rot = parseInt(Math.random()*2)
    let inc = parseInt(Math.random()*2)

    return [est,tam,rot,inc]
}

function apagaCarta(){
    let itens=document.querySelectorAll('.palavra')
    if (itens.length>0){
        for(let i=itens.length-1;i>=0;i-=1){
            itens[i].parentNode.removeChild(itens[i])
        }
    }
}

function criaCarta(){
    apagaCarta()
    let cartaTexto=document.getElementById('carta-texto')
    let conteudo=cartaTexto.value
    if (conteudo==false){
        document.getElementById('carta-gerada').innerText='Por favor, digite o conteúdo da carta.'
    } else {
        let palavras=conteudo.split(' ')
        document.getElementById('carta-contador').innerText=palavras.length
        let cartaGerada= document.getElementById('carta-gerada')
        for (let i=0 ;i<palavras.length;i+=1){
            let item=document.createElement('span')
            item.addEventListener('click',alteraEstilo)
            item.innerText=palavras[i];
            let [est,tam,rot,inc]=selecionaEstilo()
            item.classList.add(grupoEstilo[est])
            item.classList.add(grupoTamanho[tam])
            item.classList.add(grupoRotacao[rot])
            item.classList.add(grupoInclinacao[inc])
            item.classList.add('palavra')
            cartaGerada.appendChild(item)           
        }
    }
}

function alteraEstilo (event){
    event.target.removeAttribute('class')
    let [est,tam,rot,inc]=selecionaEstilo()
    event.target.classList.add(grupoEstilo[est])
    event.target.classList.add(grupoTamanho[tam])
    event.target.classList.add(grupoRotacao[rot])
    event.target.classList.add(grupoInclinacao[inc])

}