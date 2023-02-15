import { useState } from 'react'

export default function Form(){
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setSubmitting(true);

        alert('You have submitted the form.')
    }

    return (
        <div className="form--wrapper">
            <h1>Test?</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}