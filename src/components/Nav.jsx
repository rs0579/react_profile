import { Link, useLocation } from 'react-router-dom'
// import { createContext } from 'react'
import "./nav.css"

// export const NavContext = createContext()

const Nav = () => {
    const currentPage = useLocation().pathname

    return (
        <>
            <h1 id="header-title">Raheem Senegal</h1>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <Link
                        to="/About"
                        className={currentPage === "/About" ? "nav-link active" : "nav-link"}
                    >
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to="/portfolio"
                        className={currentPage === "/portfolio" ? "nav-link active" : "nav-link"}
                    >
                        Portfolio

                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to="/Contact"
                        className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to="/Resume"
                        className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </>

    )
}
//THIS PART I WILL BE EXPLAINING WHAT THE ABOVE DOES:
// I IMPORTED REACT-ROUTER-DOM TO BE ABLE TO USE THE "USElOCATION" AND "LINK" FUNCTIONS THAT COME WITH  IT BECAUSE THEY ALLOW ME TO NAVIGATE BETWEEN PATHS ON THE SAME WEBSITE. OJO! IN THIS HTML YOU CANNOT USE A LINKS BECAUSE THEY TAKE YOU TO ANOTHER WEBSITE, SINCE YOU WILL REMAIN ON THE SAME WEBSITE BUT ON ANOTHER PAGE, IT IS BEST TO USE THIS METHOD WITH USELOCATION().
export default Nav;