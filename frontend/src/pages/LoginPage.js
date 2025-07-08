import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button, Grid, Box, Typography, Paper, Checkbox, FormControlLabel,
    TextField, CssBaseline, IconButton, InputAdornment,
    CircularProgress, Backdrop
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from 'styled-components';
import { loginUser } from '../redux/userRelated/userHandle';
import bgpic from "../assets/designlogin.jpg";
import Popup from '../components/Popup';

const customTheme = createTheme({
    typography: {
        fontFamily: "'Segoe UI', sans-serif",
    },
    palette: {
        primary: {
            main: '#1e3c72', // Deep blue
        },
        secondary: {
            main: '#ff7e5f', // Soft orange-pink
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label.Mui-focused': {
                        color: '#1e3c72',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#ccc',
                        },
                        '&:hover fieldset': {
                            borderColor: '#1e3c72',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#1e3c72',
                        },
                    },
                },
            },
        },
    },
});

const LoginPage = ({ role }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, currentUser, response, error, currentRole } = useSelector(state => state.user);

    const [toggle, setToggle] = useState(false);
    const [guestLoader, setGuestLoader] = useState(false);
    const [loader, setLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [rollNumberError, setRollNumberError] = useState(false);
    const [studentNameError, setStudentNameError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (role === "Student") {
            const rollNum = event.target.rollNumber.value;
            const studentName = event.target.studentName.value;
            const password = event.target.password.value;

            if (!rollNum || !studentName || !password) {
                if (!rollNum) setRollNumberError(true);
                if (!studentName) setStudentNameError(true);
                if (!password) setPasswordError(true);
                return;
            }
            const fields = { rollNum, studentName, password };
            setLoader(true);
            dispatch(loginUser(fields, role));
        } else {
            const email = event.target.email.value;
            const password = event.target.password.value;

            if (!email || !password) {
                if (!email) setEmailError(true);
                if (!password) setPasswordError(true);
                return;
            }
            const fields = { email, password };
            setLoader(true);
            dispatch(loginUser(fields, role));
        }
    };

    const handleInputChange = (event) => {
        const { name } = event.target;
        if (name === 'email') setEmailError(false);
        if (name === 'password') setPasswordError(false);
        if (name === 'rollNumber') setRollNumberError(false);
        if (name === 'studentName') setStudentNameError(false);
    };

    const guestModeHandler = () => {
        const password = "zxc";
        if (role === "Admin") {
            const email = "yogendra@12";
            dispatch(loginUser({ email, password }, role));
        } else if (role === "Student") {
            const rollNum = "1";
            const studentName = "Dipesh Awasthi";
            dispatch(loginUser({ rollNum, studentName, password }, role));
        } else if (role === "Teacher") {
            const email = "tony@12";
            dispatch(loginUser({ email, password }, role));
        }
        setGuestLoader(true);
    };

    useEffect(() => {
        if (status === 'success' || currentUser !== null) {
            if (currentRole === 'Admin') navigate('/Admin/dashboard');
            else if (currentRole === 'Student') navigate('/Student/dashboard');
            else if (currentRole === 'Teacher') navigate('/Teacher/dashboard');
        } else if (status === 'failed') {
            setMessage(response);
            setShowPopup(true);
            setLoader(false);
        } else if (status === 'error') {
            setMessage("Network Error");
            setShowPopup(true);
            setLoader(false);
            setGuestLoader(false);
        }
    }, [status, currentRole, navigate, error, response, currentUser]);

    return (
        <ThemeProvider theme={customTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h4" sx={{ mb: 2, color: "#1e3c72" }}>{role} Login</Typography>
                        <Typography variant="body2">Please enter your credentials</Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
                            {role === "Student" ? (
                                <>
                                    <TextField fullWidth required margin="normal" label="Roll Number" name="rollNumber" type="number" error={rollNumberError} helperText={rollNumberError && 'Required'} onChange={handleInputChange} />
                                    <TextField fullWidth required margin="normal" label="Name" name="studentName" error={studentNameError} helperText={studentNameError && 'Required'} onChange={handleInputChange} />
                                </>
                            ) : (
                                <TextField fullWidth required margin="normal" label="Email" name="email" type="email" error={emailError} helperText={emailError && 'Required'} onChange={handleInputChange} />
                            )}

                            <TextField
                                fullWidth
                                required
                                margin="normal"
                                label="Password"
                                name="password"
                                type={toggle ? "text" : "password"}
                                error={passwordError}
                                helperText={passwordError && "Required"}
                                onChange={handleInputChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setToggle(!toggle)}>
                                                {toggle ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Grid container sx={{ justifyContent: "space-between", alignItems: "center" }}>
                                <FormControlLabel control={<Checkbox />} label="Remember me" />
                                <StyledLink href="#">Forgot Password?</StyledLink>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, backgroundColor: '#1e3c72', fontWeight: 'bold' }}
                            >
                                {loader ? <CircularProgress size={22} color="inherit" /> : "Login"}
                            </Button>

                            <Button
                                fullWidth
                                onClick={guestModeHandler}
                                variant="outlined"
                                sx={{ mt: 2, mb: 3, color: "#1e3c72", borderColor: "#1e3c72", fontWeight: 'bold' }}
                            >
                                Login as Guest
                            </Button>

                            {role === "Admin" && (
                                <Grid container justifyContent="center">
                                    <Typography>Don't have an account?</Typography>
                                    <StyledLink to="/Adminregister" sx={{ ml: 1 }}>Sign up</StyledLink>
                                </Grid>
                            )}
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={false} sm={4} md={7} sx={{
                    backgroundImage: `url(${bgpic})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
            </Grid>

            <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={guestLoader}>
                <CircularProgress color="inherit" />
                &nbsp;&nbsp;Please Wait
            </Backdrop>

            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </ThemeProvider>
    );
};

export default LoginPage;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1e3c72;
  font-weight: 500;
`;
