const main = document.querySelector("main")
const inp = document.querySelector("input")
const btn = document.querySelector("#add")
const taksList = document.querySelector(".task-list")
const category = document.querySelector("#category")
const tasks = document.querySelector("h1")
const list = document.querySelector("h2")
const themeBtn = document.querySelector(".toggle")
const editTask = document.querySelector(".edittask")
const editinputtask = document.querySelector(".edittaskinput")
const editCategory = document.querySelector(".editcat")
const editSubmit = document.querySelector(".editSubmit")

main.setAttribute("data-theme", "dark")
let theme = true
let dataId = 0
list.remove()
const tasksArr = []
let editId = null

const ui = () => {
	taksList.innerHTML = ""
	tasksArr.forEach((task, index) => {
		taksList.innerHTML += `<div class="li" >
                <h3>${task.task}</h3>
                <h5>${task.cat}</h5>
                <div class="btns"> 
					  ${
							!task.isCompleted
								? `<button class="complete" onclick="completeTask(${task.id})">Complete</button>
								<button class="edit" onClick="updateTask(${task.id})">Edit</button>
								<button class="delete" onClick="deleteTask(${index})">Delete</button>`
								: "✅Done!"
						} 
                </div>
            </div>`
	})
}

const updateTask = (id) => {
	editId = id
	console.log(id)
	editTask.style.display = "flex"
	let task = tasksArr.find((task) => task.id === id)
	editinputtask.value = task.task

	editCategory.value = task.cat
}

const deleteTask = (index) => {
	tasksArr.splice(index, 1)
	ui()
}

const completeTask = (id) => {
	let task = tasksArr.find((task) => task.id === id)
	if (task) {
		task.isCompleted = true
	}
	ui()
}

editSubmit.addEventListener("click", (event) => {
	let task = tasksArr.find((task) => task.id === editId)
	if (task) {
		task.task = editinputtask.value
	}

	ui()
	editTask.style.display = "none"
})
btn.addEventListener("click", () => {
	const now = Date.now()
	let id = now
	let task = inp.value
	let cat = category.value
	let isCompleted = false
	let obj = {id, task, cat, isCompleted}
	tasksArr.push(obj)
	ui()
	console.log(tasksArr)

	const value = inp.value
	console.log(inp.value) // changes with user input
	inp.setAttribute(
		"value",
		"Setting InputValue which will not change stays constant through out!",
	)

	const newHeader = document.createElement("h1")

	newHeader.textContent = "Tasks -"
	tasks.replaceWith(newHeader)

	console.log(inp.getAttribute("value"))

	const department = category.value
	dataId += 1
	if (!value.trim()) return

	const item = document.querySelector(".li")
	item.setAttribute("data-id", dataId)
	item.setAttribute("data-cat", department)
	item.setAttribute("data-status", "Not Done!")
	console.log(item)

	// const title = document.createElement("h3")
	// title.appendChild(document.createTextNode(value))

	// const cat = document.createElement("h5")
	// cat.appendChild(document.createTextNode(department))

	// const btns = document.createElement("div")
	// btns.className = "btns"

	// const editBtn = document.createElement("button")
	// editBtn.className = "edit"
	// editBtn.appendChild(document.createTextNode("Edit"))

	// const completeBtn = document.createElement("button")
	// completeBtn.className = "complete"
	// completeBtn.appendChild(document.createTextNode("Complete"))

	// const deleteBtn = document.createElement("button")
	// deleteBtn.className = "delete"
	// deleteBtn.appendChild(document.createTextNode("Delete"))

	// tasks.replaceWith("Tasks -")

	// btns.prepend(editBtn)
	// editBtn.before(completeBtn)
	// editBtn.after(deleteBtn)
	// item.append(title, cat, btns)

	// taksList.appendChild(item)

	inp.value = ""
	notDoneTasks()
})

const notDoneTasks = () => {
	const childItems = taksList.querySelectorAll(".li")
	console.log("Not done tasks")
	childItems.forEach((item, index) => {
		if (item.getAttribute("data-status") === "Not Done!") {
			console.log(item.getAttribute("data-cat"))
		}

		if (item.hasAttribute("data-id")) {
			item.removeAttribute("data-id")
		}
	})

	console.log(taksList)
}

themeBtn.addEventListener("click", () => {
	changeTheme()
})

const changeTheme = () => {
	let currentTheme = main.getAttribute("data-theme")
	const isDark = currentTheme === "dark"

	main.classList.toggle("mainlight", isDark)
	themeBtn.classList.toggle("btnlight", isDark)

	main.setAttribute("data-theme", isDark ? "light" : "dark")

	themeBtn.textContent = isDark ? "Light" : "Dark"
}
console.log(main.contains(taksList))
