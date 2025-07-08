import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppBar, Drawer } from '../../components/styles';

import TeacherSideBar from './TeacherSideBar';
import AccountMenu from '../../components/AccountMenu';
import Logout from '../Logout';

import TeacherHomePage from './TeacherHomePage';
import TeacherProfile from './TeacherProfile';
import TeacherComplain from './TeacherComplain';
import TeacherClassDetails from './TeacherClassDetails';
import TeacherViewStudent from './TeacherViewStudent';
import StudentAttendance from '../admin/studentRelated/StudentAttendance';
import StudentExamMarks from '../admin/studentRelated/StudentExamMarks';

const TeacherDashboard = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(true);

    const handleDrawerToggle = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <Box sx={{ display: 'flex', fontFamily: "'Poppins', sans-serif" }}>
            <CssBaseline />
            <AppBar open={isDrawerOpen} position="absolute" sx={{ backgroundColor: '#1e293b' }}>
                <Toolbar sx={{ pr: 3 }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                        sx={{ marginRight: 3, ...(isDrawerOpen && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h5"
                        noWrap
                        sx={{ flexGrow: 1, fontWeight: 600, color: '#f1f5f9' }}
                    >
                        Teacher Portal
                    </Typography>
                    <AccountMenu />
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                open={isDrawerOpen}
                sx={isDrawerOpen ? customStyles.drawerActive : customStyles.drawerHidden}
            >
                <Toolbar sx={customStyles.drawerToolbar}>
                    <IconButton onClick={handleDrawerToggle}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    <TeacherSideBar />
                </List>
            </Drawer>

            <Box component="main" sx={customStyles.mainSection}>
                <Toolbar />
                <Routes>
                    <Route path="/" element={<TeacherHomePage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/Teacher/dashboard" element={<TeacherHomePage />} />
                    <Route path="/Teacher/profile" element={<TeacherProfile />} />
                    <Route path="/Teacher/complain" element={<TeacherComplain />} />
                    <Route path="/Teacher/class" element={<TeacherClassDetails />} />
                    <Route path="/Teacher/class/student/:id" element={<TeacherViewStudent />} />
                    <Route path="/Teacher/class/student/attendance/:studentID/:subjectID" element={<StudentAttendance situation="Subject" />} />
                    <Route path="/Teacher/class/student/marks/:studentID/:subjectID" element={<StudentExamMarks situation="Subject" />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default TeacherDashboard;

const customStyles = {
    mainSection: {
        backgroundColor: '#f8fafc',
        flexGrow: 1,
        height: '100vh',
        overflowY: 'auto',
        padding: 2
    },
    drawerToolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: 1
    },
    drawerActive: {
        display: 'flex',
        backgroundColor: '#e2e8f0'
    },
    drawerHidden: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none'
        }
    }
};
