import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./components/Home"

import "./styles/globals.css"
import "./styles/mobile.css"
import "primeicons/primeicons.css"
import "primereact/resources/themes/lara-light-blue/theme.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Home/>
    </React.StrictMode>
)
