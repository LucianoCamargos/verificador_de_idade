function verificar(){

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let resultado = document.getElementById('resultado')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
          alert(`[ERRO] Favor verificar os dados e tente novamente! Formato válido: 1990`)
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){  // Comando checked pega o elemento radio(html) marcado 0, no caso aqui é o Masculino
            if(idade >= 0 && idade <= 10){
                genero = 'Um menino'
                img.setAttribute('src','img/menino.png') //menino
            }else if(idade < 21){
                genero = 'Um jovem'
                img.setAttribute('src','img/joveM.png') //jovem homen
            }else if(idade < 60){
                genero = 'Um homen'
                img.setAttribute('src','img/homen.png') //homen
            }else{
                genero = 'Um idoso'
                img.setAttribute('src','img/idoso.png') //idoso
            }
        }else if(fsex[1].checked){ // Comando checked pega o elemento radio(html) marcado 0, no caso aqui é o Feminino
            if(idade >= 0 && idade <= 10){
                genero = 'Uma menina'
                img.setAttribute('src','img/menina.png') //menina
            }else if(idade < 21){
                genero = 'Uma jovem'
                img.setAttribute('src','img/joveF.png') //jovem mulher
            }else if(idade < 60){
                genero = 'Uma mulher'
                img.setAttribute('src','img/mulher.png') //mulher
            }else{
                genero = 'Uma idosa'
                img.setAttribute('src','img/idosa.png') //idosa
            }
        }
        resultado.innerHTML = `${genero} com <strong>${idade}</strong> anos de idade!</br>`
        resultado.style.boxShadow = '3px 3px 30px #01202e'
        resultado.style.background = '#2bb9f1'
        resultado.appendChild(img)
    }
    
}


