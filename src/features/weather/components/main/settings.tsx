import React from 'react';
import Button from '@/shared/ui/Button'

function Settings(props) {
    return (
        <div>
            <Button
            onClick={() => {console.log('123')}}
            >Cменить вид температуры</Button>
            <Button
                onClick={() => {console.log('123')}}
            >Сменить тему</Button>
        </div>
    );
}

export default Settings;