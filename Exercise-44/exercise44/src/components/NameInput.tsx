import { useState } from 'react';

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name: 
        <input
            id="name"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}
