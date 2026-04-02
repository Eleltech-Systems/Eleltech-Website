import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import { ColorRing } from 'react-loader-spinner'

export default function ContactUs() {

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
          setErrorMessage(null);
          setSuccessMessage(null);
          setLoading(true);

          try {
               const res = await fetch("https://eleltech-website.onrender.com/contact", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
               });

               const result = await res.json();

               if (result.success) {
                    setSuccessMessage("Message sent successfully! Thank you for contacting us.");
                    reset(); // This is correct way to clear form
               } else {
                    setErrorMessage("Failed to send message");
               }

          } catch (error) {
               console.error(error);
               setErrorMessage("Error sending message");
          } finally {
               setLoading(false);
          }
     };


     return (
          <div className="bg-indigo-300/40 py-4 px-3 rounded-2xl md:py-16 lg:px-28 ">
               <h2 className="text-2xl font-semibold text-center md:text-3xl mb-8 md:mb-20">
                    Contact Us
               </h2>

               <div className="grid md:grid-cols-2 gap-10">
                    <div>
                         <h3 className="text-xl md:text-2xl font-semibold mb-4">
                              Eleltech Systems
                         </h3>
                         <p className="text-sm md:text-lg leading-relaxed text-justify">
                              If you have any questions, feedback, or suggestions regarding our products, please use this form to
                              contact us. We will be happy to hear from you.
                         </p>
                         <p className="flex text-sm items-center gap-3 font-semibold mt-4">
                              <TfiEmail color="orange" />
                              Email: eleltech21@gmail.com
                         </p>
                         <p className="flex text-sm items-center gap-3 font-semibold">
                              <FaLocationDot color="orange" />
                              Location: Addis Ababa, Ethiopia
                         </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                         <input
                              type="text"
                              placeholder="Full name"
                              {...register('name', { required: "Name is required *" })}
                              className="w-full focus:outline-none focus:border-2 border border-gray-400 p-3 mt-4 rounded"
                         />
                         {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}

                         <input
                              type="email"
                              placeholder="Email"
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
                              placeholder="Subject"
                              {...register('subject', { required: false })}
                              className="w-full focus:outline-none focus:border-2 border border-gray-400 p-3 mt-4 rounded"
                         />

                         <textarea
                              placeholder="Message"
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
                                   {loading ? <div className="flex items-center justify-center h-full">
                                        <ColorRing height="30" width="30" visible={loading} color="#36d7b7" />
                                   </div> : <span className="font-semibold text-sm">{"Send"}</span>}
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