let Acces_Key = "0hnAtzQj1xfjmeNtflrXB5Aq0ZNtJ-tUB_AlFx2TaBQ"

let searchInput = document.getElementById("searchInput")
let searchBtn = document.getElementById("searchBtn")

const getData = async (searchValue) => {
    let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${searchValue}&page=1&per-Page=15&client_id=${Acces_Key}`)
    let jsonData = await fetching.json()
    console.log(jsonData.results)
    jsonData.results.forEach(data => {
        console.log(data)
        
    });
}


searchBtn.addEventListener("click", function(){
    let searchValue = searchInput.value;
    getData(searchValue)
})