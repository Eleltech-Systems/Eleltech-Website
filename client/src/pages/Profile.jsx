import React, { useState } from 'react';
import { FaUserCircle, FaCopy, FaCheck } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import CopyText from '../components/CopyText';
import { useDispatch, useSelector } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice.js';
import { useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner'


export default function Profile() {
     const { currentUser } = useSelector((state) => state.user);
     const [loading, setLoading] = useState(false);
     const [loadingForDelete, setLoadingForDelete] = useState(false);
     const [messages, setMessages] = useState([]);
     const [errorMessages, setErrorMessages] = useState(null);
     const [deletingId, setDeletingId] = useState(null);
     const dispatch = useDispatch();

     useEffect(() => {
          const fetchMessages = async () => {
               setLoading(true);
               try {
                    const res = await fetch('https://eleltech-website.onrender.com/server/message/getmessages');
                    const data = await res.json();

                    if (res.ok) {
                         setLoading(false);
                         setMessages(data.messages);
                    }
               } catch (error) {
                    setLoading(false);
                    setErrorMessages("Network error. Please check your internet connection.");
                    // console.log(error.message); ---> Prints: Failed to execute 'json' on 'Response': Unexpected end of JSON input
               }
          };
          if (currentUser.isAdmin) {
               fetchMessages();
          }
     }, []);


     const handleDelete = async (messageId) => {
          setDeletingId(messageId);
          try {
               const res = await fetch(`https://eleltech-website.onrender.com/server/message/deleteMessage/${messageId}`, {
                    method: 'DELETE',
               });
               const data = await res.json();

               if (data.success === false) {
                    console.log(data.message);
                    return;
               }

               setMessages(messages.filter((message) => message._id !== messageId));
          } catch (error) {
               console.log(error.message);
          }
     };


     return (
          <div className='min-h-screen p-3'>

               {/* Loading State */}
               {loading && (
                    <div className="flex items-center justify-center min-h-[70vh]">
                         <ColorRing height="50" width="50" visible={true} color="#36d7b7" />
                    </div>
               )}

               {/* Error State */}
               {errorMessages && !loading && (
                    <div className="flex items-center justify-center min-h-[70vh]">
                         <p className="text-gray-600 text-lg text-center">
                              {errorMessages}
                         </p>
                    </div>
               )}

               {/* Content (only when no loading & no error) */}
               {!loading && !errorMessages && (
                    <div className="max-w-7xl mx-auto mt-16 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                         {messages && messages.map((msg) => (
                              <div
                                   key={msg._id}
                                   className="bg-white w-full rounded-lg shadow-md hover:shadow-2xl transition"
                              >
                                   <div className="flex bg-slate-300 items-center justify-between p-3 rounded-t-lg">
                                        <div className="flex items-center gap-2">
                                             <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                  <FaUserCircle className="w-full h-full text-gray-500" />
                                             </div>
                                             <div className="min-w-0">
                                                  <h3 className="text-xs sm:text-sm md:text-base font-semibold truncate">
                                                       {msg.fullname}
                                                  </h3>

                                                  <CopyText text={msg.email} />
                                             </div>
                                        </div>
                                        {deletingId === msg._id ?
                                             <div className="flex items-center justify-center h-full">
                                                  <ColorRing height="30" width="30" color="#36d7b7" />
                                             </div>
                                             :
                                             <button className='cursor-pointer' onClick={() => handleDelete(msg._id)}>
                                                  <MdDelete size={18} color="red" />
                                             </button>
                                        }
                                   </div>

                                   <div className="p-3">
                                        <h3 className="text-base font-semibold mb-2">{msg.subject}</h3>
                                        <p className="text-justify text-sm sm:text-base leading-relaxed">
                                             {msg.message}
                                        </p>
                                   </div>
                              </div>
                         ))}
                    </div>
               )}
          </div>
     )
}
