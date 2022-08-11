import React from 'react'

export default function Form({ form }) {
  return (
    <div>
        <form className="new-card-form">
            <input type="submit" text="submit" />
            <input type="text" name="test" value={form} />
            <input type="text" name="test" value={form} />

        </form>
    </div>
    
  )
}
