import Auth from "./pages/Auth";
import OrderClean from "./pages/OrderClean";
import Orders from "./pages/Orders";

export const authRoutes = [
  {
    path: "/login",
    Component: Auth,
  },
  {
    path: "/registration",
    Component: Auth,
  },
];

export const ProfileRoutes = [
  {
    path: "/order",
    Component: OrderClean,
  },
  {
    path: "/orders",
    Component: Orders,
  },
];
