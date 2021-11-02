import React from 'react'
import Formula from './Formula';

const Formulas = ({Data}) => {

    // const params = ['interest', 'principle', 'interest rate', 'time in years'];
    // console.log(Data);

    return (
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content center mt-5 px-5'>

            {Data && Data.map((Datum, index) => {
                return (
                    <Formula key={index} formulaName = {Datum.formulaName} params = {Datum.params} id={Datum.id} />
                )
            })}
            
        </div>
    )
}

export default Formulas
