import React, {useState, useEffect, type ReactNode} from "react";
import Button from "@/shared/ui/Button";

interface ModalProps {
    onClose: () => void;
    title?: string;
    children?: ReactNode;
    onCreate?: (name?: string) => void;
    isInput?: boolean;
    inputPlaceholder?: string;
}

const Modal: React.FC<ModalProps> = ({
                                         onClose,
                                         title = "...",
                                         onCreate,
                                         isInput = false,
                                         inputPlaceholder = "Введите название",
                                         children,
                                     }) => {
    const [name, setName] = useState("");
    const [entered, setEntered] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setEntered(true));
        return () => cancelAnimationFrame(id);
    }, []);

    const handleCreate = () => {
        if (isInput && !name.trim()) return;
        onCreate?.(isInput ? name.trim() : undefined);
        setName("");
        onClose();
    };

    return (
        <div
            data-state={entered ? "open" : "closed"}
            onClick={onClose}
            className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/50 backdrop-blur-sm
        transition-opacity duration-300 ease-out
        data-[state=open]:opacity-100 data-[state=closed]:opacity-0
        data-[state=closed]:pointer-events-none
      "
        >
            <div
                data-state={entered ? "open" : "closed"}
                onClick={(e) => e.stopPropagation()}
                className="
          bg-white rounded-2xl shadow-xl p-6 w-full max-w-3xl md:max-w-4xl
          border border-gray-200
          transition-transform duration-300 ease-out
          data-[state=open]:scale-100 data-[state=closed]:scale-95
        "
            >
                <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>

                {isInput ? (
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={inputPlaceholder}
                        className="w-full p-2 mb-6 border rounded-lg outline-none border-gray-300 bg-gray-50 text-gray-800"
                    />
                ) : (
                    <div className="text-gray-700 text-center mb-6">{children}</div>
                )}

                <div className="flex justify-center gap-3">
                    <Button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
                        Закрыть
                    </Button>
                    <Button
                        type="button"
                        onClick={handleCreate}
                        className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition"
                    >
                        Перейти к каталогу
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
