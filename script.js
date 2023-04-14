const tabela = document.querySelector("#pontoTabela")
const tela = document.querySelector('canvas')
const pincel = tela.getContext('2d')
pincel.fillStyle = 'gray'
pincel.fillRect(0, 0, 900, 600)


var x = 450
var y = 550
var acertou = true
var pontos = -1

circulo(x, y, 20, 'green')

tela.onclick = (e)=>{

    var clickX = e.pageX - tela.offsetLeft
    var clickY = e.pageY - tela.offsetTop

    if(clickX >= x-30  &&  clickX <= x+30 && clickY >= y-30 && clickY <= y+30){
        console.log("acertou")
        acertou = true
    }else{
        acertou = false
    }

    if(acertou){

        circulo(x, y, 40, 'gray')

        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)

        criarAlvo(x, y)

        pontos = pontos + 1

    }

    tabela.innerHTML = "score: " + pontos
    
}

function criarAlvo(x, y){

    circulo(x, y, 30, 'red')
    circulo(x, y, 20, 'white')
    circulo(x, y, 10, 'red')

}

function circulo(x, y, raio, cor){

    pincel.fillStyle = cor
    pincel.beginPath()
    pincel.arc(x, y, raio, 0, 2*Math.PI)
    pincel.fill()

}