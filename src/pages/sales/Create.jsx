import {
    Button,
    Grid,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Divider,
    TableContainer,
    Table,
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
import { useSelector, useDispatch } from 'react-redux';
import { addNewRfq } from '../../store/slices';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    rfq_number: '',
    rfq_date: '',
    supplier: '',
    status: '',
    created_at: '',
    created_by: '',
    items: [
        {
            product_id: '',
            product_name: '',
            description: '',
            quantity: '',
            unit_price: ''
        }
    ]
};

export const CreateSaleOrder = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { allProducts } = useSelector((state) => state.products);

    return (
        <Layout>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            dispatch(addNewRfq(values));
                            navigate('/rfqs');
                        }}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            setFieldValue
                        }) => (
                            <Form>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                        >
                                            <TextField
                                                id="rfq_number"
                                                name="rfq_number"
                                                label="RFQ Number"
                                                size="small"
                                                value={values.rfq_number}
                                                onChange={handleChange}
                                            />
                                            <Stack direction="row" spacing={1}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    disableElevation
                                                    onClick={(values) => {
                                                        setFieldValue(
                                                            'status',
                                                            'In Progress'
                                                        );
                                                        handleSubmit(values);
                                                    }}
                                                >
                                                    Send
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color="secondary"
                                                    disableElevation
                                                    onClick={(values) => {
                                                        setFieldValue(
                                                            'status',
                                                            'Draft'
                                                        );
                                                        handleSubmit(values);
                                                    }}
                                                >
                                                    Draft
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    disableElevation
                                                >
                                                    Cancle
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Grid>

                                    <Grid item>
                                        <Stack direction="row" spacing={8}>
                                            <TextField
                                                id="supplier"
                                                name="supplier"
                                                label="Supplier"
                                                size="small"
                                                value={values.supplier}
                                                onChange={handleChange}
                                            />

                                            <TextField
                                                id="rfq_date"
                                                name="rfq_date"
                                                label="RFQ Date"
                                                type="date"
                                                size="small"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                value={values.rfq_date}
                                                onChange={handleChange}
                                            />
                                        </Stack>
                                    </Grid>

                                    <Grid item>
                                        <Divider textAlign="left">
                                            Product Details
                                        </Divider>
                                    </Grid>

                                    <Grid item>
                                        <FieldArray name="items">
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
                                                                <TableCell
                                                                    width={200}
                                                                >
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
                                                            {values.items
                                                                .length > 0 &&
                                                                values.items.map(
                                                                    (
                                                                        product,
                                                                        index
                                                                    ) => (
                                                                        <TableRow
                                                                            key={
                                                                                index
                                                                            }
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
                                                                                        name={`items.${index}.product_name`}
                                                                                        value={
                                                                                            values
                                                                                                .items[
                                                                                                index
                                                                                            ]
                                                                                                .product_name
                                                                                        }
                                                                                        onChange={
                                                                                            handleChange
                                                                                        }
                                                                                    >
                                                                                        {allProducts.map(
                                                                                            (
                                                                                                item
                                                                                            ) => {
                                                                                                return (
                                                                                                    <MenuItem
                                                                                                        key={
                                                                                                            item.id
                                                                                                        }
                                                                                                        value={
                                                                                                            item.name
                                                                                                        }
                                                                                                    >
                                                                                                        {
                                                                                                            item.name
                                                                                                        }
                                                                                                    </MenuItem>
                                                                                                );
                                                                                            }
                                                                                        )}
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </TableCell>
                                                                            <TableCell>
                                                                                <TextField
                                                                                    name={`items.${index}.descriptipn`}
                                                                                    size="small"
                                                                                    value={
                                                                                        values
                                                                                            .items[
                                                                                            index
                                                                                        ]
                                                                                            .description
                                                                                    }
                                                                                    onChange={
                                                                                        handleChange
                                                                                    }
                                                                                />
                                                                            </TableCell>
                                                                            <TableCell>
                                                                                <TextField
                                                                                    name={`items.${index}.quantity`}
                                                                                    size="small"
                                                                                    type="number"
                                                                                    value={
                                                                                        values
                                                                                            .items[
                                                                                            index
                                                                                        ]
                                                                                            .quantity
                                                                                    }
                                                                                    onChange={
                                                                                        handleChange
                                                                                    }
                                                                                />
                                                                            </TableCell>
                                                                            <TableCell>
                                                                                <TextField
                                                                                    name={`items.${index}.unit_price`}
                                                                                    size="small"
                                                                                    type="number"
                                                                                    value={
                                                                                        values
                                                                                            .items[
                                                                                            index
                                                                                        ]
                                                                                            .unit_price
                                                                                    }
                                                                                    onChange={
                                                                                        handleChange
                                                                                    }
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
                                                                <TableCell
                                                                    colSpan={7}
                                                                >
                                                                    <Button
                                                                        onClick={() =>
                                                                            push(
                                                                                {
                                                                                    product_id:
                                                                                        '',
                                                                                    product_name:
                                                                                        '',
                                                                                    description:
                                                                                        '',
                                                                                    quantity:
                                                                                        '',
                                                                                    unit_price:
                                                                                        ''
                                                                                }
                                                                            )
                                                                        }
                                                                    >
                                                                        Add New
                                                                        Product
                                                                    </Button>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            )}
                                        </FieldArray>
                                    </Grid>
                                </Grid>
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
