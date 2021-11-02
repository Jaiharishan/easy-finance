import { Search } from '@material-ui/icons'
import React, {useState} from 'react'
import Formulas from './Formulas';
import Data from '../Formualas.json';

const Header = () => {

    // query for searching the formulas


    // need to add the formula page into this s that we can give results based on the query
    const [query, setQuery] = useState('');

    // query data will check for data which has the pattern matching
    const queryData = query => query 
    ? Data.filter(Datum => new RegExp(query, 'i').test(Datum.formulaName)) 
    : Data


    console.log(queryData(query));
    
    return (
        <>
        <div className='d-flex flex-column align-items-center justify-content-center'>
            
            <div className="title display-4 mt-5 fw-bold text-primary text-center" >
                One step finance solutions with <span style={{color: 'orange'}}>EasyFinance</span> 
            </div>

            <div className="d-flex align-items-center search mt-5 w-50 p-2" style={{border: '1px solid rgb(200, 200, 200)', minWidth: '300px', borderRadius: '1.5em'}}>

                <input value={query} onChange={e => setQuery(e.target.value)} placeholder='search for formulas' type="text" className='w-100' style={{border: 'none', outline: 'none'}} />

                <Search />
            </div>
            
        </div>

        {/* for formulas the queried data will be sent */}
        <Formulas Data={queryData(query)} />
        </>
    )
}

export default Header
