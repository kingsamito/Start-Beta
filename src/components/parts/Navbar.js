import React from "react"
import logo from "../../img/logo.JPG"
import MoreVertIcon from "@mui/icons-material/MoreVert"


export default function Navbar(props) {

    return (
        <nav className="nav">
            <div className="logo-name">
                <img src={logo} alt="logo" />
                <h2>StartBeta</h2>
            </div>
            <div className="nav-links">
                <p className="active">Home</p>
                <p>About</p>
                <p>Course</p>
                <p>Blog</p>
                <p>Contacts</p>
            </div>
            <div className="nav-button">
                <button>Log In</button>
                <button>Register</button>
                <button onClick={props.handleDisplay}><MoreVertIcon /></button>
            </div>
        </nav>
    )
}