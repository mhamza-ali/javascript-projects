const gameboard = document.querySelector('#gameboard')
const info = document.querySelector('#info')
const startcells = [
    "","","","","","","","",""
]

function createboard(){
    startcells.forEach((cell,index)=>{
        const cellelement = document.createElement('div')
        cellelement.classList.add('square')
        cellelement.id = index
        cellelement.addEventListener('click', addGo)
        gameboard.append(cellelement)
    })
}

createboard()

function addGo(e){
    const godisplay = document.createElement('div')
    godisplay.classList.add('cross')
    e.target.append(godisplay)

}


