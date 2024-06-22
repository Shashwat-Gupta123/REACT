import React from 'react'
import { useId } from 'react';
function InputBox({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions=[],
    selectcurrency="usd",
    amountdisable=false,
    currencydisable=false,
    className = "",
}) {
   
     const amountinput=useId() // use to genrate usnique ids
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountinput} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountinput}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value={amount}
                    onChange={(e)=>onamountchange && onamountchange(Number(e.target.value))}
                ></input> 
            </div>


            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency} onChange={(e)=> oncurrencychange && oncurrencychange(e.target.value)}>                    
                      {currencyoptions.map((currency)=>(
                        <option value={currency} key={currency}>{currency}</option>
                      ))}
                </select>
            </div>

        </div>
    );
}

export default InputBox
