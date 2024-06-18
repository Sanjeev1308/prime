import {
    Button,
    Grid,
    TextField,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Divider,
    TableContainer,
    Table,
    Paper,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Chip,
    Stack
} from '@mui/material';
import { Formik, Form, FieldArray } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';
import { Layout } from '../../layout/Layout';

const initialValues = {
    products: [
        {
            name: '',
            quantity: '',
            price: ''
        }
    ]
};

export const PurchaseCreate = () => {
    return (
        <Layout>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h4">PO 001</Typography>
                        <Button variant="contained">Save</Button>
                    </Stack>
                </Grid>

                <Grid item>
                    <Grid container justifyContent="space-between">
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel
                                    id="demo-simple-select-label"
                                    size="small"
                                >
                                    Customer Name
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Customer Name"
                                    size="small"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>Date</Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Divider textAlign="left">Products Details</Divider>
                </Grid>

                <Grid item>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({ values }) => (
                            <Form>
                                <FieldArray name="products">
                                    {({ insert, remove, push }) => (
                                        <TableContainer>
                                            <Table
                                                sx={{
                                                    width: '965px',
                                                    height: '100px'
                                                }}
                                                size="small"
                                                aria-label="a dense table"
                                            >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell width={200}>
                                                            Product
                                                        </TableCell>
                                                        <TableCell>
                                                            Description
                                                        </TableCell>
                                                        <TableCell>
                                                            Quantity
                                                        </TableCell>
                                                        <TableCell>
                                                            Unit Price
                                                        </TableCell>
                                                        <TableCell>
                                                            Taxes
                                                        </TableCell>
                                                        <TableCell />
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {values.products.length >
                                                        0 &&
                                                        values.products.map(
                                                            (
                                                                product,
                                                                index
                                                            ) => (
                                                                <TableRow
                                                                    key={index}
                                                                >
                                                                    <TableCell>
                                                                        <FormControl
                                                                            fullWidth
                                                                        >
                                                                            <InputLabel
                                                                                id="demo-simple-select-label"
                                                                                size="small"
                                                                            >
                                                                                Product
                                                                                Name
                                                                            </InputLabel>
                                                                            <Select
                                                                                labelId="demo-simple-select-label"
                                                                                id="demo-simple-select"
                                                                                label="Proudct Name"
                                                                                size="small"
                                                                                name={`products.${index}.name`}
                                                                            >
                                                                                <MenuItem
                                                                                    value={
                                                                                        10
                                                                                    }
                                                                                >
                                                                                    Ten
                                                                                </MenuItem>
                                                                                <MenuItem
                                                                                    value={
                                                                                        20
                                                                                    }
                                                                                >
                                                                                    Twenty
                                                                                </MenuItem>
                                                                                <MenuItem
                                                                                    value={
                                                                                        30
                                                                                    }
                                                                                >
                                                                                    Thirty
                                                                                </MenuItem>
                                                                            </Select>
                                                                        </FormControl>
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <TextField
                                                                            name={`products.${index}.quantity`}
                                                                            size="small"
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <TextField
                                                                            name={`products.${index}.price`}
                                                                            size="small"
                                                                            type="number"
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <TextField
                                                                            name={`products.${index}.price`}
                                                                            size="small"
                                                                            type="number"
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <Chip
                                                                            label="5%"
                                                                            size="small"
                                                                        />
                                                                    </TableCell>

                                                                    <TableCell>
                                                                        <Button
                                                                            onClick={() =>
                                                                                remove(
                                                                                    index
                                                                                )
                                                                            }
                                                                        >
                                                                            <DeleteIcon />
                                                                        </Button>
                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        )}
                                                    <TableRow>
                                                        <TableCell colSpan={7}>
                                                            <Button
                                                                onClick={() =>
                                                                    push({
                                                                        name: '',
                                                                        quantity:
                                                                            '',
                                                                        price: ''
                                                                    })
                                                                }
                                                            >
                                                                Add New Product
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    )}
                                </FieldArray>
                            </Form>
                        )}
                    </Formik>
                </Grid>

                <Grid item textAlign="end">
                    <Stack justifyContent="end">
                        <Stack>Untaxed Amount ₹ 20.00</Stack>
                        <Stack>SGST ₹ 0.50</Stack>
                        <Stack>CGST ₹ 0.50</Stack>
                        <Stack>Total ₹ 21.00</Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Layout>
    );
};
