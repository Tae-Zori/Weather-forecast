export interface IUserInfo{
    city:string;
    lat:number;
    lon:number;
    query:string;
}

export interface IWeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust?: number;
    };
    clouds: {
        all: number;
    };
    rain?:{
        "1h": number,
        "3h"?: number,
    };
    snow?:{
        "1h": number,
        "3h"?: number,
    };
    dt: number;
    sys: {
        type?: number;
        id?: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface IAppProps {
    timeOfDay: string; // Предположим, что вы используете строковые значения для времени суток
}