import { useState } from 'react';

export default function AgeInput() {
  const [age, setAge] = useState("");

  return (
    <form>
      <label>Enter your Age: 
        <input
            id="age"
            type="text" 
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />
      </label>
    </form>
  )
}