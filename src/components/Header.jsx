import { Search } from '@material-ui/icons'
import React, {useState} from 'react'

const Header = () => {
    const [query, setQuery] = useState('');

    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            
            <div className="title display-4 mt-5 fw-bold text-primary text-center" >
                One step finance solutions with <span style={{color: 'orange'}}>EasyFinance</span> 
            </div>

            <div className="d-flex align-items-center search mt-5 w-50 p-2" style={{border: '1px solid rgb(200, 200, 200)', minWidth: '300px', borderRadius: '1.5em'}}>

                <input placeholder='search for formulas' type="text" className='w-100' style={{border: 'none', outline: 'none'}} />

                <Search />
            </div>
            
        </div>
    )
}

export default Header
