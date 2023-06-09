import { useState } from 'react';
import './App.css';
import "./counter/counter.css"
import Button from './button/button';
import Counter from './counter/counter';
import Demostration from './demostration/demostration';

function App() {
  let [mount,setMount] = useState(false);
  let [history,setHistory] = useState([])

  return (
    <div className="app">
      <div className='main'>
        {mount && <Counter history ={history} setHistory = {setHistory}/>}
      <button className=' button'
      onClick={()=>{setMount(true)}}
      >Mount</button>
      <button className='button'
      onClick={()=>{setMount(false)
      }}
      >Unmount</button>
      </div>
      <div>
        <h2>what is happning..</h2>
        <Demostration history={history} />
      </div>
      
    </div>
  );
}

export default App;
