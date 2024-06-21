import { Layout } from '../../layout/Layout';
import DataGridDemo from '../../components/table/Table';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, IconButton, Stack, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteRfqById } from '../../store/slices';

export const Bills = () => {
    const navigate = useNavigate();
    const { allBills } = useSelector((state) => state.bills);
    const dispatch = useDispatch();

    const handleRfqDelete = (id) => {
        dispatch(deleteRfqById(id));
    };

    const columns = [
        {
            field: 'bill_number',
            headerName: 'Bill Number',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'order_number',
            headerName: 'Order Number',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'total_amount',
            headerName: 'Total Amount',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'payment_date',
            headerName: 'Payment Date',
            minWidth: 100,
            flex: 1
        },
        {
            field: 'payment_status',
            headerName: 'Status',
            minWidth: 100,
            flex: 1,
            renderCell: (params, row) => {
                switch (params.value) {
                    case 'Paid':
                        return <Chip label={params.value} color="success" />;
                    case 'Pending':
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
                        onClick={() => navigate('/bills/create')}
                        disableElevation
                    >
                        New Bill
                    </Button>
                </Grid>

                <Grid item>
                    <DataGridDemo
                        rows={allBills}
                        columns={columns}
                        getRowId={(row) => row.bill_number}
                    />
                </Grid>
            </Grid>
        </Layout>
    );
};
