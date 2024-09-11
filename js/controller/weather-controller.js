// принимает запросы от пользователя и обращается к модели

class WeatherController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.bindChangeSettingsMetrics();
    }

    handleChangeSettingsMetrics(key){
        this.model.changeTypeSettings(key);
        
    }
}