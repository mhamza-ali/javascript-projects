const gameboard = document.querySelector('#gameboard')
const info = document.querySelector('#info')
const startcells = [
    "","","","","","","","",""
]

let go = "circle"
info.textContent = "Circle goes first"

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
    godisplay.classList.add(go)
    e.target.append(godisplay)
    go = go === "circle" ? "cross" : "circle"
    info.textContent = "Its now " + go + "'s go."
    e.target.removeEventListener("click", addGo)
    checkScore()
}

function checkScore(){
    const allsquares = document.querySelector(".square")
    console.log(allsquares)
    const winningCombos = [[0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

winningCombos.forEach(array => {
    const circleWins = array.every(cell => 
        allsquares[cell].firstChild?.classList.contains('circle'))
        if (circleWins) {
            info.textContent = "Circle wins"
            allsquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return

        }
})


winningCombos.forEach(array => {
    const crossWins = array.every(cell => 
        allsquares[cell].firstChild?.classList.contains('cross'))
        if (crossWins) {
            info.textContent = "Cross wins"
            allsquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return

        }
})

}

