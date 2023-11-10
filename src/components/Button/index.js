import React from "react";
const variants = {
    'red': 'bg-red-500 text-white font-poppins text-center hover:enabled:bg-red-400 hover:border  hover:border-4 hover:border-gray-800 rounded-lg',
    'black': 'bg-black text-white font-poppins text-center hover:enabled:bg-gray-800 hover:border  hover:border-4 hover:border-gray-800 rounded-md',
    'white': 'bg-white text-black font-poppins text-center font-semibold border border-2 border-neutral-900 hover:bg-gray-300  hover:border-4 hover:border-gray-800 rounded-md',
}

const sizes = {
    'small': 'px-1 py-2 text-xs hover:text-xs',
    'medium': 'px-2 py-2 text-sm',
    'large': 'px-2 py-1 text-[13px] w-52 h-16 ',
    'full': 'px-2 py-1 text-[13px]  h-10 w-full',
    'square': 'w-12 h-12'
}

const Button = ({ className, variant = 'red', size = 'large', ...props }) => {
    return (
        <>
            <button className={`${className} ${variants[variant]} ${sizes[size]} `}
                {...props} />
        </>
    );
}
export default Button;

