import React, {useState} from 'react';
import Input from "@/shared/ui/Input";
import Button from '@/shared/ui/Button'

interface HeaderProps {
    onSearch?: (city: string) => void;
}

function Header({onSearch}:HeaderProps) {
    const [value, setValue] = useState<string>('');
    return (
        <header>
            <h1 className={'Header__Title'}>мини приложение Погоды</h1>

            <div className="input__search--container">
                <Input
                    label="Введите город"
                    placeholder="Например: Amsterdam"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onSearch?.(value)}
                    error={value.length > 20 ? "Слишком длинное название" : undefined}
                />
                <Button
                    onClick={() => onSearch(value)}
                >
                поиск
                </Button>
            </div>
        </header>
    );
}

export default Header;