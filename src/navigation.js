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
    { name: 'Orders', path: '/orders', roles: [] },
    { name: 'Transport', path: '/transport', roles: [] },
    { name: 'Acknowledge Orders', path: '/ack-orders', roles: [] },
    { name: 'Reports', path: '/reports', roles: [] }
];
