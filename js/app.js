async function init(){
    try {
        const response = await fetch("/configs/api-info.json");
        if (!response.ok){
            throw new Error("Ошибка при загрузки конфигурации");
        }

        const config = await response.json();

        const model = new WeatherModel(config);
        const view = new WeatherView();
        const controller = new WeatherController(model, view);

    } catch (error) {
        console.error("Ошибка при инициализации приложения", error);
    }
}

document.addEventListener('DOMContentLoaded', init);