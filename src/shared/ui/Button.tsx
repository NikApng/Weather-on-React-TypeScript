import  React, { ReactNode } from "react";

interface ButtonProps {
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger" | "glass";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
                                           onClick,
                                           type = "button",
                                           variant = "primary",
                                           size = "md",
                                           disabled = false,
                                           className,
                                           ariaLabel,
                                           children,
                                       }) => {

    const baseStyles =
        "inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-1 disabled:opacity-50 disabled:cursor-not-allowed";


    const variantStyles: Record<string, string> = {
        primary:
            "bg-red hover:bg-red-700 text-white focus:ring-red",
        secondary:
            "bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 text-white focus:ring-gray-400",
        danger:
            "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
        glass:
            "bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/40 dark:hover:bg-white/20 text-dark-primary dark:text-light-primary shadow-md",
    };

    const sizeStyles: Record<string, string> = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base",
    };

    const classes = [
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
    ].filter(Boolean).join(" ");


    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classes}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default Button;
