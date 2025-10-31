import {useState} from 'react'
import React from "react";
import Header from "@/features/weather/components/Header/Header";
import Settings from "@/features/weather/components/main/settings";
import getWeatherData from "@/features/weather/api/useWeather";
import Loader from "@/shared/ui/Loader";

function App() {
    const [loading, setLoading] = useState<boolean>(false);
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)


    async function handleGetWeather(city: string) {
        try {
            setLoading(true);
            const data = await getWeatherData(city);
            setWeather(data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Header onSearch={handleGetWeather}/>
            <Settings
                onClick={()=> setTheme(theme)}
            />

            <main className={'main__layouts'}>
                {loading && <Loader/>}
                {error && <p>Ошибка: {String(error)}</p>}
                {weather && (
                    <div className={'weather__card'}>
                        <h1 className={'card__title'}>{weather.city ?? "Город"}</h1>
                        <p>{weather.current?.temperature_2m}°C</p>
                        <p>Ветер: {weather.current?.wind_speed_10m} м/с</p>
                    </div>
                )}
            </main>
        </>
    )
}

export default App
