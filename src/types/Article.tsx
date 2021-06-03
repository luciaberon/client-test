export interface Data {
    news: Article[],
    weather: Weather[]
}

interface Article {
    title: string,
    description: string,
    url: string,
    img: string,
    date: string
}

interface Weather {
    icon: string,
    description: string,
    temperature: number,
    humidity: number,
    maxTemperature: number,
    minTemperature: number
}