const mainContainer = document.querySelector(".main-container")
const thankYouContainer = document.querySelecter(".thank-you")
const submitButton = document.getElementById("submit")

submitButton.addEventListener("click",()=>{
    thankYouContainer.classList.remove("hidden")
    mainContainer.style.display="none"
})