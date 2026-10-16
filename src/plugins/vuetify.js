import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true, // Принудительно включаем тёмную тему по умолчанию
    themes: {
      light: {
        // Светлая тема (можно оставить как есть или тоже изменить)
        primary: colors.blue,
        secondary: colors.blueGrey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.lightBlue.lighten4,
        footer: colors.lightBlue
      },
      dark: {
        // Тёмная тема в стиле CS2
        primary: "#f0b429",        // Золотой/песочный акцент
        secondary: "#444444",      // Стальной серый
        accent: "#ff4655",         // Красный акцент
        error: "#f44336",          // Красный для ошибок
        info: "#2196f3",           // Синий для информации
        success: "#4caf50",        // Зелёный для успеха
        warning: "#ff9800",        // Оранжевый для предупреждений
        background: "#15171c",     // Очень тёмный фон
        surface: "#1e222b",        // Цвет для карточек и панелей
        footer: "#1a1d23"          // Цвет футера
      }
    }
  }
});
