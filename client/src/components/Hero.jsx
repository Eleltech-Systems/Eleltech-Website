import { useContext } from 'react';
import heroo from '../assets/images/heroo.webp';
import { motion } from "framer-motion";
import { LanguageContext } from './LanguageContext';

export default function Hero() {

     const { language } = useContext(LanguageContext);

     return (
          <div>
               {/* Mobile Title */}
               <motion.div
                    className="text-orange-500 px-5 "
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
               >
                    <p className="md:hidden text-lg font-light tracking-wider mb-3">
                         {language === "en" ? "CREATIVE" : "ፈጠራ የታከለበት"}
                    </p>
                    <h1 className="md:hidden text-4xl font-extrabold mb-4 leading-tight">
                         {language === "en" ? "Eleltech Systems" : "እልልቴክ ሲስተምስ"}
                    </h1>
               </motion.div>

               <div className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-5 max-w-7xl mx-auto py-5 lg:px-0 lg:py-12">

                    {/* LEFT TEXT SECTION */}
                    <motion.div
                         className="text-orange-500 px-5"
                         initial="hidden"
                         animate="visible"
                         variants={{
                              hidden: {},
                              visible: {
                                   transition: {
                                        staggerChildren: 0.2,
                                   },
                              },
                         }}
                    >
                         <motion.p
                              className="hidden md:block text-lg md:text-2xl font-light tracking-wider mb-8"
                              variants={{
                                   hidden: { opacity: 0, y: 10 },
                                   visible: { opacity: 1, y: 0 },
                              }}
                         >
                              {language === "en" ? "CREATIVE" : "ፈጠራ የታከለበት"}
                         </motion.p>

                         <motion.h1
                              className="hidden md:block text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
                              variants={{
                                   hidden: { opacity: 0, y: 10 },
                                   visible: { opacity: 1, y: 0 },
                              }}
                         >
                              {language === "en" ? "Eleltech Systems" : "እልልቴክ ሲስተምስ"}
                         </motion.h1>

                         <motion.p
                              className="text-base lg:text-lg text-gray-800 md:max-w-lg my-12 text-justify"
                              variants={{
                                   hidden: { opacity: 0, y: 10 },
                                   visible: { opacity: 1, y: 0 },
                              }}>
                              {language === "en" ?
                                   `We design and develop innovative applications across mobile, computer and web platforms to 
                                   empower modern businesses. Every solution we build is driven by efficiency, reliability, and 
                                   performance for helping organizations reach their goals faster. With Eleltech Systems, you 
                                   gain a trusted technology partner committed to your long-term success.
                                   `
                                   :
                                   `ዘመናዊ የንግድ ተቋማትን ለማብቃት፣ በሞባይል ፣ በኮምፕዩተር እና በዌብሳይት ዘርፎች የላቀ ፋይዳ ያላቸው መተግበሪያዎችን እንነድፋለን፤ እናለማለንም። 
                                   የምንገነባቸው መፍትሄዎች በሙሉ ተቋማት ግባቸውን በፍጥነት እንዲያሳኩ ለማስቻል በብቃት፣ በአስተማማኝነት እና በጥራት ላይ የተመሰረቱ ናቸው። 
                                   ከእልልቴክ ሲስተምስ ጋር በመስራት፣ ለረጅም ጊዜ ስኬትዎ የሚተጋ ታማኝ የቴክኖሎጂ አጋር ያገኛሉ።
                                   `
                              }
                         </motion.p>

                         <motion.a
                              href="#products"
                              className="inline-block px-5 py-2 md:px-8 md:py-3 md:mt-8 text-sm font-semibold uppercase text-orange-500 bg-white rounded-md shadow-lg cursor-pointer"
                              variants={{
                                   hidden: { opacity: 0, scale: 0.9 },
                                   visible: { opacity: 1, scale: 1 },
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ duration: 0.3 }}
                         >
                              {language === "en" ? "View our products" : "ምርቶቻችንን ይመልከቱ"}

                         </motion.a>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                         className="p-6 md:p-12 md:px-5"
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.7, delay: 0.3 }}
                    >
                         <motion.img
                              src={heroo}
                              alt="Device Image"
                              className="w-[320px] md:w-105 rounded-lg relative"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                         />
                    </motion.div>
               </div>
          </div>
     )
}
