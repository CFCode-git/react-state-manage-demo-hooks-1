import { lazy } from "react";

const PageA = lazy(() =>
  import(/* webpackChunkName: 'page-a' */ "./views/PageA.jsx")
);
const PageB = lazy(() =>
  import(/* webpackChunkName: 'page-b' */ "./views/PageB.jsx")
);

const routeMap = [
  {
    path: "/page-a",
    component: PageA,
  },
  {
    path: "/page-b",
    component: PageB,
  },
];

export default routeMap;
