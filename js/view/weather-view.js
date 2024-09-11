// Отображение данных

class WeatherView {
    constructor(){
        this.app = this.getElement('.card');
        this.degrees = this.getElement('#degrees-id');
        this.fahrenheit = this.getElement('#fahrenheit-id');
        
        this.input = this.getElement(".search input");
        this.btn = this.getElement(".search button");

        this.city = this.getElement(".city");
        this.temp = this.getElement(".temperature");
        this.humidity = this.getElement(".humidity");
        this.wind = this.getElement(".wind");

        this.weatherImg = this.getElement(".weather-icon");
    }

    get _cityName(){
        return this.input.value;
    }

    getElement(selectors){
        return document.querySelector(selectors);
    }

    _removeClass(element, selectorClass) {
        element.classList.remove(selectorClass);
    }

    _addClass(element, selectorClass) {
        element.classList.add(selectorClass);
    }

    _hasClass(element, selectorClass) {
        return element.classList.contains(selectorClass);
    }

    bindChangeSettingsMetrics(handler){
        if (!this.degrees || !this.fahrenheit){
            console.error("Не все необходимые элементы инициализированы");
            return;
        }
        const toggleClass = (activeElement, inactiveElement, className) => {
            if (!this._hasClass(activeElement, className)){
                this._addClass(activeElement, className);
                this._removeClass(inactiveElement, className);
                handler(activeElement.getAttribute('data-type'));
            } else {
                this._removeClass(inactiveElement, className);
            }
        };

        this.degrees.addEventListener('click', () => {
            toggleClass(this.degrees, this.fahrenheit, 'select-settings')
        });
        this.fahrenheit.addEventListener('click', () => {
            toggleClass(this.fahrenheit, this.degrees, 'select-settings')
        });
    }

    bindSearchWeather(handler){
        if (!this.btn || !this.input){
            console.error("Не все необходимые элементы инициализированы");
            return;
        }

        this.btn.addEventListener('click', () => {
            handler(this._cityName);
        });
    }

    displayNewInformationAboutWeather(metric, jsonData, imgSrc) {
        this.city.innerHTML = jsonData.name;
        this.temp.innerHTML = `${Math.round(jsonData.main.temp)}${metric === 'standard' ? '°F' : '°C'}`;
        this.humidity.innerHTML = `${jsonData.main.humidity} %`;
        this.wind.innerHTML = `${jsonData.wind.speed} км/ч`;

        if (this.weatherImg) {
            this.weatherImg.src = imgSrc;
        }
    }
}