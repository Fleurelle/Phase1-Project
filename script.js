// PROJECT REQS
//1. Your app must be a HTML/CSS/JS frontend that accesses data from a public API. 
//All interactions between the client and the API should be handled asynchronously 
//and use JSON as the communication format. MET

//2. Your entire app must run on a single page. There should be NO redirects. In other 
//words, your project will contain a single HTML file. MET

//3. Some interactivity is required. This interactivity needs to incorporate at least 
//3 separate event listeners. This could be as simple as adding a "like" 
//button or adding comments. These interactions do not need to persist after reloading the page.
    //a. submit button 
    //b. reset button 
    //c. Fave word
    //d. See if you can include some exercises on the page
    //e. interactivity for like button or comments

//To do
    //1. Link input form to aValue input thing - DONE
    //2. add event listener to to submit button -DONE
    //3. add event listener (DOMCONTENTLOADED) to document - DONE
    //4. add event listener to reset button - DONE
    //5. include a like button 
    //6. list values on page - DONE
    //7. ensure that word is listed in word container - DONE
    //EXTRA CREDIT: How to add a new word without clearing/RESETTING the form?
    //EXTRA CREDIT: add a section for testing yourself. How would you use this in a sentence? 
    //EXTRA CREDIT: How to save progress? Both word and definition.
//================================================================================================

// For reset button to reload page
const restBtn = document.querySelector("#reset-btn")
restBtn.addEventListener("click", reloadP)
function reloadP() {
    location.reload()
}

//================================================================================================
const createForm = document.querySelector("#user-word")

//Add event listener to form 
createForm.addEventListener("submit", function(e){
    //1. prevent page from reloading once submit button is clicked
    e.preventDefault()
    console.log(e.target)

    //2. ensure that whatever is typed into input is listed onto the page 
    const inputVal = document.querySelector("#text-box").value
    const wordContainer = document.querySelector("#word")
    const wordInput = document.createElement('li')
    wordInput.innerText = inputVal
    wordContainer.appendChild(wordInput)

    //3. Make reset button clear the form
    createForm.reset()
  
    //---------------------------------------------------------------------------------

    const URL = `https://wordsapiv1.p.rapidapi.com/words/${inputVal}`
    fetch(URL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "97014e50b4mshccb6a2a36449e19p14ca18jsnd949dc7361bc",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
    })
        .then(res => res.json())
        .then(wordObject => wordObject.results.forEach(displayDef))
        //  .then(console.log)
        .catch(err => {
            console.error(err);
        });

    function displayDef(forWord) {
        const wordDefContainer = document.querySelector("#meaning")
        const wordMeaning = document.createElement('li')
        wordMeaning.innerText = forWord.definition
        wordDefContainer.appendChild(wordMeaning)

        if (forWord.partOfSpeech) {
            const partSpeechContain = document.querySelector("#speech-part")
            const wordSpeechPart = document.createElement('li')
            wordSpeechPart.innerText = forWord.partOfSpeech
            partSpeechContain.appendChild(wordSpeechPart)
        }

        if (forWord.synonyms !== undefined) {
            const wordSynContain = document.querySelector("#word-syns")
            const wordSynPart = document.createElement('li')
            wordSynPart.innerText = forWord.synonyms
            wordSynContain.appendChild(wordSynPart)
        }

        if (forWord.similarTo !== undefined){
        const simWordsContain = document.querySelector("#like-words")
        const simWordPart = document.createElement('li')
        simWordPart.innerText = forWord.similarTo
        simWordsContain.appendChild(simWordPart)
        }
    }
})
    
    //--------------------------------------------------------------------------------- 

    const submitButton = document.querySelector("#submit-btn")

    submitButton.addEventListener("click", function(e){
        const inputVal = document.querySelector("#text-box").value

        fetch(`https://wordsapiv1.p.rapidapi.com/words/${inputVal}/pronunciation`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "97014e50b4mshccb6a2a36449e19p14ca18jsnd949dc7361bc",
                "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
            }
        })
            .then(res => res.json())
            .then(wordObj => displayPronun(wordObj.pronunciation))
            // .then(console.log)
            .catch(err => {
                console.error(err);
            });

        function displayPronun(forWord) {
            const wordPronunContain = document.querySelector("#word-pronun")
            const wordPronunPart = document.createElement('li')
            wordPronunPart.innerText = forWord.all
            wordPronunContain.appendChild(wordPronunPart)
        }
        
    })
    



//================================================================================

// //TESTING DEFINITION API
    //1. FETCH
        // //DEFINITION
        // const defURL = `https://wordsapiv1.p.rapidapi.com/words/${inputVal}/definitions`
        // fetch(defURL, {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-key": "97014e50b4mshccb6a2a36449e19p14ca18jsnd949dc7361bc",
        //         "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        //     }
        // })
        //     .then(res => res.json())
        //     .then(wordObject => wordObject.definitions.forEach(displayDef))
        //     // .then(console.log)
        //     .catch(err => {
        //         console.error(err);
        //     });
            
    
        // //2. Render data
        // function displayDef(forWord) {
    
        //     const wordDefContainer = document.querySelector("#meaning")
        //     const wordMeaning = document.createElement('li')
        //     wordMeaning.innerText = forWord.definition
        //     wordDefContainer.appendChild(wordMeaning)
    
        //     const partSpeechContain = document.querySelector("#speech-part")
        //     const wordSpeechPart = document.createElement('li')
        //     wordSpeechPart.innerText = forWord.partOfSpeech
        //     partSpeechContain.appendChild(wordSpeechPart)
    
        // }