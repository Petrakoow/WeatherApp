// Отображение данных

class WeatherView {
    constructor(){
        this.app = this.getElement('#card');
    }

    getElement(selectors){
        return document.querySelector(selectors);
    }

    deleteClass(selectorClass){
        const element = this.getElement('#select-setting');
        element.classList.remove(selectorClass);
    }

    addClass(selectorClass){
        const element = this.getElement('#select-setting');
        element.classList.add(selectorClass);
    }
}