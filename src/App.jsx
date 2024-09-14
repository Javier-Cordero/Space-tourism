import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./components/Home";
import { Destination } from "./components/Destination";
import { Crew } from "./components/Crew";
import { Technology } from "./components/Technology";

export default function App() {
  return (
    <div className="relative">
      <header className="fixed top-10 w-full h-16 flex items-center text-white z-50 gap-10">
        <img src="/shared/logo.svg" alt="logo" className="ml-[5%]" />
        <div className="flex items-center h-full relative w-[95%]">
          <div className="absolute left-0 hidden lg:flex h-1 w-[51%] bg-white"></div>
          <nav className="absolute lg:left-[50%] lg:w-[50%] h-full flex justify-around bg-[#ffffff1a]">
            <NavLink to="/" className={({ isActive }) => `py-5 ${isActive ? 'border-b-2' : ''}`}>00 HOME</NavLink>
            <NavLink to="/Destination" className={({ isActive }) => `py-5 ${isActive ? 'border-b-2' : ''}`}>01 DESTINATION</NavLink>
            <NavLink to="/Crew" className={({ isActive }) => `py-5 ${isActive ? 'border-b-2' : ''}`}>02 CREW</NavLink>
            <NavLink to="/Technology" className={({ isActive }) => `py-5 ${isActive ? 'border-b-2' : ''}`}>03 TECHNOLOGI</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
        </Routes>
      </main>
    </div>
  );
}
