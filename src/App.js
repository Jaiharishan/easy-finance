import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Formulapage from './components/Formulapage';
import Data from './Formualas.json';
import { formulaArray } from './FormulaFunctions';

const App = () => {

    // console.log(formulaArray);
    return (

        <Router>

            <Switch>

                {Data && Data.map(Datum => {
                  return (
                  <Route path={'/' + Datum.id} key = {Datum.id}>
                      <Formulapage formulaName = {Datum.formulaName} params = {Datum.params} id = {Datum.id} formula = {formulaArray && formulaArray[Datum.id - 1].formula} />
                  </Route>
                  )
                })}
                

                <Route path='/'>
                    <Homepage/>
                </Route>

            </Switch>

        </Router>
  )
}

export default App

