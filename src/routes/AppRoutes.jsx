import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Empresa from "../pages/Empresa"
import Paciente from "../pages/Paciente"
import Profissional from "../pages/Profissional"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/paciente" element={<Paciente />} />
            <Route path="/profissional" element={<Profissional />} />
        </Routes>
    )
}

export default AppRoutes