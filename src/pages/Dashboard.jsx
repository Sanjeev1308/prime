import { Grid, Paper, Stack, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Layout } from '../layout/Layout';

export const Dashboard = () => {
    return (
        <Layout>
            <Typography variant="h5" mb={2}>
                Hi, Welcome back 👋
            </Typography>

            <Grid container spacing={4}>
                <Grid item>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            width: '100%',
                            backgroundColor: 'purple',
                            color: 'white'
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Stack>
                                <AccountBalanceIcon fontSize="large" />
                            </Stack>
                            <Stack>
                                <Typography variant="h6">714k</Typography>
                                <Typography variant="body2">
                                    Weekly Sales
                                </Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            width: '100%',
                            backgroundColor: 'pink',
                            color: 'white'
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Stack>
                                <AccountBalanceIcon fontSize="large" />
                            </Stack>
                            <Stack>
                                <Typography variant="h6">714k</Typography>
                                <Typography variant="body2">
                                    Weekly Sales
                                </Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            width: '100%',
                            backgroundColor: 'green',
                            color: 'white'
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Stack>
                                <AccountBalanceIcon fontSize="large" />
                            </Stack>
                            <Stack>
                                <Typography variant="h6">714k</Typography>
                                <Typography variant="body2">
                                    Weekly Sales
                                </Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            width: '100%',
                            backgroundColor: 'orange',
                            color: 'white'
                        }}
                    >
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Stack>
                                <AccountBalanceIcon fontSize="large" />
                            </Stack>
                            <Stack>
                                <Typography variant="h6">714k</Typography>
                                <Typography variant="body2">
                                    Weekly Sales
                                </Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container mt={2} spacing={2}>
                <Grid item xs={6}>
                    <Paper elevation={1} sx={{ p: 2 }}>
                        <BarChart
                            series={[
                                { data: [35, 44, 24, 34] },
                                { data: [51, 6, 49, 30] },
                                { data: [15, 25, 30, 50] },
                                { data: [60, 50, 15, 25] }
                            ]}
                            height={290}
                            xAxis={[
                                {
                                    data: ['Q1', 'Q2', 'Q3', 'Q4'],
                                    scaleType: 'band'
                                }
                            ]}
                            margin={{
                                top: 10,
                                bottom: 30,
                                left: 40,
                                right: 10
                            }}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper elevation={1} sx={{ p: 2 }}>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'series A' },
                                        { id: 1, value: 15, label: 'series B' },
                                        { id: 2, value: 20, label: 'series C' }
                                    ]
                                }
                            ]}
                            width={400}
                            height={200}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Layout>
    );
};
