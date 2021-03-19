import React from 'react'
import {ChartPieSlice , Plus , Copy , MinusCircle } from 'phosphor-react'
import './Budget.scss'

const Budget = () => {
    return (
        <div className="budget">
            <div className="budget__main">
           <h5 className="budget__heading">Budget</h5>
           <div className="budget__cards">

           <div className="moneyIn">
                    <div className="moneyIn__icon" style={{background:"#26fdc7"}}> <Plus color="#fff" size={20} /></div>
                    <div className="moneyIn__message">
                       <h6 style={{color:"#26fdc7"}}>N0.00</h6>
                        <p>Money In</p>
                    </div> 
            </div>

            <div className="moneyIn" style={{justifySelf:"flex-end"}}>
                    <div className="moneyIn__icon" style={{background:"red"}}> <MinusCircle color="#fff" size={20} /></div>
                    <div className="moneyIn__message">
                       <h6 style={{color:"red"}}>N0.00</h6>
                        <p>Money Out</p>
                    </div> 
            </div>

            <div className="moneyIn">
                    <div className="moneyIn__icon" style={{background:"rgb(1, 218, 1)"}}> <Copy color="#fff" size={20} /></div>
                    <div className="moneyIn__message">
                       <h6 style={{color:"rgb(1, 218, 1)"}}>N0.00</h6>
                        <p>Balance</p>
                    </div> 
            </div>

            <div className="moneyIn" style={{border:"2px dashed #444444", justifySelf:"flex-end"}}>
                    <div className="moneyIn__icon" style={{background:"lightgray"}}> <ChartPieSlice color="#444444" size={20} /></div>
                    <div className="moneyIn__message">
                       <h6 style={{color:""}}>No Budget</h6>
                        <p>Create a Budget</p>
                    </div> 
            </div>

                
           </div>
           
           <div className="budget__pie">
           <ChartPieSlice size={100} />
           </div>
            <h6 className="nobudget__heading">Nothing to see here</h6>
            <p className="nobudget__detail">it appears you have performed no transaction in this period. Start spending some money and we will let you know how you have spent it.</p>
       </div>
        </div>
    )
}

export default Budget;
