import {MyData} from '../App'
import {useContext} from 'react'


const Sample = () =>{
    const d = useContext(MyData)
    const {name,count,setCount} = d 
    console.log(name)

    const onClickIncr = () =>{
      setCount(count+1)
    }

   

    return(
        <div>
            <h1>hello</h1>
            <h1>{count}</h1>
            <button onClick={onClickIncr}>click</button>
            
        </div>
    )
}
export default Sample