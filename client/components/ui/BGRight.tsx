import React from 'react'

function BGRight() {
   return (
      <div
         className="absolute inset-0 z-0"
         style={{
            backgroundImage: `
            linear-gradient(to right, #15803d 1px, transparent 1px),
            linear-gradient(to bottom, #15803d 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            WebkitMaskImage:
            "radial-gradient(ellipse 30% 130% at 100% 0%, #000 10%, transparent 50%)",
            maskImage:
            "radial-gradient(ellipse 30% 130% at 100% 0%, #000 2%, transparent 30%)",
         }}
      /> 
   )
}

export default BGRight