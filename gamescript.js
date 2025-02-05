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
const menuBtn = document.querySelector(".menubtn")
const menuDiv = document.querySelector(".menu")
const closeMenu = document.querySelector(".closemenu")
const savingsHeadings = document.querySelectorAll(".valueheading")

let dynamicHeight = 0
let variableHeight = 0.10
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

menuBtn.addEventListener("click", () => {
    menuBtn.style.animation = "rotate ease .5s"
    menuDiv.style.display = "flex"
    savingsHeadings[0].innerHTML = localStorage.getItem("daysavings")
    savingsHeadings[1].innerHTML = localStorage.getItem("weeksavings")
    savingsHeadings[2].innerHTML = localStorage.getItem("monthsavings")
    savingsHeadings[3].innerHTML = localStorage.getItem("quartersavings")
    savingsHeadings[4].innerHTML = localStorage.getItem("halfyearsavings")
    savingsHeadings[5].innerHTML = localStorage.getItem("yearsavings")
})

closeMenu.addEventListener("click", () => {
    menuDiv.style.display = "none"
    menuBtn.style.animation = "none"
} )

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