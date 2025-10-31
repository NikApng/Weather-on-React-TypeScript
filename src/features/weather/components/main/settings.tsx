import React, {useCallback, useState} from 'react';
import '@/index.css'
import Button from '@/shared/ui/Button'



const  Settings: React.FC = ()=> {
    const [theme, nextTheme] = useState<'dark' | 'light'>(()=>{
        const save = localStorage.getItem('theme')
        if(save === 'dark' || save === 'light'){
            document.documentElement.classList.toggle('dark', save === 'dark');
            return save;
        }
    })

    const onToggleTheme = useCallback(()=>{
        nextTheme(prev => {
                const nextTheme = prev === 'dark' ? 'light' : 'dark';

                const root = document.documentElement
                root.classList.toggle('dark', nextTheme === 'dark')

            localStorage.setItem('theme', nextTheme)
            console.log(nextTheme)
            return nextTheme;
        })
    }, [theme])

    return (
        <div className={'buttons--container'}>
            <Button
            onClick={() => {console.log('123')}}
            >Cменить вид температуры</Button>
            <Button onClick={onToggleTheme}>
                Смена темы: {theme === 'dark' ? '🌙' : '☀️'}
            </Button>
        </div>
    );
}

export default Settings;