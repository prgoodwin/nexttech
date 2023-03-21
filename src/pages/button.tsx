import React from 'react'
import { useState } from 'react'

const button = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className="nav--help">
            {!open && <button className="button--img" onClick={() => setOpen(!open)}><img src="icons8-question-mark-24.png" className="button--icon"/></button>}
            {open && <p className="button--help" onClick={() => setOpen(false)}>If you have any questions please ask!</p>}
        </div>
    )
}

export default button