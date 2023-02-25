import React from "react"
import Frame1 from "./components/whole/Frame1"
import Frame2 from "./components/whole/Frame2"
import Frame3 from "./components/whole/Frame3"
import Frame4 from "./components/whole/Frame4"



/*function changeLayout(id) {
  setFrame(id)
} */

export default function App() {
  const [framebutton, setFrameButton] = React.useState(false)

  function displayFrames() {
    setFrameButton(prevState => !prevState)
  }


  const [frame, setFrame] = React.useState("1")

  function changeLayout(event) {
    setFrame(event.target.id)
    setFrameButton(false)
  }

  let frameDisplay
  if (frame === "1") {
    frameDisplay =
      <Frame1
        framebutton={framebutton}
        handleDisplay={displayFrames}
        handleFrame={changeLayout} />
  } else if (frame === "2") {
    frameDisplay =
      <Frame2
        framebutton={framebutton}
        handleDisplay={displayFrames}
        handleFrame={changeLayout} />
  } else if (frame === "3") {
    frameDisplay =
      <Frame3
        framebutton={framebutton}
        handleDisplay={displayFrames}
        handleFrame={changeLayout} />
  } else if (frame === "4") {
    frameDisplay =
      <Frame4
        framebutton={framebutton}
        handleDisplay={displayFrames}
        handleFrame={changeLayout} />
  } else {
    frameDisplay = "No frame matched"
  }

  console.log(frame)
  return (
    frameDisplay
  )
}