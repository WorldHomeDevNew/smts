import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Link, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import EPS from "../../Img/EPS.jpeg"
import "./index.css";

const Login = () => {

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' }
    const avatarStyle = { backgroundColor: 'green' }
    const btnStyle={margin:'8px 0'}
    return (
        <Grid container>
            <Paper elevatiion={10} style={paperStyle}>
                <Grid align='center' lg={12} md={12} sm={12} xs={12}>
                <div className="eps">
                    <img src={EPS}/>
                    </div>
                    <h2>LOGIN</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required />
                <TextField label='Password' placeholder='Password' type='password' fullWidth required />
                <FormControlLabel value="end" control={<Checkbox />} label="Remember me" labelPlacement="end" />
                <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Login</Button>
                <Typography>
                    <Link component="button" variant="body2" onClick={() => { console.info("I'm a button."); }}>
                        Forget Passsword?
                    </Link>
                </Typography>

                <Typography> 
                    Do You have an account?<br/>
                    <Link component="button" variant="body2" onClick={() => { console.info("I'm a button."); }}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login

/*import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from "@material-ui/core";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', margin: '20px auto', width: 280 }
    const avatarStyle = { backgroundColor: 'blue' }
    return (
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><Avatar src="/broken-image.jpg" /></Avatar>
                <h2>Sign In</h2>
            </Grid>
            <TextField label='Username' placeholder='Username' fullWidth required />
            <TextField label='Password' placeholder='Password' type='password' fullWidth required />
            <Button type='submit' variant="contained" fullWidth required color='primary'>Sign In</Button>
            <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Remember me"
                labelPlacement="end" />
            <Typography>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                    Forget Passsword?
                </Link>
            </Typography>
            <Typography>
                Do you have an account?<br/>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                    Sign Up
                </Link>
            </Typography>

        </Paper>
    )
}
export default Login*/