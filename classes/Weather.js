class Weather {
    constructor(city) {
        this.city = city
        this.key = '9f6775d0501bfeb651cc6efcaf868354'
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }
}