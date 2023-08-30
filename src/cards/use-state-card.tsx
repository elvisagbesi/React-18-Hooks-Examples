import { useState } from "react"

export default function UseStateComponent() {

  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the buttons below to view the use cases for each
      </p>
    </>

  )
}