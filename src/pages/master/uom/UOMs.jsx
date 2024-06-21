import { Layout } from '../../../layout/Layout';
import DataGridDemo from '../../../components/table/Table';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, IconButton, Stack, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteRfqById } from '../../../store/slices';

export const UOMs = () => {
    const navigate = useNavigate();
    const { allUom } = useSelector((state) => state.uom);
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
            field: 'description',
            headerName: 'Description',
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
                                navigate(`/master/uoms/${params.id}`)
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
                        onClick={() => navigate('/master/uoms/create')}
                        disableElevation
                    >
                        New UOM
                    </Button>
                </Grid>

                <Grid item>
                    <DataGridDemo
                        rows={allUom}
                        columns={columns}
                        getRowId={(row) => row.id}
                    />
                </Grid>
            </Grid>
        </Layout>
    );
};
