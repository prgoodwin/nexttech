import React from 'react'
import { useState } from 'react'

const button = () => {
    const [open, setOpen] = useState(true)

    function helpClicked(){
        console.log("button clicked")
        setOpen(prevState =>
            !prevState
        )
    }

    return (
        <div className="button">
            <button onClick={() => setOpen(!open)}>WORKING BUTTN</button>
            {open && <h1 className="button--help" onClick={() => setOpen(false)}>If you have any questions please ask!</h1>}
        </div>
    )
}

export default button