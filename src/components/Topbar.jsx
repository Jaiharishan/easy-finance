import React from 'react';
import { Avatar } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
const Topbar = () => {
    return (
        <div className='d-flex align-items-center justify-content-between px-3 py-3' style={{borderBottom: '1px solid rgb(220, 220, 220)'}}>


            {/* brandname */}
            <Link to='/' className='text-decoration-none'>
                <div className="fw-bold" style={{fontSize: '1.25rem', color: 'orange'}}>
                    EasyFinance
                </div>
            </Link>
            

            {/* profile icon with options */}
            <Avatar style={{background: 'grey'}}>J</Avatar>

        </div>
    )
}

export default Topbar
