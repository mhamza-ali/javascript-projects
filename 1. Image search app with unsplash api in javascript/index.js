let Acces_Key = "0hnAtzQj1xfjmeNtflrXB5Aq0ZNtJ-tUB_AlFx2TaBQ"

let searchInput = document.getElementById("searchInput")
let searchBtn = document.getElementById("searchBtn")
let showData = document.querySelector(".showData")
let moreBtn = document.getElementById("moreBtn")

let page = 1;

const getData = async (searchValue,pageNo) => {
    let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&page=${pageNo}&per_Page=15&client_id=${Acces_Key}`)
    let jsonData = await fetching.json()
    console.log(jsonData.results)

    if(pageNo === 1){
        showData.innerHTML = ""
    }
    if(searchInput.value == ""){
        showData.innerHTML = `
        <h1>Please Search</h1>`
    }
    else{
        document.querySelector(".loadMore").style.display = "block"
    }

    //showData.innerHTML = ""

    jsonData.results.forEach(data => {
        console.log(data.urls.small)

        let div = document.createElement("div")
        div.classList.add("card")
        showData.appendChild(div)
        div.innerHTML = `
        <img src=${data.urls.small} alt="">
        <a href="">${data.alt_description}</a>`
    });
}


searchBtn.addEventListener("click", function(){
    let searchValue = searchInput.value;
    getData(searchValue, 1)
})

moreBtn.addEventListener("click", ()=>{
    let searchValue = searchInput.value;
    getData(searchValue, page++)
})