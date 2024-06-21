import { Layout } from '../../../layout/Layout';
import DataGridDemo from '../../../components/table/Table';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteProductsById } from '../../../store/slices';

export const Products = () => {
    const navigate = useNavigate();
    const { allProducts } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const handleRfqDelete = (id) => {
        dispatch(deleteProductsById(id));
    };

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
        },
        {
            field: 'action',
            headerName: 'Actions',
            minWidth: 100,
            flex: 1,
            renderCell: (params) => {
                return (
                    <Stack direction="row" spacing={1}>
                        <IconButton
                            onClick={() =>
                                navigate(`/master/products/${params.id}`)
                            }
                            aria-label="edit"
                            color="primary"
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleRfqDelete(params.id)}
                            aria-label="delete"
                            color="error"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                );
            }
        }
    ];

    return (
        <Layout>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/master/products/create')}
                        disableElevation
                    >
                        New Product
                    </Button>
                </Grid>

                <Grid item>
                    <DataGridDemo
                        rows={allProducts}
                        columns={columns}
                        getRowId={(row) => row.id}
                    />
                </Grid>
            </Grid>
        </Layout>
    );
};
