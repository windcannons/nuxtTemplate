const getRoutes = resolve => [
  {
    path: '/',
    name: 'Index',
    component: resolve('pages/index'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: resolve('pages/home'),
      },
      {
        path: '/me',
        name: 'me',
        component: resolve('pages/me'),
      }
    ]
  },
  {
    path: '*',
    redirect: '/expect',
  }
];
export default getRoutes;
