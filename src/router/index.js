import { createRouter, createHistory } from "vue-router"

const router = createRouter({
    history: createHistory(),
    router:[
        {
            path:'/',
            name:'Home',
            component:''
        },
        {
            path:'/about',
            name:'About',
            component:''
        }
    ]
});

export default router;