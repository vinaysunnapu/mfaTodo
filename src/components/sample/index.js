import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {BioData} from '../../App'

const Sample = () =>{
    const context = React.useContext(BioData)
    const {name,setName} = context

    const onchangeInput = (event) =>{
        setName(event.target.value)
    }
    const a = 1 
    return(
        <div>
            <h1>hello world {name}</h1>
            <button type="button" className="btn btn-success">button</button>
            <input type="text" onChange={onchangeInput} />
        </div>
    )
}
export default Sample