import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import DashboardLayout from "../layout/DashboardLayout";
import MyProduct from "../pages/dashboard/seller/MyProduct";
import EditProduct from "../pages/dashboard/seller/EditProduct";
import WishList from "../pages/dashboard/buyer/WishList";
import Cart from "../pages/dashboard/buyer/Cart";
import Overview from "../pages/dashboard/admin/Overview";
import AllUsers from "../pages/dashboard/admin/AllUsers";
import AllProduct from "../pages/dashboard/admin/AllProduct";
import AddProduct from "../pages/dashboard/AddProduct";
import Profile from "../pages/dashboard/Profile";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <ProductPage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'add-product',
        element: <AddProduct />
      },
      // admin routes
      {
        path: 'all-products',
        element: <AllProduct />
      },
      {
        path: 'all-users',
        element: <AllUsers />
      },
      {
        path: 'overview',
        element: <Overview />
      },
      // buyer routes
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'wishlist',
        element: <WishList />
      },
      // seller
      {
        path: 'edit-product',
        element: <EditProduct />
      },
      {
        path: 'my-products',
        element: <MyProduct />
      }
    ]
  }
])