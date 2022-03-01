import React from 'react';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { Button } from '@mui/material';

function Nav(props) {
    return (
        <div style={{ height: '151px', background: '#FFFFFF', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', display: 'flex', alignItems: 'center' }}>
            <div style={{ height: 'auto', width: 'auto', overflow: 'hidden', padding: '18px' }}>
                <img style={{ maxHeight: '100%', width: '91px', overflow: 'hidden', margin: 'auto' }} src="https://i.ibb.co/6mNnF3y/preview.jpg" alt="logo" />
            </div>
            <p style={{ marginLeft: '43px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '500', fontSize: '25px', lineHeight: '37px', color: '#000000' }}>School Name</p>
            <div style={{ height: '40px', marginLeft: '25px', borderRight: '1px solid #000000' }}></div>
            <p style={{ marginLeft: '21px', fontFamily: 'Roboto', fontStyle: 'italic', fontWeight: '300', fontSize: '18px', lineHeight: '21px', color: '#000000' }}>Powered By Company</p>
            <span style={{ width: 'auto', height: 'auto', borderRadius: '15px', padding: '20px', background: '#6755D9', marginRight: '78px', marginLeft: '550px', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', fontSize: '20px', lineHeight: '23px', color: '#FFFFFF' }}>View Performance Analytics</span>
            <NotificationsRoundedIcon style={{ marginRight: '72px', height: '30px', width: '30px', color: '#6755D9' }}/>
            <div style={{ width: '60px', height: '60px', background: '#5647B2', borderRadius: '50%', display: 'flex', alignItems: 'center' }}>
                <p style={{ fontFamily: 'Rubik', fontStyle: 'normal', fontWeight: '500', fontSize: '30px', lineHeight: '36px', color: '#FFFFFF', paddingLeft: '20px' }}>A</p>
            </div>
        </div>
    );
}

export default Nav;