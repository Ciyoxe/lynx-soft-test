import { createApp } from "vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";

createApp(App)
    .use(
        createVuetify({
            components,
            directives,
        }),
    )
    .mount("#app");
