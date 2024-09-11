// Бизнес логика

class WeatherModel {
    constructor(baseUrl, apiKey, allSettings){
        this.apiData = {
            url : baseUrl, 
            api: apiKey
        };
        this.allSettings = allSettings;
        this.currSettingParam = allSettings[0];
    }

    getApiUrl(cityName) {
        return `${this.apiData.url}?q=${cityName}&appid=${this.apiData.apiKey}&units=${this.currSettingParam}`;
    }

    changeTypeSettings(key){
        if (key === "deg"){
            this.currSettingParam = this.allSettings[0];
        }
        else if (key === "frn"){
            this.currSettingParam = this.allSettings[1];
        }
    }

}