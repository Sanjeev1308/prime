import { Button, Grid, TextField, Typography, Stack } from '@mui/material';
import { Formik, Form } from 'formik';
import { Layout } from '../../../layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import {
    editProductsById,
    editUomById,
    getProductsById,
    getUomById
} from '../../../store/slices';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const EditUOM = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { selectedUom } = useSelector((state) => state.uom);

    useEffect(() => {
        dispatch(getUomById(id));
    }, []);

    if (!Object.keys(selectedUom).length) {
        return <Typography variant="h4">Loading...</Typography>;
    }

    return (
        <Layout>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Formik
                        enableReinitialize
                        initialValues={selectedUom}
                        onSubmit={(values) => {
                            dispatch(editUomById(values));
                            navigate('/master/uoms');
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
                                            label="UOM Name"
                                            size="small"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                            id="description"
                                            name="description"
                                            label="UOM description"
                                            size="small"
                                            value={values.description}
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
