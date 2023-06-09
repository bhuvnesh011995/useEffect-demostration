import { useEffect, useState } from "react"
import "./counter.css"



export default function Counter({history,setHistory}){

    let [count,setcount] = useState(0);
    let [mount,setMount] = useState(false);
    let [counted,setcounted] = useState(count)

    useEffect(()=>{
       setHistory((preHis)=>[...preHis,"counter did mount"])
       return()=>{
        setHistory((preHis)=>[...preHis,"counter will Unmount"])
    }
    },[])
    useEffect(()=>{
        setHistory((preHis)=>[...preHis,"counter is changed"])
        return ()=>{
            setHistory((preHis)=>[...preHis,"ran just before counter change or before Unmount"])
        }
        
    },[count])

    return(
        <div>
                 <div className="counter"> counter: {count} </div>
            <button className="button"
            onClick={()=>{setcount(count+1)}}
            >Incriment</button>
            <button className="button"
            onClick={()=>{count>0&& setcount(count-1)}}
            >Decriment</button>
        </div>
        
    )
}