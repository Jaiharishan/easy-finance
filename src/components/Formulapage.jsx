import React, { useEffect, useState } from 'react'
import Topbar from './Topbar'



const Formulapage = ({formulaName, params, id, formula}) => {

    // to store the result
    const [result, setResult] = useState(0);

    console.log('refresh', result);

    // to store the value for each param as a state
    const [paramValue, setParamValue] = useState({})


    // the onclick is not working but the function works all right
    
    //  ok so now try this with a div
    const handleResult = () => {
        console.log('ok');

        setResult(formula(...Object.values(paramValue)));
    }

    
    // to use usestate dynamically we use a object with values of formula params
    useEffect(() => {
        params.forEach(param=> setParamValue(prevParamValue => ({...prevParamValue, [param]: 0 })));
    }, [params])



    return (
        <>
            <Topbar />

            <div className="mt-5 mx-3" style={{fontSize: '2rem'}}>{formulaName}</div>

            <div className='m-2 w-75' style={{width:'100%', height: '1px', background: 'rgb(230, 230, 230)'}}></div>

            
            <div className="d-flex px-2">
                {params && params.map((param, index) => {
                    return (
                        <div 
                        style={{borderRadius: '1em',
                        background: 'rgb(160, 170, 170)',
                        color: 'white',
                        fontSize: '.9em'}}
                        className="px-3 py-1 m-1"
                        key={index} >
                            {param}
                        </div>
                    )
                })}

            </div>

            {/* <div className='mt-4 px-3 h4'>formula: </div>
            <div className='px-3 h5'>{formula}</div> */}


            <div className="p-2 mt-5 d-flex flex-wrap">
                {params && params.map((param, index) => {
                    return (
                        <div className='w-50 m-2' style={{maxWidth: '400px'}} key = {index}>
                            
                            <div className='mx-1' style={{textTransform: 'capitalize'}}>{param}</div>

                            <input value = {paramValue[param]}
                            onChange={e => setParamValue(prevParamValue => ({...prevParamValue, [param]: e.target.value }))}
                            style={{border: '1px solid rgb(220, 220, 220)', borderRadius: '1.5rem', outline: 'none'}}
                            className='mt-1 w-100 px-2 py-1' type="text"
                            placeholder={'Enter your ' + param + ' value'} />


                        </div>
                    )
                })}
            </div>
            


            

            {/* <div className="d-flex justify-content-center" onClick={handleResult}>
                
            </div> */}

            <button onClick={handleResult} className='mx-3 btn text-light' style={{margin: '1em auto', background: 'orange'}} >click for result</button>

            <div style={{fontSize: '1.3rem'}} className='text-center'>Result </div>
            
            <div className="d-flex justify-content-center w-100">
                <div className='text-center py-1 fw-bold mb-5 w-50' style={{border: '1px solid rgb(200, 200, 200)', borderRadius: '1.5em'}}>{result}</div>
            </div>

            
        </>
    )
}

export default Formulapage
