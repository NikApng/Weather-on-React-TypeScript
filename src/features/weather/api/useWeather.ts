async function getWeatherData(city: string) {

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=ru`;

    if (!city) return null;
    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        const { latitude, longitude, name, country } = data.results[0];

        console.log(data)
        const temp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code&timezone=auto
    `);
        if(!temp.ok) throw new Error(temp.statusText)
        const weatherData = await temp.json();
        return {
            city: name,
            country,
            latitude,
            longitude,
            current: weatherData.current,
        };


    } catch (err) {
        console.log('Ошибка при запросе погоды:', err)
        return null
    }
}

export default getWeatherData