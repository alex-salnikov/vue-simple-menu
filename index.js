'use strict';
const ViewHome = httpVueLoader('view/home.vue')
const ViewPage1 = httpVueLoader('view/page1.vue')


/* Router and App setup: */
const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: ViewHome
    },
    {
        path: '/page1',
        name: 'page1',
        component: ViewPage1
    },
    /*
    {
    	path: '/named',
    	name: 'named',
    	component: NamedWrapper,
    	children: [{
    		path: 'user/:userId',
    		name: 'named_id',
    		components: { user_details: User, sidebar: Sidebar },
    		props: { user_details: true, sidebar: false }
    	}]
    },
    {
    	path: '/user/:userId',
    	name: 'user',
    	component: User,
    	props: true
    }
    */
]

const router = new VueRouter({
    routes: routes
})
router.beforeResolve(async (to, from, next) => {
    app.menuHide()
    next();
})


const app = new Vue({
    router: router,
    methods: {
        menuHide() {
            var el = document.getElementById("myLinks");
            el.style.display = "none"
        },
        menuToggle() {
            var el = document.getElementById("myLinks");
            el.style.display = (el.style.display === "block") ? "none" : "block"
        }
    }
}).$mount('#app')