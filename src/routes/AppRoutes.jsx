import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Paciente from "../pages/Paciente"
import Profissional from "../pages/Profissional"
import Laboratorios from "../pages/Laboratorios";
import Login from "../pages/Login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paciente" element={<Paciente />} />
            <Route path="/profissional" element={<Profissional />} />
            <Route path="/laboratorios" element={<Laboratorios />} />
            <Route path="/login" element={<Login />} />

            

        </Routes>
    )
}

export default AppRoutes