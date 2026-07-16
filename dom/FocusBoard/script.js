function $(id) {
	return document.getElementById(id)
}

function save(key, data) {
	localStorage.setItem(key, JSON.stringify(data))
}

function load(key, fallback) {
	try {
		var raw = localStorage.getItem(key)
		return raw ? JSON.parse(raw) : fallback
	} catch (e) {
		return fallback
	}
}

var dashboard = $("dashboard")
var featureView = $("feature-view")
var panels = {
	todo: $("panel-todo"),
	planner: $("panel-planner"),
	goals: $("panel-goals"),
	pomodoro: $("panel-pomodoro"),
	quotes: $("panel-quotes"),
}

var activeFeature = null

function openFeature(name) {
	if (!panels[name]) return
	// hide all panels first
	Object.keys(panels).forEach(function (key) {
		panels[key].classList.add("hidden")
	})
	panels[name].classList.remove("hidden")
	dashboard.classList.add("hidden")
	featureView.classList.remove("hidden")
	activeFeature = name

	if (name === "quotes" && !$("quote-author").textContent) {
		fetchQuote()
	}
}

function goBack() {
	featureView.classList.add("hidden")
	dashboard.classList.remove("hidden")
	Object.keys(panels).forEach(function (key) {
		panels[key].classList.add("hidden")
	})
	activeFeature = null
}

document.querySelectorAll(".feature-card").forEach(function (card) {
	card.addEventListener("click", function () {
		openFeature(card.getAttribute("data-feature"))
	})
})

$("back-btn").addEventListener("click", goBack)

function pad(n) {
	return n < 10 ? "0" + n : String(n)
}

function updateClock() {
	var now = new Date()
	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]
	var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]

	$("current-date").textContent =
		days[now.getDay()] +
		", " +
		months[now.getMonth()] +
		" " +
		now.getDate() +
		", " +
		now.getFullYear()

	var h = now.getHours()
	var ampm = h >= 12 ? "PM" : "AM"
	var h12 = h % 12
	if (h12 === 0) h12 = 12
	$("current-time").textContent =
		h12 + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds()) + " " + ampm
}

updateClock()
setInterval(updateClock, 1000)

// ---------- dynamic background (time of day) ----------
function updateBackground() {
	var hour = new Date().getHours()
	var body = document.body
	body.classList.remove("bg-morning", "bg-afternoon", "bg-evening", "bg-night")

	if (hour >= 5 && hour < 12) {
		body.classList.add("bg-morning")
	} else if (hour >= 12 && hour < 17) {
		body.classList.add("bg-afternoon")
	} else if (hour >= 17 && hour < 21) {
		body.classList.add("bg-evening")
	} else {
		body.classList.add("bg-night")
	}
}

updateBackground()
setInterval(updateBackground, 60000)

var themeBtn = $("theme-toggle")

function setThemeIcon() {
	var dark = document.documentElement.classList.contains("dark")
	themeBtn.querySelector(".theme-icon").textContent = dark ? "☾" : "☀"
}

themeBtn.addEventListener("click", function () {
	document.documentElement.classList.toggle("dark")
	var isDark = document.documentElement.classList.contains("dark")
	localStorage.setItem("theme", isDark ? "dark" : "light")
	setThemeIcon()
})

setThemeIcon()

var todos = load("todos", [])

function renderTodos() {
	var list = $("todo-list")
	var empty = $("todo-empty")
	list.innerHTML = ""

	if (todos.length === 0) {
		empty.classList.remove("hidden")
		return
	}
	empty.classList.add("hidden")

	todos.forEach(function (task, i) {
		var li = document.createElement("li")
		if (task.done) li.classList.add("done")
		if (task.important) li.classList.add("important")

		li.innerHTML =
			'<span class="item-text"></span>' +
			'<div class="item-actions">' +
			'<button type="button" class="star-btn" title="Important" data-i="' +
			i +
			'">★</button>' +
			'<button type="button" class="check-btn" title="Complete" data-i="' +
			i +
			'">✓</button>' +
			'<button type="button" class="del-btn" title="Delete" data-i="' +
			i +
			'">✕</button>' +
			"</div>"

		li.querySelector(".item-text").textContent = task.text

		if (task.important) li.querySelector(".star-btn").classList.add("active")
		if (task.done) li.querySelector(".check-btn").classList.add("checked")

		list.appendChild(li)
	})
}

$("todo-form").addEventListener("submit", function (e) {
	e.preventDefault()
	var input = $("todo-input")
	var text = input.value.trim()
	if (!text) return

	todos.push({text: text, done: false, important: false})
	save("todos", todos)
	input.value = ""
	renderTodos()
})

