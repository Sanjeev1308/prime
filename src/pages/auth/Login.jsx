import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    Checkbox,
    Grid,
    TextField,
    Box,
    styled,
    Typography,
    Button
} from '@mui/material';

// STYLED COMPONENTS
const FlexBox = styled(Box)(() => ({
    display: 'flex'
}));

const ContentBox = styled('div')(() => ({
    height: '100%',
    padding: '32px',
    position: 'relative',
    background: 'rgba(0, 0, 0, 0.01)'
}));

const StyledRoot = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:
        'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))',
    minHeight: '100vh !important',
    '& .card': {
        maxWidth: 800,
        minHeight: 400,
        margin: '1rem',
        display: 'flex',
        borderRadius: 12,
        alignItems: 'center'
    },

    '.img-wrapper': {
        height: '100%',
        minWidth: 320,
        display: 'flex',
        padding: '2rem',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default function JwtLogin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (values) => {
        setLoading(true);
        try {
            navigate('/');
        } catch (e) {
            setLoading(false);
        }
    };

    return (
        <StyledRoot>
            <Card className="card">
                <Grid container>
                    <Grid item sm={6} xs={12}>
                        <div className="img-wrapper">
                            <img
                                src="https://primefreshlimited.com/wp-content/uploads/2024/05/Prime-Fresh-Logo-tm.png"
                                width="100%"
                                alt=""
                            />
                        </div>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <ContentBox>
                            <TextField
                                fullWidth
                                size="small"
                                type="email"
                                name="email"
                                label="Email"
                                variant="outlined"
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                size="small"
                                name="password"
                                type="password"
                                label="Password"
                                variant="outlined"
                                sx={{ mb: 1.5 }}
                            />

                            <FlexBox justifyContent="space-between">
                                <FlexBox gap={1}>
                                    <Checkbox
                                        size="small"
                                        name="remember"
                                        sx={{ padding: 0 }}
                                    />

                                    <Typography>Remember Me</Typography>
                                </FlexBox>
                            </FlexBox>

                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                fullWidth
                                sx={{ my: 2 }}
                                onClick={handleFormSubmit}
                                disableElevation
                            >
                                Login
                            </Button>
                        </ContentBox>
                    </Grid>
                </Grid>
            </Card>
        </StyledRoot>
    );
}
