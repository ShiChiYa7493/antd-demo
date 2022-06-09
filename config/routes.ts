export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/menu-one',
    name: 'menu-one',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/menu-one/sub-menu-one',
        name: 'sub-menu-one',
        icon: 'smile',
        component: './MenuOne/SubMenuOne',
      },
      {
        path: '/menu-one/sub-menu-tow',
        name: 'sub-menu-two',
        icon: 'smile',
        component: './MenuOne/SubMenuTwo',
      },
    ],
  },
  {
    path: '/menu-two',
    name: 'menu-two',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/menu-two/sub-menu-one',
        name: 'sub-menu-one',
        icon: 'smile',
        component: './MenuTwo/SubMenuOne',
      },
      {
        path: '/menu-two/sub-menu-tow',
        name: 'sub-menu-two',
        icon: 'smile',
        component: './MenuTwo/SubMenuTwo',
      },
    ],
  },
  {
    component: './404',
  },
];
