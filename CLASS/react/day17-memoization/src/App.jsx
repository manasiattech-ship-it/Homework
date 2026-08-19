import React, { useCallback, useMemo, useState } from 'react'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  console.log("app rendering")
    
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState({name: "Raghav", id:345})
		console.log(count)
    let greet =
			useCallback(() => {
				console.log("good evening!!!")
			},
			[users])

      let cal = useMemo(() =>{ 
				console.log("calculation running")

        let sum = 0; 
        for(let i=0; i <100000000; i++){
          sum += i
        }
        return sum
      },[])

  return (
		<div>
			memoiztatin Count is {count}
			<h2>Name is {users.name}</h2>
			<button
				className="bg-blue-400 p-3 text-white"
				 onClick={() => setUsers({...users, name: "Babna"})}
			>

				change name
			</button>
      <h2></h2>
			<button
				className="bg-red-400 p-3 text-white"
				onClick={() => setCount(count + 1)}
			>
				increment
			</button>
      <h3>My calculation is {cal}</h3>
			<Home users={users}/>
			<About greet={greet} />
		</div>
	)
}

export default App
