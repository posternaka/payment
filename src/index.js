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
    // return lang.substr(0, 2).toLowerCase();
    return;
} 

const langMap = {
    en, es, fr, ja, nl, ru, zh,
}

const getData = () => {
    Object.entries(langMap[checkLang()] || langMap["ru"]).forEach(([key, value]) => {
        const items = document.querySelectorAll(`[data-text="${key}"]`);
        items.forEach((it) => it.innerHTML = value);
    })
}

getData()


