import Vue from "vue";
import Router from 'vue-router'
import StartPage from '../components/StartPage.vue'
import CreatingCharacter from '../components/CreatingCharacter.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: StartPage
        },
        {
            path: '/character-creating',
            name: 'character-creating',
            component: CreatingCharacter
        }
    ]
})

export default router;