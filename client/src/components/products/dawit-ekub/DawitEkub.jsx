import moneyLogo2 from '../../../assets/images/moneyLogo2.png'
import dawitekubmainphoto3 from '../../../assets/images/dawitekubmainphoto3.png'
import { motion } from "framer-motion";
import { translations } from '../../../utils/translation';
import { FaTiktok, FaYoutube } from 'react-icons/fa';

export default function DawitEkub({ lang }) {
     console.log(lang)
     return (
          <div className='bg-indigo-300/40 mt-5 rounded-2xl'>
               <div className="rounded-t-2xl bg-indigo-300/40 text-white py-2 md:py-3 md:px-6">
                    <div className="flex justify-between">
                         <div className='flex items-center'>
                              <img
                                   src={moneyLogo2}
                                   alt="Team meeting"
                                   className="h-16 w-22 md:h-20 md:w-26 rounded-lg"
                              />
                              <div>
                                   <h1 className='text-lg font-semibold md:text-2xl text-gray-900'>Dawit Ekub</h1>
                                   <p className='text-base md:text-base font-medium text-gray-600'>{translations[lang].main_description}</p>
                              </div>
                         </div>
                         <button className="hidden md:block bg-green-600 self-center text-white md:px-4 py-2.5 rounded-lg hover:bg-green-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                              <a
                                   href="https://play.google.com/store/apps"
                                   target="_blank">
                                   {translations[lang].download}

                              </a>
                         </button>
                    </div>
               </div>

               {/* Main Content */}
               <div className="lg:flex px-3 md:py-5 md:px-24 gap-10">
                    {/* App Screenshot */}
                    <div className='flex-1'>
                         <img
                              src={dawitekubmainphoto3}
                              alt="Dawit Ekub App"
                              className="w-60 h-96 md:w-80 md:h-136 mx-auto"
                         />
                    </div>

                    {/* App Description */}
                    <div className='flex-2 pt-8'>
                         <h2 className="text-xl font-semibold text-gray-700 mb-4">
                              {translations[lang].title_about}
                         </h2>
                         <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-justify">
                              {translations[lang].description1}
                         </p>

                         <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-justify">
                              {translations[lang].description2}
                         </p>

                         <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-justify">
                              {translations[lang].description3}
                         </p>
                    </div>
               </div>

               <div className='max-w-6xl mx-3 lg:mx-auto md:py-8'>
                    <h3 className="text-xl font-semibold text-gray-700">
                         {translations[lang].about_features}
                    </h3>
                    <div className='grid lg:grid-cols-3 md:gap-10 mt-8 md:mb-8'>

                         <ul className="list-disc pl-6 text-gray-700 space-y-3 text-base md:text-lg text-justify">
                              <li>{translations[lang].feature_list1}</li>
                              <li>{translations[lang].feature_list2}</li>
                              <li>{translations[lang].feature_list3}</li>
                              <li>{translations[lang].feature_list4}</li>
                              <li>{translations[lang].feature_list5}</li>
                              <li>{translations[lang].feature_list7}</li>
                         </ul>
                         <ul className="list-disc pl-6 text-gray-700 space-y-3 mt-3 md:mt-0 text-base md:text-lg text-justify">
                              <li>{translations[lang].feature_list6}</li>
                              <li>{translations[lang].feature_list8}</li>
                              <li>{translations[lang].feature_list9}</li>
                              <li>{translations[lang].feature_list10}</li>
                              <li>{translations[lang].feature_list11}</li>
                         </ul>

                         <div className='mt-8 md:mt-0 md:mx-auto'>
                              <h3 className="text-base font-semibold text-gray-900 mb-3">
                                   {translations[lang].platform_availablity}
                              </h3>
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium text-base">
                                   {translations[lang].platform}
                              </span>

                              <h3 className="text-base font-semibold text-gray-900 mb-3 mt-10">
                                   {translations[lang].supported_language}
                              </h3>
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium text-base">
                                   {translations[lang].language}
                              </span>

                              <h3 className="text-base font-semibold text-gray-900 mb-3 mt-10">
                                   {translations[lang].operating_mode}
                              </h3>
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium text-base">
                                   {translations[lang].offline}
                              </span>
                         </div>
                    </div>
                    {/* This is for small device */}
                    <div className='flex justify-end'>
                         <a
                              href="https://play.google.com/store/apps"
                              target="_blank"
                              className="md:hidden bg-green-500 text-white text-sm py-1 px-3 rounded-t-lg mb-3">
                              {translations[lang].download}
                         </a>
                    </div>
               </div>

               <div className='lg:max-w-4xl mx-auto p-3'>
                    <div className='px-4 py-2 md:px-20 bg-gray-600 rounded-b-2xl'>
                         <p className=' text-white leading-relaxed text-sm sm:text-base text-center'>
                              {translations[lang].description4} {translations[lang].description5}
                         </p>

                         <div className="flex gap-4 mt-4 text-xl justify-center">
                              <a
                                   href="https://www.youtube.com/@EleltechSystems"
                                   target="_blank"
                                   className="hover:text-red-500 text-white">
                                   <FaYoutube />
                              </a>
                              <a
                                   href="https://www.tiktok.com/@eleltechsystems"
                                   target="_blank"
                                   className="hover:text-purple-500 text-white">
                                   <FaTiktok />
                              </a>
                         </div>
                    </div>
               </div>

          </div>
     )
}
