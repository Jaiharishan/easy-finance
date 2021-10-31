//  All functions are formulas related to the finance problem


// formula will be an array and we can get he required formula by using the id


export const formulaArray = [

    // SIMPLE INTERST
    {
        formula: (Principal, Interest_Rate, Time) => {
            return (Principal * Interest_Rate * Time)
        }
    },

    // COMPOUND INTERST
    {
        formula: (Compound, Interest_Rate, Time) => {
            return (Compound * Interest_Rate * Time)
        }
    },

    // NET INCOME
    {
        formula : (Total_Revenue, Total_Cost) => {
        return (Total_Revenue - Total_Cost)
        }
    },

    // BURN RATE
    {
        formula : (Total_Cost, Total_Revenue) => {
            return (Total_Cost / Total_Revenue) * 100
        }
    },

    // NET WORTH
    {
        formula : (Assets, Liabilities) => {
            return (Assets - Liabilities)
        }
    },

    // LIFETIME WEALTH RATIO
    {
        formula: (NetWorth, Total_Lifetime_Income) => {
            return (NetWorth / Total_Lifetime_Income)
        }
    },

    // AMOUNT
    {
        formula : (Principal, Interest_Rate, Compounding, Time) => {
            return (Principal * (1 + Math.pow((Interest_Rate / Compounding), (Compounding * Time))))
        }
    },

    // CASH FLOW
    {
        formula: (Income, Expenses) => {
            return (Income - Expenses)
        }
    },

    // LEVERAGE RATIO
    {
        formula: (Total_Liabilities, Total_Debts, Total_Income) => {
            return ((Total_Liabilities + Total_Debts) / Total_Income)
        }
    },

    // RULE OF 72
    {
        formula: (Interest_Rate) => {
            return (72 / Interest_Rate)
        }
    },

    // TOTAL ASSETS
    {
        formula: (Liabilities, Equity) => {
            return (Liabilities + Equity)
        }
    },

    // CASH RATIO
    {
        formula: (Cash, Current_Liabilities) => {
            return (Cash / Current_Liabilities)
        }
    },

    // PROFIT MARGIN
    {
        formula: (Net_Income, Sales) => {
            return (Net_Income / Sales)
        }
    },

    // DEBT TO EQUITY RATIO
    {
        formula: (Total_Liabilities, Total_Equity) => {
            return (Total_Liabilities / Total_Equity)
        }
    },

    // P/E RATIO
    {
        formula: (Share_Price, Earnings_Per_Share) => {
            return (Share_Price / Earnings_Per_Share)
        }
    },

    // EMI
    {
        formula: (Principal_Amount, Interest_Rate, Number_of_Months) => {
            return (Principal_Amount * Interest_Rate * Math.pow((1 + Interest_Rate), Number_of_Months)) / (Math.pow(1 + Interest_Rate, Number_of_Months) - 1)
        }
    },

    // INFLATION RATE
    {
        formula: (Current_CPI, Initial_CPI) => {
            return ((Current_CPI - Initial_CPI) / Current_CPI ) * 100
        }
    },

    // BASIC GROWTH RATE
    {
        formula: (Present_Value, Inital_Value) => {
            return ((Present_Value - Inital_Value) / Inital_Value ) * 100
        }
    },

    // LIQUIDITY RATIO
    {
        formula: (Total_Liquid_Assets, Total_Current_Debt) => {
            return (Total_Liquid_Assets / Total_Current_Debt)
        }
    },

    // EPS SHARES
    {
        formula: (Net_Profit, Number_of_Equity_Shares) => {
            return (Net_Profit / Number_of_Equity_Shares)
        }
    },

    // P/B RATIO
    {
        formula: (Market_Price, Book_Value) => {
            return (Market_Price / Book_Value)
        }
    },

    // ROE
    {
        formula: (Net_Income, Shareholder_Equity) => {
            return (Net_Income / Shareholder_Equity)
        }
    }
]


