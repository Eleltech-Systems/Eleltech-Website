import { useContext } from 'react';
import appdevelpment from '../assets/images/appdevelopment.webp';
import softwaredevelopment from '../assets/images/softwaredevelopment.webp';
import webapplication from '../assets/images/webapplication.webp';
import { LanguageContext } from './LanguageContext';


export default function About() {

     const { language } = useContext(LanguageContext);

     return (
          <div className="bg-indigo-300/40 text-gray-800 max-w-7xl mx-auto rounded-2xl">

               <div className="bg-orange-500 text-white py-4 md:py-8 px-6 md:px-16 rounded-t-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                         {language === "en" ? "About Eleltech Systems" : "ስለ እልልቴክ ሲስተምስ"}
                    </h1>
                    <p className="text-base md:text-xl leading-relaxed">
                         {language === "en" ?
                              `We are a product-focused software company building powerful mobile applications,
                               computer software and web-based systems designed to solve real-world problems and
                               create long-term digital value.
                              `
                              :
                              `እኛ ትኩረታችንን በምርቶች ላይ ያደረግን የሶፍትዌር ኩባንያ ነን። እውነተኛ የዓለማችንን ችግሮች የሚፈቱ እና ዘላቂ ዲጂታል እሴት 
                               የሚፈጥሩ ጠንካራ የሞባይል መተግበሪያዎችን፣ የኮምፒውተር ሶፍትዌሮችን እና በዌብ ላይ የተመሰረቱ ሲስተሞችን እንገነባለን።
                              `
                         }
                    </p>
               </div>

               <div className="py-12 md:py-16 px-3 md:px-16">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                         <div>
                              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-500 text-center">
                                   {language === "en" ? "Who We Are?" : "እኛ ማን ነን?"}
                              </h2>
                              <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
                                   {language === "en" ?
                                        `Our company specializes in product-based software development, providing reliable and efficient
                                         software systems and solutions for our community as well as various business organizations.
                                        `
                                        :
                                        `ድርጅታችን በምርት-ተኮር የሶፍትዌር ልማት ላይ የተሰማራ ሲሆን፤ ለማህበረሰባችንም ሆነ ለተለያዩ የንግድ ተቋማት አስተማማኝ እና ቀልጣፋ 
                                         የሶፍትዌር ሲስተሞችን እና መፍትሄዎችን ያቀርባል።
                                        `
                                   }
                              </p>
                              <p className="text-base md:text-lg leading-relaxed text-justify">
                                   {language === "en" ?
                                        `Our focus is continuously improve our own digital systems by creating scalable and
                                         reliable applications that serve businesses and communities efficiently.
                                        `
                                        :
                                        `ዋና ትኩረታችን የንግድ ድርጅቶችን እና ማህበረሰቡን በብቃት የሚያገለግሉ፣ በቀላሉ ሊያድጉ የሚችሉ (Scalable) እና የታመኑ 
                                         መተግበሪያዎችን በመፍጠር የራሳችንን የዲጂታል ሲስተሞች በየጊዜው ማሻሻል ነው።
                                        `
                                   }
                              </p>
                         </div>

                         <div className="bg-gray-100 rounded-2xl p-10 shadow-md">
                              <h3 className="text-xl font-semibold mb-4">
                                   {language === "en" ? "Our Core Strength" : "ዋና ዋና ጥንካሬዎቻችን"}
                              </h3>
                              <ul className="space-y-3 text-sm md:text-lg">
                                   <li>{language === "en" ? "✔ Product-Driven Development" : "✔ በምርት ላይ ያተኮረ ልማት"}</li>
                                   <li>{language === "en" ? "✔ Secure & Scalable Systems" : "✔ ደህንነታቸው የተጠበቀ እና ሊያድጉ የሚችሉ ሲስተሞች"}</li>
                                   <li>{language === "en" ? "✔ Continuous Improvement" : "✔ ቀጣይነት ያለው ማሻሻያ"}</li>
                                   <li>{language === "en" ? "✔ Long-Term Digital Solutions" : "✔ ዘላቂ የዲጂታል መፍትሄዎች"}</li>
                              </ul>
                         </div>
                    </div>
               </div>

               <div className="py-4 px-3 md:py-16 md:px-16">
                    <div className="max-w-6xl mx-auto text-center mb-12">
                         <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
                              {language === "en" ? "What We Build?" : "ምን እንገነባለን?"}
                         </h2>
                         <p className="text-base md:text-lg max-w-200 mx-auto">
                              {language === "en" ?
                                   `We develop and maintain high-quality digital products across
                                    mobile, computer and web platforms.
                                   `
                                   :
                                   `በሞባይል፣ በኮምፒውተር እና በዌብሳይት ዘርፎች ጥራታቸውን የጠበቁ ዲጂታል ምርቶችን እናለማለን፤ 
                                    እንዲሁም ክትትል እና ጥገና እናደርጋለን።
                                   `
                              }
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
                                   <h3 className="text-xl sm:text-sm md:text-base lg:text-lg font-semibold mb-4 text-orange-500">
                                        {language === "en" ? "Mobile Applications" : "የሞባይል መተግበሪያዎች"}
                                   </h3>
                                   <p className="text-justify text-base sm:text-sm md:text-base leading-relaxed">
                                        {language === "en" ?
                                             `We design and build mobile applications for Android and iOS devices. Our apps
                                              are user-friendly, efficient, and often work offline, ensuring accessibility and
                                              convenience for all users.
                                             `
                                             :
                                             `ለአንድሮይድ (Android) እና ለአይ-ኦ-ኤስ (iOS) ስልኮች የሚሆኑ መተግበሪያዎችን እንነድፋለን፤ እንገነባለን። መተግበሪያዎቻችን 
                                              ለተጠቃሚ ምቹ፣ ቀልጣፋ እና ብዙ ጊዜ ያለ ኢንተርኔት (Offline) መስራት የሚችሉ በመሆናቸው ለሁሉም ተደራሽነትን እና ምቾትን ያረጋግጣሉ።
                                             `
                                        }
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
                                   <h3 className="text-xl sm:text-sm md:text-base lg:text-lg font-semibold mb-4 text-orange-500">
                                        {language === "en" ? "Computer Software" : "የኮምፒውተር ሶፍትዌሮች"}
                                   </h3>
                                   <p className="text-justifytext-base sm:text-sm md:text-base leading-relaxed">
                                        {language === "en" ?
                                             `Development of reliable computer-based software applications designed to support
                                              business operations and productivity.
                                             `
                                             :
                                             `የንግድ ስራን እና ምርታማነትን ለማሳለጥ የተነደፉ አስተማማኝ የኮምፒውተር ሶፍትዌሮችን እናለማለን።
                                             `
                                        }
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
                                   <h3 className="text-xl sm:text-sm md:text-base lg:text-lg font-semibold mb-4 text-orange-500">
                                        {language === "en" ? "Website & Web Applications" : "ዌብሳይቶች እና ዌብ አፕሊኬሽኖች"}
                                   </h3>
                                   <p className="text-justify text-base sm:text-sm md:text-base leading-relaxed">
                                        {language === "en" ?
                                             `We design and publish modern responsive websites and scalable web applications that provide
                                              interactive and dynamic online solutions.
                                             `
                                             :
                                             `ዘመናዊ፣ በማንኛውም መሳሪያ ላይ የሚሰሩ (Responsive) ዌብሳይቶችን እና በይነ-ተግባራዊ (Interactive) 
                                              የሆኑ የዌብ መተግበሪያዎችን እንነድፋለን፤ ወደ ስራም እናስገባለን።
                                             `
                                        }
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="py-8 md:py-16 px-3 md:px-16">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                         <div className="bg-blue-50/90 rounded-2xl p-8 shadow-md">
                              <h3 className="text-2xl font-semibold mb-6 text-orange-500">
                                   {language === "en" ? "Our Product Model" : "የምርት ሽያጭ ሞዴላችን"}
                              </h3>
                              <ul className="space-y-4 text-base md:text-lg">
                                   <li>{language === "en" ? "✔ One-Time Purchase Systems" : "✔ የአንድ ጊዜ ክፍያ ስርአቶች"}</li>
                                   <li>{language === "en" ? "✔ Subscription-Based Platforms" : "✔ በደንበኝነት (Subscription) የሚሰሩ መድረኮች"}</li>
                                   <li>{language === "en" ? "✔ Licensed Software Solutions" : "✔ የፍቃድ (Licensed) የሶፍትዌር መፍትሄዎች"}</li>
                                   <li>{language === "en" ? "✔ Flexible Access Models" : "✔ ተለዋዋጭ የአጠቃቀም አማራጮች"}</li>
                              </ul>
                         </div>

                         <div>
                              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                   {language === "en" ? "How We Deliver Value" : "እሴት የምናገኝበት መንገድ"}
                              </h2>
                              <p className="text-base md:text-lg leading-relaxed mb-4 text-justify">
                                   {language === "en" ?
                                        `Eleltech Systems develops its own digital products and delivers them directly to
                                         users through both free and structured payment models. Some of our products are
                                         offered free of charge to maximize accessibility, while others are available through
                                         affordable pricing to support ongoing development and innovation.
                                        `
                                        :
                                        `እልልቴክ ሲስተምስ የራሱን ዲጂታል ምርቶች በማልማት በነጻ እና በክፍያ ለተጠቃሚዎች ያቀርባል። አንዳንድ ምርቶቻችን ተደራሽነትን 
                                         ለማስፋት በነጻ የሚቀርቡ ሲሆን፣ ሌሎች ደግሞ ቀጣይነት ያለው ልማትና ፈጠራን ለመደገፍ በተመጣጣኝ ዋጋ ይቀርባሉ። 
                                        `
                                   }
                              </p>
                              <p className="text-base md:text-lg leading-relaxed text-justify">
                                   {language === "en" ?
                                        `This approach allows us to continuously improve our systems,
                                         ensure reliability, and maintain long-term product quality.
                                        `
                                        :
                                        `ይህ አካሄድ ሲስተሞቻችንን በየጊዜው እንድናሻሽል፣ አስተማማኝነታቸውን እንድናረጋግጥ እና የምርቶቻችንን
                                         ጥራት ለረጅም ጊዜ እንድንጠብቅ ያስችለናል።
                                        `
                                   }
                              </p>
                         </div>
                    </div>
               </div>

               <div className="bg-blue-900/30 rounded-tl-4xl rounded-br-4xl text-white mx-3 px-4 py-4 md:py-8 md:px-16 md:my-8 md:mx-16">
                    <div className="">
                         <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-6 text-center">
                              {language === "en" ? "Our Vision" : "ራዕያችን"}
                         </h2>
                         <p className="text-base md:text-lg leading-relaxed text-justify">
                              {language === "en" ?
                                   `To become a trusted digital product company delivering intelligent,
                                    scalable, and impactful software solutions starting locally and
                                    expanding globally.
                                   `
                                   :
                                   `ከአገር ውስጥ ጀምሮ እስከ ዓለም አቀፍ ደረጃ ተጽእኖ መፍጠር የሚችሉ፣ ዘመናዊ እና ግዙፍ የሶፍትዌር 
                                    መፍትሄዎችን የሚያቀርብ ታማኝ የዲጂታል ምርት ኩባንያ መሆን።
                                   `
                              }
                         </p>
                    </div>
               </div>

               <div className="py-8 md:py-16 px-6 md:px-16 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                         {language === "en" ? "Explore our products below" : "ምርቶቻችንን ከታች ይመልከቱ"}
                    </h2>
                    <p className="text-base md:text-lg">
                         {language === "en" ?
                              `Explore our solutions and experience reliable, future-ready software built for 
                               modern businesses.
                              `
                              :
                              `ለዘመናዊ ንግድ ስራ ተብለው የተገነቡ አስተማማኝ ሶፍትዌሮቻችንን ይሞክሩ።`
                         }
                    </p>
               </div>
          </div>
     );
}
