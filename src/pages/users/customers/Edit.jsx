import { Button, Grid, TextField, Typography, Stack } from '@mui/material';
import { Formik, Form } from 'formik';
import { Layout } from '../../../layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { editProductsById, getProductsById } from '../../../store/slices';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const EditProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { selectedProduct } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductsById(id));
    }, []);

    if (!Object.keys(selectedProduct).length) {
        return <Typography variant="h4">Loading...</Typography>;
    }

    return (
        <Layout>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Formik
                        enableReinitialize
                        initialValues={selectedProduct}
                        onSubmit={(values) => {
                            dispatch(editProductsById(values));
                            navigate('/master/products');
                        }}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <Form>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
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
