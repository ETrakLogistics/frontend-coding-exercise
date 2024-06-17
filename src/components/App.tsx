import { useState } from "react"
import Button from "./Button";

export default function App() {
  const [parcelCount, setParcelCount] = useState(0);

  return (
    <div>
      <h1>Star Wars Delivery Service</h1>
      <Button onClick={() => setParcelCount(parcelCount + 1)}>Add parcel to Delivery Spaceship</Button>
      <p>Delivery Spaceship has {parcelCount} parcels</p>
    </div>
  )
}
