import { Layout } from '../../layout/Layout';
import DataGridDemo from '../../components/table/Table';
import { Button, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const columns = [
    {
        field: 'name',
        headerName: 'Name',
        minWidth: 100,
        flex: 1
    },
    {
        field: 'description',
        headerName: 'Description',
        minWidth: 100,
        flex: 1
    },
    {
        field: 'price',
        headerName: 'Price',
        minWidth: 100,
        flex: 1
    },
    {
        field: 'unit_of_measure',
        headerName: 'UOM',
        minWidth: 100,
        flex: 1
    }
];

export const Products = () => {
    const { allProducts } = useSelector((state) => state.products);

    return (
        <Layout>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <Button variant="contained">Add Product</Button>
                </Grid>

                <Grid item>
                    <DataGridDemo rows={allProducts} columns={columns} />
                </Grid>
            </Grid>
        </Layout>
    );
};
