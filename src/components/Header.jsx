import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
const [isOpen, setIsOpen] = useState(false);


return (
<header className="bg-gray-900 text-white px-6 py-4">
<div className="flex justify-between items-center">
<h1 className="text-xl font-bold">Homelessness is Bad</h1>


<button
onClick={() => setIsOpen(!isOpen)}
className="text-2xl"
>
{isOpen ? "x" : "☰"}
</button>
</div>


{isOpen && (
<nav className="mt-4">
<ul className="flex flex-col gap-2">
    <li><Link to="/">Home</Link></li>
  <li><Link to="/About">About Us</Link></li>
  <li><Link to="/Database">Database</Link></li>
  <li><Link to="/Contact">Contact</Link></li>
</ul>
</nav>
)}
</header>
) ;
}


export default Header;
