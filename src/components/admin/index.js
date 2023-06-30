import Box from '@mui/material/Box';
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import LeftDrawer from './LeftDrawer';

export default function Admin() {
    const navigate = useNavigate()
    let { pathname } = useLocation();

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ minWidth: '16%' }}>
                <LeftDrawer />
            </Box>
            <Box sx={{ minWidth: '50%', flex: 1, ml: 3, mr: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
}