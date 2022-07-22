import { EventEmitter } from "events";

export default class Language extends EventEmitter {
    constructor() {
        super();

        this.language = "en";

        this.toggleButtonLang = document.querySelector(".toggle-button-language");
        this.toggleCircleLang = document.querySelector(".toggle-circle-language");


        this.setEventListeners();
    }

    setEventListeners() {
        this.toggleButtonLang.addEventListener("click", () => {
            this.toggleCircleLang.classList.toggle("slide");
            this.language = this.language === "en" ? "zh" : "en";

            var englishTags = document.querySelectorAll(".en");
            var chineseTags = document.querySelectorAll(".zh");

            if (this.language === "en") {
                document.querySelector(".intro-text").innerHTML = "Imagine Animals Happy!";
                for (let i=0; i<englishTags.length; i++) {
                    englishTags[i].style.display="block";
                    chineseTags[i].style.display="none";
                }
            } else {
                document.querySelector(".intro-text").innerHTML = "Lorem ipsum dolor!"
                for (let i=0; i<englishTags.length; i++) {
                    englishTags[i].style.display="none";
                    chineseTags[i].style.display="block";
                }
            }


           
            document.body.classList.toggle("EN-Lang");
            document.body.classList.toggle("CN-Lang");
            // console.log(this.theme);

        });
    }
}
