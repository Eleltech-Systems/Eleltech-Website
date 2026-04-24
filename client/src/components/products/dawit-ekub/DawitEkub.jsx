import moneyLogo2 from '../../../assets/images/moneyLogo2.webp'
import dawitekubmainphoto3 from '../../../assets/images/dawitekubmainphoto3.webp'
import { FaTiktok, FaYoutube } from 'react-icons/fa';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';

export default function DawitEkub() {

     const { language } = useContext(LanguageContext);

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
                                   <h1 className='text-lg font-semibold md:text-2xl text-gray-900'>
                                        Dawit Ekub
                                   </h1>
                                   <p className='text-base md:text-base font-medium text-gray-600'>
                                        {language === "en" ?
                                             "Manage your daily, weekly, and monthly Ekub with this app."
                                             :
                                             "በዚህ መተግበሪያ ዕለታዊ ፣ ሳምንታዊ እና ወርሃዊ እቁቦችዎን ያስተዳድሩ፡፡"
                                        }
                                   </p>
                              </div>
                         </div>
                         <button className="hidden md:block bg-green-600 self-center text-white md:px-4 py-2.5 rounded-lg hover:bg-green-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                              <a
                                   href="https://play.google.com/store/apps/details?id=com.eleltech.dawitekub"
                                   target="_blank">
                                   {language === "en" ? "Install Now" : "አሁኑኑ ይጫኑ"}
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
                              {language === "en" ? "About Dawit Ekub App" : "ስለ ዳዊት እቁብ መተግበሪያ"}
                         </h2>
                         <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-justify">
                              {language === "en" ?
                                   `Developed by Eleltech Systems, Dawit Ekub provides a comprehensive solution for 
                                    Ekub collectors and administrators to manage their traditional savings groups with ease. 
                                    This application enables efficient management of daily, weekly, and monthly Ekub cycles, 
                                    tailored to your specific requirements and preferences.
                                   `
                                   :
                                   `በ እልልቴክ ሲይስተምስ ተዘጋጅቶ የቀረበላችሁ ዳዊት እቁብ መተግበሪያ ለእቁብ ብር ሰብሳቢዎች ወይም አስተዳዳሪዎች ጥሩ
                                    መፍትሄ ይዞ የመጣ ሲሆን እቁብ ሰብሳቢ ለሆናችሁ እቁባችሁን በቀላሉ ለማስተዳደር ይጠቅማችኋል። በዚህ መተግበሪያ ሶስት 
                                    የተለያዩ እቁቦችን ማለትም የቀን ፣ የሳምንት ፣ እንዲሁም የወር እቁቦችን በተቀላጠፈ ሁኔታ በፈለጉት መጠን እና አይነት 
                                    ለማስተዳደር ያግዛል።`
                              }
                         </p>

                         <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-justify">
                              {language === "en" ?
                                   `When setting up an Ekub, you can define the type, start date, contribution amount, and 
                                    duration. Based on this data, the app automatically calculates the total payout (Derash) 
                                    and the projected end date before you even begin. This allows you to adjust the schedule 
                                    and contribution levels to perfectly suit your needs.
                                   `
                                   :
                                   `እቁብዎን ሲጀምሩ የእቁብ አይነት ፣ የሚጀመርበትን ቀን ፣ ሙሉ መደብ ብር መጠን እና የምን ያህል የጊዜ ቆይታ ሊኖረው 
                                    እንደሚችል ቀድመው መወሰን የሚጠበቅቦት ሲሆን መተግበርያው በዚህ መረጃ ላይ ተመስርቶ እቁብዎ በሙሉ መደብ ደራሽ 
                                    ምን ያህል ገንዘብ እንደሆነ እና መቼ እንደሚጠናቅቅ ከመጀምርዎ በፊት ያሳውቆታል። በዚህ መረጃ ላይ ተመስርተው የጊዜ 
                                    ቆይታውን እና የደራሽ ብር መጠን ለማስተካከል ያግዝዎታል።
                                   `
                              }
                         </p>

                         <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg text-justify">
                              {language === "en" ?
                                   `Once an Ekub is active, the app records member details and contribution amounts under their 
                                    respective categories. It generates a dedicated member profile page to track individual 
                                    payments and overall activity. From this profile, you can edit or delete member info, assign 
                                    lottery numbers, to register when receiving payment and when making a payment, send payment 
                                    confirmations via SMS, and monitor total contributions and due dates.
                                   `
                                   :
                                   `እቁብዎን ከጀመሩ ቦሀላ በጀመሩት እቁብ አይነት ስር የእቁብ አባሎችዎን መረጃ እና የክፍያ ብር መጠን የሚመዘግብላችሁ 
                                    ሲሆን የእያንዳንዱን አባልዎችዎን የክፍያ እና አጠቃላይ የእቁብ እንቅስቃሴ ለመቆጣጠር የሚያችለውን የአባል መለያ ገጽ 
                                    የሚያዘጋጅልዎ ይሆናል። በአባልዎ መለያ ገጽ ውስጥም የአባልዎን መረጃ ለማስተካከል ወይንም ለመሰረዝ ፣ ዕጣ ቁጥር 
                                    ለመሰየም ፣ ክፍያ ሲቀበሉ እንዲሁም ደራሽ ክፍያ ሲፈጽሙ ለመመዝገብ ፣ የክፍያውን ማስረጃ መልእክት ለመላክ ፣ የየግዜውን እና 
                                    የጠቅላላ ክፍያ መረጃ እንዲሁም እስከ የትኛው ቀን ክፍያው እንደተከናወነ ለማወቅ እና ሌሎች አገልግሎቶችን ያገኛሉ።
                                   `
                              }
                         </p>
                    </div>
               </div>

               <div className='max-w-6xl mx-3 lg:mx-auto md:py-8'>
                    <h3 className="text-xl font-semibold text-gray-700">
                         {language === "en" ? "Key Features" : "ቁልፍ ባህሪያት"}
                    </h3>
                    <div className='grid lg:grid-cols-3 md:gap-10 mt-8 md:mb-8'>
                         <ul className="list-disc pl-6 text-gray-700 space-y-3 text-base md:text-lg text-justify">
                              <li>
                                   {language === "en" ?
                                        "Simultaneously manage multiple Ekub groups with ease."
                                        :
                                        "የተለያዩ እቁቦችን በተመሳሳይ ጊዜ በቀላሉ ያስተዳድራል።"
                                   }
                              </li>
                              <li>
                                   {language === "en" ?
                                        "Quick member registration using phone contact information."
                                        :
                                        "የእቁብ አባል የስልክ መረጃን በመጠቀም በቀላሉ ለመመዝገብ ያስችላል።"
                                   }
                              </li>
                              <li>
                                   {language === "en" ?
                                        "Detailed member profiles showing payment status for specific days, weeks, or months."
                                        :
                                        "በእያንዳንዱ አባል መለያ ገጽ የምን ያህል ቀናት ፣ ሳምንታት እና ወራት ክፍያ እንደተከፈለ እና እንዳልተከፈለ የክፍያ መጠን ጨምሮ ያሳያል።"
                                   }
                              </li>
                              <li>
                                   {language === "en" ?
                                        "Automated payment schedules generated for every member based on the group's timeline."
                                        :
                                        "አስቀድሞ የተወሰነ የክፍያ መርሃ ግብር በአባላቱ የክፍያ መርሃ ግብር መሰረት ለእያንዳንዱ የእቁብ አባል ይዘጋጃል።"
                                   }
                              </li>
                              <li>
                                   {language === "en" ?
                                        "Real-time tracking of remaining balances for members who have already received their payout."
                                        :
                                        "የዕቁብ ብር የተቀበሉ አባላት ቀሪ ዕዳ መጠን ያሳያል።"
                                   }
                              </li>
                         </ul>
                         <ul className="list-disc pl-6 text-gray-700 space-y-3 mt-3 md:mt-0 text-base md:text-lg text-justify">
                              <li>
                                   {language === "en" ?
                                        "Digital storage for payment receipts and evidence within each member's profile."
                                        :
                                        "በእያንዳንዱ እቁብ አባል መለያ ስር የክፍያ ደረሰኝ ማስረጃዎችን ለማስቀመጥ ያስችላል።"
                                   }
                              </li>
                              <li>
                                   {language === "en" ?
                                        "Clear overview of individual and total contributions based on payment dates."
                                        :
                                        "በእያንዳንዱ የመክፈያ ቀናቶች ላይ በመመስረት የእያንዳንዱን የእቁብ አባል ሁሉንም ክፍያዎች እና የሁሉም ክፍያዎች ድምርን በቀላሉ ያሳያል።"
                                   }
                              </li>
                              <li>
                                   {language === "en" ?
                                        "Unique lottery (lot) number assignment for every member."
                                        :
                                        "እያንዳንዱ የእቁብ አባል ልዩ እጣ ቁጥር እንዲኖራቸው ያስችላል።"
                                   }
                              </li>
                              <li>
                                   {language === "en" ?
                                        "Integrated lottery system to draw and select winners from the pool."
                                        :
                                        "ዕጣ ለማውጣት እና የእቁብ ሎተሪ አሸናፊውን ከዕጣ ዝርዝር ውስጥ ለመምረጥ የሚያስችል የሎተሪ ስርዓት አለው።"
                                   }
                              </li>
                              <li>
                                   {language === "en" ?
                                        "Ready-to-send SMS templates for payment confirmations."
                                        :
                                        "የክፍያ ማረጋገጫ በጽሑፍ መልእክት ለመላክ ያዘጋጃል።"
                                   }
                              </li>
                              <li>
                                   {language === "en" ?
                                        "Secure backup and recovery system to save and restore your data whenever needed."
                                        :
                                        "የእቁብ መረጃዎችን በፈለጉበት ቦታ ለማስቀመጥ እና አስፈላጊ በሆነ ጊዜ እንደገና መልሶ ለመጠቀም የመጠባበቂያ እና መልሶ ማግኛ ስርዓት ተካቷል።"
                                   }
                              </li>
                         </ul>

                         <div className='mt-8 md:mt-0 md:mx-auto'>
                              <h3 className="text-base font-semibold text-gray-900 mb-3">
                                   {language === "en" ? "Platform Availability:" : "የመድረክ ተገኝነት፡"}
                              </h3>
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium text-base">
                                   {language === "en" ? "Android" : "አንድሮይድ"}
                              </span>

                              <h3 className="text-base font-semibold text-gray-900 mb-3 mt-10">
                                   {language === "en" ? "Supported Language:" : "የሚደገፍ ቋንቋ፡"}
                              </h3>
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium text-base">
                                   {language === "en" ? "Amharic" : "አማርኛ"}
                              </span>

                              <h3 className="text-base font-semibold text-gray-900 mb-3 mt-10">
                                   {language === "en" ? "Operating Mode:" : "የአሠራር ሁኔታ፡"}
                              </h3>
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium text-base">
                                   {language === "en" ? "Offline (No internet required)" : "ያለ በይነመረብ"}
                              </span>
                         </div>
                    </div>
                    {/* This is for small device */}
                    <div className='flex justify-end mt-8'>
                         <a
                              href="https://play.google.com/store/apps/details?id=com.eleltech.dawitekub"
                              target="_blank"
                              className="md:hidden bg-green-500 text-white text-sm py-1 px-3 rounded-t-lg mb-3">
                              {language === "en" ? "Install Now" : "አሁኑኑ ይጫኑ"}
                         </a>
                    </div>
               </div>

               <div className='lg:max-w-4xl mx-auto p-3'>
                    <div className='px-4 py-2 md:px-20 bg-gray-600 rounded-b-2xl'>
                         <p className=' text-white leading-relaxed text-sm sm:text-base text-center'>
                              {language === "en" ?
                                   `A complete guide on how to manage your Ekub is available in the Help section of the app.`
                                   :
                                   "በመተግበሪያው የእገዛ ክፍል ላይ እንዴት እቁብዎን እንደሚያስተዳድሩ ሙሉ ማብራሪያ ያገኛሉ።"
                              }
                              {language === "en" ?
                                   ` You can also find video tutorials and detailed explanations on our official channels.`
                                   :
                                   "እንዲሁም በእነዚህ ቻናሎቻችን በ ተንቀሳቃሽ ምስል የታገዘ ማብራሪያ ያገኛሉ።"
                              }
                         </p>

                         <div className="flex gap-4 mt-4 text-xl justify-center">
                              <a
                                   href="https://www.youtube.com/channel/UCGTCBy4tZ-qWEz4hFaHI05w"
                                   target="_blank"
                                   className="hover:text-red-500 text-white">
                                   <FaYoutube />
                              </a>
                              <a
                                   href="https://www.tiktok.com/@eleltech_systems"
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
