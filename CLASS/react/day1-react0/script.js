import {a, sum} from "./main.js"
console.log(a)
let add = sum(12, 2)
console.log(add)
// console.log(window)
// console.log(React)

// let h1 = document.createElement("h1")
// h1.textContent = "Oye!!"
// document.body.append(h1)
// console.log(h1)

// let rh1 = React.createElement("h1", {class: "ol"}, "Hello i am from react!")
// let rh2 = React.createElement(
// 	"h2",
// 	{class: "ol"},
// 	React.createElement("span", {class: "spanClass"}, "SPAN element under h1"),
// )

// console.log(rh1)
// console.log(rh2)

// let realDOMELM = document.querySelector("#root")
// // ReactDOM middlewear accepts real dom element
// let rootofReact = ReactDOM.createRoot(realDOMELM)

// rootofReact.render(rh1)

let realDomElem = document.querySelector("#root")

let div = React.createElement(
	"div",
	{},
	React.createElement("h1", {}, "I am h1"),
)

ReactDOM.createRoot(realDomElem).render(div)
