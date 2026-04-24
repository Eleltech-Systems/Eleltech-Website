import { useContext, useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import { ColorRing } from 'react-loader-spinner';
import { LanguageContext } from './LanguageContext';

export default function ContactUs() {

     const { language } = useContext(LanguageContext);

     const [loading, setLoading] = useState(false);
     const [successMessage, setSuccessMessage] = useState(null);
     const [errorMessage, setErrorMessage] = useState(null);

     useEffect(() => {
          setTimeout(() => {
               setSuccessMessage(null)
               setErrorMessage(null)
          }, 6000);
     }, [successMessage, errorMessage])

     const { register, handleSubmit, reset, formState: { errors } } = useForm();

     const onSubmit = async (formData) => {
          setLoading(true);
          setErrorMessage(null);
          setSuccessMessage(null);

          try {
               const res = await fetch('/server/message/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
               });

               const data = await res.json();

               // Handle HTTP errors
               if (!res.ok) {
                    setErrorMessage(data?.message || "Something went wrong. Try again");
                    return;
               }

               // Handle success
               reset();
               setSuccessMessage("Message sent successfully! Thank you for contacting us.");

          } catch (error) {
               // Network error (no internet, server down, etc.)
               setErrorMessage("Network error. Please check your internet connection.");
          } finally {
               setLoading(false);
          }
     };


     return (
          <div className="bg-indigo-300/40 py-4 px-3 rounded-2xl md:py-16 lg:px-28 ">
               <h2 className="text-2xl font-semibold text-center md:text-3xl mb-8 md:mb-20">
                    {language === "en" ? "Contact Us" : "ያ ግ ኙ ን"}
               </h2>

               <div className="grid md:grid-cols-2 gap-10">
                    <div>
                         <h3 className="text-xl md:text-2xl font-semibold mb-4">
                              {language === "en" ? "Eleltech Systems" : "እልልቴክ ሲስተምስ (Eleltech Systems)"}
                         </h3>
                         <p className="text-sm md:text-lg leading-relaxed text-justify">
                              {language === "en" ?
                                   `If you have any questions, feedback, or suggestions regarding our products, 
                                    please use this form to contact us. We will be happy to hear from you.`
                                   :
                                   `ስለ ምርቶቻችን ማንኛውም ጥያቄ፣ አስተያየት ወይም ጥቆማ ካለዎት እባክዎ ይህንን ቅጽ በመጠቀም ያግኙን። 
                                    ከእርስዎ መስማት ደስ ያሰኘናል።
                                   `
                              }
                         </p>
                         <p className="flex text-sm items-center gap-3 font-semibold mt-4">
                              <TfiEmail color="orange" />
                              {language === "en" ? "Email: Eleltechsystems@gmail.com" : "ኢሜይል፦ Eleltechsystems@gmail.com"}
                         </p>
                         <p className="flex text-sm items-center gap-3 font-semibold">
                              <FaLocationDot color="orange" />
                              {language === "en" ? "Location: Addis Ababa, Ethiopia" : "መገኛ ቦታ፦ አዲስ አበባ፣ ኢትዮጵያ"}
                         </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                         <input
                              type="text"
                              placeholder={language === "en" ? "Full Name" : "ሙሉ ስም"}
                              {...register('fullname', { required: "Full name is required *" })}
                              className="w-full focus:outline-none focus:border-2 border border-gray-400 p-3 mt-4 rounded"
                         />
                         {errors.fullname && <span className="text-xs text-red-500">{errors.fullname.message}</span>}

                         <input
                              type="email"
                              placeholder={language === "en" ? "Email" : "ኢሜይል"}
                              {...register('email', {
                                   required: "Email is required *",
                                   pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Invalid email format"
                                   }
                              })}
                              className="w-full focus:outline-none focus:border-2 border border-gray-400 p-3 mt-4 rounded"
                         />
                         {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}

                         <input
                              type="text"
                              placeholder={language === "en" ? "Subject" : "ርዕሰ ጉዳይ"}
                              {...register('subject', { required: false })}
                              className="w-full focus:outline-none focus:border-2 border border-gray-400 p-3 mt-4 rounded"
                         />

                         <textarea
                              placeholder={language === "en" ? "Message" : "መልእክት"}
                              {...register('message', { required: "Write your message here" })}
                              className="w-full focus:outline-none focus:border-2 border border-gray-400 p-3 mt-4 rounded"
                              rows="5"
                         />
                         {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}

                         <div className="flex justify-end">
                              <button
                                   type="submit"
                                   disabled={loading}
                                   className="bg-orange-600 hover:bg-gray-600 text-white w-28 h-8 mt-3 rounded"
                              >
                                   {loading ?
                                        <div className="flex items-center justify-center h-full">
                                             <ColorRing height="30" width="30" visible={loading} color="#36d7b7" />
                                        </div>
                                        :
                                        <span className="font-semibold text-sm">
                                             {language === "en" ? "Send" : "ይላኩ"}
                                        </span>
                                   }
                              </button>
                         </div>
                    </form>
               </div>
               {successMessage &&
                    <div className="p-3 text-center max-w-138 mx-auto rounded-lg bg-green-600 mt-8">
                         <p className="text-white text-sm sm:text-base">{successMessage}</p>
                    </div>
               }
               {errorMessage &&
                    <div className="p-3 text-center max-w-138 mx-auto rounded-lg bg-red-600 mt-8">
                         <p className="text-white text-sm sm:text-base">{errorMessage}</p>
                    </div>
               }
          </div>
     );
}