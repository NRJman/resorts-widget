export interface ResortEntity {
    img: string;
    address: string;
    phone: number;
    price_category: string;
    weather: WeatherInformation;
    social_info: SocialInformation;
    type: string;
}

export interface TemperatureIndexes {
    celcius: number;
    fahrenheit: number;
}

export interface WeatherInformation {
    title: string;
    icon: string;
    water: TemperatureIndexes;
    temperature: TemperatureIndexes;
}

export interface SocialInformation {
    title: string;
    img: string;
    followers: number;
    following: number;
}