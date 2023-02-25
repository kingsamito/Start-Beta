import React from "react"
import Navbar from "../parts/Navbar"
import DropDown from "../parts/DropDown"
import Hero from "../parts/Hero"
import Footer from "../parts/Footer"

export default function Frame4(props) {
    return (
        <div className="frame4">
            <Navbar {...props}/>
            <DropDown {...props}/>
            <Hero />
            <Footer />
        </div>

    )
}