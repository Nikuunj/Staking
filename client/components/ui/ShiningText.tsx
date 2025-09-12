"use client";

import { motion } from "framer-motion";

function ShiningText({ text }: { text: string }) {
   return (
      <motion.span
         className="uppercase bg-gradient-to-r from-[#16a34a] via-[#facc15] to-[#22c55e] bg-clip-text text-transparent"
         style={{ backgroundSize: "300% 300%" }}
         animate={{ backgroundPosition: ["0% 50%", "100% 50%", "50% 0%"] }}
         transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      >
         {text}
      </motion.span>
   );
}

export default ShiningText;
