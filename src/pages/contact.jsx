import { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name
        const inputValue = target.value

        if (inputType === 'email') {
            setEmail(inputValue)
        } else if (inputType === 'name') {
            setName(inputValue)
        } else {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMessage('Name data required')
            return
        }

        if (!email) {
            setErrorMessage('Email address required')
            return
        }

        if (!message) {
            setErrorMessage('Message data required')
            return
        }

        // Reset the form fields
        setName('')
        setEmail('')
        setMessage('')
        setErrorMessage('') // Clear error message on successful submission
    };

    return (
        <section className='contact-background'>
            <h2>Contact</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                    placeholder='Name'
                />
                <input
                    type="email"
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    placeholder='Email'
                />
                <textarea
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    placeholder='Enter text here'
                />
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </section>
    );
}

export default Contact