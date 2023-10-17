const gameboard = document.querySelector('#gameboard')
const info = document.querySelector('#info')
const startcells = [
    "","","","","","","","",""
]

function createboard(){
    startcells.forEach((cell,index)=>{
        const cellelement = document.createElement('div')
        cellelement.classList.add('square')
        gameboard.append(cellelement)
    })
}

createboard()
