import React from "react"
import data from "./data"

export default function DropDown(props) {
    const framesElement = data.map(item => {
        return (
            <button
                key={item.id}
                id={item.id}
                onClick={props.handleFrame}>
                {item.name}
                <img id={item.id} src={item.pic} alt="" onClick={props.handleFrame} />
            </button>
        )
    })

    return (

        props.framebutton && <div className="nav-drop-down">
            <span>Choose Frame</span>
            {framesElement}
        </div>


    )

}