
function BGLeft() {
   return (
      <div className="min-h-screen w-full relative">
         <div
            className=" absolute inset-0 z-0"
            style={{
               backgroundImage: `
               linear-gradient(to right, #15803d 1px, transparent 1px),
               linear-gradient(to bottom, #15803d 1px, transparent 1px)
               `,
               backgroundSize: "20px 20px",
               WebkitMaskImage:
               "radial-gradient(ellipse 30% 150% at 0% 100%, #000 2%, transparent 30%)",
               maskImage:
               "radial-gradient(ellipse 30% 150% at 0% 100%, #000 2%, transparent 30%)",
            }}
            />
      </div>
   )
}

export default BGLeft


// {/* <div className="min-h-screen w-full bg-[#f8fafc] relative">
//   {/* Bottom Fade Grid Background */}
//   <div
//     className="absolute inset-0 z-0"
//     style={{
//       backgroundImage: `
//         linear-gradient(to right, #e2e8f0 1px, transparent 1px),
//         linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
//       `,
//       backgroundSize: "20px 30px",
//       WebkitMaskImage:
//         "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
//       maskImage:
//         "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
//     }}
//   />
//      {/* Your Content/Components */}
// </div> */}