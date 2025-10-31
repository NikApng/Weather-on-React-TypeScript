import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
const Input: React.FC<InputProps> = ({
                                         label,
                                         error,
                                         leftIcon,
                                         rightIcon,
                                         className,
                                         ...props
                                     }) => {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}

            <div
                className={clsx(
                    "flex items-center gap-2 rounded-xl border px-3 py-2 transition-all",
                    error
                        ? "border-red-500 focus-within:border-red-600"
                        : "border-gray-300 focus-within:border-amber-500 dark:border-white/10",
                    "bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100",
                    className
                )}
            >
                {leftIcon && <span className="text-gray-500 dark:text-gray-400">{leftIcon}</span>}
                <input
                    {...props}
                    className={clsx(
                        "flex-1 bg-transparent outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500",
                    )}
                />
                {rightIcon && <span className="text-gray-500 dark:text-gray-400">{rightIcon}</span>}
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
