import { Button } from '../../components/button'
import { Grid } from '../../components/grid'
import { TextField } from '../../components/textfield'
import { Typography } from '../../components/typography'
import { Avatar } from '../../components/avatar';
import { Paper } from '../../components/paper'
import { Link } from '../../components/link'
import CopyRight from '../copyright/index'
import useStyles from '../login/style'

import KeyboardTabOutlinedIcon from '@material-ui/icons/KeyboardTabOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';

const Login = () => (
    <Grid container component="main" className={useStyles().root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={8} className={useStyles().image} />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
            <form className={useStyles().paper}>
                <Avatar className={useStyles().avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    autoFocus
                />
                <Button
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    size="large"
                    endIcon={<KeyboardTabOutlinedIcon />}
                    onClick={sender => console.log(sender)}>
                    SIGN IN
                </Button>
            </form>
            <CopyRight />
        </Grid>
    </Grid>
)

export default Login;