const main = document.querySelector("main")
const box = document.createElement("div")
box.classList.add("box")
const btn = document.querySelector("button")
const timer = document.querySelector("#timer")

const randomColor = () => {
	const r = Math.floor(Math.random() * 256)
	const g = Math.floor(Math.random() * 256)
	const b = Math.floor(Math.random() * 256)

	return `rgb(${r}, ${g}, ${b})`
}

const randomBox = () => {
	box.style.backgroundColor = randomColor()
	main.append(box)
	console.log(box)
	console.log(main.clientWidth, main.clientHeight)
	let mainH = main.clientHeight - box.offsetHeight
	let mainW = main.clientWidth - box.offsetWidth

	const rX = Math.random() * mainW
	const rY = Math.random() * mainH

	box.style.top = `${rY}px`
	box.style.left = `${rX}px`
}
let time = 0
let interval

btn.addEventListener("click", () => {
	randomBox()

	box.classList.add("box")
	clearInterval(interval)

	interval = setInterval(() => {
		time += 1
		timer.innerHTML = time
		randomBox()
	}, 1000)

	setTimeout(() => {
		clearInterval(interval)
	}, 10000)
})
