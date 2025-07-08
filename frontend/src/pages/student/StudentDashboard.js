import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StudentSideBar from './StudentSideBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import StudentHomePage from './StudentHomePage';
import StudentProfile from './StudentProfile';
import StudentSubjects from './StudentSubjects';
import ViewStdAttendance from './ViewStdAttendance';
import StudentComplain from './StudentComplain';
import Logout from '../Logout';
import AccountMenu from '../../components/AccountMenu';
import { AppBar, Drawer } from '../../components/styles';

const StudentDashboard = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => setOpen(!open);

    return (
        <>
            <Box sx={{ display: 'flex', backgroundColor: '#f8fafc' }}> {/* Light background */}
                <CssBaseline />

                {/* Updated AppBar */}
                <AppBar
                    open={open}
                    position="absolute"
                    sx={{
                        backgroundColor: '#ffffff',
                        color: '#1e293b',
                        boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
                        px: 2,
                    }}
                >
                    <Toolbar sx={{ pr: '24px', display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '20px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            component="h1"
                            variant="h5"
                            noWrap
                            sx={{
                                flexGrow: 1,
                                fontWeight: 700,
                                fontSize: '22px',
                                fontFamily: 'Segoe UI, sans-serif',
                                letterSpacing: '0.5px',
                                color: '#1e293b',
                            }}
                        >
                            Student Dashboard
                        </Typography>

                        <AccountMenu />
                    </Toolbar>
                </AppBar>

                {/* Updated Drawer */}
                <Drawer
                    variant="permanent"
                    open={open}
                    sx={{
                        backgroundColor: '#f1f5f9', // Light gray
                        borderRight: '1px solid #e2e8f0',
                        width: open ? 240 : 0,
                    }}
                >
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <StudentSideBar />
                    </List>
                </Drawer>

                {/* Main Content Area */}
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<StudentHomePage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                        <Route path="/Student/dashboard" element={<StudentHomePage />} />
                        <Route path="/Student/profile" element={<StudentProfile />} />
                        <Route path="/Student/subjects" element={<StudentSubjects />} />
                        <Route path="/Student/attendance" element={<ViewStdAttendance />} />
                        <Route path="/Student/complain" element={<StudentComplain />} />
                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
};

export default StudentDashboard;

// Styling object
const styles = {
    boxStyled: {
        backgroundColor: '#f8fafc', // Light background for main area
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        padding: '24px',
    },
    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: 'flex',
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
};