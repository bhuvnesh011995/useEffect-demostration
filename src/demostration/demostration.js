import { useState } from "react"
import "./demostration.css"



export default function Demostration({history}){
    
    let list = history.map((e,i)=>{
        if(history.length>9){
            if(i>history.length-10) return(
                <h4 className="list" key={i}>{`${i+1}-> ${e}`}</h4>
            )
        }
        else return(
            <h4 className="list" key={i}>{`${i+1}-> ${e}`}</h4>
        )
    })

    return(
        <div className="demostration"> 
        <ol className="list">{list}</ol>
        </div>
    )
}