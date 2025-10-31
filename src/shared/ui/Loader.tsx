import React from "react";
import clsx from "clsx";

interface LoaderProps {
    size?: "sm" | "md" | "lg";
    label?: string; // для доступности
    className?: string;
}

const sizeMap = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-10 h-10 border-[3px]",
};

const Loader: React.FC<LoaderProps> = ({ size = "md", label = "Загрузка...", className }) => {
    return (
        <div
            role="status"
            aria-live="polite"
            className={clsx("flex items-center justify-center", className)}
        >
      <span
          className={clsx(
              "inline-block rounded-full animate-spin border-current border-t-transparent text-amber-600 dark:text-amber-400",
              sizeMap[size]
          )}
      />
            <span className="sr-only">{label}</span>
        </div>
    );
};

export default Loader;