$("todo-list").addEventListener("click", function (e) {
	var btn = e.target.closest("button")
	if (!btn) return
	var i = Number(btn.getAttribute("data-i"))
	if (isNaN(i) || !todos[i]) return

	if (btn.classList.contains("star-btn")) {
		todos[i].important = !todos[i].important
	} else if (btn.classList.contains("check-btn")) {
		todos[i].done = !todos[i].done
	} else if (btn.classList.contains("del-btn")) {
		todos.splice(i, 1)
	}

	save("todos", todos)
	renderTodos()
})

renderTodos()

var PLANNER_START = 6 // 6 AM
var PLANNER_END = 22 // 10 PM
var planner = load("planner", {})

function hourLabel(h) {
	var ampm = h >= 12 ? "PM" : "AM"
	var h12 = h % 12
	if (h12 === 0) h12 = 12
	return h12 + " " + ampm
}

function buildPlanner() {
	var container = $("planner-slots")
	container.innerHTML = ""
	var currentHour = new Date().getHours()

	for (var h = PLANNER_START; h <= PLANNER_END; h++) {
		var key = String(h)
		var row = document.createElement("div")
		row.className = "slot"
		if (h === currentHour) row.classList.add("current")

		var time = document.createElement("span")
		time.className = "slot-time"
		time.textContent = hourLabel(h)

		var input = document.createElement("input")
		input.type = "text"
		input.placeholder = "—"
		input.value = planner[key] || ""
		input.dataset.hour = key

		input.addEventListener("blur", function () {
			var hr = this.dataset.hour
			var val = this.value.trim()
			if (val) {
				planner[hr] = val
			} else {
				delete planner[hr]
			}
			save("planner", planner)
		})

		row.appendChild(time)
		row.appendChild(input)
		container.appendChild(row)
	}
}

buildPlanner()

var goals = load("goals", [])

function renderGoals() {
	var list = $("goals-list")
	var empty = $("goals-empty")
	list.innerHTML = ""

	var doneCount = goals.filter(function (g) {
		return g.done
	}).length
	$("goals-progress").textContent =
		doneCount + " of " + goals.length + " completed"

	var pct =
		goals.length === 0 ? 0 : Math.round((doneCount / goals.length) * 100)
	$("goals-bar").style.width = pct + "%"

	if (goals.length === 0) {
		empty.classList.remove("hidden")
		return
	}
	empty.classList.add("hidden")

	goals.forEach(function (goal, i) {
		var li = document.createElement("li")
		if (goal.done) li.classList.add("done")

		li.innerHTML =
			'<span class="item-text"></span>' +
			'<div class="item-actions">' +
			'<button type="button" class="check-btn" title="Complete" data-i="' +
			i +
			'">✓</button>' +
			'<button type="button" class="del-btn" title="Delete" data-i="' +
			i +
			'">✕</button>' +
			"</div>"

		li.querySelector(".item-text").textContent = goal.text
		if (goal.done) li.querySelector(".check-btn").classList.add("checked")
		list.appendChild(li)
	})
}

$("goals-form").addEventListener("submit", function (e) {
	e.preventDefault()
	var input = $("goal-input")
	var text = input.value.trim()
	if (!text) return

	goals.push({text: text, done: false})
	save("goals", goals)
	input.value = ""
	renderGoals()
})

$("goals-list").addEventListener("click", function (e) {
	var btn = e.target.closest("button")
	if (!btn) return
	var i = Number(btn.getAttribute("data-i"))
	if (isNaN(i) || !goals[i]) return

	if (btn.classList.contains("check-btn")) {
		goals[i].done = !goals[i].done
	} else if (btn.classList.contains("del-btn")) {
		goals.splice(i, 1)
	}

	save("goals", goals)
	renderGoals()
})

renderGoals()

var WORK_SECS = 25 * 60
var BREAK_SECS = 5 * 60
var pomoRemaining = WORK_SECS
var pomoInterval = null
var pomoMode = "work"
var pomoRunning = false

function formatTime(secs) {
	var m = Math.floor(secs / 60)
	var s = secs % 60
	return pad(m) + ":" + pad(s)
}

function updatePomoDisplay() {
	$("pomo-display").textContent = formatTime(pomoRemaining)
	$("pomo-label").textContent =
		pomoMode === "work" ? "Work Session" : "Break Time"
}

function stopPomo() {
	if (pomoInterval) {
		clearInterval(pomoInterval)
		pomoInterval = null
	}
	pomoRunning = false
}

