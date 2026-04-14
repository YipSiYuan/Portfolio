import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Navigation(){
    return <ul className="nav-ul">
        <li className="nav-li">
            <Link to="/home">Home</Link>
        </li>
        <li className="nav-li">
            <Link to="/home">About</Link>
        </li>
        <li className="nav-li">
            <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-li">
            <Link to="/home">Contact</Link>
        </li>
    </ul>
}
const Navbar = () => {
    const[isOpen, setIsOpen]=useState(false)
  return <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/65">
    
<div className="mx-auto c-space max-w-8xl">
    <div className="flex items-center justify-between py-2 sm:py-0">
        <Link to="/home">
                Yip Si Yuan
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
            <img src={isOpen?"assets/close.svg":'assets/menu.svg'} className="w-10 h-10"/>
        </button>
        <nav className="hidden sm:flex">
            <Navigation/>
        </nav>
    </div>
</div>

    
    {isOpen && 
    (<motion.div 
    className="block overflow-hidden text-center sm:hidden" 
    initial={{opacity: 0, x:-10}} 
    animate = {{opacity: 1, x: 0}} 
    style ={{maxHeight: "100vh"}}
    transition = {{duration: 1}}
    >
        <nav className="pb-5">
            <Navigation />
        </nav>
    </motion.div>)}
  </div>;
};

export default Navbar;