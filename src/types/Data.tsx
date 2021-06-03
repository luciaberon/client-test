export interface Data {
    news: Article[],
    weather: Weather
}

interface Article {
    title: string,
    description: string,
    urlToImage: string,
    img: string,
    publishedAt: string
}

interface Weather {
    icon: string,
    description: string,
    temperature: number,
    humidity: number,
    maxTemperature: number,
    minTemperature: number
}