import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import elellogo1 from '../assets/images/elellogo1.webp';

export default function Header() {
     const [activeSection, setActiveSection] = useState("home");
     const [isMenuOpen, setIsMenuOpen] = useState(false)

     const navigate = useNavigate();
     const location = useLocation();

     const navLinksDesktop = [
          { label: "Home", id: "home" },
          { label: "About", id: "about" },
          { label: "Products", id: "products" },
          { label: "Contact Us", id: "contact" },
     ];

     const navLinksMobile = [
          { label: "Home", id: "home" },
          { label: "About", id: "about" },
          { label: "Products", id: "products" },
     ];


     const handleNavigation = (id) => {
          // If already on home page, just scroll
          if (location.pathname === "/") {
               const section = document.getElementById(id);
               if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
               }
          } else {
               // Navigate to home first, then scroll after load
               navigate("/", { state: { scrollTo: id } });
          }
     };


     return (
          <motion.nav
               variants={fadeIn('down', 0.2)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               className="fixed top-0 left-0 right-0 px-4 bg-linear-to-r from-blue-200 via-amber-100 to-orange-200 backdrop-blur-sm z-50">

               <div className="w-full flex justify-between items-center h-12 sm:h-16 lg:max-w-7xl mx-auto">
                    <div className='bg-orange-500 rounded-lg  shadow-lg'>
                         <img
                              src={elellogo1}
                              alt="elellogo"
                              className="w-16 sm:w-20"
                         />
                    </div>


                    {/* ------ Navigation Links - Desktop ------*/}
                    <motion.div
                         variants={fadeIn('down', 0.3)}
                         className="hidden sm:flex items-center gap-10">
                         {navLinksDesktop.map((link, index) => (
                              <button
                                   key={index}
                                   onClick={() => { handleNavigation(link.id), setActiveSection(link.id) }}
                                   className={`text-base font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all ${activeSection === link.id
                                        ? "text-orange-600 after:w-full after:bg-orange-600"
                                        : "text-gray-600 hover:text-orange-500 after:w-0 hover:after:w-full hover:after:bg-orange-400"
                                        }`}
                              >
                                   {link.label}
                              </button>
                         ))}
                    </motion.div>


                    {/* ----------- Mobile Menu Button --------- */}
                    <motion.button
                         variants={fadeIn('down', 0.1)}
                         className="sm:hidden p-2"
                         onClick={() => setIsMenuOpen(!isMenuOpen)}>
                         {isMenuOpen ? (<HiX className="h-6 w-6" />) : (<HiMenu className="h-6 w-6" />)}
                    </motion.button>
               </div>


               {/*----------------- Mobile Menu ------------------*/}
               {isMenuOpen && (
                    <motion.div
                         variants={fadeIn('down', 0.2)}
                         initial="hidden"
                         animate="show"
                         className="sm:hidden bg-indigo-300/40 py-4 rounded-2xl mb-3 ">
                         <motion.div
                              variants={fadeIn('down', 0.3)}
                              className="mx-auto px-4 space-y-4">
                              {navLinksMobile.map((link, index) => (
                                   <motion.button
                                        variants={fadeIn('up', 0.3 * (index + 1))}
                                        key={index}
                                        onClick={() => { handleNavigation(link.id), setActiveSection(link.id), setIsMenuOpen(false) }}
                                        className={`block py-2 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all ${activeSection === link.id
                                             ? "text-orange-600 after:w-full after:bg-orange-600"
                                             : "text-gray-600 hover:text-orange-500 after:w-0 hover:after:w-full hover:after:bg-orange-400"
                                             }`}
                                   >
                                        {link.label}
                                   </motion.button>
                              ))}
                              <button
                                   onClick={() => { setIsMenuOpen(false) }}
                                   className="w-full bg-orange-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
                              >
                                   <a href="#contact">Get in touch</a>
                              </button>
                         </motion.div>
                    </motion.div>
               )}
          </motion.nav>
     )
}
