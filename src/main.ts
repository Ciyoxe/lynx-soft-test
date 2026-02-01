import { createApp } from "vue";

import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { ru } from "vuetify/locale";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";

createApp(App)
    .use(
        createVuetify({
            components,
            directives,
            locale: {
                locale: "ru",
                messages: { ru },
            },
        }),
    )
    .mount("#app");
