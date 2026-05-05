import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import DesignSystemPage from "./DesignSystemPage"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DesignSystemPage />
  </StrictMode>,
)
