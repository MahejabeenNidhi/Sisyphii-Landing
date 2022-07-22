import { EventEmitter } from "events";

export default class Language extends EventEmitter {
    constructor() {
        super();

        this.toggleButtonLang = document.querySelector(".toggle-button-language");
        this.toggleCircleLang = document.querySelector(".toggle-circle-language");


        this.setEventListeners();
    }

    setEventListeners() {
        this.toggleButtonLang.addEventListener("click", () => {
            this.toggleCircleLang.classList.toggle("slide");
            // console.log(this.theme);
        });
    }
}
