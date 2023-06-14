import { useEffect, useState } from "react"
import "./counter.css"



export default function Counter({history,setHistory}){

    let [count,setcount] = useState(0);
    let [mount,setMount] = useState(false);
    let [counted,setcounted] = useState(count)

    useEffect(()=>{
       setHistory((preHis)=>[...preHis,"counter has mounted"])
       return()=>{
        setHistory((preHis)=>[...preHis,"return funnction with 'counter will Unmount'"])
    }
    },[])
    useEffect(()=>{
        setHistory((preHis)=>[...preHis,"counter is changed"])
        return ()=>{
            setHistory((preHis)=>[...preHis,"return function with 'counter change or before Unmount'"])
        }
        
    },[count])

    return(
        <div>
                 <div className="counter"> counter: {count} </div>
                 <div className="button_containor">
                     <button className="button"
            onClick={()=>{setcount(count+1)}}
            >Incriment</button>
            <button className="button"
            onClick={()=>{count>0&& setcount(count-1)}}
            >Decriment</button>
                 </div>
           
        </div>
        
    )
}