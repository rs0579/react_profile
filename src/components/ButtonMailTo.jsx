import React from "react"
import {Link} from "react-router-dom"

const ButtonMailto = ({mailto, label}) => {
    return (
        <Link 
        to='raheemsenegal@outlook.com'
        onClick={(e) => {
            window.location.href = mailto;
        }

        }
        >
            {label}
        </Link>
    )
}
export default ButtonMailto