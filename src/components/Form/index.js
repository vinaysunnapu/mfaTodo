import {useState} from 'react'

const Form = () =>{
    const [value,setValue] = useState(false)
    const [name,setName] = useState('')
const onBlurInput = () =>{
    if (name===""){
        setValue(true)
    }else{
        setValue(false)

    }
    
}

const onChangeName  = (event) =>{
    setName(event.target.value)
}

    return(
        <div>
            <h1>Form</h1>
            <form>
                <label htmlFor="name">name</label>
                <br/>
                <input id="name" type="text" onBlur={onBlurInput} onChange={onChangeName} />
                {value&& <p>required</p>}
            </form>
        </div>
    )
}

export default Form