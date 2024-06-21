import { configureStore } from '@reduxjs/toolkit';
import {
    authReducer,
    billsReducer,
    categoriesReducer,
    locationsReducer,
    ordersReducer,
    productsReducer,
    rfqsReducer,
    stocksReducer,
    transportReducer,
    uomReducer,
    usersReducer
} from './slices';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        bills: billsReducer,
        categories: categoriesReducer,
        locations: locationsReducer,
        orders: ordersReducer,
        products: productsReducer,
        rfqs: rfqsReducer,
        stocks: stocksReducer,
        transports: transportReducer,
        uom: uomReducer,
        users: usersReducer
    }
});
