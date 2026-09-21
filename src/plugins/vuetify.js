import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";
import ru from 'vuetify/lib/locale/ru'; // 1. Импортируем русскую локализацию

Vue.use(Vuetify);

export default new Vuetify({
  // 2. Добавляем блок lang с настройками языка
  lang: {
    locales: { ru },
    current: 'ru',
  },
  theme: {
    themes: {
      light: {
        primary: colors.blue,
        secondary: colors.blueGrey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.lightBlue.lighten4,
        footer: colors.lightBlue
      },
      dark: {
        primary: colors.teal,
        background: colors.grey.darken3,
        footer: colors.teal
      }
    }
  }
});import Vue from "vue";
import Vuetify from "vuetify/lib";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue,
        secondary: colors.blueGrey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.lightBlue.lighten4,
        footer: colors.lightBlue
      },
      dark: {
        primary: colors.teal,
        background: colors.grey.darken3,
        footer: colors.teal
      }
    }
  }
});
