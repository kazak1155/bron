
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/test1",
        name: "test1",
        component: () => import('../../components/test/test1.vue'),
    },

    {
        path: "/test2",
        name: "test2",
        component: () => import('../../components/test/test2.vue'),
    },

    {
        path: "/showHotel",
        name: "show.hotel",
        component: () => import('../../components/hotel/show.vue'),
    },

    {
        path: "/storeHotel",
        name: "store.hotel",
        component: () => import('../../components/hotel/store.vue'),
    },

    {
        path: "/editHotel",
        name: "edit.hotel",
        component: () => import('../../components/hotel/edit.vue'),
    },

    {
        path: "/indexHotel",
        name: "index.hotel",
        component: () => import('../../components/hotel/index.vue'),
    },

    {
        // path: "/",
        // name: "main",
        // component: () => import('../../componets/page/main.vue'),
    },

    {
        // path: "/home",
        // name: "home",
        // component: () => import('../../componets/page/home.vue'),
    },

    {
        // path: "/about",
        // name: "about",
        // component: () => import('../../componets/page/about.vue'),
    },

    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "pageNotFound",
    //     component: () => import('../../componets/page/notFoundPage.vue'),
    // },

    {
        // path: "/hotel",
        // name: "hotel.index",
        // component: () => import('../../componets/hotel/showAll.vue'),
    },

    {
        // path: "/storeHotel",
        // name: "hotel.store",
        // component: () => import('../../componets/hotel/storeHotel.vue'),
    },

    // {
    //     path: "/hotel/:id",
    //     name: "hotel.show",
    //     component: () => import('../../componets/hotel/showOne.vue'),
    // },
    //
    // {
    //     path: "/hotel/:id/edit",
    //     name: "hotel.edit",
    //     component: () => import('../../componets/hotel/updateHotel.vue'),
    // },

    // {
    //     path: "/room/:id",
    //     name: "room.show",
    //     component: () => import('../../componets/room/show.vue'),
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
