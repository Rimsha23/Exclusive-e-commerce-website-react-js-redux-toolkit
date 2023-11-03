import React from "react";
const variants = {
    'red': 'bg-red-600 text-white text-center hover:enabled:bg-red-500 hover:border  hover:border-4 hover:border-gray-800 rounded-lg',
    'black': 'bg-black text-white text-center hover:enabled:bg-gray-800 hover:border  hover:border-4 hover:border-gray-800 rounded-md',
    'white': 'bg-white text-black text-center font-semibold border border-2 border-neutral-900 hover:bg-gray-300  hover:border-4 hover:border-gray-800 rounded-md',
}

const sizes = {
    'small': 'px-1 py-2 text-xs hover:text-xs',
    'medium': 'px-2 py-2 text-sm',
    'large': 'px-2 py-1 text-[13px] w-52 h-12 ',
    'full': 'px-2 py-1 text-[13px]  h-10 w-full'

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

