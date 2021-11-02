import React from 'react'
import { GitHub } from '@material-ui/icons'
const Footer = () => {
    return (
        <div className='d-flex align-items-center justify-content-center bg-dark py-4 mt-5 px-3'>
            
            
            <div className='text-light d-flex align-items-center'>for contributions visit 
                <a className='mx-2' href='https://github.com/Jaiharishan/easy-finance'>
                    <GitHub style={{width: '32px', height: '32px', color: 'white'}}/>
                </a>
            </div> 
        </div>
    )
}

export default Footer
