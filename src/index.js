import './assets/styles/main.css';
import './assets/styles/reset.css';

import en from './Localizations/en.json';
import es from './Localizations/es.json';
import fr from './Localizations/fr.json';
import ja from './Localizations/ja.json';
import nl from './Localizations/nl.json';
import ru from './Localizations/ru.json';
import zh from './Localizations/zh.json';

const checkLang = () => {
    const lang = window.navigator ? (window.navigator.language ||
        window.navigator.systemLanguage ||
        window.navigator.userLanguage) : "en";
    getData(lang.substr(0, 2).toLowerCase());
} 

const langMap = {
    en, es, fr, ja, nl, ru, zh,
}

const createHeader = (restore) => {
    return `
        <header>
            <nav class="flex-row">
                <a href="#">&#10006;</a>
                <a href="#">${restore}</a>
            </nav>
        </header>
    `
}

const createSection = (title, text1, text2, text3, subtitle1, subtitle2, priceMonth, priceYear, countPriceYear, discount, freeUse, notFreeUse, textBtn) => {
    return `
        <section>
            <div class="wrapper">
                <div class="flex-column">
                    <h1 class="title">${title}</h1>
                    <div class="info">
                        <div class="info-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15">
                                <g fill="none" fill-rule="evenodd">
                                    <g fill-rule="nonzero" stroke="#FFF" stroke-width="2.258">
                                        <g>
                                            <g>
                                                <path d="M5.833 0c2.148 0 4.093 1.944 5.834 5.833-1.741 3.89-3.686 5.834-5.834 5.834C2.612 11.667 0 9.055 0 5.833 0 2.612 2.612 0 5.833 0zM17.5 0c3.222 0 5.833 2.612 5.833 5.833 0 3.222-2.611 5.834-5.833 5.834-2.148 0-4.092-1.945-5.833-5.834C13.407 1.944 15.352 0 17.5 0z" transform="translate(-86.000000, -333.000000) translate(87.333333, 324.000000) translate(0.000000, 10.424731)"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p>${text1}</p>
                        </div>
                        <div class="info-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                                <g fill="none" fill-rule="evenodd">
                                    <g fill-rule="nonzero" stroke="#FFF" stroke-width="2.258">
                                        <g>
                                            <g>
                                                <path d="M17.346 1.152l-1.97 12.84-2.736-2.77c-3.906.836-7.61 3.423-11.058 7.849l-.298.387-.015-.104c-.127-1.04.02-2.295.352-3.68l.087-.35c.787-3.055 2.43-6.674 5.32-9.524h0L4.136 2.63l13.21-1.478z" transform="translate(-89.000000, -360.000000) translate(87.333333, 324.000000) translate(2.333333, 36.241935)"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p>${text2}</p>
                        </div>
                        <div class="info-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                                <g fill="none" fill-rule="evenodd">
                                    <g fill="#FFF" fill-rule="nonzero">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M1.167 12.858c.644 0 1.166.523 1.166 1.167v2.414c0 1.23.998 2.228 2.228 2.228h2.566c.644 0 1.166.522 1.166 1.166 0 .645-.522 1.167-1.166 1.167H4.56C2.04 21 0 18.958 0 16.44v-2.415c0-.644.522-1.167 1.167-1.167zm18.666-.046c.645 0 1.167.522 1.167 1.166v2.461C21 18.96 18.958 21 16.44 21h-2.448c-.644 0-1.166-.522-1.166-1.167 0-.644.522-1.166 1.166-1.166h2.447c1.23 0 2.228-.998 2.228-2.228v-2.46c0-.645.522-1.167 1.166-1.167zm-3.394 1.082c.469 0 .849.38.849.848 0 .469-.38.849-.849.849H4.561c-.469 0-.849-.38-.849-.849 0-.468.38-.848.849-.848h11.878zm0-4.242c.469 0 .849.38.849.848 0 .469-.38.848-.849.848H4.561c-.469 0-.849-.38-.849-.848 0-.469.38-.848.849-.848h11.878zm0-9.652C18.96 0 21 2.042 21 4.56v3.448c0 .644-.522 1.166-1.167 1.166-.644 0-1.166-.522-1.166-1.166V4.56c0-1.23-.998-2.228-2.228-2.228h-2.536c-.645 0-1.167-.522-1.167-1.166 0-.645.522-1.167 1.167-1.167h2.536zM7.101 0c.644 0 1.167.522 1.167 1.167 0 .644-.523 1.166-1.167 1.166H4.56c-1.23 0-2.228.998-2.228 2.228v2.613c0 .645-.522 1.167-1.166 1.167C.522 8.34 0 7.819 0 7.174V4.561C0 2.04 2.042 0 4.56 0H7.1zm9.338 5.41c.469 0 .849.379.849.848 0 .468-.38.848-.849.848H4.561c-.469 0-.849-.38-.849-.848 0-.469.38-.849.849-.849h11.878z" transform="translate(-88.000000, -389.000000) translate(87.333333, 324.000000) translate(1.166667, 0.000000) translate(0.000000, 65.500000)"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p>${text3}</p>
                        </div>
                    </div>
                    <div class="menu">
                        <div class="menu-item active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="147" height="180" viewBox="0 0 147 180">
                                <g fill="none" fill-opacity=".197" fill-rule="evenodd">
                                    <g fill="#495795" stroke="#495795">
                                        <g transform="translate(-38.000000, -467.000000) translate(36.000000, 468.000000)">
                                            <rect width="144.387" height="178" x="3.307" rx="20.9"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <div class="position menu-position">
                                <p class="menu-title">${subtitle1}</p>
                                <p class="menu-price-total">${priceMonth}</p>
                                <div class="menu-stripe">
                                    <p class="menu-days">${freeUse}</p>
                                </div>
                                <p class="menu-price-month">${countPriceYear}</p>
                            </div>
                        </div>
                        <div class="menu-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="147" height="180" viewBox="0 0 147 180">
                                <g fill="none" fill-opacity=".197" fill-rule="evenodd">
                                    <g fill="#495795" stroke="#495795">
                                        <g>
                                            <g>
                                                <path d="M115.967 3c-4.105 3.931-6.66 9.467-6.66 15.6h0v.8c0 11.93 9.67 21.6 21.6 21.6h.8c6.336 0 12.035-2.729 15.987-7.075V160.1c0 11.543-9.358 20.9-20.9 20.9H24.206c-11.543 0-20.9-9.357-20.9-20.9V23.9c0-11.543 9.357-20.9 20.9-20.9z" transform="translate(-191.000000, -467.000000) translate(43.000000, 465.000000) translate(146.000000, 0.000000)"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <div class="circle">
                                <p>${discount}</p>
                            </div>
                            <div class="position menu-position">
                                <p class="menu-title">${subtitle2}</p>
                                <p class="menu-price-total" >${priceYear}</p>
                                <div class="menu-stripe">
                                    <p class="menu-days">${notFreeUse}</p>
                                </div>
                                <p class="menu-price-month">${countPriceYear}</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="btn">${textBtn}</a>
                </div>
            </div>
        </section>
    `
}

