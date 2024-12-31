import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import BtnComponent from './components/utility/BtnComponent.vue';
import IconComponent from '@/components/utility/IconComponent.vue';
import ModalComponent from './components/utility/ModalComponent.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('BtnComponent', BtnComponent);
app.component('IconComponent', IconComponent);
app.component('ModalComponent', ModalComponent);

app.mount('#app');
