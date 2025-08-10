import Button from './Button/Button'
import { useState, useRef } from 'react'

function StateVsRef()
{   
    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKeyDown(event)
    {
        if(event.key === 'Enter' ) 
            {
                setShow(true)
            }
    }

    return (
        <div>
            <h3>Input Value: {show && input.current?.value} </h3>
            <input 
                ref={input}
                className='control' 
                onKeyDown={handleKeyDown}
                type="text" 
            />
        </div>
    )
}

export default function()
{
    const [form, setForm] = useState({ 
        name: '', 
        hasError: false, 
        reason: 'help' 
    })
    // const [name, setName] = useState('')
    // const [hasError, setHasError] = useState(true)
    // const [reason, setReason] = useState('help')

    function handleName(event)
    {
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0 )
        setForm(prev => ({
            ...prev, 
            name: event.target.value, 
            hasError: event.target.value.trim().length === 0,
        }))
    }



    return (
        <section>
            <h3>Feedback</h3>

            <form style = {{ marginBottom: '1rem' }}>
                <label htmlFor="name">Your Name</label>
                <input className = 'control' 
                type="text" 
                id = 'name' 
                value = {form.name} 
                style = {{border: form.hasError ? '1px solid red' : null }} 
                onChange = {handleName}/>

                <label htmlFor="reason">Choose best</label>
                <select id="reason" className="control" value = {form.reason} onChange = {event => setForm(prev => ({...prev, reason: event.target.value}))}>
                    <option value="error">Error</option>
                    <option value="help">Need Help</option>
                    <option value="suggestions">Suggestions</option>
                </select>

                {/* <pre>
                    Name: {form.name}
                    <br />
                    Reason: {form.reason}
                </pre> */}

                <Button disabled = {form.hasError} isActive={!form.hasError}>Send</Button>
            </form>

            <StateVsRef />

        </section>
    )
}