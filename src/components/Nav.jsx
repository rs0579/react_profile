import { Link, useLocation } from 'react-router-dom'
import "./nav.css"
import vicImage from "../assets/20231225_233950.jpg"
import { Typography, Tooltip } from '@material-tailwind/react'



const Nav = () => {
    const currentPage = useLocation().pathname

    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* <!--
                                Icon when menu is closed.

                                Menu open: "hidden", Menu closed: "block"
          --> */}
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <h1 id="header-title">Raheem S.</h1>
                                {/* <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> */}
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                                    {/* <ul className='header-nav'> */}
                                    {/* <li className='nav-item'> */}
                                    <a className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">
                                        <Link
                                            to="/About"
                                            className={currentPage === "/About" ? "nav-link active" : "nav-link"}
                                        >
                                            About
                                        </Link>
                                    </a>
                                    {/* <li className='nav-item'> */}
                                    <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                        <Link
                                            to="/portfolio"
                                            className={currentPage === "/portfolio" ? "nav-link active" : "nav-link"}
                                        >
                                            Portfolio

                                        </Link>
                                    </a>
                                    {/* <li className='nav-item'> */}
                                    <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                        <Link
                                            to="/Contact"
                                            className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
                                        >
                                            Contact
                                        </Link>
                                    </a>
                                    {/* <li className='nav-item'> */}
                                    <a className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                                        <Link
                                            to="/technologies"
                                            className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
                                        >
                                            Technologies
                                        </Link>
                                    </a>
                                    {/* </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Tooltip content='Download CV?' placement="left">
                                <Typography as="a" href="/assets/Senegal, Raheem CV (2025).pdf" download className="opacity-80 transition-opacity hover:opacity-100">
                                    <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">View notifications</span>
                                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16l4-4h-3V4h-2v8H8l4 4zm6 2H6v2h12v-2zM19 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H5V4h14v16z" />
                                        </svg>
                                    </button>
                                </Typography>
                            </Tooltip>
                            {/* <!-- Profile dropdown --> */}
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="size-8 rounded-full" src={vicImage} alt="Vic" />
                                    </button>
                                </div>

                                {/* <img
                                            className="nav-img"
                                            src={vicImage}
                                            alt="Vic"
                                        /> */}
                                {/* <DropdownMenu aria-label="Profile Actions" variant="flat">
                                <DropdownItem key='download'>
                                    <p className="font-semibold"><a href="/path-to-resume.pdf">Download CV</a></p>
                                </DropdownItem>
                                <DropdownItem key='English'>EN</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarContent> */}
                                {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="sm:hidden" id="mobile-menu">
                    <div classn="space-y-1 px-2 pt-2 pb-3">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">                                         <Link
                            to="/About"
                            className={currentPage === "/About" ? "nav-link active" : "nav-link"}
                        >
                            About
                        </Link></a>
                        <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">  <Link
                            to="/portfolio"
                            className={currentPage === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio

                        </Link></a>
                        <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">                                        <Link
                            to="/Contact"
                            className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
                        </Link></a>
                        <a className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">                                        <Link
                            to="/technologies"
                            className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
                        >
                            Technologies
                        </Link></a>
                    </div>
                </div>


            </nav>
        </>

    )
}
export default Nav;