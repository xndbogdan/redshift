require('./bootstrap');

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);


// const app = new Vue({
//     el: '#app',
// });
import 'alpinejs'

function checkDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

if (checkDarkMode()) {
    document.documentElement.classList.add('mode-dark');
} else {
    document.documentElement.classList.remove('mode-dark');
}
