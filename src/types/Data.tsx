export interface Data {
    newsList: Articles,
    weatherForecast: Weather
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

export interface Weather {
    icon: string,
    description: string,
    temperature: number,
    humidity: number,
    maxTemperature: number,
    minTemperature: number
}