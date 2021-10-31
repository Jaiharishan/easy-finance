import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';


const Formula = ({formulaName, params, id}) => {


    return (

        <Link to={'/' + id} className='text-decoration-none'>
            <div className='px-3 py-3 m-2 d-flex flex-column' style={{border: '1px solid rgb(220, 220, 220)', borderRadius: '1em', width: '250px', minHeight: '220px'}}>
                

                <div className="text-dark" style={{fontSize: '1.5rem'}}>{formulaName}</div>


                <div className='my-1' style={{width:'100%', height: '1px', background: 'rgb(220, 220, 220)'}}></div>

                <div className="mt-1 text-dark">parameters : </div>

                <div className="d-flex flex-wrap">

                    {params && params.map((param, index) => {
                        return (
                            <div style={{borderRadius: '1em', background: 'rgb(160, 170, 170)', color: 'white', fontSize: '.9em'}} className="px-3 py-1 m-1" key={index} >{param}</div>
                        )
                    })}
                    
                </div>
            </div>
        </Link>
    )
}

export default Formula
