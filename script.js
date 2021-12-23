function criaCarta(){
    let cartaTexto=document.getElementById('carta-texto')
    let conteudo=cartaTexto.value
    if (conteudo==false){
        document.getElementById('carta-gerada').innerText='Por favor, digite o conteúdo da carta.'
    } else {
    // console.log(conteudo)
    let palavras=conteudo.split(' ')
    
    // console.log(palavras)
    let cartaGerada= document.getElementById('carta-gerada')
    for (let i=0 ;i<palavras.length;i+=1){
        let item=document.createElement('span')
        item.innerText=palavras[i];
        cartaGerada.appendChild(item)
        // console.log(palavras[i])
        
    }
}
}