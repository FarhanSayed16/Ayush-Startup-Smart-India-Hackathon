import React, { useState } from 'react'
import './styles/Header.css';
import logo from '../assets/ayush_logo.jpg';
import logo2 from '../assets/ayush_logo2.jpg';
import logo3 from '../assets/logo_hindiEnglish.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  function gochatbot()
  {
    window.location.href='/chatbot';
  }
  function gohome()
  {
    window.location.href='/';
  }
  function gohometwo()
    {
        window.location.href=`/login-register`;
    }



    // nav-items
  const navItems=[
    {path:"/",link:"Home"},
    {path:"/#about",link:"About Us"},
    {path:"/dashboard",link:"All Startups"},
    {path:"/Blogs",link:"Blogs"},
    {path:"/#faq",link:"FAQ's"},
    {path:"/contact",link:"Contact Us"},
  ]
 
    const navigate=useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };


  const { t, i18n } = useTranslation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    // const [isVisible, setIsVisible] = useState(false); // For login dropdown
  const [isNavOpen, setIsNavOpen] = useState(false); // For navigation menu

  // const toggleDropdown = () => setIsVisible(!isVisible);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-white shadow-md w-100%">
      {/* Top Section */}
      <div className="flex justify-between items-center w-full py-3 px-4 md:px-8 bg-white">
        {/* Left Side */}
        <div className="flex items-center cursor-pointer" onClick={handleClick}>
          <div>
            <img src={logo} width={30} />
          </div>
          <div className="flex items-center ml-2">
            <img src={logo3} className="h-[50px]" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
      

          {/* Login Dropdown */}
          <div className="relative">
            <button
              className="bg-blue-400 py-1 px-3 rounded-md text-white"
              onClick={toggleDropdown}
            >
              <p>Login</p>
            </button>
            {isVisible && (
              <div className="absolute bg-white p-2 top-12 -right-7 rounded-md w-[200px] mx-auto shadow-lg">
                <p className="bg-gray-200 py-1 text-center my-2 hover:bg-gray-400">
                  <Link to="/login?value=startup">Startup</Link>
                </p>
                <p className="bg-gray-200 py-1 text-center my-2 hover:bg-gray-400">
                  <Link to="/login?value=authority">Government</Link>
                </p>
                <p className="bg-gray-200 py-1 text-center my-2 hover:bg-gray-400">
                  <Link to="/login?value=druginspector">Gazetted Officer</Link>
                </p>
                
              </div>
            )}
          </div>

          {/* Company Logo */}
          <div>
            <img src={logo2} width={50} />
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="block md:hidden bg-gray-300 p-2 rounded-md"
            onClick={toggleNav}
          >
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>

      {/* Bottom Section: Navigation */}
      <div
        className={`${
          isNavOpen ? "block" : "hidden"
        } md:flex justify-center items-center bg-[#682c0e] text-white`}
      >
        <div className="mx-20">
          <nav className="py-4 px-4">
            {/* Navigation Items */}
            <ul className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm font-bold">
              {navItems.map(({ path, link }) => (
                <li key={link}>
                  <NavLink
                    to={path}
                    onClick={() => {
                      if (path.startsWith("/#")) {
                        const id = path.split("#")[1];
                        const element = document.getElementById(id);
                        if (element)
                          element.scrollIntoView({ behavior: "smooth" });
                      }
                      setIsNavOpen(false); // Close menu after click
                    }}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

    </div>
  );
}



