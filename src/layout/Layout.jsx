import { Grid } from '@mui/material';
import PrimarySearchAppBar from './AppBar';
import { SideNav } from './SideNav';

export const Layout = ({ children }) => {
    return (
        <Grid container>
            <Grid item>
                <SideNav />
            </Grid>

            <Grid item flexGrow={1}>
                <Grid container direction="column">
                    <Grid item>
                        <PrimarySearchAppBar />
                    </Grid>
                    <Grid item p={2}>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
