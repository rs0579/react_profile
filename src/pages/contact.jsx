import { Button } from '@material-tailwind/react'

const Contact = () => {
    return (
        <main className="contact-background">
            <h2 id="contact-h2">Why Not Team Up for an Awesome Project?</h2>
            <h1 id="contact-h1">Feel free to contact me!</h1>
            <a href="mailto:thoth1718@gmail.com">
                <Button id="contact-button" fullWidth> Email Me </Button></a>
            <p id="contact-text">Whether it is in the United States or internationally, I am excited to bring my enthusiasm, diligence, thirst for knowledge and development as a developer to your projects!</p>
        </main>
    )
}
// import { useState } from 'react'
// import { Button } from '@material-tailwind/react'

// const Contact = () => {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [message, setMessage] = useState('')
//     const [errorMessage, setErrorMessage] = useState('')

//     const handleInputChange = (e) => {
//         const { target } = e;
//         const inputType = target.name
//         const inputValue = target.value

//         if (inputType === 'email') {
//             setEmail(inputValue)
//         } else if (inputType === 'name') {
//             setName(inputValue) ``
//         } else {
//             setMessage(inputValue)
//         }
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         if (!name) {
//             setErrorMessage('Name data required')
//             return
//         }

//         if (!email) {
//             setErrorMessage('Email address required')
//             return
//         }

//         if (!message) {
//             setErrorMessage('Message data required')
//             return
//         }

//         // Construct mailto link
//         const mailtoLink = `raheemsenegal@outlook.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nReply to: " + email)}`;
//         // Open default email client
//         window.location.href = mailtoLink;

//         // Reset the form fields
//         setName('')
//         setEmail('')
//         setMessage('')
//         setErrorMessage('') // Clear error message on successful submission
//     };

//     return (
//         <section className='contact-background'>
//             <h2 className='email-me-h2'>Email Me 😊</h2>
//             <form className="form" onSubmit={handleFormSubmit}>
//                 <input
//                     className='contact-input' id='contact-name'
//                     type="text"
//                     value={name}
//                     name='name'
//                     onChange={handleInputChange}
//                     placeholder='Name'
//                 />
//                 <input
//                     className='contact-input'
//                     id='email'
//                     type="email"
//                     value={email}
//                     name='email'
//                     onChange={handleInputChange}
//                     placeholder='Email'
//                 />
//                 <textarea
//                     id='textarea'
//                     value={message}
//                     name='message'
//                     onChange={handleInputChange}
//                     placeholder='Enter text here'
//                 />
//                 {/* <button type="submit">Submit</button> */}
//                 <Button variant="outlined" type="submit" className="rounded-full">Submit</Button>
//             </form>
//             {errorMessage && (
//                 <div>
//                     <p className="error-text">{errorMessage}</p>
//                 </div>
//             )}
//         </section>
//     );
// }

// export default Contact