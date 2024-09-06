import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./components/Home";
import { Destination } from "./components/Destination";
import { Crew } from "./components/Crew";
import { Technology } from "./components/Technology";

export default function App() {
  return (
    <Router>
      <div className="relative">
        <div className="fixed top-10 left-0 w-full h-16 flex items-center text-white z-50 gap-10">
          <img src="/shared/logo.svg" alt="logo" className="ml-[5%]" />
          <div className="flex items-center h-full relative">
            <div className="h-1 w-[500px] bg-white"></div>
            <nav className="bg-[#ffffff1a] w-[700px] h-full flex justify-around absolute left-[470px]">
              <NavLink to="/" className={({ isActive }) => `py-5 ${isActive ? 'border-b-2' : ''}`}>00 HOME</NavLink>
              <NavLink to="/Destination" className={({ isActive }) => `py-5 ${isActive ? 'border-b-2' : ''}`}>01 DESTINATION</NavLink>
              <NavLink to="/Crew" className={({ isActive }) => `py-5 ${isActive ? 'border-b-2' : ''}`}>02 CREW</NavLink>
              <NavLink to="/Technology" className={({ isActive }) => `py-5 ${isActive ? 'border-b-2' : ''}`}>03 TECHNOLOGI</NavLink>
            </nav>
          </div>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Destination" element={<Destination />} />
            <Route path="/Crew" element={<Crew />} />
            <Route path="/Technology" element={<Technology />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
