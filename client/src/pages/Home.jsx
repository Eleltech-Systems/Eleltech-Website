import { useContext } from 'react';
import About from '../components/About';
import ContactUs from '../components/ContactUs';
import Hero from '../components/Hero';
import DawitEkub from '../components/products/dawit-ekub/DawitEkub';
import { LanguageContext } from '../components/LanguageContext';

export default function Home() {

     const { language } = useContext(LanguageContext);

     return (
          <div className='bg-linear-to-r from-blue-200 via-amber-100 to-orange-200 p-3'>
               <section id="home" className="pt-20">
                    <Hero />
               </section>
               <section id="about" className='max-w-7xl lg:mx-auto mt-4 pt-16'>
                    <About />
               </section>
               <section id="products" className="max-w-7xl lg:mx-auto md:mx-6 pt-16">
                    <h2 className='text-2xl md:text-3xl text-gray-800 font-semibold'>
                         {language === "en" ? "Our Products" : "ምርቶቻችን"}
                    </h2>
                    <p className='text-sm font-medium mt-3 md:text-lg text-gray-800'>
                         {language === "en" ?
                              "You can find a list of various software products developed by eleltech systems here."
                              :
                              "በእልልቴክ ሲስተምስ የበለጸጉ የተለያዩ የሶፍትዌር ምርቶችን እዚህ ያገኛሉ።"
                         }
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                         <p className='font-semibold text-sm md:text-xl'>
                              {language === "en" ? "#1 Dawit Ekub App" : "#1 Dawit Ekub (ዳዊት እቁብ) መተግበሪያ"}
                         </p>
                    </div>
                    <DawitEkub />
               </section>
               <section id="contact" className='max-w-7xl lg:mx-auto mt-4 py-16'>
                    <ContactUs />
               </section>
          </div>
     )
}