const createFooter = (text, leftText, rightText) => {
    return `
        <footer>
            <div class="flex-column">
                <p class="footer-text">${text}</p>
                <div class="copyright flex-row">
                    <a href="#">${leftText}</a>
                    <a href="#">${rightText}</a>
                </div>
            </div>
        </footer>
    `
}

const getData = (lang) => {
    const container = document.querySelector('.container');
    const myLang = langMap[lang] || langMap["en"];

    container.innerHTML = container.innerHTML + createHeader(myLang.Restore);
    container.innerHTML = container.innerHTML + createSection(
        myLang['Unlimited Access<br>to All Features'],
        myLang['Unlimited documents'],
        myLang['Count mode'],
        myLang['Text recognition (OCR)'],
        myLang['Monthly'],
        myLang['Annually'],
        myLang['<strong>{{price}}</strong><br>per month'],
        myLang['<strong>{{price}}</strong><br>per year'],
        myLang['{{price}}/month'],
        myLang['-83%'],
        myLang['3 DAYS FREE'],
        myLang['MOST POPULAR'],
        myLang['Continue']
    );
    container.innerHTML = container.innerHTML + createFooter(
        myLang['Auto-renewable. Cancel anytime.'],
        myLang['Terms of Use'],
        myLang['Privacy Policy'],
    );
};

const toggleActiveCard = () => {
    let menu = document.querySelector(".menu");
    let items = menu.querySelectorAll(".menu-item");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}
 
checkLang();
toggleActiveCard();