import React from 'react'
import {ChartPieSlice,Car , Spinner , Plus, MagnifyingGlass , Copy , MinusCircle, Wrench } from 'phosphor-react'
import './Budget.scss'

const Budget = () => {

 //   border:"2px dashed #444444",
    return (
        <div className="budget">
         <div className="budget__main">
           <h5 className="budget__heading">Autorand</h5>
           <div className="budget__cards">

           <div className="moneyIn">
                    <div className="moneyIn__icon" style={{background:"#301a96"}}> <Plus color="#fff" size={20} /></div>
                    <div className="moneyIn__message">
                       <h6 style={{color:"#301a96"}}>N0.00</h6>
                        <p>Add Vehicle</p>
                    </div> 
            </div>

            <div className="moneyIn" style={{justifySelf:"flex-end"}}>
                    <div className="moneyIn__icon" style={{background:"red"}}> <Wrench color="#fff" size={20} /></div>
                    <div className="moneyIn__message">
                       <h6 style={{color:"red"}}>N0.00</h6>
                        <p>Repair Expenses</p>
                    </div> 
            </div>

            <div className="moneyIn">
                    <div className="moneyIn__icon" style={{background:"#26fdc7"}}> <MagnifyingGlass color="#fff" size={20} /></div>
                    <div className="moneyIn__message">
                       <h6 style={{color:"#26fdc7"}}>N0.00</h6>
                        <p>Search Mechanics</p>
                    </div> 
            </div>

            <div className="moneyIn" style={{ justifySelf:"flex-end"}}>
                    <div className="moneyIn__icon" style={{background:"lightgray"}}> <Car color="#444444" size={20} /></div>
                    <div className="moneyIn__message">
                       <h6 style={{color:""}}>Routine Service</h6>
                        <p>Create a Plan</p>
                    </div> 
            </div>

                
           </div>
           
           <div className="budget__pie">
           <Car size={60} />
           </div>
            <h6 className="nobudget__heading">Autorand</h6>
            <p className="nobudget__detail">Create routine and get alerts for your next due date.</p>
       </div>
        </div>
    )
}

export default Budget;
