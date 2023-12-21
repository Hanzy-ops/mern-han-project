/*EXTENTION : 
1. AUTO RENAME TAG
2. ES7+REACT/REDUX/REACT-NATIVE SNIPPETS
3. CONSOLE NINJA
4. GITHUB COPILOT AND GITHUB COPILOT CHAT ( OPSIONAL )
5. PRETTIER
6. TAILWINDCSS INTELISENSE
*/
import { BrowserRouter, Routes, Route } from "react-router-dom"; // mengimpor react React-router-dom.     cara instal: npm i react-router-dom
// LINK NAVIGASI
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    {/* Menghubungkan Component Headers */}
      <Header />
      {/* Navigasi Menu */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
