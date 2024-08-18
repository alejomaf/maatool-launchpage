import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {}
})
const app = createApp(App)
app.use(i18n)

loadLocaleMessages(i18n.global.locale as MessageLocales).then(() => {
  app.mount('#app')
});

type MessageLocales = keyof typeof i18n.global.messages;

export async function loadLocaleMessages(locale: MessageLocales): Promise<void> {
  if (i18n.global.availableLocales.includes(locale)) {
    i18n.global.locale = locale;
    return;
  }
  const messages = await import(`./locales/${locale}.json`);
  i18n.global.setLocaleMessage(locale, messages.default);
  i18n.global.locale = locale;
}

