import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import Coupons from '@/components/pages/Coupons';
import Orders from '@/components/pages/Orders';
import CustomerOrder from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';

import VehicleTypeRecog from '@/components/pages/vehicle_type_recog';
import LicensePlateRecog from '@/components/pages/license_plate_recog';

import FetchAllCarPlateVideo from '@/components/pages/FetchAllCarPlateVideo';
import FetchAllCarTypeVideo from '@/components/pages/FetchAllCarTypeVideo';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [{
      path: '*',
      redirect: 'login',
    },
    // {
    //     path: '/',
    //     name: 'HelloWorld',
    //     component: HelloWorld,
    //     // a meta field
    //     meta: { requiresAuth: true }
    // },

    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      // a meta field

      children: [{
          path: 'products',
          name: 'Products',
          component: Products,
          meta: {
            requiresAuth: true
          },
        },

        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: {
            requiresAuth: true
          },
        }, {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: {
            requiresAuth: true
          },
        },
      ],
    },

    {
      path: '/',
      name: 'Dashboard_root',
      component: Dashboard,
      children: [{
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
        },
        {
          path: 'FetchAllCarPlateVideo',
          name: 'FetchAllCarPlateVideo',
          component: FetchAllCarPlateVideo,
        },
        {
          path: 'FetchAllCarTypeVideo',
          name: 'FetchAllCarTypeVideo',
          component: FetchAllCarTypeVideo,
        },
        {
          path: 'vehicle_type_recog',
          name: 'VehicleTypeRecog',
          component: VehicleTypeRecog,
        },
        {
          path: 'license_plate_recog',
          name: 'LicensePlateRecog',
          component: LicensePlateRecog,
        }
      ],
    },

  ],
});
