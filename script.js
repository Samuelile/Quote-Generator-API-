const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector(".author .name"),
    quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter");

// Random Quote Function
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    // fetching random quotes/data from the API and parsing it into JavaScript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () => {
    // the SpeechSynthesisisUtterance is a web speech api that representds a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the utterance
});
copyBtn.addEventListener("click", () => {
    // copies the quote text when copyBtn is clicked
    //writeText() propety writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", () => {
    let tweetUrl = 'https://twitter.com/intent/tweet?url=';
    window.open(tweetUrl, "_blank"); //opens new twitter tab with passing quote in the url
});


quoteBtn.addEventListener("click", randomQuote);
