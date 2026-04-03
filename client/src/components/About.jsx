import appdevelpment from '../assets/images/appdevelopment.webp';
import softwaredevelopment from '../assets/images/softwaredevelopment.webp';
import webapplication from '../assets/images/webapplication.webp';


export default function About() {
     return (
          <div className="bg-indigo-300/40 text-gray-800 max-w-7xl mx-auto rounded-2xl">

               <div className="bg-orange-500 text-white py-4 md:py-8 px-6 md:px-16 rounded-t-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                         About Eleltech Systems
                    </h1>
                    <p className="text-base md:text-xl leading-relaxed">
                         We are a product-focused software company building powerful mobile applications,
                         computer software and web-based systems designed to solve real-world problems and
                         create long-term digital value.
                    </p>
               </div>

               <div className="py-12 md:py-16 px-3 md:px-16">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                         <div>
                              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-500 text-center">
                                   Who We Are
                              </h2>
                              <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
                                   Our company specializes in product-based software development, providing reliable and efficient
                                   software systems and solutions for our community as well as various business organizations.
                              </p>
                              <p className="text-base md:text-lg leading-relaxed text-justify">
                                   Our focus is continuously improve our own digital systems by creating scalable and
                                   reliable applications that serve businesses and communities efficiently.
                              </p>
                         </div>

                         <div className="bg-gray-100 rounded-2xl p-10 shadow-md">
                              <h3 className="text-xl font-semibold mb-4">Our Core Strength</h3>
                              <ul className="space-y-3">
                                   <li>✔ Product-Driven Development</li>
                                   <li>✔ Secure & Scalable Systems</li>
                                   <li>✔ Continuous Improvement</li>
                                   <li>✔ Long-Term Digital Solutions</li>
                              </ul>
                         </div>

                    </div>
               </div>

               <div className="py-4 px-3 md:py-16 md:px-16">
                    <div className="max-w-6xl mx-auto text-center mb-12">
                         <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
                              What We Build
                         </h2>
                         <p className="text-base md:text-lg max-w-200 mx-auto">
                              We develop and maintain high-quality digital products across
                              mobile, computer and web platforms.
                         </p>
                    </div>

                    <div className="max-w-6xl grid sm:grid-cols-3 gap-8">
                         <div className="bg-white max-w-85 mx-auto rounded-2xl shadow-md hover:shadow-2xl transition">
                              <img
                                   src={appdevelpment}
                                   alt="Device Image"
                                   className="w-full h-70 sm:h-40 md:h-46 lg:h-70 rounded-t-2xl"
                              />
                              <div className='p-3'>
                                   <h3 className="text-xl sm:text-sm md:text-base lg:text-lg font-semibold mb-4 text-orange-500">Mobile Applications</h3>
                                   <p className="text-justify text-base sm:text-sm md:text-base leading-relaxed">
                                        We design and build mobile applications for Android and iOS devices. Our apps
                                        are user-friendly, efficient, and often work offline, ensuring accessibility and
                                        convenience for all users.
                                   </p>
                              </div>
                         </div>

                         <div className="bg-white max-w-85 mx-auto rounded-2xl shadow-md hover:shadow-2xl transition">
                              <img
                                   src={softwaredevelopment}
                                   alt="Device Image"
                                   className="w-full h-70 sm:h-40 md:h-46 lg:h-70 rounded-t-2xl"
                              />
                              <div className='p-3'>
                                   <h3 className="text-xl sm:text-sm md:text-base lg:text-lg font-semibold mb-4 text-orange-500">Computer Software</h3>
                                   <p className="text-justifytext-base sm:text-sm md:text-base leading-relaxed">
                                        Development of reliable computer-based software applications designed to support
                                        business operations and productivity.
                                   </p>
                              </div>
                         </div>

                         <div className="bg-white max-w-85 mx-auto rounded-2xl shadow-md hover:shadow-2xl transition">
                              <img
                                   src={webapplication}
                                   alt="Device Image"
                                   className="w-full h-70 sm:h-40 md:h-46 lg:h-70 rounded-t-2xl"
                              />
                              <div className='p-3'>
                                   <h3 className="text-xl sm:text-sm md:text-base lg:text-lg font-semibold mb-4 text-orange-500">Website & Web Applications</h3>
                                   <p className="text-justify text-base sm:text-sm md:text-base leading-relaxed">
                                        We design and publish modern responsive websites and scalable web applications that provide
                                        interactive and dynamic online solutions.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="py-8 md:py-16 px-3 md:px-16">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                         <div className="bg-blue-50/90 rounded-2xl p-8 shadow-md">
                              <h3 className="text-2xl font-semibold mb-6 text-orange-500">
                                   Our Product Model
                              </h3>
                              <ul className="space-y-4 text-base md:text-lg">
                                   <li>✔ One-Time Purchase Systems</li>
                                   <li>✔ Subscription-Based Platforms</li>
                                   <li>✔ Licensed Software Solutions</li>
                                   <li>✔ Flexible Access Models</li>
                              </ul>
                         </div>

                         <div>
                              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                   How We Deliver Value
                              </h2>
                              <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
                                   Eleltech Systems develops its own digital products and delivers them directly to
                                   users through both free and structured payment models. Some of our products are
                                   offered free of charge to maximize accessibility, while others are available through
                                   affordable pricing to support ongoing development and innovation.
                              </p>
                              <p className="text-base md:text-lg leading-relaxed text-justify">
                                   This approach allows us to continuously improve our systems,
                                   ensure reliability, and maintain long-term product quality.
                              </p>
                         </div>

                    </div>
               </div>

               <div className="bg-blue-900/30 rounded-tl-4xl rounded-br-4xl text-white mx-3 px-4 py-4 md:py-8 md:px-16 md:my-8 md:mx-16">
                    <div className="">
                         <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-6 text-center">
                              Our Vision
                         </h2>
                         <p className="text-base md:text-lg leading-relaxed text-justify">
                              To become a trusted digital product company delivering intelligent,
                              scalable, and impactful software solutions starting locally and
                              expanding globally.
                         </p>
                    </div>
               </div>

               <div className="py-8 md:py-16 px-6 md:px-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                         Explore our products below
                    </h2>
                    <p className="text-base md:text-lg">
                         Explore our solutions and experience reliable, future-ready software built for modern businesses.
                    </p>
               </div>
          </div>
     );
}
