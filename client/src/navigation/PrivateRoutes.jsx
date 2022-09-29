import App, { loader as appLoader } from '../modules/app';

export default [
  {
    path: '/private',
    element: <App />,
    loader: appLoader,
    children: [
      {index: true, element: <App />}
    ]
  }
];
