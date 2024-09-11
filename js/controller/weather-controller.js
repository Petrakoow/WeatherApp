// принимает запросы от пользователя и обращается к модели

class WeatherController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.bindChangeSettingsMetrics(this.handleChangeSettingsMetrics.bind(this));
        this.view.bindSearchWeather(this.handleSearchWeatherByCity.bind(this));
    }

    handleChangeSettingsMetrics(key){
        this.model.changeTypeSettings(key);
    }

    async handleSearchWeatherByCity(cityName) {
        try {
            const weatherData = await this.model.fetchWeatherData(cityName);
            const weatherMetric = this.model._currentTypeMetric;
            this.handleWeatherData(weatherData, weatherMetric);

        } catch (error) {
            console.error("Ошибка при получении данных о погоде:", error);
        }
    }

    handleWeatherData(weatherData, weatherMetric) {
        const weatherType = weatherData.weather[0].main;
        const imgSrc = this.model.getCurrentPathImg(weatherType);
        this.view.displayNewInformationAboutWeather(weatherMetric, weatherData, imgSrc);
    }
}