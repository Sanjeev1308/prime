import { Layout } from '../../layout/Layout';
import DataGridDemo from '../../components/table/Table';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, IconButton, Stack, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteRfqById } from '../../store/slices';

export const Transports = () => {
    const navigate = useNavigate();
    const { allTransports } = useSelector((state) => state.transports);
    const dispatch = useDispatch();

    const handleRfqDelete = (id) => {
        dispatch(deleteRfqById(id));
    };

    const columns = [
        {
            field: 'order_number',
            headerName: 'Order Number',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'transporter',
            headerName: 'Transporter',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'transportation_mode',
            headerName: 'Transportation Mode',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'vehicle_number',
            headerName: 'Vehicle Number',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'departure_date',
            headerName: 'Departure Date',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'arrival_date',
            headerName: 'Arrival Date',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'origin_location',
            headerName: 'Origin Location',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'destination_location',
            headerName: 'Destination Location',
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
                        New Transport
                    </Button>
                </Grid>

                <Grid item>
                    <DataGridDemo
                        rows={allTransports}
                        columns={columns}
                        getRowId={(row) => row.order_number}
                    />
                </Grid>
            </Grid>
        </Layout>
    );
};
