if (!localStorage.getItem("initialised")) {
    window.location.href = "index.html"
}
const root = document.querySelector(":root")

const smokeBtn = document.querySelector(".pushButton")
const burnedDiv = document.querySelector(".burned")
const askForPermition = document.querySelector(".askpermition")
const yesBtn = document.querySelector("#yes")
const noBtn = document.querySelector("#no")
const stressCount = document.querySelector(".stressCount")

let dynamicHeight = 0
let variableHeight = 10
let height
let haveConsent
let stressCountVar = Number(localStorage.getItem("stresscount"))
stressCount.innerHTML = stressCountVar
smokeBtn.addEventListener("click", () => {
    console.log(dynamicHeight);
    if (dynamicHeight == 0) {
        askForPermition.style.display = "flex"
    }
    if (haveConsent) {
        height = heightCalculator()
        burnedDiv.style.height = height + "%"
        stressCountVar +=1
        stressCount.innerHTML = stressCountVar 
    }
    
})

yesBtn.addEventListener("click", () => {
    askForPermition.style.display = "none"
    haveConsent = true
    dynamicHeight += variableHeight
    console.log("dynamicHeight is 10")
    root.style.setProperty('--bordervalue', '8px')
})

noBtn.addEventListener("click", () => {
    askForPermition.style.display = "none"
    haveConsent = false
    dynamicHeight = 0
})

function heightCalculator() {
    if (burnedDiv.style.height == "") {
        dynamicHeight = 0
    }else if (burnedDiv.style.height == "100%") {
        haveConsent = false
        dynamicHeight = 0
        root.style.setProperty('--bordervalue', '0')
        localStorage.setItem("stresscount", stressCountVar+1)
        return 0
    }
    return dynamicHeight += variableHeight
}