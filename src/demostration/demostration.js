import { useState } from "react"
import "./demostration.css"



export default function Demostration({history}){
    
    let list = history.map((e,i)=>{
        if(history.length>13){
            if(i>history.length-13) return(
                <h4>{e}</h4>
            )
        }
        else return(
            <h4>{e}</h4>
        )
    })

    return(
        <div className="demostration"> 
        <ol>{list}</ol>
        </div>
    )
}