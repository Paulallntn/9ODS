import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Contact from "./components/Contact/Contact";
import Importance from "./components/Importance/Importance";
import Register from "./components/Forms/RegisterForm/Register";
import Login from "./components/Forms/LoginForm/Login";
import Blog from "./components/Blog/Blog";
import TipDetail from "./components/Blog/TipDetail";
import AboutUs from "./components/AboutUs/AboutUs";
import { AuthProvider } from "./components/AuthContext/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<LandingPage />} />
          <Route path="/importancia" element={<Importance />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<TipDetail />} />
          <Route path="/nosotros" element={<AboutUs />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
