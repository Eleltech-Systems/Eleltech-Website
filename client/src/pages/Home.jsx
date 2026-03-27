import { useEffect, useState } from 'react';
import About from '../components/About';
import ContactUs from '../components/ContactUs';
import Hero from '../components/Hero';
import DawitEkub from '../components/products/dawit-ekub/DawitEkub';
import { translations } from '../utils/translation';

export default function Home() {

     // Fetch initial language, default to 'en'
     const [lang, setLang] = useState(localStorage.getItem('appLang') || 'en');

     // Update localStorage when language changes
     useEffect(() => {
          localStorage.setItem('appLang', lang);
     }, [lang]);

     const toggleLanguage = () => {
          setLang(prevLang => (prevLang === 'en' ? 'am' : 'en'));
     };

     // console.log(lang)

     return (
          <div className='bg-linear-to-r from-blue-200 via-amber-100 to-orange-200 p-3'>
               <section id="home" className="pt-20">
                    <Hero />
               </section>
               <section id="about" className='max-w-7xl lg:mx-auto mt-4 pt-16'>
                    <About />
               </section>
               <section id="products" className="max-w-7xl lg:mx-auto md:mx-6 pt-16">
                    <h2 className='text-2xl md:text-3xl text-gray-800 font-semibold'>Our Products</h2>
                    <p className='text-sm font-medium mt-3 md:text-lg text-gray-800'>
                         You can find a list of various products developed by eleltech systems here.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                         <p className='font-semibold text-sm md:text-xl'>#1 Dawit Ekub App - </p>
                         <h1 className='pb-1'>👉</h1>
                         <button onClick={toggleLanguage} className='bg-orange-600 px-2 pb-0.5 md:px-3 text-sm text-center rounded-sm text-white cursor-pointer'>
                              {translations[lang].button}
                         </button>

                    </div>
                    <DawitEkub lang={lang} />
               </section>
               <section id="contact" className='max-w-7xl lg:mx-auto mt-4 py-16'>
                    <ContactUs />
               </section>
          </div>
     )
}
