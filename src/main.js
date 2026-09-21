import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import Material from "@primeuix/themes/material";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Tooltip from "primevue/tooltip";
import {useTheme} from "@primeuix/themes";
import router from "./router.js";

const primeVueUiLicenseKey=import.meta.env.VITE_PRIME_UI_LICENSE_KEY;

createApp(App)
    .use(PrimeVue, {the:{ preset:Material}, ripple:true, license:PrimeUiLicenseKey})
    .use (i18n)
    .use(router)
    .mount('#app')
