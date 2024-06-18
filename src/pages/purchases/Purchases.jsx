import { Layout } from '../../layout/Layout';
import DataGridDemo from '../../components/table/Table';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID' },
    {
        field: 'reference',
        headerName: 'Reference'
    },
    {
        field: 'vendor',
        headerName: 'Vendor'
    },
    {
        field: 'buyer',
        headerName: 'Buyer'
    },
    {
        field: 'orderDeadline',
        headerName: 'Order Deadline'
    },
    {
        field: 'total',
        headerName: 'Total',
        type: 'number'
    },
    {
        field: 'status',
        headerName: 'Status'
    }
];

const rows = [
    {
        id: 1,
        reference: 'P001',
        vendor: 'Jon',
        buyer: 'Wick',
        orderDeadline: '',
        total: 21,
        status: 'pending'
    }
];

export const Purchases = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/purchases/create')}
                    >
                        New RFQ
                    </Button>
                </Grid>

                <Grid item>
                    <DataGridDemo rows={rows} columns={columns} />
                </Grid>
            </Grid>
        </Layout>
    );
};
