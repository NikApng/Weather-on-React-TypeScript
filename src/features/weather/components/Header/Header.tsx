import React, {useState} from 'react';
import Input from "@/shared/ui/Input";

interface HeaderProps {
    onSearch?: (city: string) => void;
}

function Header({onSearch}:HeaderProps) {
    const [value, setValue] = useState<string>('');
    return (
        <header>
            <h1>мини приложение Погоды</h1>

            <div className="max-w-sm mx-auto mt-10">
                <Input
                    label="Введите город"
                    placeholder="Например: Amsterdam"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onSearch?.(value)}
                    error={value.length > 20 ? "Слишком длинное название" : undefined}
                />
            </div>
        </header>
    );
}

export default Header;