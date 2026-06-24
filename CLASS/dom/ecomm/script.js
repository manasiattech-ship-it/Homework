let main = document.querySelector("main")
let formDiv = document.querySelector(".form")
let close = document.querySelector("#close")
let form = document.querySelector("form")
let button = document.querySelector(".create")
// let nav = document.createElement("nav")
// let button = document.createElement("button")
// let logo = document.createElement("div")

// logo.innerHTML = "LOGO"
// button.innerHTML = "Create"

// nav.classList.add("nav")

// main.append(nav)
// console.log(nav)

// nav.append(logo)
// nav.append(button)

console.log(main)
let cards = document.querySelector(".cards")

// let cards = document.createElement("div")
// let card = document.createElement("div")
// cards.classList.add("cards")
// card.classList.add("card")

// let buttonEdit = document.createElement("button")
// let buttonDelete = document.createElement("button")
// buttonEdit.classList.add("buttonEdit")
// buttonDelete.classList.add("buttonDelete")

// buttonEdit.innerHTML = "Edit"
// buttonDelete.innerHTML = "Delete"

// let img = document.createElement("div")
// img.classList.add("prodimg")
// let btns = document.createElement("div")
// btns.classList.add("btns")
// btns.append(buttonEdit, buttonDelete)

// let info = document.createElement("div")
// info.classList.add("info")
// let nameItem = document.createElement("p")
// let price = document.createElement("h4")
// nameItem.textContent = "Name"
// price.textContent = "$10"
// info.append(nameItem, price)

// card.append(img)
// card.append(info)
// card.append(btns)

// main.append(cards)
// cards.append(card)
let updateIndex = null
button.addEventListener("click", () => {
	formDiv.style.display = "flex"
})

close.addEventListener("click", () => {
	formDiv.style.display = "none"
})
const productsArr = []

let ui = () => {
	cards.innerHTML = ""
	productsArr.forEach((product) => {
		cards.innerHTML += `
                <div class="card">
                    <div class="prodimg">
                        <img src="${product.productUrl}"></img>
                    </div>
                    <div class="info">
                        <p>${product.productName}</p>
                        <h4>$${product.productPrice}</h4>
                    </div>
                        <div class="btns">
                            <button class="buttonEdit" onClick="UpdateProduct('${product.productName}')">Edit</button>
                            <button class="buttonDelete" onClick="DeleteProduct('${product.productName}')">Delete</button>
                        </div>
                        </div> `
	})
}
console.log(cards)
form.addEventListener("submit", (event) => {
	event.preventDefault()
	let productName = event.target[0].value
	let productPrice = event.target[1].value
	let productUrl = event.target[2].value

	if (
		productName.trim() === "" ||
		productPrice.trim() === "" ||
		productUrl.trim() === ""
	)
		return

	let obj = {productName, productPrice, productUrl}

	if (updateIndex !== null) {
		productsArr[updateIndex] = obj
		updateIndex = null
	} else {
		productsArr.push(obj)
	}
	console.log(productsArr)
	ui()
	formDiv.style.display = "none"

	form.reset()
})

const UpdateProduct = (name) => {
	formDiv.style.display = "flex"
	let product = productsArr.find((item) => item.productName === name)
	updateIndex = productsArr.findIndex((elem) => elem.productName === name)

	form[0].value = product.productName
	form[1].value = product.productPrice
	form[2].value = product.productUrl
}

const DeleteProduct = (name) => {
	console.log(name)

	productsArr.splice(name, 1)
	ui()
}
