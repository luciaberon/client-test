export interface Data {
    newsList: Articles,
    weatherForecast: WeatherForecast
}

export interface Articles {
    articles: Article[]
}
interface Article {
    title: string,
    description: string,
    urlToImage: string,
    img: string,
    publishedAt: string
}

export interface WeatherForecast {
    weather: Weather[],
    main: Main
}

interface Weather {
    main: string,
    description: string,
    icon: string
}

interface Main {
    temp: number,
    temp_min: number,
    temp_max: number
}

export interface History {
    id: number,
    city: string
}