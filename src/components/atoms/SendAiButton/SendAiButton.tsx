import React from "react";

export interface SendAiButtonProps {
    onClick?: () => void;
}

const SendAiButton= ({onClick}: SendAiButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="
            flex items-center gap-2
            px-5 py-2
            rounded-xl
            text-white
            font-medium
            bg-gradient-to-r from-[#3B3BFA] to-[#7B3BFA]
            hover:opacity-90
            active:scale-95
            transition-all
            shadow-md
            "
        >
            {/* Paper Plane Icon */}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.8}
                stroke='currentColor'
                className='w-5 h-5'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 12l16.5-9-4.5 9 4.5 9-16.5-9z'
                />
            </svg>

            Send
        </button>
    );
};

export default SendAiButton;
