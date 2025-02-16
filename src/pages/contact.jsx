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



// import { useState } from 'react'


// const Contact = () => {
//     // Create state variables for the fields in the form
//     // We are also setting their initial values to an empty string
//     //THESE STATE VARIABLES SETS THE STATE OF THE INPUT AREAS AS EMPTY.

//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [message, setMessage] = useState('')
//     const [errorMessage, setErrorMessage] = useState('')

//     const handleInputChange = (e) => {
//         //THIS DESTRUCTURES THE TARGET FROM THE EVENT
//         const { target } = e
//         //THIS CREATES A VARIABLE THAT CONTAINS THE TARGET.NAME AND THE TARGET.VALUE. 
//         const inputType = target.name
//         const inputValue = target.value

//         if (inputType === 'email') {
//             setEmail(inputValue)
//         } else if (inputValue === 'name') {
//             setName(inputValue)
//         } else {
//             setMessage(inputValue)
//         }
//         //THE ABOVE SAY THAT IF WE ARE IN THE INPUT FIELD THAT IS NAMED EMAIL FROM THE EVENT, THEM THE INPUTVALUE WILL BE TIED TO THAT INPUT FIELD.
//     }

//     const handleFormSubmit = (e) => {
//         e.preventDefault()

//         if (setName(name) && setEmail(email) && !setMessage(message)) {
//             setErrorMessage('Message data required')
//             return
//         }

//         if (!setName(name) && setEmail(email) && setMessage(message)) {
//             setErrorMessage('Name data required')
//             return
//         }

//         if (setName(name) && !setEmail(email) && setMessage(message)) {
//             setErrorMessage('Email address required')
//             return
//         }
//         setName('')
//         setEmail('')
//         setMessage('')
//     }
//     return (
//         <section className='contact-background'>
//             <h2>Contact</h2>
//             <form className="form" onSubmit={handleFormSubmit}>
//                 <input
//                     type="text"
//                     value={name}
//                     name='name'
//                     onChange={handleInputChange}
//                     placeholder='Name'
//                 />
//                 <input
//                     type="email"
//                     value={email}
//                     name='email'
//                     onChange={handleInputChange}
//                     placeholder='Email'
//                 />
//                 <input
//                     type="textarea"
//                     value={message}
//                     name='message'
//                     onChange={handleInputChange}
//                     placeholder='Enter text here'
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//             {errorMessage && (
//                 <div>
//                     <p className="error-text">{errorMessage}</p>
//                 </div>
//             )}
//         </section>

//     )

// }

// export default Contact