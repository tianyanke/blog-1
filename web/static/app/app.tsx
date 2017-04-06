import * as React from "react"
import { render } from "react-dom"
import App from "./views/view"
import { socket } from "./socket/socket"

socket.connect()

render(<App />, document.getElementById("root"))
