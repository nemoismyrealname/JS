import { differences } from '../data'
import Button from "./Button/Button"
import { useState } from 'react'

export default function MaximumSection()
{
    const [contentType, setContentType] = useState(null)
    let info = 'Press the button'

    function handleClick(type) 
    {
      setContentType(type)
    }

    return (
        <section>
            <h3>Когда техника даёт максимум</h3>
            <Button isActive = { contentType === 'routine' } onClick = {() => handleClick('routine')}> Case 1 </Button>
            <Button isActive = { contentType === 'zone' } onClick = {() => handleClick('zone')}> Case 2 </Button>
            <Button isActive = { contentType === 'structure' } onClick = {() => handleClick('structure')}> Case 3 </Button>

            {/* { !contentType ? <p>Press the button</p> : null } 
            { contentType ? <p>{differences[contentType]}</p> : null } */}

            { !contentType && <p>Press the button</p> }
            { contentType && <p>{differences[contentType]}</p> }

          </section>
    )
}