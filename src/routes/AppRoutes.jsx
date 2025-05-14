import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Paciente from "../pages/Paciente"
import Profissional from "../pages/Profissional"
import Laboratorios from "../pages/Laboratorios";
import SearchLoading from "../pages/SearchLoading";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchLoading" element={<SearchLoading />} />
            <Route path="/profissional" element={<Profissional />} />
            <Route path="/laboratorios" element={<Laboratorios />} />
            <Route path="/Paciente" element={<Paciente />} />
        </Routes>
    )
}

export default AppRoutes