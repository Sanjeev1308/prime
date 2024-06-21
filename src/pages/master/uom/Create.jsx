import { Button, Grid, TextField, Stack } from '@mui/material';
import { Formik, Form } from 'formik';
import { Layout } from '../../../layout/Layout';
import { useDispatch } from 'react-redux';
import { addNewUom } from '../../../store/slices';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    id: 123,
    name: '',
    description: ''
};

export const CreateUOM = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Layout>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            dispatch(addNewUom(values));
                            navigate('/master/uoms');
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
