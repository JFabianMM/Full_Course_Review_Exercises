import { useState } from 'react';

export default function IdInput() {
  const [id, setId] = useState("");

  return (
    <form>
      <label>Enter your id: 
        <input
            id= "id"
            type="text" 
            value={id}
            onChange={(e) => setId(e.target.value)}
        />
      </label>
    </form>
  )
}