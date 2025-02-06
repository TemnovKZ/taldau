import { createWebHistory, createRouter } from 'vue-router'

import Homepage from '/src/pages/home.vue'
import AboutUs from "/src/pages/about-us.vue";
import Activities from "/src/pages/activities.vue";
import PrivacyPolicy from "/src/pages/privacy-policy.vue";
import Terms from "/src/pages/terms.vue";
import Pack from "./pages/pack.vue";
import SimgleActivity from "./pages/simgle-activity.vue";

const routes = [
    { path: '/', component: Homepage },
    { path: '/about', component: AboutUs },
    { path: '/activities', component: Activities },
    { path: '/privacy-policy', component: PrivacyPolicy },
    { path: '/terms', component: Terms },
    { path: '/pack', component: Pack },
    {
        path: '/single-activity/:activityId',
        component: SimgleActivity,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});
export default router;