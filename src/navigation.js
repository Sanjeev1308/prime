export const navigations = [
    { name: 'Dashboard', path: '/', roles: [] },
    {
        name: 'Masters',
        roles: [],
        children: [
            { name: 'Product', path: '/master/products', roles: [] },
            {
                name: 'Product Category',
                path: '/master/product-cat',
                roles: []
            },
            {
                name: 'Product Sub Category',
                path: '/master/product-sub-cat',
                roles: []
            },
            { name: 'UOM', path: '/master/uom', roles: [] }
        ]
    },
    {
        name: 'Users',
        roles: [],
        children: [
            { name: 'Customers', path: '/users/customers', roles: [] },
            { name: 'Vendors', path: '/users/vendors', roles: [] },
            { name: 'Farmers', path: '/users/farmers', roles: [] }
        ]
    },
    { name: 'RFQs', path: '/rfqs', roles: [] },
    { name: 'Purchases Orders', path: '/purchase-orders', roles: [] },
    { name: 'Sales Orders', path: '/sales-orders', roles: [] },
    { name: 'Bills', path: '/bills', roles: [] },
    { name: 'Stocks', path: '/stocks', roles: [] },
    { name: 'Transport', path: '/transports', roles: [] },
    { name: 'Reports', path: '/reports', roles: [] }
];
