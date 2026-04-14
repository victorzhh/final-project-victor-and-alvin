import { useState } from "react";

function Header() {
const [isOpen, setIsOpen] = useState(false); 

return (
<header className="bg-gray-900 text-white px-6 py-4">
<div Classname="flex justify-between items-center">
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
<li><a href="Home">Home</a></li>
<li><a href="About">About Us</a></li>
<li><a href="Database">Database</a></li>
<li><a href="Contact">Contact</a></li>
</ul>
</nav>
)}
</header>
) ;
}

export default Header;