import { Button, Grid, TextField, Stack } from '@mui/material';
import { Formik, Form } from 'formik';
import { Layout } from '../../../layout/Layout';
import { useDispatch } from 'react-redux';
import { addNewProducts } from '../../../store/slices';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    id: 123,
    name: '',
    description: '',
    price: '',
    unit_of_measure: ''
};

export const CreateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Layout>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            dispatch(addNewProducts(values));
                            navigate('/master/products');
                        }}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <Form>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item textAlign="end">
                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            justifyContent="end"
                                        >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                disableElevation
                                                onClick={handleSubmit}
                                            >
                                                Save
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                disableElevation
                                            >
                                                Cancle
                                            </Button>
                                        </Stack>
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                            id="name"
                                            name="name"
                                            label="Product Name"
                                            size="small"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                            id="description"
                                            name="description"
                                            label="Product description"
                                            size="small"
                                            value={values.description}
                                            onChange={handleChange}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                            id="price"
                                            name="price"
                                            label="Product price"
                                            size="small"
                                            value={values.price}
                                            onChange={handleChange}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                            id="unit_of_measure"
                                            name="unit_of_measure"
                                            label="Product UOM"
                                            size="small"
                                            value={values.unit_of_measure}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Layout>
    );
};
