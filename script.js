let grupoEstilo = {
    1: 'newspaper',
    2: 'magazine1',
    3: 'magazine2',
};
let grupoTamanho = {
    1: 'medium',
    2: 'big',
    3: 'reallybig',
};
let grupoRotacao = {
    1: 'rotateleft',
    2: 'rotateright',
};
let grupoInclinacao = {
    1: 'skewleft',
    2: 'skewright',
};

function selecionaEstilo(){
    let est = Math.floor(Math.random()*1000)%3+1
    let tam = Math.floor(Math.random()*1000)%3+1
    let rot = Math.floor(Math.random()*1000)%2+1
    let inc = Math.floor(Math.random()*1000)%2+1
    return [est,tam,rot,inc]
}

function criaCarta(){
    let itens=document.querySelectorAll('.palavra')
    console.log(itens)
    if (itens.length>0){
        for(let i=itens.length-1;i>=0;i-=1){
            itens[i].parentNode.removeChild(itens[i])
        }
    }
    let cartaTexto=document.getElementById('carta-texto')
    let conteudo=cartaTexto.value
    if (conteudo==false){
        document.getElementById('carta-gerada').innerText='Por favor, digite o conteúdo da carta.'
    } else {
        let palavras=conteudo.split(' ')
        let cartaGerada= document.getElementById('carta-gerada')
        for (let i=0 ;i<palavras.length;i+=1){
            let item=document.createElement('span')
            item.innerText=palavras[i];
            item.style.display='inline-block'
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