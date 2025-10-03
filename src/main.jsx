import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Home from "./components/Home"

import "./styles/globals.css"
import "./styles/mobile.css"
import "primeicons/primeicons.css"
import "primereact/resources/themes/lara-light-blue/theme.css"
import "./i18n.js"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Home/>
    </StrictMode>
)
