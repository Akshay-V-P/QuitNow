const root = document.querySelector(":root")

root.style.setProperty('--bordervalue', '8px')
const smokeBtn = document.querySelector(".pushButton")
const burnedDiv = document.querySelector(".burned")

let dynamicHeight = 0
smokeBtn.addEventListener("click", () => {
    let height
    height = heightCalculator()
    burnedDiv.style.height = height + "%"
})

function heightCalculator() {
    if (burnedDiv.style.height == "") {
        dynamicHeight = 0
    } else if (burnedDiv.style.height == "100%") {
        dynamicHeight = 0
    }
    return dynamicHeight += 1
}