import React , {useContext} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './Dropdown.scss'
const DropDown = () =>{
 
 let options = [
        `1`, `2`, `3` ,`4`  ,`5` , `6` , `7`,`8`,`9`,`10`,`11`,`12`
      ];
 let defaultOption = options[0];

    return(     

    <div className="dropdown">
      <Dropdown options={options} value={defaultOption}  menuClassName='dropdown__menu' controlClassName='dropdown__box'  />    
    </div>
    )
}

export default DropDown;