import { Layout } from '../../layout/Layout';
import DataGridDemo from '../../components/table/Table';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, IconButton, Stack } from '@mui/material';
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
            field: 'name',
            headerName: 'Name',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'type',
            headerName: 'Type',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'address',
            headerName: 'Address',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'contact_person',
            headerName: 'Contact Person',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'contact_number',
            headerName: 'Contact Number',
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
                        New Location
                    </Button>
                </Grid>

                <Grid item>
                    <DataGridDemo
                        rows={allLocations}
                        columns={columns}
                        getRowId={(row) => row.id}
                    />
                </Grid>
            </Grid>
        </Layout>
    );
};
