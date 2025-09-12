import { ReactNode } from "react";

interface ButtonProps {
   children: ReactNode;
   varient: 'default' | 'outline' | 'shine';
   size: 'sm' | 'md' | 'lg';
   className?: string;
}


function Button({ children, className, varient, size }: ButtonProps) {

   const style =  {
      default: '',
      outline: '',
      shine: ''
   }

   const sizes = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4.5 py-1.5',
      lg: 'px-7 py-2 text-xl'
   }
   return (
      <button 
         className={`${className} outline-0 cursor-pointer bg-red-500 ${sizes[size]} ${style[varient]}`}
      >
         {children}
      </button>
   )
}

export default Button