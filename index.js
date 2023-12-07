
let finalPrice = 0
let messageEl = document.querySelector(".messageEl")
let orderBtn = document.querySelector(".orderBtn")





let addItems = (button) => {
    let mainEl = button.closest(".card")
    let elName = mainEl.querySelector("h3").innerText
    let elPrice = mainEl.querySelector("h4").innerText
    let productInput = mainEl.querySelector(".input").value


    let quantity = parseInt(productInput)
    let price = parseInt(elPrice.substring(1))
    let fullPrice = quantity * price

   
    
    if(quantity > 0) {
        // finalPrice = 0
        finalPrice += fullPrice
        document.querySelector(".total").innerHTML = ""
        document.querySelector(".total").innerHTML = finalPrice + "$"
        createEl(elName, fullPrice)
        button.disabled = true
        button.innerText = "In Cart"
        productInput.disabled = true
        messageEl.classList.add("hide")
        orderBtn.classList.remove("hide")

    }
    else {
        finalPrice = finalPrice
        alert("Enter quantity!")
        
        
    }



}


let tableArea = document.querySelector(".tableArea")
let tableTemplate = document.querySelector("[tableTemplate]")

function createEl(elName, fullPrice) {
    let card = tableTemplate.content.cloneNode(true).children[0]
    let name = card.querySelector("[name]")
    let price = card.querySelector("[price]")
    name.innerText = elName
    price.innerText = fullPrice
    tableArea.append(card)
    removeEl(card)
}


function removeEl(card) {
    let button = card.querySelector(".btn-sml")
    let itemPrice = card.querySelector("[price]").innerText
    let price = parseInt(itemPrice)

    // console.log(card)
    button.onclick = function() {
        card.remove()
        finalPrice -= price
        document.querySelector(".total").innerHTML = finalPrice + "$"
        resetValue(button)
    }
}

function resetValue(button) {

    let currentEl = button.closest("tr")
  
    let currentName = currentEl.querySelector("[name]").innerText
    let allElem = document.querySelectorAll(".card")
    allElem.forEach((elem) => {
        let elemName = elem.querySelector("h3").innerText
        if(currentName === elemName) {
            elem.querySelector(".input-btn button").removeAttribute("disabled")
            elem.querySelector(".input-btn button").innerText = "Add To Cart"
             elem.querySelector(".input-btn input").value = null  
             let rows = document.querySelector(".tableRow")
            if(!rows) {
                messageEl.classList.remove("hide")
                orderBtn.classList.add("hide")
            }
        }
    })
}

orderBtn.addEventListener("click", (e) => {
    let rows = document.querySelectorAll(".tableRow")
   for(let row of rows) {
    row.remove()
   }
    document.querySelector(".total").innerText = 0 + "$"
    finalPrice = 0

    let mainEl = document.querySelectorAll(".card")
    mainEl.forEach((elem) => {
        let btn = elem.querySelector(".input-btn button")
        btn.removeAttribute("disabled")
        btn.innerText = "Add to Cart"

        elem.querySelector(".input-btn input").value = null
    })

    alert("Your order has been placed")
    
})

let tableEl = document.querySelector(".tableArea")




