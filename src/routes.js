import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/auth/Login';
import ErrorPage from './layout/ErrorPage';
import { Dashboard } from './pages/Dashboard';
import { RFQs } from './pages/rfqs/RFQs';
import { EditRFQ } from './pages/rfqs/Edit';
import { CreateRFQ } from './pages/rfqs/Create';
import { Purchases } from './pages/purchases/Purchases';
import { CreatePurchase } from './pages/purchases/Create';
import { EditPurchase } from './pages/purchases/Edit';
import { Sales } from './pages/sales/Sales';
import { CreateSaleOrder } from './pages/sales/Create';
import { EditSaleOrder } from './pages/sales/Edit';
import { Bills } from './pages/bills/Bills';
import { CreateBill } from './pages/bills/Create';
import { EditBill } from './pages/bills/Edit';
import { Stocks } from './pages/stocks/Stocks';
import { CreateStock } from './pages/stocks/Create';
import { EditStock } from './pages/stocks/Edit';
import { Transports } from './pages/transports/Transports';
import { CreateTransport } from './pages/transports/Create';
import { EditTransport } from './pages/transports/Edit';

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
        path: '/rfqs',
        element: <RFQs />,
        errorElement: <ErrorPage />
    },
    {
        path: '/rfqs/create',
        element: <CreateRFQ />,
        errorElement: <ErrorPage />
    },
    {
        path: '/rfqs/:id',
        element: <EditRFQ />,
        errorElement: <ErrorPage />
    },
    {
        path: '/purchase-orders',
        element: <Purchases />,
        errorElement: <ErrorPage />
    },
    {
        path: '/purchase-orders/create',
        element: <CreatePurchase />,
        errorElement: <ErrorPage />
    },
    {
        path: '/purchase-orders/:id',
        element: <EditPurchase />,
        errorElement: <ErrorPage />
    },
    {
        path: '/sales-orders',
        element: <Sales />,
        errorElement: <ErrorPage />
    },
    {
        path: '/sales-orders/create',
        element: <CreateSaleOrder />,
        errorElement: <ErrorPage />
    },
    {
        path: '/sales-orders/:id',
        element: <EditSaleOrder />,
        errorElement: <ErrorPage />
    },
    {
        path: '/bills',
        element: <Bills />,
        errorElement: <ErrorPage />
    },
    {
        path: '/bills/create',
        element: <CreateBill />,
        errorElement: <ErrorPage />
    },
    {
        path: '/bills/:id',
        element: <EditBill />,
        errorElement: <ErrorPage />
    },
    {
        path: '/locations',
        element: <RFQs />,
        errorElement: <ErrorPage />
    },
    {
        path: '/locations/create',
        element: <CreateRFQ />,
        errorElement: <ErrorPage />
    },
    {
        path: '/locations/:id',
        element: <EditRFQ />,
        errorElement: <ErrorPage />
    },
    {
        path: '/stocks',
        element: <Stocks />,
        errorElement: <ErrorPage />
    },
    {
        path: '/stocks/create',
        element: <CreateStock />,
        errorElement: <ErrorPage />
    },
    {
        path: '/stocks/:id',
        element: <EditStock />,
        errorElement: <ErrorPage />
    },
    {
        path: '/transports',
        element: <Transports />,
        errorElement: <ErrorPage />
    },
    {
        path: '/transports/create',
        element: <CreateTransport />,
        errorElement: <ErrorPage />
    },
    {
        path: '/transports/:id',
        element: <EditTransport />,
        errorElement: <ErrorPage />
    }
]);
