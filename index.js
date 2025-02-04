const smokeADay = document.querySelector("#smokeAday")
const ciggaretteCost = document.querySelector("#ciggarettecost")
const packContain = document.querySelector("#packcost")
const yearOfsmoking = document.querySelector("#yearOfsmoking")
const detailsContainer = document.querySelector(".detailsContainer")

// buttons
const beginBtn = document.querySelector(".Begin")
const continueBtn = document.querySelector("#continue")
let continueFlag =[]

beginBtn.addEventListener("click", () => {
    detailsContainer.style.display = "flex" 
})

continueBtn.addEventListener("click", () => {
    let smokeADayVal = smokeADay.value == "" ? checkValidInput(smokeADay):Number(smokeADay.value);
    let ciggaretteCostVal =  ciggaretteCost.value == "" ? checkValidInput(ciggaretteCost):Number(ciggaretteCost.value)
    let packContainVal = packContain.value == "" ? checkValidInput(packContain):Number(packContain.value)
    let yearOfsmokingVal = yearOfsmoking.value == "" ? checkValidInput(yearOfsmoking):Number(yearOfsmoking.value)
    console.log(continueFlag);
    if (continueFlag.length == 0) {
        localStorage.setItem("smokeaday", smokeADayVal)
        localStorage.setItem("ciggarettecost", ciggaretteCostVal)
        localStorage.setItem("packcost", packContainVal)
        localStorage.setItem("yearofsmoking", yearOfsmokingVal)
        console.log("Values saved successfuly");
        window.location.href = "game.html"
    }
    continueFlag = []
})

function checkValidInput(inputName) {
    continueFlag.push(false)
    inputName.style.outline = "2px solid red"
}
