// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//官方&第三方套件
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';

//自訂套件
import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

//axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});

router.beforeEach((to, from, next) => {

    console.log('In beforeEach...');
    console.log('to', to, 'from', from, 'next', next);
    //
    if (to.meta.requiresAuth) {
        console.log('這裡需要驗證!!');
        // console.log('from', from, 'to', to, 'next', next);

        const api = `${process.env.APIPATH}/api/user/check`;

        axios.post(api).then(response => {
            console.log(response.data);
            if (response.data.success) {
                console.log('驗證成功!!');
                // console.log('next', next);
                console.log('to', to, 'from', from, 'next', next);
                next();
            } else {
                console.log('驗證失敗!!');
                next({
                    path: '/login',
                });
            }
        });
    } else {
        console.log('In else of --> if (to.meta.requiresAuth) ...');
        console.log('from', from, 'to', to, 'next', next);
        next();
    }

});