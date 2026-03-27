import { FaFacebook, FaTelegram, FaLinkedin, FaGithub, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import elellogo1 from '../assets/images/elellogo1.png'

export default function Footer() {
     return (
          <footer className="bg-gray-950/40 text-gray-100">
               <div className="max-w-7xl mx-auto py-12 px-3 flex flex-col md:flex-row justify-between">
                    <div className="mr-8">
                         <div className="flex items-center gap-3 mb-4">
                              <a href="/">
                                   <div className='bg-orange-500 rounded-lg  shadow-lg'>
                                        <img
                                             src={elellogo1}
                                             alt="Elelbet Logo"
                                             className="w-16 md:w-20"
                                        />
                                   </div>
                              </a>
                              <h2 className="text-lg md:text-xl font-bold text-white">Eleltech Systems</h2>
                         </div>
                         <p className="text-sm max-w-96">
                              We develop high-quality mobile apps, websites, web applications and
                              desktop software development. Our systems are designed to help businesses
                              and individuals manage their operations efficiently and securely.
                         </p>
                    </div>


                    <div className="flex justify-between flex-wrap py-3 mt-8 gap-8 md:gap-16 md:p-0 md:mt-0">
                         <div>
                              <h3 className="text-white font-semibold mb-4">
                                   Quick Links
                              </h3>
                              <ul className="space-y-2 text-sm">
                                   <li><a href="/" className="hover:text-orange-500">Home</a></li>
                                   <li><a href="/about" className="hover:text-orange-500">About</a></li>
                                   <li><a href="/products" className="hover:text-orange-500">Products</a></li>
                                   <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
                              </ul>
                         </div>

                         <div>
                              <h3 className="text-white font-semibold mb-4">Services</h3>
                              <ul className="space-y-2 text-sm">
                                   <li>Mobile App Development</li>
                                   <li>Websites Development</li>
                                   <li>Web Application Development</li>
                                   <li>Desktop Software Development</li>
                              </ul>
                         </div>


                         <div>
                              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                              <ul className="space-y-2 text-sm">
                                   <li>Email: eleltech21@gmail.com</li>
                                   <li>Location: Addis Abeba, Ethiopia</li>
                              </ul>
                              <div className="flex gap-4 mt-4 text-xl">
                                   <a
                                        href="https://www.facebook.com/profile.php?id=61552306718431"
                                        target="_blank"
                                        className="hover:text-blue-500">
                                        <FaFacebook />
                                   </a>
                                   <a
                                        href="https://www.youtube.com/@EleltechSystems"
                                        target="_blank"
                                        className="hover:text-red-500">
                                        <FaYoutube />
                                   </a>
                                   <a
                                        href="https://www.tiktok.com/@eleltechsystems"
                                        target="_blank"
                                        className="hover:text-purple-500">
                                        <FaTiktok />
                                   </a>
                                   <a
                                        href="https://www.instagram.com/eleltech_systems/"
                                        target="_blank"
                                        className="hover:text-purple-700">
                                        <FaInstagram />
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>


               <div className="border-t max-w-7xl mx-auto border-gray-500 mt-10 py-6 text-center text-sm text-gray-100">
                    © {new Date().getFullYear()} Eleltech Systems. All rights reserved.
               </div>
          </footer>
     )
}
