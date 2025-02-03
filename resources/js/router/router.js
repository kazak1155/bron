
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/hotel/:id",
        name: "show.hotel",
        component: () => import('../../components/hotel/show.vue'),
    },

    {
        path: "/storeHotel",
        name: "store.hotel",
        component: () => import('../../components/hotel/store.vue'),
    },

    {
        path: "/hotel/:id/edit",
        name: "edit.hotel",
        component: () => import('../../components/hotel/edit.vue'),
    },

    {
        path: "/indexHotel",
        name: "index.hotel",
        component: () => import('../../components/hotel/index.vue'),
    },

    {
        path: "/",
        name: "main",
        component: () => import('../../components/pages/main.vue'),
    },

    {
        path: "/:pathMatch(.*)*",
        name: "pageNotFound",
        component: () => import('../../components/pages/notFoundPage.vue'),
    },
    {
        path: "/room/:id",
        name: "show.room",
        component: () => import('../../components/room/show.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;







// import Vue from 'vue';
// import Router from 'vue-router';
//
// Vue.use(Router);
//
// const router = new Router({
//     mode: 'history', // Используйте режим history для чистых URL
//     routes: [
// {
//     path: "/hotel/:id",
//         name: "show.hotel",
//     component: () => import('../../components/hotel/show.vue'),
// },
//
// {
//     path: "/storeHotel",
//         name: "store.hotel",
//     component: () => import('../../components/hotel/store.vue'),
// },
//
// {
//     path: "/editHotel",
//         name: "e.hotel",
//     component: () => import('../../components/hotel/edit.vue'),
// },
//
// {
//     path: "/hotel/:id/edit",
//         name: "edit.hotel",
//     component: () => import('../../components/hotel/edit.vue'),
// },
//
// {
//     path: "/indexHotel",
//         name: "index.hotel",
//     component: () => import('../../components/hotel/index.vue'),
// },
//
// {
//     path: "/",
//         name: "main",
//     component: () => import('../../components/pages/main.vue'),
// },
//
// {
//     path: "/:pathMatch(.*)*",
//         name: "pageNotFound",
//     component: () => import('../../components/pages/notFoundPage.vue'),
// },
//     ]
// });
//
// export default router;
