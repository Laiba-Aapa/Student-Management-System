import { FC, ButtonHTMLAttributes } from 'react';

interface LightPurpleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
}

const LightPurpleButton: FC<LightPurpleButtonProps> = ({ children, fullWidth = false, ...props }) => {
    return (
        <button
            className={`bg-purple-600 text-white hover:bg-purple-700 py-2 px-4 rounded-md ${fullWidth ? 'w-full' : ''
                }`}
            {...props}
        >
            {children}
        </button>
    );
};

export default LightPurpleButton;