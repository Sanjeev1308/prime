import { Layout } from '../../layout/Layout';
import DataGridDemo from '../../components/table/Table';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, IconButton, Stack, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteRfqById } from '../../store/slices';

export const Locations = () => {
    const navigate = useNavigate();
    const { allLocations } = useSelector((state) => state.locations);
    const dispatch = useDispatch();

    const handleRfqDelete = (id) => {
        dispatch(deleteRfqById(id));
    };

    const columns = [
        {
            field: 'rfq_number',
            headerName: 'RFQ Number',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'supplier',
            headerName: 'Supplier',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'created_at',
            headerName: 'Created Date',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'created_by',
            headerName: 'Created By',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'status',
            headerName: 'Status',
            minWidth: 100,
            flex: 1,
            renderCell: (params, row) => {
                switch (params.value) {
                    case 'Confirmed':
                        return <Chip label={params.value} color="success" />;
                    case 'In Progress':
                        return <Chip label={params.value} color="warning" />;
                    case 'Draft':
                        return <Chip label={params.value} />;
                    default:
                        return <Chip label={params.value} />;
                }
            }
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
                        New RFQ
                    </Button>
                </Grid>

                <Grid item>
                    <DataGridDemo
                        rows={allLocations}
                        columns={columns}
                        getRowId={(row) => row.rfq_number}
                    />
                </Grid>
            </Grid>
        </Layout>
    );
};
