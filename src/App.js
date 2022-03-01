import React, { useState } from 'react'

// function App () {
//   const [count, setCount] = useState(() => {
//     return 10
//   }) //sets initial state to 10

//   function decrementCount () {
//     setCount(prevCount => prevCount - 1)
//   }

//   function incrementCount () {
//     setCount(prevCount => prevCount + 1)
//   }
//   return (
//     <>
//       <button onClick={decrementCount}>-</button>
//       <span>{count}</span>
//       <button onClick={incrementCount}>+</button>
//     </>
//   )
// }

//functional component with Object
//

//OR just set separate states (more common)
//functional component with Object
function App () {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')
  function decrementCount () {
    setCount(prevCount => {
      return prevCount - 1
    })
  }
  function incrementCount () {
    setCount(prevCount => {
      return prevCount + 1
    })
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>
        {count}
        {theme}
      </span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App
