"use client"
import { ReactNode } from "react";

interface ButtonProps {
   children: ReactNode;
   varient: 'default' | 'outline' | 'shine';
   size: 'sm' | 'md' | 'lg';
   className?: string;
   handleClick?: () => void;
}


function Button({ children, className, varient, size, handleClick }: ButtonProps) {

   const style =  {
      default: 'bg-linear-to-r from-emerald-700 to-emerald-950',
      outline: 'border border-emerald-800 text-white hover:bg-zinc-800/50',
      shine: 'bg-linear-to-r from-emerald-700 to-emerald-950 inset-shadow-[5px_5px_10px] inset-shadow-zinc-900 hover:inset-shadow-neutral-800 '
   }

   const defaultStyle = 'active:translate-y-0.5 outline-0 cursor-pointer transition-all duration-300 text-zinc-300/90 text-shadow-lg'

   const sizes = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4.5 py-1.5',
      lg: 'px-7 py-2 text-xl'
   }
   return (
      <button 
         className={`${className} ${defaultStyle} ${sizes[size]} ${style[varient]}`}
         onClick={handleClick}
      >
         {children}
      </button>
   )
}

export default Button