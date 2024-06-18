import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/auth/Login';
import ErrorPage from './layout/ErrorPage';
import { Dashboard } from './pages/Dashboard';
import { Products } from './pages/master/Products';
import { Purchases } from './pages/purchases/Purchases';
import { PurchaseCreate } from './pages/purchases/Create';
import { Orders } from './pages/orders/Orders';
import { OrderView } from './pages/orders/View';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        errorElement: <ErrorPage />
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: '/master/products',
        element: <Products />,
        errorElement: <ErrorPage />
    },
    {
        path: '/rfqs',
        element: <Purchases />,
        errorElement: <ErrorPage />
    },
    {
        path: '/purchases/create',
        element: <PurchaseCreate />,
        errorElement: <ErrorPage />
    },
    {
        path: '/orders',
        element: <Orders />,
        errorElement: <ErrorPage />
    },
    {
        path: '/orders/view',
        element: <OrderView />,
        errorElement: <ErrorPage />
    }
]);
