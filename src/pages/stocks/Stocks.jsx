import { Layout } from '../../layout/Layout';
import DataGridDemo from '../../components/table/Table';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, IconButton, Stack, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteRfqById } from '../../store/slices';

export const Stocks = () => {
    const navigate = useNavigate();
    const { allStocks } = useSelector((state) => state.stocks);
    const dispatch = useDispatch();

    const handleRfqDelete = (id) => {
        dispatch(deleteRfqById(id));
    };

    const columns = [
        {
            field: 'product_name',
            headerName: 'Product name',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'location',
            headerName: 'Location',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'last_updated',
            headerName: 'Last Updated',
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
                            onClick={() => navigate(`/rfqs/${params.id}`)}
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
                        onClick={() => navigate('/rfqs/create')}
                        disableElevation
                    >
                        New Stock
                    </Button>
                </Grid>

                <Grid item>
                    <DataGridDemo
                        rows={allStocks}
                        columns={columns}
                        getRowId={(row) => row.product_id}
                    />
                </Grid>
            </Grid>
        </Layout>
    );
};
