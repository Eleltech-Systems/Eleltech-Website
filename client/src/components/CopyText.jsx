import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const CopyText = ({ text }) => {
     const [copied, setCopied] = useState(false);

     const handleCopy = async () => {
          try {
               await navigator.clipboard.writeText(text);
               setCopied(true);

               setTimeout(() => setCopied(false), 2000);
          } catch (err) {
               console.error("Failed to copy:", err);
          }
     };

     return (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
               <span className="text-xs sm:text-sm md:text-base text-gray-600">{text}</span>

               <button
                    onClick={handleCopy}
                    style={{
                         border: "none",
                         background: "transparent",
                         cursor: "pointer",
                    }}
               >
                    {copied ? <FaCheck size={12} color="green" /> : <FaCopy size={10} color="grey" />}
               </button>
          </div>
     );
};

export default CopyText;