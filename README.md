
## EasyFinance

EasyFinance is a website where you can search for formulae related to finance and do calculations.

  
## Contributing

Contribute to this repo by adding formulae to formulas.json and formulaFunctions.js

Please adhere to this project's `code of conduct`.

  
## How to start Contributing

Fork this repo and Clone it:

```bash
  git clone https://github.com/`yourGitHubId`/easy-finance.git
```

Then adding your finance formula in formulas.json in the following format
```bash
    {
        "id": //the number of formula in the array,
        "formulaName": //the name of the formula,
        "params": [] //parameters in an array,
    }
```

And then add your formula in formulaFunctions.js in the following format
```bash
    {
        formula: ( //arguments ) => {
            return (// RHS of the formula)
        }
    }
```
After successfully adding the formula give a pull request from the forked repo to this repo (main branch).
## Badges


[![ISC License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  
## Authors

- [@jaiharishan](https://www.github.com/Jaiharishan)

  