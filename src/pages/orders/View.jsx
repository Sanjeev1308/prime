import { Grid, Stack, Typography, Divider, Button } from '@mui/material';
import { Layout } from '../../layout/Layout';
import DataGridDemo from '../../components/table/Table';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) =>
            `${row.firstName || ''} ${row.lastName || ''}`
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

export const OrderView = () => {
    return (
        <Layout>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>Order no:</Typography>
                        <Typography>PO 0001</Typography>
                    </Stack>
                </Grid>

                <Grid item>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>Customer Name:</Typography>
                        <Typography>Test</Typography>
                    </Stack>
                </Grid>

                <Grid item>
                    <Divider textAlign="left">Products Details</Divider>
                </Grid>

                <Grid item>
                    <DataGridDemo
                        rows={rows}
                        columns={columns}
                        checkboxSelection={false}
                    />
                </Grid>

                <Grid item textAlign="end">
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent="end"
                    >
                        <Button variant="contained" disableElevation>
                            Approve
                        </Button>
                        <Button
                            variant="contained"
                            disableElevation
                            color="secondary"
                        >
                            Approve and Send
                        </Button>
                        <Button variant="outlined" disableElevation>
                            Reject
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Layout>
    );
};
