import { useState } from "react"
import Button from "./Button";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Frontend Coding Exercise</h1>
      <Button onClick={() => setCount(count + 1)}>Count is {count}</Button>
    </div>
  )
}
