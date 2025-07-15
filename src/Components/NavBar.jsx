import  { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef(null);


  useEffect(() => {
    if (isOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isOpen]);

  return (
    <nav className="bg-[#002228] text-white border-b-2 border-b-[#183A40] font-work-san">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <div className="text-xl font-bold">
          <img src="./Logo.svg" alt="" />
        </div>

        <div className="hidden md:flex space-x-6 text-[#FFFFFF] font-semibold lg:text-base text-sm">
          <a className="hover:text-blue-500"><Link to='/' >Home</Link></a>
          <a className="hover:text-blue-500"><Link to='/AboutUs' >About Us</Link></a>
          <a href="#" className="hover:text-blue-500"><Link to='/Pricing'>Pricing</Link></a>
          <a href="#" className="hover:text-blue-500"><Link to='/Customers'>Customers</Link></a>
          <a href="#" className="hover:text-blue-500"><Link to='/Solution'>Solution</Link></a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#0FF1F6] text-[#002228] rounded-full lg:px-5 px-4  lg:py-2 py-1.5 text-base font-semibold hover:border-2 hover:border-white hover:ring-blue-400 hover:ring-4 transition-all cursor-pointer"> <Link to='/BookDemo'>Book a Demo</Link>
          </button>
          <button className="bg-transparent text-white rounded-full border-2 border-white lg:px-5 lg:py-2 py-1.5 px-4 text-base font-semibold hover:ring-blue-400 hover:ring-4 transition-all cursor-pointer"><Link to='/ContactUs'>Contact Us</Link></button>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{ height: `${menuHeight}px` }}
        className="overflow-hidden transition-height duration-300 ease-in-out md:hidden bg-gray-700"
      >
        <div className="px-8 py-4 space-y-2 text-white flex items-start justify-between">
          <div className=" space-y-5 text-[#FFFFFF] font-semibold text-base flex flex-col">
          <a className="hover:text-blue-500"><Link to='/' >Home</Link></a>
          <a className="hover:text-blue-500"><Link to='/AboutUs' >About Us</Link></a>
          <a href="#" className="hover:text-blue-500"><Link to='/Pricing'>Pricing</Link></a>
          <a href="#" className="hover:text-blue-500"><Link to='/Customers'>Customers</Link></a>
          <a href="#" className="hover:text-blue-500"><Link to='/Solution'>Solution</Link></a>
          </div>
          <div className="flex py-5 px-3 flex-col gap-6">
            <button className="bg-[#0FF1F6] text-[#002228] rounded-full px-5 py-2 text-base font-semibold hover:border-2 hover:border-white hover:ring-blue-400 hover:ring-4 transition-all cursor-pointer"><Link to='/BookDemo'>Book a Demo</Link></button>
            <button className="bg-transparent text-white rounded-full border-2 border-white px-5 py-2 text-base font-semibold hover:ring-blue-400 hover:ring-4 transition-all cursor-pointer"><Link to='/ContactUs'>Contact Us</Link></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
