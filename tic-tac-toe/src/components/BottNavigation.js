import React from 'react';



import { BottomNavigation, BottomNavigationAction } from '@mui/material';

const BottNavigation = () => {
    return (
        <>
            <BottomNavigation style={{ backgroundColor: '#282830', marginTop: '30px' }}>
                <BottomNavigationAction label="Recents" />
                <BottomNavigationAction label="Favorites" />
                <BottomNavigationAction label="Nearby" />
            </BottomNavigation>
        </>
    )
}

export default BottNavigation;