function startPomo() {
	if (pomoRunning) return
	pomoRunning = true
	$("pomo-msg").textContent = ""

	pomoInterval = setInterval(function () {
		pomoRemaining--
		updatePomoDisplay()

		if (pomoRemaining <= 0) {
			stopPomo()
			if (pomoMode === "work") {
				$("pomo-msg").textContent = "Work session done! Take a break."
				pomoMode = "break"
				pomoRemaining = BREAK_SECS
			} else {
				$("pomo-msg").textContent = "Break over. Ready for another session?"
				pomoMode = "work"
				pomoRemaining = WORK_SECS
			}
			updatePomoDisplay()

			try {
				var ctx = new (window.AudioContext || window.webkitAudioContext)()
				var osc = ctx.createOscillator()
				var gain = ctx.createGain()
				osc.connect(gain)
				gain.connect(ctx.destination)
				osc.frequency.value = 660
				gain.gain.value = 0.08
				osc.start()
				setTimeout(function () {
					osc.stop()
					ctx.close()
				}, 300)
			} catch (err) {
				// ignore audio errors
			}
		}
	}, 1000)
}

$("pomo-start").addEventListener("click", startPomo)

$("pomo-pause").addEventListener("click", function () {
	stopPomo()
})

$("pomo-reset").addEventListener("click", function () {
	stopPomo()
	pomoMode = "work"
	pomoRemaining = WORK_SECS
	$("pomo-msg").textContent = ""
	updatePomoDisplay()
})

updatePomoDisplay()

var fallbackQuotes = [
	{
		content: "The secret of getting ahead is getting started.",
		author: "Mark Twain",
	},
	{
		content: "It always seems impossible until it's done.",
		author: "Nelson Mandela",
	},
	{
		content: "Don't watch the clock; do what it does. Keep going.",
		author: "Sam Levenson",
	},
	{content: "Well begun is half done.", author: "Aristotle"},
]

function showQuote(q) {
	$("quote-text").textContent = '"' + q.content + '"'
	$("quote-author").textContent = q.author || "Unknown"
}

function fetchQuote() {
	$("quote-text").textContent = "Loading quote..."
	$("quote-author").textContent = ""
	$("new-quote-btn").disabled = true

	fetch("https://api.quotable.io/random")
		.then(function (res) {
			if (!res.ok) throw new Error("bad response")
			return res.json()
		})
		.then(function (data) {
			showQuote({content: data.content, author: data.author})
		})
		.catch(function () {
			var q = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]
			showQuote(q)
		})
		.finally(function () {
			$("new-quote-btn").disabled = false
		})
}

$("new-quote-btn").addEventListener("click", fetchQuote)

function setWeather(loc, temp, cond) {
	$("weather-loc").textContent = loc
	$("weather-temp").textContent = temp
	$("weather-cond").textContent = cond
}

function weatherCodeText(code) {
	// open-meteo weather codes (simplified)
	if (code === 0) return "Clear"
	if (code <= 3) return "Partly cloudy"
	if (code <= 48) return "Foggy"
	if (code <= 67) return "Rain"
	if (code <= 77) return "Snow"
	if (code <= 82) return "Showers"
	if (code <= 99) return "Thunderstorm"
	return "Unknown"
}

function fetchWeather(lat, lon, label) {
	var url =
		"https://api.open-meteo.com/v1/forecast?latitude=" +
		lat +
		"&longitude=" +
		lon +
		"&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph"

	fetch(url)
		.then(function (res) {
			if (!res.ok) throw new Error("weather fail")
			return res.json()
		})
		.then(function (data) {
			var c = data.current
			var temp = Math.round(c.temperature_2m) + "°F"
			var cond =
				weatherCodeText(c.weather_code) +
				" · " +
				Math.round(c.relative_humidity_2m) +
				"% hum · " +
				Math.round(c.wind_speed_10m) +
				" mph"
			setWeather(label || "Your area", temp, cond)
		})
		.catch(function () {
			setWeather("Weather unavailable", "--", "Try again later")
		})
}

function loadWeather() {
	setWeather("Getting location...", "", "")

	if (!navigator.geolocation) {
		fetchWeather(40.71, -74.01, "New York")
		return
	}

	navigator.geolocation.getCurrentPosition(
		function (pos) {
			fetchWeather(pos.coords.latitude, pos.coords.longitude, "Near you")
		},
		function () {
			fetchWeather(40.71, -74.01, "New York")
		},
		{timeout: 8000},
	)
}

loadWeather()
