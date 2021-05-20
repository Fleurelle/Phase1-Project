// For reset button to reload page
function reloadP(){
    location.reload()
}
//1. URL
// const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=27e8b185-779c-40f8-981e-8b70ee4c42b6'

const BASE_URL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=27e8b185-779c-40f8-981e-8b70ee4c42b6'

//2. URL Request  
fetch(BASE_URL)
    .then(res => res.json())
    .then(console.log)




//3. Specify Header

//4. Specify Body