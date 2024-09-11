// Бизнес логика

class WeatherModel {
    constructor(allSettings){
        this.apiData = {
            url : allSettings.baseUrl, 
            key: allSettings.apiKey
        };
        this.allSettings = allSettings.typeMetrics;
        this.currSettingParam = allSettings.typeMetrics[0];
        this.allStatesWeather = allSettings.types;
    }

    get _currentTypeMetric(){
        return this.currSettingParam;
    }

    getApiUrl(cityName) {
        return `${this.apiData.url}?q=${cityName}&appid=${this.apiData.key}&units=${this.currSettingParam}`;
    }

    getCurrentPathImg(weatherType){
        const weather = this.allStatesWeather.find(state => state.type === weatherType);
        if (weather) {
            return weather.src;
        }
        else{
            console.error("Неизвестный тип погоды:", weatherType);
            return null;
        }
    }

    changeTypeSettings(key){
        if (key === "deg"){
            this.currSettingParam = this.allSettings[0];
        }
        else if (key === "frn"){
            this.currSettingParam = this.allSettings[1];
        }
    }

    async fetchWeatherData(cityName) {
        const url = this.getApiUrl(cityName);
        const response = await fetch(url);
        
        if (!response.ok) {
            console.error("Ошибка при запросе к API");
            throw new Error("Ошибка при запросе к API");
        }

        return await response.json();
    }

}