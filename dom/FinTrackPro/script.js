const navlink1 = document.querySelector("#navlink1")
const navlink2 = document.querySelector("#navlink2")

const createBtn = document.querySelector(".createbtn")
const settings = document.querySelector(".settings")

const transactionType = document.querySelector("#type")
const categoryContainer = document.querySelector("#category")

const totalIncome = document.querySelector("#income")
let totalIncomeAmount = 0
const totalExpense = document.querySelector("#expense")
let totalExpenseAmount = 0
const totalBalance = document.querySelector("#balance")
let totalBalanceAmount = 0
const totalTransactions = document.querySelector("#transactions")

const inputTransaction = document.querySelector(".modal")
const saveTransaction = document.querySelector(".savebtn")

const form = document.querySelector(".transactionInput")

let myChart
const ctx = document.getElementById("myChart").getContext("2d")

const transactionTableBody = document.querySelector(".transactiontablebody")

const transcationsArr1 = JSON.parse(localStorage.getItem("transactions")) || []
// 1. Raw Data Input
let transactionsArr = []
// [
// 	{
// 		date: "2026-05-01",
// 		description: "Freelance",
// 		category: "Pay",
// 		amount: 500,
// 		isDeleted: false,
// 	},
// 	{
// 		date: "2026-06-01",
// 		description: "Dinner",
// 		category: "Khana",
// 		amount: 55,
// 		isDeleted: false,
// 	},
// 	{
// 		date: "2026-07-01",
// 		description: "veggies",
// 		category: "Grocery",
// 		amount: 99,
// 		isDeleted: false,
// 	},
// 	{
// 		date: "2026-03-11",
// 		description: "Freelance",
// 		category: "Pay",
// 		amount: 500,
// 		isDeleted: false,
// 	},

// 	{
// 		date: "2026-01-11",
// 		description: "Freelance",
// 		category: "Pay",
// 		amount: 500,
// 		isDeleted: false,
// 	},
// 	{
// 		date: "2026-01-11",
// 		description: "Freelance",
// 		category: "Salary",
// 		amount: 5500,
// 		isDeleted: false,
// 	},
// ]

const categories = [
	"Food & Dining",
	"Shopping",
	"Recharge & Bills",
	"Petrol & Auto",
	"Utilities",
	"Salary",
	"Entertainment",
	"Other",
]

transactionType.addEventListener("change", () => {
	if (transactionType.value === "Income") {
		categoryContainer.style.display = "none"
		category.value = "Salary"
	} else {
		categoryContainer.style.display = "block"
	}
})

createBtn.addEventListener("click", () => {
	inputTransaction.style.display = "flex"
})
settings.addEventListener("click", () => {})
form.addEventListener("submit", (event) => {
	event.preventDefault()
	const form = event.target
	console.log("hereeeeeeeeee")
	console.log(
		form[0].value,
		form[1].value,
		form[2].value,
		form[3].value,
		form[4].value,
	)
	const expense = {
		id: Date.now(),
		date: form[0].value,
		type: form[1].value,
		description: form[2].value,
		category: form[3].value,
		amount: form[4].value,
		isDeleted: false,
	}
	console.log(expense)

	transactionsArr.push(expense)
	localStorage.setItem("transactions", JSON.stringify(transactionsArr))

	inputTransaction.style.display = "none"
	form.reset()

	ui()
})

inputTransaction.addEventListener("click", (event) => {
	if (event.target === inputTransaction) {
		inputTransaction.style.display = "none"
	}
})
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		inputTransaction.style.display = "none"
	}
})

const deleteTransaction = (id) => {
	console.log("deleteeeeeeeeeeeee")
	const trans = transactionsArr.findIndex((value) => {
		return value.id === id
	})
	console.log(id)

	console.log("index" + trans)
	transactionsArr.splice(trans, 1)
	localStorage.setItem("transactions", JSON.stringify(transactionsArr))
	ui()
}
const getChart = () => {
	const grouped = {}

	transactionsArr.forEach((t) => {
		const amt = Number(t.amount)
		console.log("forrrrrrrrrrr")
		console.log(t)
		if (!grouped[t.date]) {
			grouped[t.date] = {income: 0, expense: 0}
		}

		if (t.type !== "Income") {
			grouped[t.date].expense += Math.abs(amt)
		} else {
			grouped[t.date].income += Math.abs(amt)
		}
	})
	console.log(grouped)
	const labels = Object.keys(grouped)
	const incomeData = labels.map((d) => grouped[d].income)
	const expenseData = labels.map((d) => grouped[d].expense)
	console.log(incomeData, expenseData)

	if (myChart) {
		myChart.destroy()
		myChart = null
	}

	myChart = new Chart(ctx, {
		type: "bar",
		data: {
			labels,
			datasets: [
				{
					label: "Income",
					data: incomeData,
					backgroundColor: "rgba(0, 200, 0, 0.7)",
					borderColor: "green",
				},
				{
					label: "Expense",
					data: expenseData,
					backgroundColor: "rgba(255, 0, 0, 0.7)",
					borderColor: "red",
				},
			],
		},
	})
}
const ui = () => {
	transactionTableBody.innerHTML = ""
	categoryContainer.style.display = "block"

	transactionsArr = JSON.parse(localStorage.getItem("transactions")) || []

	totalExpenseAmount = transactionsArr.reduce((acc, item) => {
		if (item.category !== "Salary") {
			acc += Number(item.amount)
		}
		return acc
	}, 0)
	totalIncomeAmount = transactionsArr.reduce((acc, item) => {
		if (item.category === "Salary") {
			acc += Number(item.amount)
		}
		return acc
	}, 0)
	totalExpense.innerHTML = totalExpenseAmount
	totalIncome.innerHTML = totalIncomeAmount
	totalBalanceAmount = totalIncomeAmount - totalExpenseAmount
	totalBalance.innerHTML = totalBalanceAmount
	totalTransactions.innerHTML = transactionsArr.length

	transactionsArr.forEach((elem) => {
		console.log(elem)
		transactionTableBody.innerHTML += `                            
                            <tr> 
                                <td>${elem.date}</td>
                                <td>${elem.type}</td>
                                <td>${elem.description}</td> 
                                <td>${elem.category}</td>
                                <td>${elem.amount}</td>
                                <td>${!elem.isDeleted ? `<button class="deleteTransaction" onClick="deleteTransaction(${elem.id})">Delete</button>` : ""}</td>

                            </tr>`
	})
	getChart()
}

ui()
